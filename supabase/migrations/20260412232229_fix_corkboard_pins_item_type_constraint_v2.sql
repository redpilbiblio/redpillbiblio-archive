/*
  # Fix corkboard_pins item_type CHECK constraint (v2)

  ## Summary
  The existing CHECK constraint on corkboard_pins.item_type uses lowercase values
  ('document', 'event', etc.) but the frontend inserts PascalCase strings
  ('Document', 'Event', etc.) as defined by the ResearchItemType union type.
  This mismatch causes a constraint violation on every pin attempt.

  ## Changes
  1. Drops the existing `corkboard_pins_item_type_check` constraint.
  2. Migrates any existing lowercase rows to PascalCase.
  3. Recreates the constraint with the exact PascalCase strings the frontend uses.

  ## Allowed values
  'Document', 'Event', 'Watchlist', 'Conviction', 'Incident', 'Death', 'Trade', 'Family'
*/

ALTER TABLE public.corkboard_pins
  DROP CONSTRAINT IF EXISTS corkboard_pins_item_type_check;

UPDATE public.corkboard_pins
SET item_type = CASE item_type
  WHEN 'document'   THEN 'Document'
  WHEN 'event'      THEN 'Event'
  WHEN 'watchlist'  THEN 'Watchlist'
  WHEN 'conviction' THEN 'Conviction'
  WHEN 'incident'   THEN 'Incident'
  WHEN 'death'      THEN 'Death'
  WHEN 'trade'      THEN 'Trade'
  WHEN 'family'     THEN 'Family'
  ELSE item_type
END
WHERE item_type IN ('document','event','watchlist','conviction','incident','death','trade','family');

ALTER TABLE public.corkboard_pins
  ADD CONSTRAINT corkboard_pins_item_type_check
  CHECK (item_type IN (
    'Document',
    'Event',
    'Watchlist',
    'Conviction',
    'Incident',
    'Death',
    'Trade',
    'Family'
  ));
