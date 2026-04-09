/*
  # Add DOD/Military Entries: Fat Leonard, Gilbeau, Cockerham, Petraeus, Ward

  1. New Entries
    - `Leonard Glenn "Fat Leonard" Francis` — Largest Navy bribery scandal; $35M defrauded; 15 years prison. Severity: CRITICAL.
    - `Rear Admiral Robert Gilbeau` — Fat Leonard scandal; prostitutes, kickbacks; 18 months prison. Severity: CRITICAL.
    - `Major John L. Cockerham` — $9.6M Iraq War contracting bribes; 17.5 years prison. Severity: CRITICAL.
    - `General David Petraeus` — CIA Director; shared Top Secret/SCI classified info with mistress; $100K fine. Severity: HIGH.
    - `General William "Kip" Ward` — AFRICOM Commander; lavish travel, misuse of military resources; demoted 4-star to 3-star; $82K repayment. Severity: HIGH.

  2. Notes
    - Fat Leonard is the largest bribery scandal in U.S. Navy history
    - Gilbeau was the first active-duty admiral convicted of federal crime
    - Cockerham was Army major during Iraq War contracting boom
    - Petraeus received presidential pardon/reduction despite serious crimes
    - Ward represents administrative/leadership misconduct at highest levels
*/

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'LEONARD GLENN "FAT LEONARD" FRANCIS',
  'CEO, Glenn Defense Marine Asia',
  'Largest Bribery Scandal in U.S. Navy History — $35M Defrauded, 34 Convictions; 15 Years Federal Prison',
  'CRITICAL',
  'Leonard Glenn Francis, CEO of Glenn Defense Marine Asia (GDMA), orchestrated the largest bribery and corruption investigation in the history of the United States Navy. GDMA supplied food, water, fuel, and port services to U.S. Navy vessels across Asia, and Francis exploited this relationship over a decade by bribing Navy officers with cash, prostitutes, luxury hotel stays, Kobe beef, $2,000 boxes of Cuban cigars, spa treatments, and lavish multi-day parties — in exchange for classified ship movement schedules, proprietary competitor bid information, and obstruction of fraud investigations. The scheme enabled Francis to overbill the Navy by at least $35 million. After pleading guilty in January 2015, Francis fled house arrest in September 2022 by cutting off his ankle monitor, was captured in Venezuela, and extradited in December 2023 in a prisoner exchange. On November 5, 2024, he was sentenced to 15 years in federal prison (164 months for bribery and fraud plus 16 months for failure to appear, consecutive), ordered to pay $20 million in restitution to the Navy, and forfeit $35 million.',
  '[
    "Pleaded guilty January 2015 to bribery, conspiracy to commit bribery, and conspiracy to defraud the United States",
    "Admitted to bribing officers with $500,000+ in cash plus millions more in gifts and services including prostitutes, luxury trips, and $2,000 boxes of Cuban cigars",
    "Defrauded the Navy of at least $35 million through overbilling",
    "34 total criminal convictions resulted from the investigation; 600 additional individuals referred for administrative action",
    "Fled house arrest September 2022, captured in Venezuela, extradited December 2023 via prisoner exchange",
    "Sentenced November 5, 2024: 15 years prison (164 months bribery/fraud + 16 months failure to appear, consecutive); $20 million restitution; $35 million forfeiture; GDMA corporation: $36 million fine, 5 years probation (Cases 13-CR-3781, 13-CR-3782, 13-CR-4287, S.D. Cal.)",
    "Appeal denied by 9th Circuit Court of Appeals, December 18–19, 2025"
  ]'::jsonb,
  '[
    "LARGEST NAVY BRIBERY SCANDAL",
    "34 CONVICTIONS TOTAL",
    "$35M NAVY FRAUD",
    "15 YEARS FEDERAL PRISON"
  ]'::jsonb,
  E'Leonard Glenn Francis was CEO of Glenn Defense Marine Asia (GDMA), which supplied food, water, fuel, and port services to U.S. Navy vessels across Asia.\n\nOvera period of a decade, Francis exploited this relationship to orchestrate the largest bribery and corruption investigation in the history of the United States Navy.\n\nBRIBES PROVIDED TO NAVY OFFICERS:\n- Cash (totaling $500,000+)\n- Prostitutes ("two at a time" per preferences noted)\n- Luxury hotel stays\n- Kobe beef\n- $2,000 boxes of Cuban cigars\n- Spa treatments\n- Lavish multi-day parties\n\nQUID PRO QUO:\n- Classified ship movement schedules\n- Proprietary competitor bid information\n- Obstruction of fraud investigations\n\nFRAUD SCHEME:\nThe bribery enabled Francis to overbill the Navy by at least $35 million.\n\nCRIMINAL CONSEQUENCES:\n- 34 total criminal convictions resulted from the investigation\n- 600 additional individuals were referred for administrative action\n\nFRANCIS'' CASE:\nPleaded guilty January 2015 to:\n- Bribery\n- Conspiracy to commit bribery\n- Conspiracy to defraud the United States\n\nFled house arrest in September 2022 by cutting off his ankle monitor. Captured in Venezuela. Extradited to the United States in December 2023 via a prisoner exchange.\n\nSentenced November 5, 2024:\n- 15 years in federal prison (164 months for bribery and fraud + 16 months for failure to appear, consecutive)\n- $20 million in restitution to the Navy\n- $35 million forfeiture\n- GDMA corporation: $36 million fine + 5 years probation\n- Cases: 13-CR-3781, 13-CR-3782, 13-CR-4287 (S.D. Cal.)\n\nAppeal denied by 9th Circuit Court of Appeals, December 18–19, 2025.\n\nCurrent Profession: Incarcerated — serving 15-year federal prison sentence. Sentenced November 5, 2024.\nApproximate Net Worth: Not publicly documented (assets substantially forfeited; bribes totaled ~$35 million in prostitutes, luxury travel, and cash to Navy officers).\nCurrent Residence: Federal prison (facility not publicly disclosed as of March 2026).',
  '[
    {"name": "DOJ — Leonard Glenn Francis Sentenced to 15 Years for Massive Bribery Fraud", "url": "https://www.justice.gov/usao-sdca/pr/leonard-glenn-francis-sentenced-15-years-prison-massive-bribery-fraud-and", "date": "2024-11-05"},
    {"name": "Navy Times — Fat Leonard Navy Scandal Mastermind Sentenced to 15 Years", "url": "https://www.navytimes.com/news/your-navy/2024/11/05/fat-leonard-navy-scandal-mastermind-sentenced-15-years/", "date": "2024-11-05"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'REAR ADMIRAL ROBERT GILBEAU',
  'Special Assistant to Chief of Navy Supply Corps',
  'First Active-Duty Admiral Convicted of Federal Crime; Fat Leonard Scandal; 18 Months Federal Prison',
  'CRITICAL',
  'Rear Admiral Robert Gilbeau was a Special Assistant to the Chief of the Navy Supply Corps. His relationship with Leonard Francis began in 1997 and extended for nearly two decades, during which he accepted prostitutes provided "two at a time" to suit his preferences, luxury hotel stays, lavish karaoke bar dinners, and cash kickbacks of approximately $40,000. After Francis''s arrest in 2013, Gilbeau systematically destroyed documents and deleted computer files. When interviewed by DCIS and NCIS agents, he falsely stated he had never received any gifts from Francis and that he always split the check. He is notable as the first active-duty admiral in U.S. history to be convicted of a federal crime. He pleaded guilty in June 2016 to making a false official statement, was reduced from Rear Admiral to Captain upon retirement in September 2016, and was sentenced May 17, 2017 to 18 months in federal prison, a $100,000 fine, $50,000 in restitution, and 300 hours of community service.',
  '[
    "Accepted prostitutes, luxury hotel stays, lavish dinners, and approximately $40,000 in cash kickbacks from defense contractor Leonard Francis over nearly two decades (1997–2013)",
    "After Francis''s September 2013 arrest, systematically destroyed documents and deleted computer files",
    "Lied to DCIS and NCIS investigators, falsely denying any gift relationship with Francis",
    "First active-duty admiral in U.S. history to be convicted of a federal crime",
    "Pleaded guilty June 2016 to making a false official statement (18 U.S.C. § 1001)",
    "Sentenced May 17, 2017: 18 months federal prison; $100,000 fine; $50,000 restitution; 300 hours community service; 3 years probation",
    "Reduced from Rear Admiral to Captain upon retirement September 2016"
  ]'::jsonb,
  '[
    "FIRST ACTIVE-DUTY ADMIRAL CONVICTED",
    "GUILTY PLEA — FALSE STATEMENTS",
    "18 MONTHS FEDERAL PRISON",
    "FAT LEONARD SCANDAL"
  ]'::jsonb,
  E'Rear Admiral Robert Gilbeau was a Special Assistant to the Chief of the Navy Supply Corps.\n\nHis relationship with defense contractor Leonard Francis began in 1997 and extended for nearly two decades.\n\nBRIBES AND CORRUPT BENEFITS:\n- Prostitutes (provided "two at a time" per his preferences)\n- Luxury hotel stays\n- Lavish karaoke bar dinners\n- Cash kickbacks of approximately $40,000\n\nOBSTRUCTION OF JUSTICE:\nAfter Francis''s arrest in September 2013, Gilbeau systematically destroyed documents and deleted computer files.\n\nFALSE STATEMENTS TO INVESTIGATORS:\nWhen interviewed by DCIS (Defense Counterintelligence and Security Agency) and NCIS (Naval Criminal Investigative Service) agents, Gilbeau falsely stated:\n- He had never received any gifts from Francis\n- He always split the check with Francis\n\nHISTORIC SIGNIFICANCE:\nGilbeau is the first active-duty admiral in U.S. history to be convicted of a federal crime.\n\nCONVICTION AND SENTENCING:\nPleaded guilty June 2016 to making a false official statement (18 U.S.C. § 1001).\n\nSentenced May 17, 2017:\n- 18 months in federal prison\n- $100,000 fine\n- $50,000 in restitution\n- 300 hours of community service\n- 3 years of probation\n\nDemoted from Rear Admiral to Captain upon retirement in September 2016.\n\nCurrent Profession: Status unknown — likely retired from military service following demotion and conviction.\nApproximate Net Worth: Not publicly documented (forfeited assets; ordered to pay $50K restitution).\nCurrent Residence: Unknown — not publicly disclosed.',
  '[
    {"name": "NPR — U.S. Rear Admiral Pleads Guilty in Fat Leonard Navy Bribery and Fraud Case", "url": "https://www.npr.org/sections/thetwo-way/2016/06/09/481475338/u-s-rear-admiral-pleads-guilty-in-fat-leonard-navy-bribery-and-fraud-case", "date": "2016-06-09"},
    {"name": "Navy Times — US Navy Admiral Sentenced to 18 Months in Fat Leonard Bribery Scandal", "url": "https://www.navytimes.com/news/your-navy/2017/05/17/us-navy-admiral-sentenced-to-18-months-in-fat-leonard-bribery-scandal/", "date": "2017-05-17"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'MAJOR JOHN L. COCKERHAM',
  'U.S. Army Contracting Official',
  '$9.6 Million in Iraq War Contracting Bribes; 17.5 Years in Federal Prison',
  'CRITICAL',
  'Major John Cockerham was a U.S. Army contracting official at Camp Arifjan, Kuwait, during the height of the Iraq War contracting effort in 2004–2005. He accepted more than $9.6 million in bribes from defense contractors in exchange for awarding them U.S. Army contracts. His wife Melissa and sister helped facilitate the scheme by opening offshore bank accounts in the Cayman Islands and Dubai to receive wire transfers of bribe money, and by creating sham consulting invoices to disguise the payments as legitimate business income. Cockerham pleaded guilty January 31, 2008 to one count each of conspiracy, bribery, and conspiracy to commit money laundering, and was sentenced December 2, 2009 to 210 months (17.5 years) in federal prison and ordered to pay $9.6 million in restitution. He remained confined through approximately July 2024.',
  '[
    "Accepted more than $9.6 million in bribes from defense contractors in exchange for awarding U.S. Army contracts at Camp Arifjan, Kuwait (2004–2005)",
    "Wife Melissa and sister opened offshore accounts in the Cayman Islands and Dubai to receive bribe wire transfers",
    "Sham consulting invoices used to disguise bribe payments as legitimate income",
    "Pleaded guilty January 31, 2008 to conspiracy, bribery, and conspiracy to commit money laundering",
    "Sentenced December 2, 2009: 210 months (17.5 years) in federal prison; $9.6 million in restitution",
    "Remained confined through approximately July 2024"
  ]'::jsonb,
  '[
    "IRAQ WAR CONTRACTING FRAUD",
    "$9.6M IN BRIBES",
    "17.5 YEARS FEDERAL PRISON",
    "OFFSHORE MONEY LAUNDERING"
  ]'::jsonb,
  E'Major John L. Cockerham was a U.S. Army contracting official stationed at Camp Arifjan, Kuwait, during the height of the Iraq War contracting effort in 2004–2005.\n\nBRIBE SCHEME:\nCockerham accepted more than $9.6 million in bribes from defense contractors in exchange for awarding them U.S. Army contracts.\n\nMONEY LAUNDERING:\nHis wife Melissa and sister helped facilitate the scheme by:\n- Opening offshore bank accounts in the Cayman Islands and Dubai to receive wire transfers of bribe money\n- Creating sham consulting invoices to disguise the payments as legitimate business income\n\nCRIMINAL CHARGES AND SENTENCE:\nPleaded guilty January 31, 2008 to:\n- Conspiracy\n- Bribery\n- Conspiracy to commit money laundering\n\nSentenced December 2, 2009:\n- 210 months (17.5 years) in federal prison\n- $9.6 million in restitution\n\nRemained confined through approximately July 2024 (if full sentence was served without reduction).\n\nCurrent Profession: Status unknown — likely incarcerated or recently released from federal prison. Sentenced December 2, 2009; if full sentence, would be released approximately mid-2027.\nApproximate Net Worth: Not publicly documented (forfeited assets; ordered to repay $9.6 million in restitution).\nCurrent Residence: In federal prison or recently released (exact facility/status not confirmed).',
  '[
    {"name": "DOJ — Army Officer, Wife, and Relatives Sentenced for Bribery and Money Laundering Scheme", "url": "https://www.justice.gov/archives/opa/pr/army-officer-wife-and-relatives-sentenced-bribery-and-money-laundering-scheme-related-dod", "date": "2009-12-02"},
    {"name": "U.S. Army — Former Major Sentenced to Prison for Bribery, Money Laundering", "url": "https://www.army.mil/article/71735/former_major_sentenced_to_prison_for_bribery_money_laundering", "date": "2009-12-02"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;