import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY")!;
const OPENAI_MODEL = Deno.env.get("OPENAI_MODEL") || "gpt-5.6-luna";
const EMBEDDING_MODEL = "text-embedding-3-small";
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

async function openai(path: string, body: unknown) {
  const r = await fetch("https://api.openai.com/v1/" + path, {
    method: "POST",
    headers: { Authorization: "Bearer " + OPENAI_API_KEY, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await r.json();
  if (!r.ok) throw new Error(data?.error?.message || "OpenAI request failed");
  return data;
}

async function embed(text: string) {
  const data = await openai("embeddings", { model: EMBEDDING_MODEL, input: text.slice(0, 8000) });
  return data.data?.[0]?.embedding || [];
}

function cleanHistory(history: unknown) {
  if (!Array.isArray(history)) return [];
  return history.filter((x: any) =>
    x && (x.role === "user" || x.role === "assistant") && typeof x.content === "string"
  ).slice(-8).map((x: any) => ({ role: x.role, content: x.content.slice(0, 2500) }));
}

function sourceList(rows: any[]) {
  return rows.slice(0, 5).map((r, i) => ({ id: i + 1, title: r.title || "Official DTE source", url: r.source_url }));
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    if (req.method !== "POST") throw new Error("POST required");

    const body = await req.json();
    const message = String(body?.message || "").trim();
    const lang = ["en", "hi", "mrw"].includes(body?.lang) ? body.lang : "en";
    const history = cleanHistory(body?.history);

    if (!message) throw new Error("message is required");
    if (!OPENAI_API_KEY) throw new Error("OPENAI_API_KEY is not configured on the server");

    const queryEmbedding = await embed(message);
    const { data: rows, error } = await supabase.rpc("match_rag_documents", {
      query_embedding: queryEmbedding, match_threshold: 0.30, match_count: 8
    });
    if (error) throw error;

    const matches = (rows || []).filter((r: any) => Number(r.similarity || 0) >= 0.30);
    const sources = sourceList(matches);

    if (!matches.length) {
      const noData = lang === "hi"
        ? "इस सवाल के लिए official Rajasthan DTE knowledge base में पर्याप्त verified information नहीं मिली। मैं अनुमान लगाकर जवाब नहीं दूँगा। कृपया college/course/year बताएं या official DTE source देखें।"
        : lang === "mrw"
          ? "इण सवाल खातर official Rajasthan DTE knowledge base में पर्याप्त verified जानकारी नीं मिली। मैं अंदाजो नीं लगाऊँ। College/course/year बताओ या official DTE source देखो।"
          : "I could not find enough verified information in the official Rajasthan DTE knowledge base, so I won't guess. Please specify the college/course/year or open the official DTE source.";
      return new Response(JSON.stringify({ answer: noData, sources, grounded: false, model: "fallback" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const context = matches.map((r: any, i: number) =>
      "[SOURCE " + (i + 1) + "]\nTitle: " + (r.title || "DTE Rajasthan") +
      "\nURL: " + r.source_url + "\n" + r.content
    ).join("\n\n");

    const languageName = lang === "hi" ? "Hindi" : lang === "mrw" ? "Marwari" : "English";
    const system =
      "You are RajTech Assist, a Rajasthan Government technical-education admission assistant.\n\n" +
      "Answer ONLY from the supplied OFFICIAL SOURCE CONTEXT. Never invent fees, cutoffs, seats, dates, eligibility, placements, rankings, or college details. If the context does not establish a fact, explicitly say it is not verified.\n\n" +
      "Understand English, Hindi, Hinglish in Roman script, and Marwari. Reply in " + languageName + ".\n" +
      "Prefer the newest source when dates conflict. Preserve year, course, category, round, and admission-route qualifiers. Never silently choose between multiple similar colleges. Give a fee amount only when the retrieved source explicitly supports that exact amount.\n" +
      "Keep answers practical and concise. End with a Sources line such as Sources: [1], [3].";

    const input = [
      ...history,
      { role: "user", content: "OFFICIAL SOURCE CONTEXT:\n" + context + "\n\nUSER QUESTION:\n" + message }
    ];

    const response = await openai("responses", {
      model: OPENAI_MODEL,
      instructions: system,
      input,
      max_output_tokens: 700,
      store: false,
    });

    return new Response(JSON.stringify({
      answer: String(response.output_text || "").trim(),
      sources,
      grounded: true,
      model: OPENAI_MODEL,
      retrieval_count: matches.length,
    }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : String(e) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
