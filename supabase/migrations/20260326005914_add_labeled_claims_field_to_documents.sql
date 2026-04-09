/*
  # Add Epistemic Labeled Claims Field to Documents

  1. Modified Tables
    - `documents`
      - Added `labeled_claims` (jsonb, nullable) - Array of epistemic claims with type and text
        Each entry: { "type": "DOCUMENTED|INFERRED|CONTESTED", "text": "claim text" }

  2. Important Notes
    - This field supports the new epistemic labeling system
    - Claims can be manually added over time to individual evidence items
    - Three label types: DOCUMENTED (primary sources), INFERRED (reasonable conclusions), CONTESTED (expert disagreement)
    - Field defaults to NULL (no claims yet applied)
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'documents' AND column_name = 'labeled_claims'
  ) THEN
    ALTER TABLE documents ADD COLUMN labeled_claims jsonb DEFAULT NULL;
  END IF;
END $$;

COMMENT ON COLUMN documents.labeled_claims IS 'Array of epistemic labeled claims: [{type: DOCUMENTED|INFERRED|CONTESTED, text: string}]';