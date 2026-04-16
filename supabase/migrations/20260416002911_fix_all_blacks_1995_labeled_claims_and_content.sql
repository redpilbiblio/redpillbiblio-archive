/*
  # Fix 1995 All Blacks RWC Poisoning Evidence Item

  1. Modified Tables
    - `documents`: Update row with slug '1995-all-blacks-rwc-poisoning'
      - Fix `labeled_claims` format from plain strings to proper {type, text} objects
      - Update `title` to match user-provided format
      - Update `description` with comprehensive summary
      - Update `content` with full evidence details including all player statements and MLA citations
      - Update `metadata` tags to include Rugby, Sport, Conspiracy, Aotearoa, South Africa, Betting Syndicates
      - Update `verification_tier` to 'corroborated' (closest match for UNRESOLVED with confirmed facts)
      - Update `date_published` to 1995-06-22 (Thursday before final, when poisoning occurred)

  2. Important Notes
    - The broken labeled_claims format (plain strings) was causing a runtime crash
      in the EpistemicClaimBlock component, producing a blank page
    - All MLA citations preserved exactly as provided
    - UNRESOLVED status mapped via dispute_status = 'ongoing'
*/

UPDATE documents
SET
  title = '1995 All Blacks RWC Final — Food Poisoning Incident',
  description = '~27 of 35 All Blacks touring party suffered severe gastrointestinal illness (violent vomiting/diarrhoea) days before the 1995 Rugby World Cup Final. New Zealand lost 15–12 to South Africa after extra time. Food poisoning is universally confirmed. Whether it was deliberate sabotage remains unproven — no charges filed, no formal investigation, no forensic evidence ever made public.',
  content = E'CONFIRMED FACTS:\n• ~27–31 of 35–36 squad members affected Thursday/Friday before the final\n• Players who skipped the suspect meal (e.g., KFC instead of team lunch) were unaffected, per Colin Meads (ESPN, 2008)\n• Sean Fitzpatrick confirmed 3 players including himself who missed the suspect tea/coffee were unaffected (Sky Sports, 2020)\n\nSABOTAGE ALLEGATIONS (unproven):\n• Coach Laurie Mains: claims deliberate poisoning via tea/coffee by a newly hired waitress ("Suzie"/"Sooki") who vanished after the incident; hired a private detective; links to UK/Far East betting syndicates; reiterated as recently as Sept 2025 (Planet Rugby)\n• Rory Steyn (All Blacks security liaison / Nelson Mandela''s chief bodyguard): stated "no doubt" of deliberate sabotage in his book One Step Behind Mandela (~2000) and repeated in interviews (NDTV/DW/NZ Herald, May 2016); suggested water supply tampered, betting syndicates responsible\n• Dr. Mike Bowen (team doctor): described treating a "violently sick party," called it "unlikely to have been something that occurred incidentally" but confirmed "no way of proving" foul play (NZ Herald/Stuff, 2018)\n\nCOUNTER-ACCOUNTS (natural causes):\n• Colin Meads (manager): blames contaminated milk at Thursday lunch after a big Wednesday night (ESPN, 11 June 2008); calls "Suzie" fictitious\n• Tony Rubin (Crowne Plaza Hotel executive, Sandton): stated "Suzie never existed," was never an employee; claimed senior All Blacks secretly ate prawns/seafood off-site against instructions (ESPN, 10 Aug 2003; NZ Herald, 11 Aug 2003)\n• Ed Griffiths (1995 SA Rugby CEO): claims up to 6 All Blacks had upset stomachs from seafood eaten days prior; adamantly denies hotel/foul play involvement (RugbyPass, 2020)\n\nPLAYER STATEMENTS:\n• Zinzan Brooke: "Thursday afternoon at the lunch… it filled our boots but it came out quickly. Definitely wasn''t a level playing field." (Planet Rugby, 7 Nov 2024)\n• Andrew Mehrtens: Acknowledges illness but refused to call it deliberate (RugbyPass/BBC Rugby Union Daily, 28 Oct 2023)\n• Sean Fitzpatrick: "Definitely food poisoning… did have an effect, but the loss wasn''t solely due to it." (Sky Sports, 29 Apr 2020)\n\nMLA CITATIONS:\n• "Meads Lifts Lid on Suzie Myth." ESPN Rugby, 11 June 2008. espn.com/rugby/story/_/id/15404553/meads-lifts-lid-suzie-myth\n• "All Blacks'' ''Poisoning'' Story Re-Emerges." ESPN Rugby, 10 Aug. 2003. espn.com/rugby/story/_/id/15368172\n• "Nelson Mandela Guard Says NZ Rugby Team Were Poisoned in 1995 World Cup." NDTV Sports, 4 May 2016.\n• "New Zealand Rugby World Cup Losers Allegedly Poisoned." Deutsche Welle, 5 May 2016. dw.com/en/a-19237493\n• Steyn, Rory. One Step Behind Mandela. Struik, 2000.\n• Brooke, Zinzan. Interview. Planet Rugby, 7 Nov. 2024. planetrugby.com\n• Fitzpatrick, Sean. Interview. Sky Sports, 29 Apr. 2020.\n• Mehrtens, Andrew. BBC Rugby Union Daily Podcast. RugbyPass, 28 Oct. 2023.\n• "1995 Rugby World Cup Final." Wikipedia: The Free Encyclopedia. en.wikipedia.org/wiki/1995_Rugby_World_Cup_final',
  verification_tier = 'corroborated',
  document_type = 'Investigation Report',
  date_published = '1995-06-22',
  dispute_status = 'ongoing',
  metadata = jsonb_build_object(
    'tags', '["Rugby", "Sport", "Conspiracy", "Aotearoa", "South Africa", "Betting Syndicates"]'::jsonb,
    'year', 1995,
    'region', 'New Zealand / South Africa',
    'pillar', 'War & Intelligence'
  ),
  labeled_claims = '[
    {"type": "DOCUMENTED", "text": "Mass illness of ~27–31 of 35–36 squad members confirmed by multiple team members, management, and team doctor"},
    {"type": "DOCUMENTED", "text": "Food poisoning diagnosis confirmed — players who skipped the suspect meal were unaffected"},
    {"type": "DOCUMENTED", "text": "Sean Fitzpatrick confirmed 3 players including himself who missed the suspect tea/coffee were unaffected (Sky Sports, 2020)"},
    {"type": "CONTESTED", "text": "Deliberate sabotage via waitress ''Suzie''/''Sooki'' — hotel executive Tony Rubin denies person ever existed on staff"},
    {"type": "CONTESTED", "text": "Rory Steyn (Mandela''s chief bodyguard) stated ''no doubt'' of deliberate poisoning via water supply, linked to betting syndicates"},
    {"type": "CONTESTED", "text": "Colin Meads attributes illness to contaminated milk and a heavy Wednesday night — calls ''Suzie'' fictitious"},
    {"type": "INFERRED", "text": "No official investigation was opened by NZ Rugby, SA authorities, or World Rugby despite multiple credible allegations of sabotage"}
  ]'::jsonb,
  official_response = 'No official investigation was opened by New Zealand Rugby, South African authorities, or World Rugby. No charges were ever filed. No forensic evidence was ever made public.',
  mainstream_framing = 'Mainstream coverage frames the illness as food poisoning of uncertain origin — either contaminated food from an off-site restaurant or hotel kitchen. The "Suzie the waitress" narrative is generally treated as unverifiable. Ed Griffiths (1995 SA Rugby CEO) attributes it to seafood eaten days prior.',
  challenges = 'Multiple senior All Blacks figures and Nelson Mandela''s chief bodyguard have stated belief in deliberate sabotage. Coach Laurie Mains hired a private detective and linked the incident to UK/Far East betting syndicates (reiterated Sept 2025). Dr. Mike Bowen called it "unlikely to have been something that occurred incidentally." The identity of the alleged poisoner was never established. No betting syndicate investigation was conducted despite allegations.',
  updated_at = now()
WHERE slug = '1995-all-blacks-rwc-poisoning';
