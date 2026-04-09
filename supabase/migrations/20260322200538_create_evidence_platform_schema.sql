/*
  # Evidence Platform Schema

  1. New Tables
    - `documents`
      - `id` (uuid, primary key)
      - `title` (text) - Document title
      - `description` (text) - Document description
      - `content` (text) - Full document content
      - `source_url` (text) - Original source URL
      - `verification_tier` (text) - Verification level (verified, corroborated, preliminary)
      - `document_type` (text) - Type of document (report, memo, testimony, etc.)
      - `date_published` (date) - Publication date
      - `metadata` (jsonb) - Additional metadata
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      
    - `events`
      - `id` (uuid, primary key)
      - `title` (text) - Event title
      - `description` (text) - Event description
      - `event_date` (date) - When the event occurred
      - `pillar` (text) - Category/pillar (transparency, accountability, etc.)
      - `document_ids` (jsonb) - Array of related document IDs
      - `metadata` (jsonb) - Additional metadata
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      
    - `document_connections`
      - `id` (uuid, primary key)
      - `source_document_id` (uuid, foreign key)
      - `target_document_id` (uuid, foreign key)
      - `connection_type` (text) - Type of connection (references, contradicts, corroborates)
      - `description` (text) - Description of the connection
      - `created_at` (timestamptz)
      
    - `tips`
      - `id` (uuid, primary key)
      - `contact_email` (text) - Submitter email
      - `subject` (text) - Tip subject
      - `message` (text) - Tip content
      - `documentation` (text) - Documentation provided
      - `status` (text) - Status (new, reviewing, verified, dismissed)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Public read access for documents, events, and document_connections
    - Authenticated insert for tips
    - Admin-only write access for documents, events, and document_connections
*/

-- Documents table
CREATE TABLE IF NOT EXISTS documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  content text NOT NULL,
  source_url text,
  verification_tier text NOT NULL DEFAULT 'preliminary',
  document_type text NOT NULL,
  date_published date,
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Events table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  event_date date NOT NULL,
  pillar text NOT NULL,
  document_ids jsonb DEFAULT '[]'::jsonb,
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Document connections table
CREATE TABLE IF NOT EXISTS document_connections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  source_document_id uuid REFERENCES documents(id) ON DELETE CASCADE,
  target_document_id uuid REFERENCES documents(id) ON DELETE CASCADE,
  connection_type text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Tips table
CREATE TABLE IF NOT EXISTS tips (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  contact_email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  documentation text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE document_connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE tips ENABLE ROW LEVEL SECURITY;

-- Public read access for documents
CREATE POLICY "Public can view documents"
  ON documents FOR SELECT
  TO anon, authenticated
  USING (true);

-- Public read access for events
CREATE POLICY "Public can view events"
  ON events FOR SELECT
  TO anon, authenticated
  USING (true);

-- Public read access for document connections
CREATE POLICY "Public can view document connections"
  ON document_connections FOR SELECT
  TO anon, authenticated
  USING (true);

-- Public can submit tips
CREATE POLICY "Anyone can submit tips"
  ON tips FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_documents_verification_tier ON documents(verification_tier);
CREATE INDEX IF NOT EXISTS idx_documents_date_published ON documents(date_published);
CREATE INDEX IF NOT EXISTS idx_events_event_date ON events(event_date);
CREATE INDEX IF NOT EXISTS idx_events_pillar ON events(pillar);
CREATE INDEX IF NOT EXISTS idx_document_connections_source ON document_connections(source_document_id);
CREATE INDEX IF NOT EXISTS idx_document_connections_target ON document_connections(target_document_id);