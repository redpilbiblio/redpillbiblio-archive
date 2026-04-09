/*
  # Add Environmental & Corporate Accountability Pillar

  1. Updates
    - Update existing timeline events tagged with 'environment' to use the new 'Environmental & Corporate Accountability' pillar
    - The following events are re-tagged:
      - Microplastics in Human Blood (2022)
      - Monsanto Roundup - Known Carcinogen
      - BP Deepwater Horizon - Internal Cost-Cutting
      - PFAS Forever Chemicals - DuPont and 3M
      - DDT and Silent Spring
      - Sugar Industry Paid Harvard
      - Bhopal Disaster
      - Asbestos - Corporate Knowledge Since 1930s
      - Lead in Gasoline - Known Since 1920s
      - Flint Water Crisis
      - Radium Girls Poisoning Begins

  2. Notes
    - This migration updates the pillar field for environmental events
    - The new pillar covers documented corporate environmental destruction, industrial poisoning, and regulatory capture
*/

-- Update events with 'environment' pillar to new 'Environmental & Corporate Accountability' pillar
UPDATE events
SET pillar = 'Environmental & Corporate Accountability'
WHERE pillar = 'environment';

-- Update specific events by title that should be under this pillar
UPDATE events
SET pillar = 'Environmental & Corporate Accountability'
WHERE title IN (
  'Microplastics in Human Blood — Documented 2022',
  'Monsanto Roundup — They Knew It Caused Cancer',
  'BP Deepwater Horizon — 11 Dead, Internal Cost-Cutting Exposed',
  'PFAS Forever Chemicals — DuPont and 3M Knew for Decades',
  'DDT and Silent Spring — The Scientist They Tried to Destroy',
  'Sugar Industry Paid Harvard to Blame Fat',
  'Bhopal Disaster — 15,000 Dead, No Executive Imprisoned',
  'Asbestos — Corporate Knowledge Since the 1930s',
  'Lead in Gasoline — They Knew Since the 1920s',
  'Flint Water Crisis — Government Poisoned City to Save Money',
  'Radium Girls Poisoning Begins'
);