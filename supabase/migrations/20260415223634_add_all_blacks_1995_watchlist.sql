/*
  # Add All Blacks 1995 RWC Poisoning to Watchlist (enemies_of_truth)

  ## New Entry
  - 1995 Rugby World Cup Poisoning (All Blacks) — unresolved institutional case
  - Food poisoning confirmed; deliberate sabotage unproven; no charges filed
  - Multiple senior figures have stated belief in deliberate sabotage (Rory Steyn, 2016; Zinzan Brooke, 2024)

  ## Notes
  - Entered as an institutional/event entry rather than an individual
  - Severity: LOW (unresolved, no confirmed malicious actor)
  - status_tags reflect investigation status
*/

INSERT INTO enemies_of_truth (
  id, name, title, subtitle, severity, summary,
  key_facts, status_tags, evidence_documented, sources,
  footer_note, sort_order
)
VALUES (
  gen_random_uuid(),
  '1995 Rugby World Cup Poisoning (All Blacks)',
  'Unresolved Sports Sabotage Case — New Zealand / South Africa',
  'Food poisoning confirmed; deliberate sabotage alleged by multiple senior witnesses; no charges filed',
  'LOW',
  '27 of 35 All Blacks touring party fell severely ill before the 1995 RWC Final (NZ lost 15–12 to South Africa). Coach Laurie Mains alleged deliberate poisoning by "Suzie the waitress." Hotel exec Tony Rubin (2003) stated no such person existed and players had secretly eaten off-site. Nelson Mandela''s chief bodyguard Rory Steyn (2016) publicly stated he was "certain" of deliberate sabotage via the water supply, citing betting syndicates. Manager Colin Meads attributed illness to contaminated milk. Captain Sean Fitzpatrick said the loss was not solely due to illness. Zinzan Brooke (2024) confirmed poisoning was real but outcome undetermined.',
  '["27 of 35 All Blacks touring party confirmed ill before 1995 RWC Final", "NZ lost 15–12 to South Africa on 24 June 1995", "Coach Laurie Mains alleged deliberate poisoning by ''Suzie the waitress''", "Hotel exec Tony Rubin (2003): no such waitress existed; players had eaten off-site", "Rory Steyn (Mandela''s chief bodyguard, 2016): ''certain'' of deliberate sabotage via water supply, citing betting syndicates", "Colin Meads (manager): attributed illness to contaminated milk", "Sean Fitzpatrick (captain): loss not solely due to illness", "Zinzan Brooke (2024): confirmed poisoning was real, outcome undetermined", "No investigation opened; no charges filed"]',
  '["UNRESOLVED", "NO CHARGES FILED", "MULTIPLE WITNESS ALLEGATIONS"]',
  'Food poisoning confirmed by multiple team members and management. Deliberate sabotage alleged by multiple senior figures including Rory Steyn (Mandela''s chief bodyguard) and Zinzan Brooke. No official investigation; no charges. No consensus explanation.',
  '[{"name": "ESPN Rugby", "url": "https://www.espn.com/rugby/", "date": "10 June 2008"}, {"name": "NDTV Sports — Nelson Mandela Guard Says NZ Rugby Team Were Poisoned", "url": "https://sports.ndtv.com/", "date": "4 May 2016"}, {"name": "Planet Rugby — Zinzan Brooke on 1995 Final", "url": "https://www.planetrugby.com/", "date": "7 Nov. 2024"}]',
  'MLA: ESPN. "Meads Lifts Lid on Suzie Myth." ESPN Rugby, 10 June 2008. | NDTV Sports. "Nelson Mandela Guard Says NZ Rugby Team Were Poisoned." 4 May 2016. | Planet Rugby. "Zinzan Brooke on 1995 Final." 7 Nov. 2024.',
  NULL
);
