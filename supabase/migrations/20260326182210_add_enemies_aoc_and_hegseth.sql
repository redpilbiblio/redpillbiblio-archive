/*
  # Add AOC and Pete Hegseth to Enemies of Truth

  1. New Entries
    - `Alexandria Ocasio-Cortez` — House Ethics Committee gift rule violation (Met Gala 2021). Severity: MEDIUM.
    - `Pete Hegseth` — Police report recommending DA review for sexual assault; $50K settlement. Severity: HIGH.

  2. Notes
    - AOC is a MEDIUM severity entry (minor gift-rule violation, small fine, no censure)
    - Hegseth is HIGH (official police report, settlement, sworn affidavits, but no criminal charges filed)
    - All sources are hyperlinked with URLs for dossier display
*/

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'ALEXANDRIA OCASIO-CORTEZ',
  'U.S. Representative, NY-14',
  'House Ethics Committee Gift Rule Violation — 2021 Met Gala',
  'MEDIUM',
  'The bipartisan House Ethics Committee issued House Report 119-219, adopted unanimously on July 22, 2025, finding that Rep. Ocasio-Cortez violated House ethics rules in connection with her attendance at the 2021 Met Gala. The Committee found she "impermissibly accepted gifts" — specifically a complimentary ticket valued at approximately $35,000 for her then-partner Riley Roberts, who at the time did not qualify under House rules. She also failed to pay full fair market value for a custom couture gown, accessories, hair, and makeup services. Payments to vendors were "significantly delayed and, in several cases, did not occur until after OCC initiated its investigation." Mitigating factors noted include no evidence of intentional underpayment, proactive effort to engage counsel, and cooperation producing 12,000+ pages of documents over a 3.5-year investigation. The ordered remedy is approximately $2,733.28 in additional vendor payments and a $250 donation to the Costume Institute. No censure, no criminal referral, no formal punishment.',
  '[
    "House Report 119-219 adopted unanimously July 22, 2025 — found she impermissibly accepted gifts",
    "Complimentary Met Gala ticket for partner Riley Roberts valued at ~$35,000 — not authorized under House rules for unmarried partners",
    "Failed to pay full fair market value for gown, accessories, hair, and makeup services from designers",
    "Payments to vendors were significantly delayed; some did not occur until after OCC initiated investigation",
    "Staff made efforts to minimize costs with vendors; a designer may have lowered costs in response to her staff statements",
    "Ordered to pay additional ~$2,733.28 to vendors and donate $250 to the Costume Institute; case then closed"
  ]'::jsonb,
  '[
    "ETHICS VIOLATION DOCUMENTED",
    "NO CRIMINAL CHARGES",
    "REMEDIAL PAYMENT ORDERED",
    "CASE CLOSED"
  ]'::jsonb,
  E'House Report 119-219, adopted unanimously July 22, 2025, found Rep. Ocasio-Cortez "impermissibly accepted gifts" in connection with her 2021 Met Gala attendance.\n\nThe Committee found a complimentary ticket for her then-partner Riley Roberts (valued ~$35,000) did not qualify under House rules, which at the time extended only to legally married spouses and dependent children.\n\nShe failed to pay full fair market value for a custom couture gown, accessories, hair, and makeup services. Payments were "significantly delayed and, in several cases, did not occur until after OCC initiated its investigation."\n\nStaff made efforts to "minimize costs" with vendors; a designer may have lowered costs in response to her staff''s statements.\n\nMitigating factors: no evidence of intentional underpayment, proactive counsel engagement before the event, cooperation producing 12,000+ pages of documents over 3.5-year investigation.\n\nOrdered remedy: ~$2,733.28 in additional vendor payments and $250 donation to the Costume Institute.\n\nNo censure. No criminal referral. No formal punishment beyond the remedial payment.\n\nCurrent Profession: U.S. Representative, NY-14 (Brooklyn/Queens). Salary $174,000/yr.\nApproximate Net Worth: ~$49,000–$125,000 (2024–2025 financial disclosures).\nCurrent Residence: New York City, NY (Navy Yard area, Brooklyn — rents); Washington, DC (rents).',
  '[
    {"name": "House Ethics Committee — Report 119-219", "url": "https://ethics.house.gov/committee-reports/in-the-matter-of-allegations-relating-to-representative-alexandria-ocasio-cortez/", "date": "2025-07-22"},
    {"name": "House Ethics Committee — Full PDF Report", "url": "https://ethics.house.gov/wp-content/uploads/2025/07/Committee-Report-20250725-Rep.-Ocasio-Cortez-1.pdf", "date": "2025-07-25"},
    {"name": "PolitiFact — AOC FEC Violations Fact Check", "url": "https://www.politifact.com/factchecks/2023/jun/23/facebook-posts/rep-alexandria-ocasio-cortez-isnt-facing-jail-for/", "date": "2023-06-23"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'PETE HEGSETH',
  'U.S. Secretary of Defense',
  'Police Report Recommending DA Review for Sexual Assault; $50,000 Settlement',
  'HIGH',
  'A formal law enforcement investigation was opened by the Monterey Police Department on October 12, 2017, after a woman sought a sexual assault examination at Kaiser Permanente following a conference event at which Hegseth was present. A 22-page police report was compiled and forwarded to the Monterey District Attorney with a potential criminal charge cited under California Penal Code §261(a)(4) — rape by intoxicant. The police report documented the accuser''s account that Hegseth took her cellphone, blocked her from leaving his hotel room, and that she said "no" multiple times. The Monterey DA declined to file charges in early 2018, citing insufficient evidence to meet the beyond-a-reasonable-doubt standard. In December 2020, Hegseth paid a $50,000 confidential settlement to the accuser — an amount he disclosed in written Senate confirmation responses. A separate whistleblower complaint described Hegseth presiding over a "toxic work environment for women" at Concerned Veterans for America, and a sworn affidavit from his former sister-in-law stated Hegseth''s second wife "feared for her personal safety" during their marriage.',
  '[
    "Official 22-page Monterey Police Department report (October 12, 2017) recommending DA review for potential California Penal Code §261(a)(4) violation",
    "Monterey DA declined to file charges in early 2018 — insufficient evidence, not a finding of innocence",
    "$50,000 confidential settlement paid to accuser in December 2020, disclosed by Hegseth in written Senate confirmation responses",
    "Hegseth attorney acknowledged settlement, characterizing it as protecting his Fox News career during the MeToo era",
    "Whistleblower complaint documented toxic work environment for women during his tenure as CEO of Concerned Veterans for America (2013–2016)",
    "Sworn affidavit by former sister-in-law Danielle Hegseth — second wife feared for her personal safety and had prearranged emergency code word system with family"
  ]'::jsonb,
  '[
    "NO CRIMINAL CHARGES FILED",
    "DA DECLINED PROSECUTION",
    "$50K SETTLEMENT CONFIRMED",
    "SENATE CONFIRMED AS SECDEF"
  ]'::jsonb,
  E'A formal law enforcement investigation was opened by the Monterey Police Department on October 12, 2017, after a woman sought a sexual assault examination at Kaiser Permanente.\n\nA 22-page police report was compiled and forwarded to the Monterey District Attorney citing potential California Penal Code §261(a)(4) — rape by intoxicant.\n\nThe report documented the accuser''s account that Hegseth took her cellphone, blocked her from leaving his hotel room, and that she said "no" multiple times.\n\nThe Monterey DA declined to file charges in early 2018, citing insufficient evidence to meet the beyond-a-reasonable-doubt standard. This is not a finding of innocence.\n\nIn December 2020, Hegseth paid a $50,000 confidential settlement — disclosed in written Senate confirmation responses.\n\nA separate whistleblower complaint described a "toxic work environment for women" during his tenure as CEO of Concerned Veterans for America (2013–2016).\n\nSworn affidavit from former sister-in-law Danielle Hegseth: second wife "feared for her personal safety" and had a prearranged emergency code word system with family.\n\nHegseth was confirmed as U.S. Secretary of Defense (January 25, 2025). His attorney disputes all characterizations of wrongdoing.\n\nCurrent Profession: U.S. Secretary of Defense. Salary $235,100/yr. Former Fox News host.\nApproximate Net Worth: ~$3 million combined with wife Jennifer (Forbes, February 2025).\nCurrent Residence: Goodlettsville, TN (77-acre estate).',
  '[
    {"name": "NPR — Police Report Details on Hegseth Sexual Assault Claim", "url": "https://www.npr.org/2024/11/21/nx-s1-5199630/police-report-gives-details-timeline-of-the-sexual-assault-claim-against-pete-hegseth", "date": "2024-11-21"},
    {"name": "CNN — Hegseth Police Report Details", "url": "https://www.cnn.com/2024/11/21/politics/pete-hegseth-police-report-defense-secretary-trump", "date": "2024-11-21"},
    {"name": "The 19th — Hegseth Settlement Amount", "url": "https://19thnews.org/2025/01/pete-hegseth-settlement-amount/", "date": "2025-01-01"},
    {"name": "NPR — New Allegations of Alcohol Abuse and Misconduct", "url": "https://www.npr.org/2025/01/22/nx-s1-5270033/pete-hegseth-faces-new-allegations-of-alcohol-abuse-and-misconduct", "date": "2025-01-22"},
    {"name": "The New Yorker — Hegseth Secret History (Jane Mayer)", "url": "https://www.newyorker.com/news/news-desk/pete-hegseths-secret-history", "date": "2024-12-01"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;