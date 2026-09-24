import { createClient } from "npm:@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY")!;
const INGEST_SECRET = Deno.env.get("INGEST_SECRET")!;
const EMBEDDING_MODEL = "text-embedding-3-small";
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const DEFAULT_URLS = [
  "https://hte.rajasthan.gov.in/DepartmentofTechnicalEducation/91469",
  "https://hte.rajasthan.gov.in/DepartmentofTechnicalEducation/31012",
  "https://hte.rajasthan.gov.in/DepartmentofTechnicalEducation/31013",
  "https://hte.rajasthan.gov.in/DepartmentofTechnicalEducation/30717",
  "https://hte.rajasthan.gov.in/DepartmentofTechnicalEducation/30745",
  "https://hte.rajasthan.gov.in/GovernmentEngineeringCollegeJaipur/91347"
];

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

function stripHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function titleFromHtml(html: string, fallback: string) {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return m ? stripHtml(m[1]).slice(0, 300) : fallback;
}

function discoverOfficialLinks(html: string) {
  const out = new Set<string>();
  const re = /href\s*=\s*["']([^"']+)["']/gi;
  let m;
  while ((m = re.exec(html))) {
    let href = m[1].trim();
    if (href.startsWith("/")) href = "https://hte.rajasthan.gov.in" + href;
    if (!href.startsWith("https://hte.rajasthan.gov.in/")) continue;
    if (!/(Government|Polytechnic|Engineering|WomenPolytechnic|TechnicalEducation)/i.test(href)) continue;
    out.add(href.split("#")[0]);
  }
  return [...out].slice(0, 220);
}

function chunk(text: string, size = 1800, overlap = 250) {
  const clean = text.replace(/\s+/g, " ").trim();
  const chunks: string[] = [];
  for (let i = 0; i < clean.length; i += size - overlap) {
    chunks.push(clean.slice(i, i + size));
    if (i + size >= clean.length) break;
  }
  return chunks;
}

async function sha256(value: string) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return [...new Uint8Array(digest)].map(x => x.toString(16).padStart(2, "0")).join("");
}

async function ingestUrl(url: string) {
  const response = await fetch(url, { headers: { "User-Agent": "RajTech-Assist-RAG/1.0" } });
  if (!response.ok) throw new Error(url + " -> HTTP " + response.status);
  const html = await response.text();
  const title = titleFromHtml(html, "Official Rajasthan DTE");
  const pieces = chunk(stripHtml(html));
  let inserted = 0;

  for (const piece of pieces) {
    const hash = await sha256(url + "\n" + piece);
    const emb = await openai("embeddings", { model: EMBEDDING_MODEL, input: piece });
    const vector = emb.data?.[0]?.embedding;
    if (!vector) continue;
    const { error } = await supabase.from("rag_documents").upsert({
      source_url: url, title, content: piece, language: "mixed",
      metadata: { ingested_at: new Date().toISOString(), source: "Rajasthan DTE official site" },
      content_hash: hash, embedding: vector
    }, { onConflict: "content_hash" });
    if (error) throw error;
    inserted++;
  }
  return { url, chunks: pieces.length, inserted };
}

Deno.serve(async (req) => {
  if (req.method !== "POST") return new Response("POST required", { status: 405 });
  if (!INGEST_SECRET || req.headers.get("x-ingest-secret") !== INGEST_SECRET) return new Response("Unauthorized", { status: 401 });

  try {
    const body = await req.json().catch(() => ({}));
    const requested = Array.isArray(body?.urls) ? body.urls.filter((x: unknown) => typeof x === "string") : DEFAULT_URLS;
    let urls = [...new Set(requested)].slice(0, 20);

    const directoryUrl = DEFAULT_URLS[0];
    if (urls.includes(directoryUrl)) {
      const html = await (await fetch(directoryUrl)).text();
      urls = [...new Set([...urls, ...discoverOfficialLinks(html)])].slice(0, 220);
    }

    const results = [];
    for (const url of urls) {
      try { results.push(await ingestUrl(url)); }
      catch (e) { results.push({ url, error: e instanceof Error ? e.message : String(e) }); }
    }

    return new Response(JSON.stringify({ ok: true, discovered: urls.length, results }),
      { headers: { "Content-Type": "application/json" } });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: e instanceof Error ? e.message : String(e) }),
      { status: 500, headers: { "Content-Type": "application/json" } });
  }
});
