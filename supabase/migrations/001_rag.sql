create extension if not exists vector with schema extensions;

create table if not exists public.rag_documents (
  id uuid primary key default gen_random_uuid(),
  source_url text not null,
  title text,
  content text not null,
  language text not null default 'mixed',
  metadata jsonb not null default '{}'::jsonb,
  content_hash text not null unique,
  embedding extensions.vector(1536),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists rag_documents_embedding_hnsw
  on public.rag_documents
  using hnsw (embedding extensions.vector_cosine_ops);

create index if not exists rag_documents_source_url_idx
  on public.rag_documents (source_url);

alter table public.rag_documents enable row level security;

create or replace function public.match_rag_documents(
  query_embedding extensions.vector(1536),
  match_threshold float default 0.30,
  match_count int default 8
)
returns table (
  id uuid, source_url text, title text, content text, metadata jsonb, similarity float
)
language sql stable
as $$
  select d.id, d.source_url, d.title, d.content, d.metadata,
         1 - (d.embedding <=> query_embedding) as similarity
  from public.rag_documents d
  where d.embedding is not null
    and 1 - (d.embedding <=> query_embedding) >= match_threshold
  order by d.embedding <=> query_embedding
  limit least(greatest(match_count, 1), 12);
$$;

create or replace function public.touch_rag_document()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end;
$$;

drop trigger if exists rag_documents_touch on public.rag_documents;
create trigger rag_documents_touch before update on public.rag_documents
for each row execute function public.touch_rag_document();
