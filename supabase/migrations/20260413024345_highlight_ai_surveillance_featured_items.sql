/*
  # Highlight Featured AI & Surveillance Items

  1. Update metadata for two strongest AI & Surveillance documents
    - Add 'featured: true' flag to metadata
    - DOJ Criminal Justice AI Report (2024)
    - Weapons of Math Destruction (2016)

  2. This allows frontend to prioritize these in pillar highlights
*/

UPDATE documents 
SET metadata = jsonb_set(
  metadata, 
  '{featured}', 
  'true'::jsonb
)
WHERE slug IN (
  'doj-artificial-intelligence-criminal-justice-final-report-2024',
  'weapons-of-math-destruction-cathy-oneil-2016'
);