/*
  # Add Chaka Fattah and Corrine Brown to Enemies of Truth

  1. New Entries
    - `Chaka Fattah` — Racketeering, bribery, fraud, money laundering conviction; 10 years federal prison. Severity: CRITICAL.
    - `Corrine Brown` — Fake charity fraud ($800K solicited, $1,200 distributed); 5 years prison. Severity: CRITICAL.

  2. Notes
    - Fattah convicted on all counts including lobbying Obama for co-conspirator appointment
    - Brown's fake charity is one of the most egregious congressional fraud cases documented
*/

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'CHAKA FATTAH',
  'Former U.S. Representative, Pennsylvania',
  'Racketeering, Bribery, Fraud, and Money Laundering; 10 Years in Federal Prison',
  'CRITICAL',
  'Chaka Fattah represented Pennsylvania''s 2nd Congressional District from 1995 to 2016, serving as Ranking Member on the House Appropriations Subcommittee on Commerce, Justice, and Science. He received a substantial illicit $1 million loan to his 2007 mayoral campaign, then used his political influence to engage friends, employees, and others in elaborate schemes to hide the loan''s source and repayment. He misused federal grant money, siphoned money from nonprofit organizations to pay campaign debts, misappropriated campaign funds to pay personal obligations, and even lobbied President Obama for an appointment for one of his co-conspirators. He was convicted June 21, 2016 in the Eastern District of Pennsylvania (Case No. 2:15-cr-00346) on all counts and sentenced December 12, 2016 to 10 years in federal prison.',
  '[
    "Received a $1 million illicit loan to his 2007 Philadelphia mayoral campaign",
    "Misused federal grant money; siphoned funds from nonprofit organizations to pay campaign debts",
    "Misappropriated campaign funds for personal obligations",
    "Lobbied President Obama to appoint a co-conspirator to a federal position",
    "Convicted June 21, 2016 on all counts: racketeering conspiracy, bribery, conspiracy, mail fraud (6 counts), money laundering, bank fraud, false statements, falsification of records (5 counts) (E.D. Pa., Case No. 2:15-cr-00346)",
    "Sentenced December 12, 2016: 10 years in federal prison"
  ]'::jsonb,
  '[
    "CONVICTED — ALL COUNTS",
    "10 YEARS FEDERAL PRISON",
    "RACKETEERING + BRIBERY",
    "RELEASED TO COMMUNITY CONFINEMENT"
  ]'::jsonb,
  E'Chaka Fattah represented Pennsylvania''s 2nd Congressional District from 1995 to 2016, serving as Ranking Member on the House Appropriations Subcommittee.\n\nReceived a substantial illicit $1 million loan to his 2007 mayoral campaign, then used political influence to hide the loan''s source and repayment through elaborate schemes involving friends, employees, and others.\n\nMisused federal grant money. Siphoned money from nonprofit organizations to pay campaign debts. Misappropriated campaign funds for personal obligations.\n\nLobbied President Obama for an appointment for one of his co-conspirators.\n\nConvicted June 21, 2016 (E.D. Pa., Case No. 2:15-cr-00346) on all counts — including racketeering conspiracy, bribery, conspiracy, mail fraud (6 counts), money laundering, bank fraud, false statements, and falsification of records (5 counts).\n\nSentenced December 12, 2016 to 10 years in federal prison.\n\nCurrent Profession: No known public occupation. Former U.S. Representative (PA-2). Released from federal prison to community confinement June 8, 2020; full sentence supervision completed approximately August 2025.\nApproximate Net Worth: Not publicly documented.\nCurrent Residence: Philadelphia, PA area.',
  '[
    {"name": "DOJ — Fattah and Associates Convicted in Corruption Case", "url": "https://www.justice.gov/archives/opa/pr/philadelphia-congressman-and-associates-convicted-corruption-case", "date": "2016-06-21"},
    {"name": "DOJ — Fattah Sentenced to 10 Years for Racketeering", "url": "https://www.justice.gov/archives/opa/pr/former-congressman-chaka-fattah-sentenced-10-years-prison-participating-racketeering", "date": "2016-12-12"},
    {"name": "3rd Circuit — United States v. Fattah", "url": "https://law.justia.com/cases/federal/appellate-courts/ca3/17-1346/17-1346-2019-01-16.html", "date": "2019-01-16"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'CORRINE BROWN',
  'Former U.S. Representative, Florida',
  'Fake Charity Fraud — $800,000 Solicited, Only $1,200 in Scholarships; 5 Years in Prison',
  'CRITICAL',
  'Corrine Brown represented Florida''s 3rd/5th Congressional District from 1993 to 2017. Between 2012 and 2016, Brown, her Chief of Staff Elias "Ronnie" Simmons, and the president of a fraudulent charity solicited more than $800,000 in donations to "One Door for Education – Amy Anderson Scholarship Fund," falsely representing donations would fund college scholarships. In reality, only two scholarships totaling $1,200 were ever distributed. The vast majority of funds financed Brown''s personal bank accounts, a golf tournament, luxury box seats at a Beyonce concert, luxury box seats at an NFL game, a shopping trip to Beverly Hills, and over $300,000 in events hosted in Brown''s honor. Brown also failed to report $160,000+ in cash on her personal tax returns. Separately, Simmons admitted placing a phantom employee on the House payroll — over $735,000 in government salary paid between 2001 and 2016 for no known work. Brown was convicted May 11, 2017 on 18 of 22 counts and sentenced to 5 years in federal prison.',
  '[
    "Solicited over $800,000 in donations to a fraudulent scholarship fund; only two scholarships totaling $1,200 were ever distributed",
    "Funneled charity funds to personal bank accounts; spent donor money on Beyonce luxury box, NFL luxury box, Beverly Hills shopping, and $300,000+ in self-tribute events",
    "Failed to report $160,000+ in cash on personal tax returns; claimed false charitable deduction",
    "Chief of Staff Simmons admitted placing a phantom employee on House payroll — over $735,000 in public salary for no known work (2001–2016)",
    "Convicted May 11, 2017 on 18 of 22 counts including mail/wire fraud conspiracy, concealing material facts on House financial disclosures, and filing false tax returns (M.D. Fla.)",
    "Sentenced December 4, 2017: 5 years in federal prison + $62,650 restitution to IRS + $654,292 forfeiture"
  ]'::jsonb,
  '[
    "CONVICTED — 18 COUNTS",
    "5 YEARS FEDERAL PRISON",
    "FAKE CHARITY FRAUD",
    "PHANTOM EMPLOYEE SCHEME"
  ]'::jsonb,
  E'Between 2012 and 2016, Brown, her Chief of Staff, and the president of a fraudulent charity solicited more than $800,000 in donations to "One Door for Education – Amy Anderson Scholarship Fund."\n\nOnly two scholarships totaling $1,200 were ever distributed.\n\nThe vast majority of funds financed Brown''s personal bank accounts (tens of thousands in direct cash transfers), a golf tournament, luxury box seats at a Beyonce concert, luxury box seats at an NFL game, a shopping trip to Beverly Hills, and over $300,000 in events hosted in Brown''s honor.\n\nBrown failed to report $160,000+ in cash on her personal tax returns and claimed false deductions for charitable donations she never made.\n\nSeparately, Chief of Staff Simmons admitted to placing a phantom congressional employee on the House payroll, resulting in over $735,000 in government salary paid between 2001 and 2016 for no known work.\n\nConvicted May 11, 2017 on 18 of 22 counts. Sentenced December 4, 2017: 5 years in federal prison + $62,650 restitution to IRS + $654,292 forfeiture.\n\nOriginal conviction overturned 2021; pleaded guilty 2022 to tax interference (sentenced to time served). Completed paying $62,650.99 IRS restitution by February 2025.\n\nCurrent Profession: No known public occupation. Former U.S. Representative (FL-5). Released from prison April 22, 2020 (COVID).\nApproximate Net Worth: Not publicly documented.\nCurrent Residence: Jacksonville, FL area.',
  '[
    {"name": "DOJ — Corrine Brown Guilty of Fraud Scheme Involving Bogus Non-Profit", "url": "https://www.justice.gov/archives/opa/pr/former-us-congresswoman-corrine-brown-guilty-fraud-scheme-involving-bogus-non-profit", "date": "2017-05-11"},
    {"name": "DOJ — Corrine Brown Sentenced for Fraud Scheme Involving Sham Charity", "url": "https://www.justice.gov/archives/opa/pr/former-us-congresswoman-corrine-brown-and-two-others-sentenced-prison-fraud-scheme-involving", "date": "2017-12-04"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;