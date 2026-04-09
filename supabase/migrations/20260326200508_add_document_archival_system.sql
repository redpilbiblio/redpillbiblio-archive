/*
  # Add Document Archival System

  1. New Tables
    - `archived_documents`
      - `id` (uuid, primary key)
      - `document_id` (uuid, foreign key to documents)
      - `original_url` (text, the original external URL)
      - `archived_url` (text, nullable, path to stored archive)
      - `archive_date` (timestamptz, nullable, when archived)
      - `archive_status` (text, enum: pending|archived|failed|unavailable)
      - `file_size_bytes` (integer, nullable)
      - `content_type` (text, nullable, e.g. application/pdf)
      - `notes` (text, nullable, admin notes)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `link_reports`
      - `id` (uuid, primary key)
      - `document_id` (uuid, foreign key to documents)
      - `report_type` (text: broken_link|wrong_document|other)
      - `created_at` (timestamptz)

  2. Modified Tables
    - `documents` - add `has_mirror` boolean column (default false)

  3. Security
    - Enable RLS on both new tables
    - archived_documents: read-only for authenticated users
    - link_reports: insert-only for all users (public reporting)
*/

CREATE TABLE IF NOT EXISTS archived_documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  document_id uuid NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
  original_url text NOT NULL,
  archived_url text,
  archive_date timestamptz,
  archive_status text NOT NULL DEFAULT 'pending' CHECK (archive_status IN ('pending', 'archived', 'failed', 'unavailable')),
  file_size_bytes integer,
  content_type text,
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_archived_documents_document_id ON archived_documents(document_id);
CREATE INDEX IF NOT EXISTS idx_archived_documents_status ON archived_documents(archive_status);

ALTER TABLE archived_documents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can view archived documents"
  ON archived_documents
  FOR SELECT
  TO authenticated
  USING (true);

CREATE TABLE IF NOT EXISTS link_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  document_id uuid NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
  report_type text NOT NULL CHECK (report_type IN ('broken_link', 'wrong_document', 'other')),
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_link_reports_document_id ON link_reports(document_id);
CREATE INDEX IF NOT EXISTS idx_link_reports_created_at ON link_reports(created_at DESC);

ALTER TABLE link_reports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can report broken links"
  ON link_reports
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view link reports"
  ON link_reports
  FOR SELECT
  TO authenticated
  USING (true);

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'documents' AND column_name = 'has_mirror'
  ) THEN
    ALTER TABLE documents ADD COLUMN has_mirror boolean DEFAULT false;
  END IF;
END $$;
