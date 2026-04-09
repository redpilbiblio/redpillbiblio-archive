/*
  # Drop Additional Unused Indexes

  1. Problem
    - Multiple unused indexes on archived_documents, link_reports, submissions, and document_connections
    - These are consuming resources without providing query optimization benefits

  2. Changes
    - Drop unused indexes from archived_documents table
    - Drop unused indexes from link_reports table
    - Drop unused indexes from submissions table
    - Drop unused indexes from document_connections table
*/

DROP INDEX IF EXISTS public.idx_archived_documents_document_id;
DROP INDEX IF EXISTS public.idx_archived_documents_status;
DROP INDEX IF EXISTS public.idx_link_reports_document_id;
DROP INDEX IF EXISTS public.idx_link_reports_created_at;
DROP INDEX IF EXISTS public.idx_submissions_status;
DROP INDEX IF EXISTS public.idx_submissions_created_at;
DROP INDEX IF EXISTS public.document_connections_source_document_id_idx;
DROP INDEX IF EXISTS public.document_connections_target_document_id_idx;
