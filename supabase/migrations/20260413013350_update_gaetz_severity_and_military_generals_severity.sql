/*
  # Update severity levels for Matt Gaetz and US military generals/majors

  ## Changes
  1. Matt Gaetz: CRITICAL -> MEDIUM
  2. Major John L. Cockerham: CRITICAL -> HIGH (already a Major in U.S. Army)
  3. General David Petraeus: already HIGH, confirmed HIGH
  4. General William "Kip" Ward: already HIGH, confirmed HIGH

  Note: Petraeus and Ward are already HIGH so no change needed for them.
*/

UPDATE public.enemies_of_truth
SET severity = 'MEDIUM', last_updated = now()
WHERE name = 'MATT GAETZ';

UPDATE public.enemies_of_truth
SET severity = 'HIGH', last_updated = now()
WHERE name = 'MAJOR JOHN L. COCKERHAM';
