/*
  # Create submissions table for public evidence submission system

  1. New Tables
    - `submissions`
      - `id` (uuid, primary key) - unique submission identifier
      - `document_type` (text, not null) - type of evidence document
      - `title` (text, not null) - title of the submission
      - `source_url` (text, not null) - URL to the source document
      - `document_date` (date, not null) - date of the document
      - `pillar` (text, not null) - which pillar this evidence belongs to
      - `summary` (text, not null) - submitter's summary of the evidence
      - `criteria_notes` (text) - optional notes on verification criteria
      - `is_anonymous` (boolean, default true) - whether submission is anonymous
      - `submitter_handle` (text) - optional pseudonym
      - `signal_handle` (text) - optional Signal username for follow-up
      - `status` (text, default 'received') - review status
      - `status_message` (text) - human-readable status message
      - `created_at` (timestamptz) - submission timestamp

  2. Security
    - Enable RLS on `submissions` table
    - Add policy for anonymous and authenticated users to insert submissions
    - Add policy for anyone to check submission status by ID

  3. Indexes
    - Index on `status` for filtering
    - Index on `created_at` for ordering
*/

CREATE TABLE IF NOT EXISTS submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  document_type text NOT NULL,
  title text NOT NULL,
  source_url text NOT NULL,
  document_date date NOT NULL,
  pillar text NOT NULL,
  summary text NOT NULL,
  criteria_notes text,
  is_anonymous boolean NOT NULL DEFAULT true,
  submitter_handle text,
  signal_handle text,
  status text NOT NULL DEFAULT 'received'
    CHECK (status IN ('received', 'under_review', 'accepted', 'rejected')),
  status_message text DEFAULT 'Your submission has been received and is awaiting review.',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit evidence"
  ON submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can check submission status by ID"
  ON submissions FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_submissions_status ON submissions(status);
CREATE INDEX IF NOT EXISTS idx_submissions_created_at ON submissions(created_at);
