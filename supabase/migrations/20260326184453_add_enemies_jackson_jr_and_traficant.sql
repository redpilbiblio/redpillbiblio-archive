/*
  # Add Jesse Jackson Jr and Jim Traficant to Enemies of Truth

  1. New Entries
    - `Jesse Jackson Jr.` — Defrauded campaign of $750,000 for luxury purchases; 30 months federal prison. Severity: CRITICAL.
    - `Jim Traficant` — Bribery, racketeering, tax evasion, forced staff kickbacks; 8 years prison; expelled from the House. Severity: DECEASED.

  2. Notes
    - Jackson Jr used campaign funds for a $43,350 gold-plated Rolex, mink cashmere capes, celebrity memorabilia
    - Traficant was expelled from the House 420-1 — only the second such expulsion since the Civil War
    - Traficant died September 27, 2014 in a tractor accident
*/

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'JESSE JACKSON JR.',
  'Former U.S. Representative, Illinois',
  'Defrauded Campaign of $750,000 for Luxury Purchases; 30 Months Federal Prison',
  'CRITICAL',
  'Jesse Jackson Jr. represented Illinois''s 2nd Congressional District from 1995 to 2012. Between 2005 and 2012, Jackson and his wife Sandra — a Chicago alderman — defrauded his re-election campaigns of approximately $750,000 in funds used for personal expenditures. The scheme involved approximately 3,100 personal purchases charged to campaign accounts, including a $43,350 gold-plated men''s Rolex watch, mink cashmere capes, a guitar signed by Michael Jackson, celebrity memorabilia, high-end electronics, furniture, appliances, home renovation, and approximately $60,857 in restaurant, nightclub, and alcohol expenses alone. Jackson filed false FEC campaign finance reports and false financial disclosure statements with the House. Sandra Jackson separately pleaded guilty to filing false tax returns for failing to report nearly $570,000 in taxable income. Jackson pleaded guilty February 20, 2013 and was sentenced to 30 months in federal prison plus $750,000 forfeiture.',
  '[
    "Defrauded campaign of approximately $750,000 over seven years (2005–2012) through approximately 3,100 personal purchases",
    "Purchased a $43,350 gold-plated Rolex watch with campaign funds",
    "Used campaign accounts for mink cashmere capes, celebrity memorabilia, furniture, appliances, home renovation, and $60,857+ in restaurant and nightclub expenses",
    "Filed false FEC reports and false House financial disclosure statements",
    "Wife Sandra Jackson separately pleaded guilty to filing false tax returns, failing to report $570,000 in taxable income",
    "Pleaded guilty February 20, 2013; sentenced to 30 months in federal prison + $750,000 forfeiture (Case No. 1:13-cr-00058, D.D.C.)"
  ]'::jsonb,
  '[
    "CONVICTED — GUILTY PLEA",
    "30 MONTHS FEDERAL PRISON",
    "$750K CAMPAIGN FRAUD",
    "WIFE ALSO CONVICTED"
  ]'::jsonb,
  E'Between 2005 and 2012, Jackson and his wife Sandra defrauded his re-election campaigns of approximately $750,000 through approximately 3,100 personal purchases charged to campaign accounts.\n\nPurchases included a $43,350 gold-plated men''s Rolex watch, mink cashmere capes, a guitar signed by Michael Jackson, celebrity memorabilia, high-end electronics, furniture, appliances, home renovation, and approximately $60,857 in restaurant, nightclub, and alcohol expenses alone.\n\nJackson filed false FEC campaign finance reports and false financial disclosure statements with the House.\n\nWife Sandra Jackson separately pleaded guilty to filing false tax returns for failing to report nearly $570,000 in taxable income over six tax years.\n\nJackson pleaded guilty February 20, 2013 (Case No. 1:13-cr-00058, D.D.C.) and was sentenced to 30 months in federal prison plus $750,000 forfeiture.\n\nCurrent Profession: Sought political comeback — ran in 2026 Democratic primary for Illinois 2nd Congressional District (his former seat), lost to Donna Miller. Previously worked as a Chicago radio commentator after 2015 prison release.\nApproximate Net Worth: Not publicly documented (paid $750,000 restitution and forfeited assets while in prison).\nCurrent Residence: Flossmoor, IL (Chicago south suburb).',
  '[
    {"name": "DOJ — Jackson Jr. Pleads Guilty to Conspiring to Defraud Campaign of $750,000+", "url": "https://www.justice.gov/usao-dc/pr/former-congressman-jesse-l-jackson-jr-pleads-guilty-conspiring-defraud-campaign-more", "date": "2013-02-20"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'JIM TRAFICANT',
  'Former U.S. Representative, Ohio',
  'Bribery, Racketeering, Tax Evasion, Forced Staff Kickbacks; 8 Years; Expelled from House',
  'DECEASED',
  'Jim Traficant represented Ohio''s 17th Congressional District from 1985 to 2002. He was convicted April 11, 2002, in the Northern District of Ohio on 10 felony counts including bribery (accepting cash from businessmen seeking his help in Washington), racketeering (operating his congressional office as a criminal enterprise), tax evasion, forced staff kickbacks, and compelling congressional employees to perform personal farm labor and work on his houseboat. He was expelled from the House by a vote of 420–1 on July 24, 2002 — only the second such expulsion since the Civil War. He was sentenced July 30, 2002 to 8 years in federal prison by Judge Lesley Wells, plus a $150,000 fine and $96,000 in forfeiture. DECEASED — September 27, 2014; tractor accident on farm near Greenford, Ohio; age 73.',
  '[
    "Accepted cash bribes from businessmen seeking his assistance in Washington",
    "Operated his congressional office as a racketeering enterprise",
    "Committed tax evasion",
    "Made congressional employees kick back portions of their paychecks to him",
    "Forced staff to perform personal farm labor and work on his houseboat",
    "Convicted April 11, 2002 on 10 felony counts; sentenced July 30, 2002 to 8 years in federal prison + $150,000 fine + $96,000 forfeiture",
    "Expelled from the House July 24, 2002 by vote of 420–1 — only the second congressional expulsion since the Civil War"
  ]'::jsonb,
  '[
    "CONVICTED — 10 FELONY COUNTS",
    "8 YEARS FEDERAL PRISON",
    "EXPELLED FROM CONGRESS 420-1",
    "DECEASED — 2014"
  ]'::jsonb,
  E'Jim Traficant represented Ohio''s 17th Congressional District from 1985 to 2002.\n\nConvicted April 11, 2002 in the Northern District of Ohio on 10 felony counts:\n- Bribery (accepting cash from businessmen seeking his help in Washington)\n- Racketeering (operating his congressional office as a criminal enterprise)\n- Tax evasion\n- Forced staff kickbacks\n- Compelling congressional employees to perform personal farm labor and work on his houseboat\n\nExpelled from the House by a vote of 420–1 on July 24, 2002 — only the second such expulsion since the Civil War.\n\nSentenced July 30, 2002 to 8 years in federal prison by Judge Lesley Wells, plus a $150,000 fine and $96,000 in forfeiture.\n\n▸ SURVIVING FAMILY:\nDeceased — September 27, 2014; tractor accident on farm near Greenford (Green Township), Ohio; died at St. Elizabeth Health Center, Poland, OH; age 73.',
  '[
    {"name": "PBS NewsHour — Jim Traficant Sentenced", "url": "https://www.pbs.org/newshour/politics/politics-july-dec02-traficant_07-30", "date": "2002-07-30"},
    {"name": "New York Times — Ohio Congressman Guilty in Bribery and Kickbacks", "url": "https://www.nytimes.com/2002/04/12/us/ohio-congressman-guilty-in-bribery-and-kickbacks.html", "date": "2002-04-12"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;