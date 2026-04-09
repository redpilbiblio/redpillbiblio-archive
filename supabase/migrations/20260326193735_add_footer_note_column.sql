/*
  # Add footer_note column for LOW severity entries

  1. Add footer_note column (nullable text) for displaying status banners
*/

DO $$
BEGIN
  -- Add footer_note column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'enemies_of_truth' AND column_name = 'footer_note'
  ) THEN
    ALTER TABLE enemies_of_truth ADD COLUMN footer_note TEXT;
  END IF;
END $$;