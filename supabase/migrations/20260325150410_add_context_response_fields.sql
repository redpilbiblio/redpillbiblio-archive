/*
  # Add Context & Response Fields to Documents

  1. Modified Tables
    - `documents`
      - `official_response` (text, nullable) - Official response from the entity/organization referenced
      - `mainstream_framing` (text, nullable) - How mainstream sources frame this evidence
      - `challenges` (text, nullable) - Known challenges or counterarguments to this evidence
      - `dispute_status` (text, default 'unchallenged') - Current dispute status: unchallenged, disputed, partially_debunked, ongoing

  2. Important Notes
    - All fields are nullable with sensible defaults
    - dispute_status defaults to 'unchallenged'
    - No data is modified or removed
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'documents' AND column_name = 'official_response'
  ) THEN
    ALTER TABLE documents ADD COLUMN official_response text DEFAULT NULL;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'documents' AND column_name = 'mainstream_framing'
  ) THEN
    ALTER TABLE documents ADD COLUMN mainstream_framing text DEFAULT NULL;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'documents' AND column_name = 'challenges'
  ) THEN
    ALTER TABLE documents ADD COLUMN challenges text DEFAULT NULL;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'documents' AND column_name = 'dispute_status'
  ) THEN
    ALTER TABLE documents ADD COLUMN dispute_status text DEFAULT 'unchallenged'
      CHECK (dispute_status IN ('unchallenged', 'disputed', 'partially_debunked', 'ongoing'));
  END IF;
END $$;
