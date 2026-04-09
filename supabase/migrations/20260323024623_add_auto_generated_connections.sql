/*
  # Add Auto-Generated Connections System

  1. New Table
    - `auto_generated_connections`
      - `id` (uuid, primary key)
      - `source_document_id` (uuid, foreign key to documents)
      - `target_document_id` (uuid, foreign key to documents)
      - `connection_type` (text) - corroborates, references, contradicts, categoryLink
      - `scope` (text) - intra-tree or cross-tree
      - `confidence_score` (decimal) - 0.0 to 1.0
      - `reasoning` (jsonb) - explanation of why connection was made
      - `shared_entities` (jsonb) - array of shared entities
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on auto_generated_connections table
    - Public read access
    - No direct write access (connections generated server-side)

  3. Indexes
    - Index on source_document_id and target_document_id for fast lookups
    - Index on confidence_score for filtering
*/

-- Create auto_generated_connections table
CREATE TABLE IF NOT EXISTS auto_generated_connections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  source_document_id uuid REFERENCES documents(id) ON DELETE CASCADE NOT NULL,
  target_document_id uuid REFERENCES documents(id) ON DELETE CASCADE NOT NULL,
  connection_type text NOT NULL,
  scope text NOT NULL DEFAULT 'cross-tree',
  confidence_score decimal(3,2) NOT NULL CHECK (confidence_score >= 0 AND confidence_score <= 1),
  reasoning jsonb DEFAULT '{}'::jsonb,
  shared_entities jsonb DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Add indexes for performance
CREATE INDEX IF NOT EXISTS idx_auto_connections_source ON auto_generated_connections(source_document_id);
CREATE INDEX IF NOT EXISTS idx_auto_connections_target ON auto_generated_connections(target_document_id);
CREATE INDEX IF NOT EXISTS idx_auto_connections_confidence ON auto_generated_connections(confidence_score);

-- Enable RLS
ALTER TABLE auto_generated_connections ENABLE ROW LEVEL SECURITY;

-- Public read policy
CREATE POLICY "Auto-generated connections are viewable by everyone"
  ON auto_generated_connections FOR SELECT
  TO public
  USING (true);

-- Prevent duplicate connections (bidirectional check)
CREATE UNIQUE INDEX IF NOT EXISTS idx_auto_connections_unique 
  ON auto_generated_connections(
    LEAST(source_document_id, target_document_id),
    GREATEST(source_document_id, target_document_id)
  );
