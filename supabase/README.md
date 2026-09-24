# RajTech Assist — production RAG backend

Architecture:
GitHub Pages frontend → Supabase Edge Function → OpenAI embeddings → Supabase Postgres + pgvector → official DTE retrieval → OpenAI Responses API → grounded answer.

Required server secrets:
- OPENAI_API_KEY
- OPENAI_MODEL (optional; default gpt-5.6-luna)
- INGEST_SECRET

Supabase automatically provides SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.

Never expose OPENAI_API_KEY or SUPABASE_SERVICE_ROLE_KEY in the browser or repository.

Deployment:
1. Connect/create the Supabase project.
2. Run supabase/migrations/001_rag.sql.
3. Deploy functions/chat and functions/ingest.
4. Set the secrets above.
5. Call the ingest endpoint once with x-ingest-secret.
6. Put the deployed chat function URL into chatbot/config.js.

The ingestion function starts from official Rajasthan DTE pages and discovers official college pages from the DTE college directory, then chunks and embeds them into pgvector.

The chatbot must not invent fees, cutoffs, seats, placement figures, eligibility, or dates when the retrieved official context does not establish them.

The official DTE portal currently lists 43 Government Polytechnic Colleges and 108 unaided private polytechnic colleges; its portal also warns that migrated data can vary. Keep source URLs and retrieval dates with the records.
