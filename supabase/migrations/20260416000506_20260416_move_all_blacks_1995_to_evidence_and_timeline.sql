/*
  # Move 1995 All Blacks RWC Poisoning: Watchlist → Evidence List + Timeline

  ## Summary
  The 1995 Rugby World Cup All Blacks poisoning entry was incorrectly placed in the
  Watchlist (enemies_of_truth table). This migration removes it from there and inserts
  it correctly into:
    1. `documents` — so it appears in the Evidence Archive/List
    2. `events` — so it appears on the Timeline (June 24, 1995)

  ## Changes

  ### Removed
  - Row from `enemies_of_truth` where name = '1995 Rugby World Cup Poisoning (All Blacks)'

  ### New Tables Modified
  - `documents`: 1 new row — unresolved investigation, verification_tier = 'preliminary'
  - `events`: 1 new row — event_date = 1995-06-24, pillar = 'Health Transparency'

  ## Security
  - No RLS changes; existing policies cover both tables
*/

-- 1. Remove from watchlist
DELETE FROM enemies_of_truth
WHERE name = '1995 Rugby World Cup Poisoning (All Blacks)';

-- 2. Insert into evidence archive (documents)
INSERT INTO documents (
  id, title, description, content,
  source_url, verification_tier, document_type,
  date_published, metadata, slug,
  dispute_status, labeled_claims, subcategory,
  official_response, mainstream_framing, challenges
)
VALUES (
  gen_random_uuid(),
  '1995 Rugby World Cup Final: All Blacks Mass Poisoning',
  '27 of 35 All Blacks touring party fell severely ill before the 1995 RWC Final against South Africa. Food poisoning was confirmed; deliberate sabotage has been alleged by multiple senior witnesses including Nelson Mandela''s chief bodyguard. No investigation was opened and no charges were filed.',
  'On 24 June 1995, 27 of 35 members of the New Zealand All Blacks touring party fell severely ill with food poisoning the night before the Rugby World Cup Final in Johannesburg. New Zealand lost 15–12 to South Africa. Coach Laurie Mains alleged deliberate poisoning by a mysterious waitress identified only as "Suzie." Hotel executive Tony Rubin (2003) stated no such person existed on staff and that players had eaten at an off-site location. Nelson Mandela''s chief bodyguard Rory Steyn stated in 2016 that he was "certain" the team had been deliberately poisoned via the water supply, citing the involvement of international betting syndicates. Manager Colin Meads attributed the illness to contaminated milk. Captain Sean Fitzpatrick stated the loss was not solely attributable to the illness. Zinzan Brooke confirmed in 2024 that the poisoning was real but that the outcome remained undetermined. No official investigation was ever opened; no charges were filed; no consensus explanation exists.

Sources: ESPN. "Meads Lifts Lid on Suzie Myth." ESPN Rugby, 10 June 2008. | NDTV Sports. "Nelson Mandela Guard Says NZ Rugby Team Were Poisoned." 4 May 2016. | Planet Rugby. "Zinzan Brooke on 1995 Final." 7 Nov. 2024.',
  'https://sports.ndtv.com/',
  'preliminary',
  'Investigation Report',
  '1995-06-24',
  '{"tags": ["New Zealand", "All Blacks", "1995", "Rugby World Cup", "poisoning", "sports sabotage", "unresolved", "South Africa", "betting syndicates"], "region": "New Zealand / South Africa", "year": 1995}',
  '1995-all-blacks-rwc-poisoning',
  'ongoing',
  '["DOCUMENTED: Mass illness of 27 players confirmed by multiple team members and management", "DOCUMENTED: Food poisoning diagnosis confirmed", "CONTESTED: Deliberate sabotage via ''Suzie the waitress'' — hotel exec denies person existed", "CONTESTED: Rory Steyn (2016) certain of deliberate poisoning via water supply", "UNRESOLVED: No investigation opened; no charges filed; no consensus explanation"]',
  'Sports Integrity',
  'No official investigation was opened by New Zealand Rugby, South African authorities, or World Rugby. No charges were ever filed.',
  'Mainstream coverage frames the illness as food poisoning of uncertain origin — either contaminated food from an off-site restaurant or hotel kitchen. The "Suzie the waitress" narrative is generally treated as unverifiable.',
  'Multiple senior All Blacks figures and Nelson Mandela''s chief bodyguard have stated belief in deliberate sabotage. The identity of the alleged poisoner was never established. No betting syndicate investigation was conducted despite allegations.'
);

-- 3. Insert into timeline (events)
INSERT INTO events (
  id, title, description, event_date, pillar, document_ids, metadata
)
VALUES (
  gen_random_uuid(),
  '1995 RWC Final: All Blacks Mass Poisoning — 27 Players Ill Before Match',
  '27 of 35 All Blacks players fell ill with confirmed food poisoning the night before the 1995 Rugby World Cup Final. New Zealand lost 15–12 to South Africa. Coach Laurie Mains alleged deliberate poisoning. No investigation was ever opened. In 2016, Nelson Mandela''s chief bodyguard Rory Steyn stated he was "certain" of deliberate sabotage citing betting syndicates. Zinzan Brooke confirmed in 2024 the poisoning was real. No charges were ever filed.',
  '1995-06-24',
  'Health Transparency',
  '[]',
  '{"category": "Sports Integrity", "region": "New Zealand / South Africa", "tags": ["All Blacks", "1995", "Rugby World Cup", "poisoning", "unresolved", "Rory Steyn", "Laurie Mains", "Zinzan Brooke"], "significance": "high"}'
);
