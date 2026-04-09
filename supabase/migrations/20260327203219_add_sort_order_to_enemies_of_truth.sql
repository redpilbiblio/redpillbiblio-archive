/*
  # Add sort_order column to enemies_of_truth

  1. Changes
    - Adds `sort_order` integer column (nullable, default NULL) to `enemies_of_truth`
    - Sets sort_order = 1 for BENJAMIN NETANYAHU (to pin him first)
    - Trump will be inserted with sort_order = 2
    - All other existing entries remain NULL (fallback to alphabetical within severity group)
  
  2. Notes
    - NULL sort_order entries sort after pinned entries (NULLS LAST)
    - This allows explicit ordering for featured entries without disturbing the rest
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'enemies_of_truth' AND column_name = 'sort_order'
  ) THEN
    ALTER TABLE enemies_of_truth ADD COLUMN sort_order integer DEFAULT NULL;
  END IF;
END $$;

UPDATE enemies_of_truth SET sort_order = 1 WHERE name = 'BENJAMIN NETANYAHU';
