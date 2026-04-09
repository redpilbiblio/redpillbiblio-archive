/*
  # Rename "Government, Law & Elections" pillar to "Government & Law"

  1. Modified Tables
    - `documents`
      - Updates `document_type` column value from 'Government, Law & Elections' to 'Government & Law'
      - Affects 101 records
  
  2. Important Notes
    - This is a data-only migration, no schema changes
    - All 101 evidence items under this pillar retain their content unchanged
    - Only the category label is updated
*/

UPDATE documents
SET document_type = 'Government & Law'
WHERE document_type = 'Government, Law & Elections';
