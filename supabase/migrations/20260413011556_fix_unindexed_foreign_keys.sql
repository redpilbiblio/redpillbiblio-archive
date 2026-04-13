/*
  # Add covering indexes for unindexed foreign keys

  ## Changes
  - Add index on `archived_documents.document_id` (FK to documents)
  - Add index on `corkboard_connections.from_pin_id` (FK to corkboard_pins)
  - Add index on `corkboard_connections.to_pin_id` (FK to corkboard_pins)
  - Add index on `document_connections.source_document_id` (FK to documents)
  - Add index on `document_connections.target_document_id` (FK to documents)
  - Add index on `link_reports.document_id` (FK to documents)

  ## Purpose
  Foreign keys without covering indexes cause sequential scans on referenced-table
  lookups (e.g. cascade deletes, joins). Adding these indexes resolves the
  performance warnings.
*/

CREATE INDEX IF NOT EXISTS archived_documents_document_id_idx
  ON public.archived_documents (document_id);

CREATE INDEX IF NOT EXISTS corkboard_connections_from_pin_id_idx
  ON public.corkboard_connections (from_pin_id);

CREATE INDEX IF NOT EXISTS corkboard_connections_to_pin_id_idx
  ON public.corkboard_connections (to_pin_id);

CREATE INDEX IF NOT EXISTS document_connections_source_document_id_idx
  ON public.document_connections (source_document_id);

CREATE INDEX IF NOT EXISTS document_connections_target_document_id_idx
  ON public.document_connections (target_document_id);

CREATE INDEX IF NOT EXISTS link_reports_document_id_idx
  ON public.link_reports (document_id);
