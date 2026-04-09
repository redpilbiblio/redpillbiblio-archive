/*
  # Add subcategory column to documents table

  1. Changes
    - `documents` table: adds `subcategory` TEXT column with default 'general'

  2. Population
    - Assigns subcategory values based on keyword matching in title/description
    - Categories: epstein_network, vaccine_safety, historical_experiments,
      pharma_fraud, cia_operations, mass_surveillance, uap_disclosure,
      suppressed_inventors, trafficking_networks, war_propaganda, general
*/

ALTER TABLE documents ADD COLUMN IF NOT EXISTS subcategory TEXT DEFAULT 'general';

UPDATE documents SET subcategory = CASE
  WHEN title ILIKE '%epstein%' OR description ILIKE '%epstein%' THEN 'epstein_network'
  WHEN title ILIKE '%vaccine%' OR description ILIKE '%vaccine%' THEN 'vaccine_safety'
  WHEN title ILIKE '%MKUltra%' OR description ILIKE '%mkultra%' THEN 'historical_experiments'
  WHEN title ILIKE '%pharma%' OR description ILIKE '%pharma%' THEN 'pharma_fraud'
  WHEN title ILIKE '%CIA%' OR description ILIKE '%cia%' THEN 'cia_operations'
  WHEN title ILIKE '%NSA%' OR description ILIKE '%nsa%' THEN 'mass_surveillance'
  WHEN title ILIKE '%UFO%' OR title ILIKE '%UAP%' THEN 'uap_disclosure'
  WHEN title ILIKE '%Tesla%' AND title ILIKE '%energy%' THEN 'suppressed_inventors'
  WHEN title ILIKE '%trafficking%' THEN 'trafficking_networks'
  WHEN title ILIKE '%propaganda%' THEN 'war_propaganda'
  ELSE 'general'
END
WHERE subcategory IS NULL OR subcategory = 'general';
