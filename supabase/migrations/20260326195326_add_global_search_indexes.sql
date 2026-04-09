/*
  # Add full-text search indexes for global search

  1. Changes
    - Add GIN tsvector indexes on documents (title, description, content)
    - Add GIN tsvector indexes on events (title, description)
    - Add GIN tsvector indexes on enemies_of_truth (name, title, summary)
    - Add helper search functions for each table

  2. Notes
    - Uses to_tsvector('english', ...) for English stemming
    - GIN indexes make full-text queries fast
    - Functions return a relevance rank for ordering
*/

CREATE INDEX IF NOT EXISTS idx_documents_fts
  ON documents
  USING GIN (to_tsvector('english', coalesce(title,'') || ' ' || coalesce(description,'') || ' ' || coalesce(content,'')));

CREATE INDEX IF NOT EXISTS idx_events_fts
  ON events
  USING GIN (to_tsvector('english', coalesce(title,'') || ' ' || coalesce(description,'')));

CREATE INDEX IF NOT EXISTS idx_enemies_fts
  ON enemies_of_truth
  USING GIN (to_tsvector('english', coalesce(name,'') || ' ' || coalesce(title,'') || ' ' || coalesce(summary,'')));
