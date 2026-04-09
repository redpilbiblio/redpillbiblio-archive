/*
  # Consolidate Duplicate Indexes in auto_generated_connections

  1. Problem
    - Table has duplicate indexes serving the same purpose:
      - auto_generated_connections_source_document_id_idx and idx_auto_connections_source
      - auto_generated_connections_target_document_id_idx and idx_auto_connections_target
    - Duplicate indexes waste storage and maintenance overhead

  2. Changes
    - Keep the idx_auto_connections_* indexes (consistent naming)
    - Drop the auto_generated_connections_*_idx duplicates
    - Improves storage efficiency and query planning
*/

DROP INDEX IF EXISTS public.auto_generated_connections_source_document_id_idx;
DROP INDEX IF EXISTS public.auto_generated_connections_target_document_id_idx;
