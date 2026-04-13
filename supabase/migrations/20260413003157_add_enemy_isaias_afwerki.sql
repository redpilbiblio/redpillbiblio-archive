/*
  # Add Isaias Afwerki to Enemies of Truth

  1. New Entry
    - `enemies_of_truth` — Isaias Afwerki
      - Severity: CRITICAL
      - Category: State Enslavement / Press Suppression / Crimes Against Humanity
      - Region: Horn of Africa — Eritrea
      - Status: Active. In power since 1993.
      - sort_order: 41
  2. Key allegations:
    - Enslavement of 300,000–400,000 through indefinite national service
    - 24+ year incommunicado detention of journalist Dawit Isaak without charge
    - Shoot-to-kill border policy
    - UN Commission of Inquiry finding of crimes against humanity (2016)
    - Zero elections, zero parliament sessions since 2002, zero press freedom
*/

INSERT INTO enemies_of_truth (
  id,
  name,
  title,
  subtitle,
  severity,
  summary,
  key_facts,
  status_tags,
  evidence_documented,
  sources,
  date_added,
  last_updated,
  created_at,
  footer_note,
  sort_order
) VALUES (
  gen_random_uuid(),
  'ISAIAS AFWERKI',
  'President of Eritrea | In Power Since 1993 — Only Leader Eritrea Has Ever Known',
  'UN Finding: Crimes Against Humanity | State Enslavement of 300,000–400,000 | Press Freedom: Last on Earth',
  'CRITICAL',
  'Isaias Afwerki (born February 2, 1946, Asmara) is the only president Eritrea has ever known. He led the Eritrean People''s Liberation Front (EPLF) to independence from Ethiopia in 1991. When Eritrea officially declared independence in 1993, the National Assembly elected him president — a position he has held, unchallengeable and unelected since, for over 30 years. He chairs the People''s Front for Democracy and Justice (PFDJ), Eritrea''s sole legal political party. In June 2016, the UN Commission of Inquiry on Human Rights in Eritrea formally concluded that crimes against humanity have been committed in Eritrea since 1991, including enslavement, imprisonment, enforced disappearances, torture, persecution, rape, and murder. The Commission estimated 300,000 to 400,000 people have been enslaved through Eritrea''s indefinite national service system. Reporters Without Borders ranked Eritrea 180th out of 180 countries — dead last on Earth — in both 2024 and 2025. Swedish-Eritrean journalist Dawit Isaak has been held incommunicado without charge for 24+ years, making him the longest-continuously-detained journalist in the world. The UN recommended ICC referral; it has never been executed. No elections have ever been held. Parliament has not convened since 2002. The ratified constitution has never been implemented. An estimated one-third of Eritrea''s population has fled the country.',
  '[
    "In power since 1993 — 33 years as of 2026 — the only president Eritrea has ever known; zero elections held",
    "UN Commission of Inquiry (2016): estimated 300,000–400,000 people enslaved through indefinite ''national service'' — Commission chair Mike Smith stated plainly: ''We probably think there are 300,000 to 400,000 people who have been enslaved''",
    "National service nominally 18 months; since 1998 state of emergency, extended indefinitely — conscripts serve years to decades with no release criteria, no pay, no recourse",
    "Conscripts forced into construction, agriculture, mining, domestic servitude, and commercial sexual exploitation (documented by UN investigators)",
    "Female conscripts subject to same indefinite service; regularly subjected to sexual and gender-based violence per UN special rapporteur",
    "Shoot-to-kill border policy announced 2004 — never abolished; escapees interviewed in 2018 reported being shot, losing limbs; former border guards confirmed receiving direct orders to shoot fleeing citizens",
    "Dawit Isaak — Swedish-Eritrean journalist and co-owner of Setit, Eritrea''s first independent newspaper — arrested September 23, 2001; held incommunicado for 24+ years without charge or trial; recognized by CPJ, PEN America, RSF, and Amnesty International as the longest-continuously-detained journalist in the world",
    "September 2001 crackdown: 11 G-15 senior officials arrested for demanding democratic reforms + ~10 independent journalists; none ever charged; 9 reported dead in custody; 3 journalists confirmed died at Eiraeiro prison camp",
    "Dawit Isaak reportedly hospitalized due to torture in April 2002; briefly released November 2005 for medical reasons — rearrested two days later en route to hospital",
    "Eritrea ratified a constitution in 1997 — Afwerki never implemented it; scheduled 1997 elections postponed indefinitely; 150-member Parliament has not convened since 2002",
    "No independent judiciary, no national assembly, no democratic institutions — UN Commission: ''This has created a governance and rule of law vacuum, resulting in a climate of impunity for crimes against humanity to be perpetrated over a quarter of a century''",
    "Secret prison network: underground cells and unventilated metal shipping containers in desert; facilities include Eiraeiro, Adi Abeito, Wi''a, Alla, Dahlak Kebir island; 10,000+ political prisoners estimated held without charge",
    "Press Freedom: Eritrea ranked 180/180 (dead last — below North Korea) by RSF in both 2024 and 2025; zero independent media outlets; foreign journalists banned",
    "Estimated one-third of Eritrea''s ~6 million born population lives outside the country; 683,000+ registered refugees and asylum seekers (UNHCR 2024); 71,600 asylum applications in 2023 alone",
    "At peak, 5,000 Eritreans fleeing per month; UN special rapporteur confirmed 2,000–3,000 monthly border crossings despite shoot-to-kill policy",
    "UN Commission of Inquiry (2016) recommended Security Council refer Eritrea to the ICC — referral has never been executed; Eritrea is not a party to the Rome Statute",
    "2024: Dawit Isaak named laureate of Edelstam Prize; October 2025: Edelstam Foundation, Raoul Wallenberg Centre, and Global Liberty Alliance issued joint demand for his release; Swedish FM demanded release — Eritrea showed no compliance",
    "As of April 2026: zero accountability — no senior Eritrean official has faced any form of international criminal prosecution"
  ]'::jsonb,
  '[
    "IN POWER SINCE 1993 — 33 YEARS",
    "UN FINDING: CRIMES AGAINST HUMANITY",
    "STATE ENSLAVEMENT — 300K–400K PEOPLE",
    "SHOOT-TO-KILL BORDER POLICY — ACTIVE",
    "PRESS FREEDOM: 180/180 — LAST ON EARTH",
    "DAWIT ISAAK — 24+ YEARS WITHOUT CHARGE",
    "ZERO ELECTIONS HELD — EVER",
    "PARLIAMENT NOT CONVENED SINCE 2002",
    "CONSTITUTION RATIFIED — NEVER IMPLEMENTED",
    "ICC REFERRAL RECOMMENDED — NEVER EXECUTED"
  ]'::jsonb,
  'The UN Commission of Inquiry on Human Rights in Eritrea conducted a comprehensive, multi-year investigation culminating in reports in 2015 and 2016. The 2016 report formally concluded: "There are reasonable grounds to believe that crimes against humanity have been committed in Eritrea since 1991," including enslavement, imprisonment, enforced disappearances, torture, persecution, rape, murder, and other inhumane acts. Commission chair Mike Smith stated that an estimated 300,000 to 400,000 people have been enslaved through the national service system. Legal scholars at Seton Hall Law Review and Lund University have examined the conscription system and concluded the government exercises "powers attaching to the right of ownership" over conscripts — constituting slavery under international law. The government evicts families, confiscates livestock, and renders households homeless to force compliance. The UN special rapporteur documented a shoot-to-kill policy targeting those attempting to flee, confirmed by former border guards and wounded escapees. Reporters Without Borders ranked Eritrea 180/180 in 2024 and 2025. CPJ, PEN America, RSF, and Amnesty International all confirm Dawit Isaak as the longest-continuously-detained journalist in the world — arrested September 23, 2001, held incommunicado for 24+ years without charge or trial. UNHCR counted 683,000+ Eritrean refugees and asylum seekers as of 2024. The UN Commission recommended Security Council referral to the ICC; as of April 2026, no referral has been executed and no senior official has faced international criminal accountability.',
  '[
    {"url": "https://www.ohchr.org/en/hr-bodies/hrc/co-i-eritrea/report-co-i-eritrea", "date": "2016-06-08", "name": "UN Commission of Inquiry on Human Rights in Eritrea — Final Report (2016)"},
    {"url": "https://www.ohchr.org/en/hr-bodies/hrc/co-i-eritrea/report-co-i-eritrea", "date": "2015-06-08", "name": "UN Commission of Inquiry on Human Rights in Eritrea — Report (2015)"},
    {"url": "https://www.hrw.org/world-report/2025/country-chapters/eritrea", "date": "2025-01-01", "name": "Human Rights Watch — World Report 2025: Eritrea"},
    {"url": "https://www.amnesty.org/en/location/africa/east-africa-the-horn-and-great-lakes/eritrea/", "date": "2025-01-01", "name": "Amnesty International — Eritrea Country Profile"},
    {"url": "https://cpj.org/data/people/dawit-isaak/", "date": "2025-01-01", "name": "Committee to Protect Journalists — Dawit Isaak Profile"},
    {"url": "https://rsf.org/en/country/eritrea", "date": "2025-01-01", "name": "Reporters Without Borders — Eritrea Press Freedom Index 2024 & 2025 (180/180)"},
    {"url": "https://pen.org/advocacy-case/dawit-isaak/", "date": "2025-01-01", "name": "PEN America — Dawit Isaak Case"},
    {"url": "https://www.unhcr.org/refugee-statistics/", "date": "2024-01-01", "name": "UNHCR — Eritrean Refugee Statistics (683,000+ as of 2024)"},
    {"url": "https://www.migrationpolicy.org/article/eritrea-migration", "date": "2024-01-01", "name": "Migration Policy Institute — Eritrea Migration Profile"},
    {"url": "https://edelstam.org/the-edelstam-prize/edelstam-prize-2024/", "date": "2024-10-01", "name": "Edelstam Foundation — Dawit Isaak Named 2024 Laureate"},
    {"url": "https://scholarship.shu.edu/shlr/", "date": "2020-01-01", "name": "Seton Hall Law Review — Legal Analysis of Eritrean Conscription as Slavery"},
    {"url": "https://www.bbc.com/news/world-africa-13349078", "date": "2025-01-01", "name": "BBC News — Eritrea Country Profile"},
    {"url": "https://www.pbs.org/wgbh/frontline/", "date": "2020-01-01", "name": "PBS Frontline — Eritrea Coverage"}
  ]'::jsonb,
  now(),
  now(),
  now(),
  'Isaias Afwerki remains in power as of April 2026. No elections have ever been held. The UN Commission of Inquiry recommended ICC referral in 2016 — it has never been executed. Eritrea is not a state-party to the Rome Statute. Dawit Isaak remains imprisoned after 24+ years without charge. An estimated one-third of Eritrea''s population has fled. The international community''s most authoritative human rights body''s formal recommendation has produced no accountability. Afwerki''s longest-running instrument of control is not the gun — it is the erasure of the very concept that accountability is possible.',
  41
)
ON CONFLICT DO NOTHING;