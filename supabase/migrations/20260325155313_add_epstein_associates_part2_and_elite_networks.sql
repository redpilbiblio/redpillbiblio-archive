/*
  # Add Epstein Network Associates Part 2 and Elite Network Documents

  1. New Documents (7 Epstein associates)
    - Prince Andrew: Duke of York and Epstein Royal Network
    - Bill Gates: Microsoft Co-Founder and Epstein Philanthropy Network
    - Jean-Luc Brunel: French Modeling Agent and Epstein Trafficking Network
    - Ehud Barak: Former Israeli Prime Minister and Epstein Political/Intelligence Network
    - Glenn Dubin: Hedge-Fund Billionaire and Epstein Financial Network
    - Les Wexner: Victoria's Secret / L Brands Billionaire and Epstein Financial Network
    - Leon Black: Apollo Global Management Co-Founder and Epstein Payment Network

  2. All items categorized under "Child Safety & Human Trafficking" document type
     with appropriate pillar and category metadata

  3. No security changes - existing RLS policies apply
*/

INSERT INTO documents (title, description, content, source_url, verification_tier, document_type, date_published, slug, metadata)
VALUES
(
  'Prince Andrew — Duke of York and Epstein Royal Network',
  'The Prince Andrew archive entry centers on Andrew, Duke of York (formerly Prince Andrew), and his documented relationship with Jeffrey Epstein and Ghislaine Maxwell. Virginia Giuffre filed a civil lawsuit against Prince Andrew in 2021 alleging sexual abuse when she was underage. The case was settled out of court in 2022 with Prince Andrew paying an undisclosed sum to Giuffre. Court documents, flight logs, and witness testimony from the Epstein/Maxwell cases place Prince Andrew in Epstein''s circle, including visits to Epstein properties and social events.',
  E'Documented Evidence Includes:\n\n• Virginia Giuffre v. Prince Andrew civil complaint and settlement agreement.\n• Flight logs showing Prince Andrew on Epstein''s aircraft.\n• Witness depositions (including Johanna Sjoberg) describing encounters at Epstein''s New York residence.\n• Photographs released in Epstein files showing Prince Andrew with Giuffre and Maxwell.\n• 2025–2026 DOJ Epstein Files releases containing additional correspondence and references.\n\nThese materials provide primary documentation of royal elite connections to the Epstein network and institutional responses. Significant portions remain redacted.\n\nThe full searchable archive is publicly hosted by the Department of Justice at justice.gov/epstein and is updated as additional materials are identified.\n\nPrimary Sources (MLA Format)\n\nUnited States. Department of Justice. Epstein Library. www.justice.gov/epstein. Accessed 24 Mar. 2026.\n\nGiuffre v. Andrew. United States District Court, Southern District of New York, 21-cv-06702. Settlement filed 2022.\n\nUnited States. Department of Justice. "Department of Justice Publishes 3.5 Million Responsive Pages in Compliance with the Epstein Files Transparency Act." 30 Jan. 2026.',
  'https://www.justice.gov/epstein',
  'verified',
  'Child Safety & Human Trafficking',
  '2026-03-24',
  'prince-andrew-epstein-royal-network',
  '{"pillar": "Child Safety & Trafficking", "category": "Epstein Network Associates", "tags": ["Prince Andrew", "Duke of York", "Epstein", "Virginia Giuffre", "Ghislaine Maxwell", "royal connections", "DOJ", "flight logs"], "importance": "PURE_GOLD", "sources": [{"title": "DOJ Epstein Library", "url": "https://www.justice.gov/epstein", "type": "primary_source"}, {"title": "Giuffre v. Andrew, 21-cv-06702", "url": "", "type": "court_filing"}, {"title": "DOJ 3.5 Million Pages Release", "url": "https://www.justice.gov/opa/pr/department-justice-publishes-35-million-responsive-pages-compliance-epstein-files", "type": "primary_source"}]}'::jsonb
),
(
  'Bill Gates — Microsoft Co-Founder and Epstein Philanthropy Network',
  'The Bill Gates archive entry centers on Microsoft co-founder Bill Gates and his documented post-conviction relationship with Jeffrey Epstein. Multiple meetings, emails, calendar entries, and photographs in the 2025–2026 DOJ Epstein Files releases show Gates met with Epstein on numerous occasions between 2011 and 2014 for discussions on philanthropy. Gates has publicly acknowledged the meetings as a mistake.',
  E'Documented Evidence Includes:\n\n• Emails and calendar entries scheduling dinners and meetings with Epstein (2011–2014).\n• Photographs of Gates with Epstein released in the DOJ archive.\n• Internal Epstein emails referencing Gates and proposed philanthropic projects.\n• Gates'' public statements and foundation responses acknowledging the relationship.\n\nThese materials provide primary documentation of global tech/philanthropy elite ties to the Epstein network.\n\nThe full searchable archive is publicly hosted by the Department of Justice at justice.gov/epstein and is updated as additional materials are identified.\n\nPrimary Sources (MLA Format)\n\nUnited States. Department of Justice. Epstein Library. www.justice.gov/epstein. Accessed 24 Mar. 2026.\n\nUnited States. Department of Justice. "Department of Justice Publishes 3.5 Million Responsive Pages in Compliance with the Epstein Files Transparency Act." 30 Jan. 2026.',
  'https://www.justice.gov/epstein',
  'verified',
  'Child Safety & Human Trafficking',
  '2026-03-24',
  'bill-gates-epstein-philanthropy-network',
  '{"pillar": "Child Safety & Trafficking", "category": "Epstein Network Associates", "tags": ["Bill Gates", "Microsoft", "Epstein", "philanthropy", "DOJ", "tech connections"], "importance": "PURE_GOLD", "sources": [{"title": "DOJ Epstein Library", "url": "https://www.justice.gov/epstein", "type": "primary_source"}, {"title": "DOJ 3.5 Million Pages Release", "url": "https://www.justice.gov/opa/pr/department-justice-publishes-35-million-responsive-pages-compliance-epstein-files", "type": "primary_source"}]}'::jsonb
),
(
  'Jean-Luc Brunel — French Modeling Agent and Epstein Trafficking Network',
  'The Jean-Luc Brunel archive entry centers on the French modeling agent and his documented role as a close associate of Jeffrey Epstein. Brunel was charged in France with rape of minors and supplying girls to Epstein. He was listed as a co-conspirator in FBI documents released in 2026. Brunel died by suicide in French custody in 2022 while awaiting trial.',
  E'Documented Evidence Includes:\n\n• French court charging documents for rape and trafficking.\n• Flight logs showing dozens of flights with Epstein.\n• Victim statements in U.S. v. Maxwell and Giuffre filings.\n• 2019 FBI memorandum listing Brunel as co-conspirator (unredacted in 2026 releases).\n\nThese materials provide primary documentation of international modeling/trafficking elite operations linked to the Epstein network.\n\nThe full searchable archive is publicly hosted by the Department of Justice at justice.gov/epstein and is updated as additional materials are identified.\n\nPrimary Sources (MLA Format)\n\nUnited States. Department of Justice. Epstein Library. www.justice.gov/epstein. Accessed 24 Mar. 2026.\n\nUnited States v. Maxwell. United States District Court, Southern District of New York, 20 Cr. 330 (trial exhibits).',
  'https://www.justice.gov/epstein',
  'verified',
  'Child Safety & Human Trafficking',
  '2026-03-24',
  'jean-luc-brunel-epstein-trafficking-network',
  '{"pillar": "Child Safety & Trafficking", "category": "Epstein Network Associates", "tags": ["Jean-Luc Brunel", "modeling", "trafficking", "Epstein", "France", "FBI co-conspirator", "DOJ"], "importance": "PURE_GOLD", "sources": [{"title": "DOJ Epstein Library", "url": "https://www.justice.gov/epstein", "type": "primary_source"}, {"title": "U.S. v. Maxwell, 20 Cr. 330", "url": "", "type": "court_filing"}]}'::jsonb
),
(
  'Ehud Barak — Former Israeli Prime Minister and Epstein Political/Intelligence Network',
  'The Ehud Barak archive entry centers on former Israeli Prime Minister Ehud Barak and his documented long-term relationship with Jeffrey Epstein. Released Epstein Files show extensive emails and multiple stays at Epstein''s New York residence between 2013 and 2017, even after Epstein''s conviction.',
  E'Documented Evidence Includes:\n\n• Emails between Barak and Epstein planning visits and correspondence.\n• Records of Barak and his wife staying at Epstein''s Manhattan townhouse.\n• 2025–2026 DOJ releases containing additional communications.\n\nThese materials provide primary documentation of high-level international political and intelligence elite connections to the Epstein network.\n\nThe full searchable archive is publicly hosted by the Department of Justice at justice.gov/epstein and is updated as additional materials are identified.\n\nPrimary Sources (MLA Format)\n\nUnited States. Department of Justice. Epstein Library. www.justice.gov/epstein. Accessed 24 Mar. 2026.',
  'https://www.justice.gov/epstein',
  'verified',
  'Child Safety & Human Trafficking',
  '2026-03-24',
  'ehud-barak-epstein-political-intelligence-network',
  '{"pillar": "Child Safety & Trafficking", "category": "Epstein Network Associates", "tags": ["Ehud Barak", "Israel", "Epstein", "political connections", "intelligence", "DOJ"], "importance": "GOLD", "sources": [{"title": "DOJ Epstein Library", "url": "https://www.justice.gov/epstein", "type": "primary_source"}]}'::jsonb
),
(
  'Glenn Dubin — Hedge-Fund Billionaire and Epstein Financial Network',
  'The Glenn Dubin archive entry centers on hedge-fund billionaire Glenn Dubin and allegations in court filings concerning his connection to the Epstein network. Virginia Giuffre''s deposition in Giuffre v. Maxwell names Dubin as one of the men she was directed to have sex with. Dubin has denied the allegations.',
  E'Documented Evidence Includes:\n\n• Virginia Giuffre deposition testimony in Giuffre v. Maxwell.\n• References in unsealed Epstein/Maxwell court documents.\n• Social and financial ties documented in Epstein files and flight records.\n\nThese materials provide primary documentation of global finance elite ties to the Epstein network.\n\nThe full searchable archive is publicly hosted by the Department of Justice at justice.gov/epstein and is updated as additional materials are identified.\n\nPrimary Sources (MLA Format)\n\nUnited States. Department of Justice. Epstein Library. www.justice.gov/epstein. Accessed 24 Mar. 2026.\n\nGiuffre v. Maxwell. United States District Court, Southern District of New York, 15-cv-07433 (deposition transcripts).',
  'https://www.justice.gov/epstein',
  'verified',
  'Child Safety & Human Trafficking',
  '2026-03-24',
  'glenn-dubin-epstein-financial-network',
  '{"pillar": "Child Safety & Trafficking", "category": "Epstein Network Associates", "tags": ["Glenn Dubin", "hedge fund", "Epstein", "Giuffre", "financial connections", "DOJ"], "importance": "GOLD", "sources": [{"title": "DOJ Epstein Library", "url": "https://www.justice.gov/epstein", "type": "primary_source"}, {"title": "Giuffre v. Maxwell, 15-cv-07433", "url": "", "type": "court_filing"}]}'::jsonb
),
(
  'Les Wexner — Victoria''s Secret / L Brands Billionaire and Epstein Financial Network',
  'The Les Wexner archive entry centers on Leslie H. Wexner, founder of L Brands and Victoria''s Secret, and his decades-long documented financial and operational relationship with Jeffrey Epstein. In 1991, Wexner granted Epstein full power of attorney over his personal finances, philanthropy, and private affairs. Epstein was later identified as a co-conspirator in a 2019 FBI investigative document (unredacted in the 2025–2026 Epstein Files releases). Wexner provided background information to federal prosecutors and has been deposed by the U.S. House Oversight Committee (February 18, 2026) regarding these ties.',
  E'Documented Evidence Includes:\n\n• 1991 power-of-attorney agreement giving Epstein authority to borrow money, sign tax returns, hire personnel, and acquire assets on Wexner''s behalf.\n• Property transfers including a New York mansion, private plane, and Ohio estate (collectively valued at approximately $100 million) previously owned by Wexner or his companies.\n• 2019 FBI memorandum labeling Wexner a co-conspirator and detailing limited evidence of involvement in Epstein''s activities.\n• 2026 House Oversight Committee deposition transcripts and related FBI memos concerning financial dealings and Epstein''s role as Wexner''s primary money manager.\n• Investigative records noting Epstein maintained near-total control over Wexner''s assets with virtually no oversight.\n\nSignificant portions of the Epstein Files releases remain redacted for victim protection, and not all responsive pages have been produced. These primary materials provide documented evidence of elite financial networks, power-of-attorney arrangements, and institutional scrutiny surrounding high-net-worth individuals and Epstein''s operations.\n\nThe full searchable archive is publicly hosted by the Department of Justice at justice.gov/epstein and is updated as additional materials are identified.\n\nPrimary Sources (MLA Format)\n\nUnited States. Department of Justice. Epstein Library. www.justice.gov/epstein. Accessed 24 Mar. 2026.\n\nUnited States. Congress. House Oversight Committee. Deposition of Leslie Wexner (closed session, 18 Feb. 2026).\n\nWexner, Leslie H. Power of Attorney Agreement to Jeffrey E. Epstein. 1991. New York Times Document Archive, int.nyt.com/data/documenthelper/1494-epstein-wexner-power-of-attorney/04e6cef6bfb8b25c8684/optimized/full.pdf.\n\nUnited States. Department of Justice. "Department of Justice Publishes 3.5 Million Responsive Pages in Compliance with the Epstein Files Transparency Act." 30 Jan. 2026, www.justice.gov/opa/pr/department-justice-publishes-35-million-responsive-pages-compliance-epstein-files.',
  'https://www.justice.gov/epstein',
  'verified',
  'Child Safety & Human Trafficking',
  '2026-03-24',
  'les-wexner-epstein-financial-network',
  '{"pillar": "Child Safety & Trafficking", "category": "Epstein Network Associates", "tags": ["Les Wexner", "Victoria Secret", "L Brands", "Epstein", "power of attorney", "FBI co-conspirator", "House Oversight", "DOJ"], "importance": "PURE_GOLD", "sources": [{"title": "DOJ Epstein Library", "url": "https://www.justice.gov/epstein", "type": "primary_source"}, {"title": "House Oversight Committee Deposition of Wexner", "url": "", "type": "congressional_record"}, {"title": "Power of Attorney Agreement", "url": "https://int.nyt.com/data/documenthelper/1494-epstein-wexner-power-of-attorney/04e6cef6bfb8b25c8684/optimized/full.pdf", "type": "primary_source"}, {"title": "DOJ 3.5 Million Pages Release", "url": "https://www.justice.gov/opa/pr/department-justice-publishes-35-million-responsive-pages-compliance-epstein-files", "type": "primary_source"}]}'::jsonb
),
(
  'Leon Black — Apollo Global Management Co-Founder and Epstein Payment Network',
  'The Leon Black archive entry examines Leon Black, co-founder of Apollo Global Management, and his verified multi-million-dollar financial relationship with Jeffrey Epstein after Epstein''s 2008 sex-offender registration. Senate Finance Committee investigations document Black paying Epstein between $158 million and $170 million (2012–2017) for claimed tax and estate planning services. Recent Epstein Files releases and Senate inquiries highlight unusual payment structures, including routing through a sham charity, and raise questions about the nature of the relationship.',
  E'Documented Evidence Includes:\n\n• Bank records and wire transfers totaling $158–$170 million paid by Black to Epstein (2012–2017).\n• Senate Finance Committee letters and staff memoranda detailing compensation rates 30 times higher than Black paid other elite advisors.\n• Emails and records showing $10 million routed through a 501(c)(3) charity to "avoid public disclosure" and "maximize deductions."\n• U.S. Virgin Islands settlement agreement referencing Epstein''s use of Black''s payments to fund operations.\n• 2025–2026 Epstein Files batches containing new payment ledgers and surveillance-related documents.\n\nSignificant portions of the releases remain redacted, and the Senate investigation remains ongoing. These primary congressional and DOJ materials document elite financial entanglements, post-conviction payments, and institutional oversight failures.\n\nThe full searchable archive is publicly hosted by the Department of Justice at justice.gov/epstein and is updated as additional materials are identified. Senate Finance Committee records are available at finance.senate.gov.\n\nPrimary Sources (MLA Format)\n\nUnited States. Senate. Committee on Finance. Letter from Senator Ron Wyden to Leon Black. 20 Mar. 2026, www.finance.senate.gov/imo/media/doc/senator_wyden_letter_to_leon_black_redacted.pdf.\n\nUnited States. Department of Justice. Epstein Library. www.justice.gov/epstein. Accessed 24 Mar. 2026.\n\nUnited States. Senate. Committee on Finance. "Continuing Epstein Investigation, Wyden Questions Leon Black over New Revelations in Epstein Files." 23 Mar. 2026, www.finance.senate.gov/continuing-epstein-investigation-wyden-questions-leon-black-over-new-revelations-in-epstein-files-appearance-of-hush-money-payments-and-surveillance-of-women.\n\nGovernment of the United States Virgin Islands. Settlement Agreement and Release with Leon Black. 20 Jan. 2023.',
  'https://www.justice.gov/epstein',
  'verified',
  'Child Safety & Human Trafficking',
  '2026-03-24',
  'leon-black-epstein-payment-network',
  '{"pillar": "Child Safety & Trafficking", "category": "Epstein Network Associates", "tags": ["Leon Black", "Apollo Global Management", "Epstein", "Senate Finance Committee", "payments", "DOJ", "USVI settlement"], "importance": "PURE_GOLD", "sources": [{"title": "Senate Finance Committee Letter to Leon Black", "url": "https://www.finance.senate.gov/imo/media/doc/senator_wyden_letter_to_leon_black_redacted.pdf", "type": "congressional_record"}, {"title": "DOJ Epstein Library", "url": "https://www.justice.gov/epstein", "type": "primary_source"}, {"title": "Senate Finance Committee Investigation", "url": "https://www.finance.senate.gov/continuing-epstein-investigation-wyden-questions-leon-black-over-new-revelations-in-epstein-files-appearance-of-hush-money-payments-and-surveillance-of-women", "type": "congressional_record"}]}'::jsonb
)
ON CONFLICT DO NOTHING;
