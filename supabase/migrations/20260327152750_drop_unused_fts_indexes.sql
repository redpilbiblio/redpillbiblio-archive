/*
  # Drop Unused Full-Text Search Indexes

  1. Problem
    - Several FTS indexes are unused and consuming storage/maintenance overhead
    - These indexes were created for full-text search but are not being utilized

  2. Changes
    - Drop unused FTS indexes from documents table
    - Drop unused FTS indexes from events table
    - Drop unused FTS indexes from enemies_of_truth table
    - Improves query planning and reduces storage
*/

DROP INDEX IF EXISTS public.idx_documents_fts;
DROP INDEX IF EXISTS public.idx_events_fts;
DROP INDEX IF EXISTS public.idx_enemies_fts;
