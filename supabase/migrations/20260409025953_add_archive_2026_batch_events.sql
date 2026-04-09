/*
  # Add Archive 2026 Batch — Events Table

  Seeds 20 events from the 2026 archive batch into the events table so they appear on the Timeline page.

  ## New Records
  - 20 events spanning 2024-2026
  - Pillars mapped from primary categories: Environmental Crimes, Financial Systems, Surveillance State, Trafficking Networks
  - metadata stores original_id, tags, categories
*/

INSERT INTO events (title, description, event_date, pillar, metadata)
VALUES
(
  'AFFF MDL: Tyco Public Water Systems PFAS Settlement Approved',
  'Official court-approved settlement in the nationwide PFAS AFFF MDL resolves claims by public water systems against Tyco for PFAS contamination in drinking water. Tyco agrees to pay into a fund for monitoring, treatment, and remediation.',
  '2024-04-12',
  'Environmental Crimes',
  jsonb_build_object('original_id', '001', 'tags', ARRAY['AFFF','PFAS','Tyco','MDL','public_water_systems'], 'categories', ARRAY['court_filing','settlement','pfas'], 'source_url', 'https://www.pfaswatersettlement.com/wp-content/uploads/2024/04/ECF-4911-3-Tyco-MSA.pdf')
),
(
  'Texas Sues 3M DuPont Corteva for PFAS Deceptive Trade Practices',
  'Texas Attorney General sues 3M, Corteva, and DuPont entities for deceptive marketing of PFAS-containing products over 70+ years while concealing health and environmental risks in violation of Texas DTPA.',
  '2024-12-11',
  'Environmental Crimes',
  jsonb_build_object('original_id', '003', 'tags', ARRAY['Texas_AG','3M','DuPont','Corteva','DTPA','PFAS'], 'categories', ARRAY['court_filing','state_lawsuit','pfas'], 'source_url', 'https://www.texasattorneygeneral.gov/sites/default/files/images/press/PFAS%20Manufacturers%20Lawsuit%20Filed.pdf')
),
(
  'House Ethics Issues 2025 STOCK Act Financial Disclosure Guidance',
  'Updated instructions clarify PTR filing for securities transactions over $1,000 within 45 days and annual FD statements for senior staff and Members. Reinforces prohibitions on using nonpublic information for profit.',
  '2025-01-17',
  'Financial Systems',
  jsonb_build_object('original_id', '015', 'tags', ARRAY['House_Ethics','STOCK_Act','PTR','financial_disclosure'], 'categories', ARRAY['ethics_guidance','stock_act'], 'source_url', 'https://ethics.house.gov/wp-content/uploads/2025/01/Appendix-II-B.pdf')
),
(
  'FISC Approves 2025 Section 702 Certifications A B C for NSA CIA FBI',
  'FISC approves 2025 Certifications A/B/C and related targeting, minimization, and querying procedures for NSA, CIA, FBI, and NCTC including travel-vetting expansions post-RISAA.',
  '2025-03-18',
  'Surveillance State',
  jsonb_build_object('original_id', '014', 'tags', ARRAY['FISC','Section_702','NSA','CIA','FBI','NCTC','RISAA'], 'categories', ARRAY['fisc_opinion','ai_surveillance','fisa_702'], 'source_url', 'https://www.intel.gov/assets/documents/702-documents/declassified/2025/FISC_Opinion_Cert_ABC_03182025_Redacted.pdf')
),
(
  'FISC Approves Amended Section 702 Certification 2024-D NSA CIA Procedures',
  'FISC approves amended NSA/CIA minimization and querying procedures for the 2024-D certification after identifying deficiencies in U.S. person necessity standards for drug-trafficking surveillance.',
  '2025-04-09',
  'Surveillance State',
  jsonb_build_object('original_id', '008', 'tags', ARRAY['FISC','Section_702','NSA','CIA','RISAA'], 'categories', ARRAY['fisc_opinion','ai_surveillance','fisa_702'], 'source_url', 'https://www.intelligence.gov/assets/documents/702-documents/declassified/2025/FISC_Opinion_2_Apr_2025_2024_Cert_D_Redacted_8-19-25_final.pdf')
),
(
  'House Ethics Issues 2024 Financial Disclosure and STOCK Act PTR Guide',
  'Updated official guidance for Members on filing financial disclosures and STOCK Act PTRs for 2024-2025 transactions, reinforcing mandatory reporting of securities trades over $1,000 within 45 days.',
  '2025-04-15',
  'Financial Systems',
  jsonb_build_object('original_id', '005', 'tags', ARRAY['House_Ethics','STOCK_Act','PTR','financial_disclosure','congressional_trading'], 'categories', ARRAY['ethics_guidance','stock_act'], 'source_url', 'https://ethics.house.gov/wp-content/uploads/2025/04/2024-Final-Instruction-Guide-4-15-2025.pdf')
),
(
  'New Jersey and 3M Reach Statewide PFAS Natural Resource Damages Settlement',
  'Landmark statewide PFAS settlement resolves NJ lawsuits against 3M for contamination at multiple sites, including payments of $275M–$325M for natural resource damages and abatement.',
  '2025-05-13',
  'Environmental Crimes',
  jsonb_build_object('original_id', '012', 'tags', ARRAY['New_Jersey_AG','3M','PFAS','natural_resource_damages','statewide_settlement'], 'categories', ARRAY['settlement','state_ag','pfas'], 'source_url', 'https://www.njoag.gov/ag-platkin-and-dep-commissioner-latourette-announce-historic-settlement-of-up-to-450-million-with-3m-for-statewide-pfas-contamination/')
),
(
  'Michigan AG Secures PFAS Consent Decree Against Domtar Industries',
  'Michigan AG Dana Nessel secures $300,000 payment and enforceable cleanup obligations from paper manufacturers for PFAS releases at a composting facility.',
  '2025-06-25',
  'Environmental Crimes',
  jsonb_build_object('original_id', '011', 'tags', ARRAY['Michigan_AG','Domtar','PFAS','composting_site','consent_decree'], 'categories', ARRAY['settlement','state_ag','pfas'], 'source_url', 'https://www.michigan.gov/ag/-/media/Project/Websites/AG/releases/2025/June/Domtar-Consent-Decree.pdf')
),
(
  'CRS Analyzes 25 Bills Proposing to Limit Congress Financial Activities',
  'CRS report analyzes over 25 bills in the 119th Congress proposing divestiture, blind trusts, or trading bans for Members beyond current STOCK Act disclosures.',
  '2025-08-22',
  'Financial Systems',
  jsonb_build_object('original_id', '020', 'tags', ARRAY['CRS','STOCK_Act','congressional_trading','blind_trusts','divestiture'], 'categories', ARRAY['crs_report','stock_act'], 'source_url', 'https://www.congress.gov/crs_external_products/R/PDF/R48641/R48641.2.pdf')
),
(
  'Michigan AG Settles PFAS Claims Against White Pigeon Paper Mill Operators',
  'Two consent judgments resolve Michigan AG lawsuit against current and former owners of White Pigeon mill for PFAS releases requiring source control and approximately $1.2M cleanup funding.',
  '2025-09-19',
  'Environmental Crimes',
  jsonb_build_object('original_id', '004', 'tags', ARRAY['Michigan_AG','Ox_Paperboard','White_Pigeon','PFAS','groundwater'], 'categories', ARRAY['settlement','state_ag','pfas'], 'source_url', 'https://www.michigan.gov/ag/news/press-releases/2025/09/19/attorney-general-nessel-secures-settlements-with-past-and-present-operators-of-white-pigeon')
),
(
  'New Hampshire Receives First 3M PFAS Settlement Payment of $7.96M',
  'New Hampshire receives initial $7.96M installment from the nationwide 3M public water systems PFAS settlement for drinking water and groundwater trust fund.',
  '2025-09-24',
  'Environmental Crimes',
  jsonb_build_object('original_id', '013', 'tags', ARRAY['New_Hampshire_DOJ','3M','PFAS','settlement_payment'], 'categories', ARRAY['settlement_payment','state_ag','pfas'], 'source_url', 'https://www.doj.nh.gov/news-and-media/new-hampshire-receives-first-pfas-settlement-payment-nearly-8-million-3m-company')
),
(
  'State Department Releases 2025 Trafficking in Persons Report',
  'Annual State Department report assesses global anti-trafficking efforts, noting increased online facilitation, child victim detection challenges, and gaps in prosecution of demand-side actors.',
  '2025-10-01',
  'Trafficking Networks',
  jsonb_build_object('original_id', '009', 'tags', ARRAY['TIP_Report','State_Department','human_trafficking','child_sex_trafficking'], 'categories', ARRAY['government_report','child_safety','trafficking'], 'source_url', 'https://www.state.gov/reports/2025-trafficking-in-persons-report')
),
(
  'CRS Testimony on STOCK Act Compliance Failures at House Administration Hearing',
  'CRS analysis at the November 19, 2025 hearing details STOCK Act disclosure requirements, persistent compliance failures, and legislative proposals to ban congressional stock trading.',
  '2025-11-19',
  'Financial Systems',
  jsonb_build_object('original_id', '006', 'tags', ARRAY['CRS','STOCK_Act','congressional_trading','insider_trading'], 'categories', ARRAY['congressional_hearing','crs_report','stock_act'], 'source_url', 'https://www.congress.gov/119/meeting/house/118679/witnesses/HHRG-119-HA00-Wstate-StrausJ-20251119.pdf')
),
(
  'NACWA Files Amicus Brief Against DuPont Chemours PFAS Consent Orders in NJ',
  'NACWA argues proposed DuPont/Chemours consent orders fail the polluter-pays principle by underfunding wastewater and stormwater remediation, perpetuating contamination burdens on taxpayers.',
  '2025-12-12',
  'Environmental Crimes',
  jsonb_build_object('original_id', '002', 'tags', ARRAY['NACWA','DuPont','Chemours','consent_orders','PFAS_litigation'], 'categories', ARRAY['court_filing','amicus_brief','pfas'], 'source_url', 'https://www.nacwa.org/docs/default-source/clean-water-current-pdf/2025-12-18/nacwa-nj-pfas-settlement-amicus-brief-as-filed.pdf')
),
(
  'NCMEC Reports 21.3M CyberTipline Submissions and 1149% Trafficking Surge in 2025',
  'NCMEC analysis shows a 1,149% increase in child sex trafficking reports from online platforms post-REPORT Act with over 21.3M total reports and 61.8M files.',
  '2026-03-31',
  'Trafficking Networks',
  jsonb_build_object('original_id', '010', 'tags', ARRAY['NCMEC','CyberTipline','REPORT_Act','child_sex_trafficking'], 'categories', ARRAY['government_report','child_safety','trafficking'], 'source_url', 'https://missingkids.org/ourwork/ncmecdata')
),
(
  'NCMEC Documents 1.5M Generative AI CSAM Reports in 2025 CyberTipline Data',
  'NCMEC reports over 1.5M CyberTipline submissions linked to generative AI child sexual exploitation in 2025, documenting explosive growth in AI-generated CSAM.',
  '2026-03-31',
  'Trafficking Networks',
  jsonb_build_object('original_id', '016', 'tags', ARRAY['NCMEC','CyberTipline','generative_AI','CSAM','REPORT_Act'], 'categories', ARRAY['government_report','child_safety','trafficking'], 'source_url', 'https://www.missingkids.org/blog/2026/the-work-never-stops-first-look-at-ncmecs-2025-data')
),
(
  'PCLOB Issues Section 702 Staff Report Ahead of April 2026 Reauthorization',
  'PCLOB staff report critiques Section 702 program scope, U.S. person data incidental collection, and post-RISAA expansions including counternarcotics and travel-vetting queries, calling for warrant requirements.',
  '2026-04-02',
  'Surveillance State',
  jsonb_build_object('original_id', '007', 'tags', ARRAY['PCLOB','Section_702','FISA','surveillance','RISAA'], 'categories', ARRAY['government_report','ai_surveillance','fisa_702'], 'source_url', 'https://documents.pclob.gov/prod/Documents/OversightReport/315fe19c-07f3-4cc6-986a-ff199ce5b616/Unclassified%20PCLOB%20702%20Report%202026.pdf')
),
(
  'PCLOB Releases Unclassified Post-RISAA Section 702 Implementation Review',
  'PCLOB evaluates post-RISAA implementation, compliance trends, and privacy impacts of expanded counternarcotics and travel-vetting queries, recommending further warrant requirements.',
  '2026-04-02',
  'Surveillance State',
  jsonb_build_object('original_id', '018', 'tags', ARRAY['PCLOB','Section_702','FISA','RISAA','warrant_requirements'], 'categories', ARRAY['government_report','ai_surveillance','fisa_702'], 'source_url', 'https://documents.pclob.gov/prod/Documents/OversightReport/315fe19c-07f3-4cc6-986a-ff199ce5b616/Unclassified%20PCLOB%20702%20Report%202026.pdf')
)
ON CONFLICT DO NOTHING;
