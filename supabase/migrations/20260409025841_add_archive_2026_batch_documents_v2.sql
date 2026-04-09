/*
  # Add Archive 2026 Batch — Documents Table (v2)

  Seeds 20 verified primary-source documents from the 2026 archive batch into the documents table.
  Explicit slugs provided to satisfy the slug_format_check constraint (^[a-z0-9]+(-[a-z0-9]+)*$, max 80 chars).

  ## New Records
  - 20 government records, court filings, and oversight reports
  - Topics: PFAS/environmental contamination, FISA Section 702 surveillance, STOCK Act compliance, child trafficking
*/

INSERT INTO documents (title, slug, description, content, document_type, date_published, verification_tier, source_url, metadata)
VALUES
(
  'In Re: AFFF Products Liability Litigation — Tyco Public Water Systems Settlement (MDL 2873)',
  'afff-pfas-tyco-public-water-systems-settlement-mld-2873',
  'Official court-approved settlement in the nationwide PFAS AFFF MDL resolves claims by public water systems against Tyco for PFAS contamination in drinking water. Tyco agrees to pay into a fund for monitoring, treatment, and remediation.',
  'Official court-approved settlement in the nationwide PFAS AFFF MDL resolves claims by public water systems against Tyco for PFAS contamination in drinking water. Tyco agrees to pay into a fund for monitoring, treatment, and remediation while preserving certain claims related to non-water systems such as wastewater and stormwater. The agreement demonstrates corporate accountability failures in long-term PFAS pollution but highlights gaps in full remediation funding.',
  'court_filing', '2024-04-12', 'verified',
  'https://www.pfaswatersettlement.com/wp-content/uploads/2024/04/ECF-4911-3-Tyco-MSA.pdf',
  jsonb_build_object('original_id', '001', 'categories', ARRAY['government_record','court_filing','settlement','pfas','environmental_contamination'], 'tags', ARRAY['AFFF','PFAS','Tyco','MDL','public_water_systems','settlement_agreement','drinking_water','remediation'], 'document_url', 'https://www.pfaswatersettlement.com/wp-content/uploads/2024/04/ECF-4911-3-Tyco-MSA.pdf', 'pillar', 'Environmental Crimes')
),
(
  'NACWA Amicus Brief — NJ PFAS Litigation DuPont Chemours Consent Orders',
  'nacwa-amicus-brief-nj-pfas-dupont-chemours-consent-orders',
  'NACWA''s amicus brief in NJ PFAS litigation argues that proposed DuPont/Chemours consent orders fail the polluter-pays principle by underfunding wastewater and stormwater remediation. It highlights institutional capture where settlements release claims without full compensation for public utilities.',
  'NACWA''s amicus brief in NJ PFAS litigation argues that proposed DuPont/Chemours consent orders fail the polluter-pays principle by underfunding wastewater and stormwater remediation. It highlights institutional capture where settlements release claims without full compensation for public utilities, perpetuating environmental contamination burdens on taxpayers.',
  'court_filing', '2025-12-12', 'verified',
  'https://www.nacwa.org/docs/default-source/clean-water-current-pdf/2025-12-18/nacwa-nj-pfas-settlement-amicus-brief-as-filed.pdf',
  jsonb_build_object('original_id', '002', 'categories', ARRAY['government_record','court_filing','amicus_brief','pfas','environmental_contamination'], 'tags', ARRAY['NACWA','DuPont','Chemours','consent_orders','wastewater','PFAS_litigation'], 'document_url', 'https://www.nacwa.org/docs/default-source/clean-water-current-pdf/2025-12-18/nacwa-nj-pfas-settlement-amicus-brief-as-filed.pdf', 'pillar', 'Environmental Crimes')
),
(
  'Texas v. 3M DuPont Corteva — PFAS Deceptive Trade Practices Petition',
  'texas-v-3m-dupont-corteva-pfas-deceptive-trade-practices',
  'Texas Attorney General sues 3M, Corteva, and DuPont entities for deceptive marketing of PFAS-containing products over 70+ years while concealing health and environmental risks in violation of Texas DTPA.',
  'Texas Attorney General sues 3M, Corteva, and DuPont entities for deceptive marketing of PFAS-containing products over 70+ years while concealing health and environmental risks in violation of Texas DTPA. The suit excludes AFFF-specific claims but targets consumer products and exposes decades-long corporate knowledge suppression and failure to warn.',
  'court_filing', '2024-12-11', 'verified',
  'https://www.texasattorneygeneral.gov/sites/default/files/images/press/PFAS%20Manufacturers%20Lawsuit%20Filed.pdf',
  jsonb_build_object('original_id', '003', 'categories', ARRAY['government_record','court_filing','state_lawsuit','pfas','deceptive_practices'], 'tags', ARRAY['Texas_AG','3M','DuPont','Corteva','DTPA','deceptive_marketing','PFAS'], 'document_url', 'https://www.texasattorneygeneral.gov/sites/default/files/images/press/PFAS%20Manufacturers%20Lawsuit%20Filed.pdf', 'pillar', 'Environmental Crimes')
),
(
  'Michigan AG v. Ox Paperboard — White Pigeon Paper Mill PFAS Settlements',
  'michigan-ag-ox-paperboard-white-pigeon-pfas-settlements',
  'Two consent judgments resolve Michigan AG lawsuit against current and former owners of White Pigeon mill for PFAS releases. The agreements require source control and cleanup funding of approximately $1.2M from the former owner.',
  'Two consent judgments resolve Michigan AG lawsuit against current and former owners of White Pigeon mill for PFAS releases. The agreements require source control and cleanup funding of approximately $1.2M from the former owner with ongoing remediation by the current owner. They document repeated environmental law violations and institutional failure to prevent industrial PFAS migration into groundwater and soil.',
  'settlement', '2025-09-19', 'verified',
  'https://www.michigan.gov/ag/news/press-releases/2025/09/19/attorney-general-nessel-secures-settlements-with-past-and-present-operators-of-white-pigeon',
  jsonb_build_object('original_id', '004', 'categories', ARRAY['government_record','settlement','state_ag','consent_judgment','pfas','environmental_contamination'], 'tags', ARRAY['Michigan_AG','Ox_Paperboard','White_Pigeon','PFAS','consent_judgment','groundwater'], 'document_url', 'https://www.michigan.gov/ag/news/press-releases/2025/09/19/attorney-general-nessel-secures-settlements-with-past-and-present-operators-of-white-pigeon', 'pillar', 'Environmental Crimes')
),
(
  'House Ethics Committee — Financial Disclosure Guide and STOCK Act PTR Instructions 2024',
  'house-ethics-financial-disclosure-stock-act-ptr-guide-2024',
  'Updated official guidance for Members, candidates, officers, and staff on filing financial disclosures and STOCK Act PTRs for 2024–2025 transactions. Reinforces mandatory reporting of securities trades over $1,000 within 45 days.',
  'Updated official guidance for Members, candidates, officers, and staff on filing financial disclosures and STOCK Act PTRs for 2024–2025 transactions. It reinforces mandatory reporting of securities trades over $1,000 within 45 days but highlights ongoing compliance gaps and enforcement limitations in congressional insider trading oversight.',
  'government_record', '2025-04-15', 'verified',
  'https://ethics.house.gov/wp-content/uploads/2025/04/2024-Final-Instruction-Guide-4-15-2025.pdf',
  jsonb_build_object('original_id', '005', 'categories', ARRAY['government_record','ethics_guidance','stock_act','financial_disclosure'], 'tags', ARRAY['House_Ethics','STOCK_Act','PTR','financial_disclosure','congressional_trading','insider_trading'], 'document_url', 'https://ethics.house.gov/wp-content/uploads/2025/04/2024-Final-Instruction-Guide-4-15-2025.pdf', 'pillar', 'Financial Systems')
),
(
  'Congressional Research Service — Taking Stock of the STOCK Act Hearing Testimony 2025',
  'crs-taking-stock-of-the-stock-act-hearing-testimony-2025',
  'CRS analysis presented at the November 19, 2025 hearing details STOCK Act disclosure requirements, persistent compliance failures, and legislative proposals to ban or restrict congressional stock trading.',
  'CRS analysis presented at the November 19, 2025 hearing details STOCK Act disclosure requirements, persistent compliance failures, and legislative proposals to ban or restrict congressional stock trading. It documents revolving-door risks and public perception of legalized insider trading.',
  'government_record', '2025-11-19', 'verified',
  'https://www.congress.gov/119/meeting/house/118679/witnesses/HHRG-119-HA00-Wstate-StrausJ-20251119.pdf',
  jsonb_build_object('original_id', '006', 'categories', ARRAY['government_record','congressional_hearing','crs_report','stock_act'], 'tags', ARRAY['CRS','STOCK_Act','congressional_trading','insider_trading','House_Administration'], 'document_url', 'https://www.congress.gov/119/meeting/house/118679/witnesses/HHRG-119-HA00-Wstate-StrausJ-20251119.pdf', 'pillar', 'Financial Systems')
),
(
  'PCLOB Staff Report — Section 702 Surveillance Program Unclassified 2026',
  'pclob-staff-report-section-702-surveillance-unclassified-2026',
  'PCLOB staff report ahead of the April 2026 Section 702 reauthorization deadline critiques program scope, U.S. person data incidental collection, and post-RISAA expansions including counternarcotics and travel-vetting queries.',
  'PCLOB staff report ahead of the April 2026 Section 702 reauthorization deadline critiques program scope, U.S. person data incidental collection, and post-RISAA expansions including counternarcotics and travel-vetting queries. It documents repeated compliance violations and calls for warrant requirements on backdoor searches.',
  'government_report', '2026-04-02', 'verified',
  'https://documents.pclob.gov/prod/Documents/OversightReport/315fe19c-07f3-4cc6-986a-ff199ce5b616/Unclassified%20PCLOB%20702%20Report%202026.pdf',
  jsonb_build_object('original_id', '007', 'categories', ARRAY['government_report','ai_surveillance','fisa_702','oversight'], 'tags', ARRAY['PCLOB','Section_702','FISA','surveillance','backdoor_searches','RISAA'], 'document_url', 'https://documents.pclob.gov/prod/Documents/OversightReport/315fe19c-07f3-4cc6-986a-ff199ce5b616/Unclassified%20PCLOB%20702%20Report%202026.pdf', 'pillar', 'Surveillance State')
),
(
  'FISC Opinion — Section 702 Certification 2024-D NSA CIA Amended Procedures',
  'fisc-opinion-section-702-certification-2024-d-nsa-cia',
  'FISC approves amended NSA/CIA minimization and querying procedures for the 2024-D certification after identifying deficiencies in the U.S. person necessity standard for foreign intelligence in drug-trafficking surveillance.',
  'FISC approves amended NSA/CIA minimization and querying procedures for the 2024-D certification after identifying deficiencies in the U.S. person necessity standard for foreign intelligence information in drug-trafficking surveillance. The opinion highlights ongoing procedural reforms amid expanded RISAA authorities.',
  'government_record', '2025-04-09', 'verified',
  'https://www.intelligence.gov/assets/documents/702-documents/declassified/2025/FISC_Opinion_2_Apr_2025_2024_Cert_D_Redacted_8-19-25_final.pdf',
  jsonb_build_object('original_id', '008', 'categories', ARRAY['government_record','fisc_opinion','ai_surveillance','fisa_702'], 'tags', ARRAY['FISC','Section_702','counternarcotics','NSA','CIA','minimization_procedures','RISAA'], 'document_url', 'https://www.intelligence.gov/assets/documents/702-documents/declassified/2025/FISC_Opinion_2_Apr_2025_2024_Cert_D_Redacted_8-19-25_final.pdf', 'pillar', 'Surveillance State')
),
(
  'State Department 2025 Trafficking in Persons Report',
  'state-department-2025-trafficking-in-persons-report',
  'Annual State Department report assesses global anti-trafficking efforts, noting increased online facilitation, child victim detection challenges, and gaps in prosecution of demand-side actors.',
  'Annual State Department report assesses global anti-trafficking efforts, noting increased online facilitation, child victim detection challenges, and gaps in prosecution of demand-side actors. It documents state failures in addressing debt bondage and forced labor in supply chains.',
  'government_report', '2025-10-01', 'verified',
  'https://www.state.gov/reports/2025-trafficking-in-persons-report',
  jsonb_build_object('original_id', '009', 'categories', ARRAY['government_report','child_safety','trafficking'], 'tags', ARRAY['TIP_Report','State_Department','human_trafficking','child_sex_trafficking','online_facilitation'], 'document_url', 'https://www.state.gov/reports/2025-trafficking-in-persons-report', 'pillar', 'Trafficking Networks')
),
(
  'NCMEC CyberTipline 2025 — REPORT Act Child Sex Trafficking Surge Data',
  'ncmec-cybertipline-2025-report-act-child-trafficking-surge',
  'NCMEC analysis shows a 1,149% increase in child sex trafficking reports from online platforms post-REPORT Act. The data includes over 21.3M total reports and 61.8M files.',
  'NCMEC analysis shows a 1,149% increase in child sex trafficking reports from online platforms post-REPORT Act. The data includes over 21.3M total reports and 61.8M files. It documents institutional lag in platform accountability and law enforcement response capacity.',
  'government_report', '2026-03-31', 'verified',
  'https://missingkids.org/ourwork/ncmecdata',
  jsonb_build_object('original_id', '010', 'categories', ARRAY['government_report','child_safety','trafficking','cybertipline'], 'tags', ARRAY['NCMEC','CyberTipline','REPORT_Act','child_sex_trafficking','online_platforms','AI_CSAM'], 'document_url', 'https://missingkids.org/ourwork/ncmecdata', 'pillar', 'Trafficking Networks')
),
(
  'Michigan AG v. Domtar Industries — PFAS Contamination Consent Decree',
  'michigan-ag-v-domtar-industries-pfas-consent-decree',
  'Michigan AG Dana Nessel secures $300,000 payment and enforceable cleanup obligations from paper manufacturers for PFAS releases at a composting facility.',
  'Michigan AG Dana Nessel secures $300,000 payment and enforceable cleanup obligations from paper manufacturers for PFAS releases at a composting facility. The decree demonstrates state-level enforcement against industrial polluters but underscores reliance on settlements rather than full statutory penalties.',
  'settlement', '2025-06-25', 'verified',
  'https://www.michigan.gov/ag/-/media/Project/Websites/AG/releases/2025/June/Domtar-Consent-Decree.pdf',
  jsonb_build_object('original_id', '011', 'categories', ARRAY['government_record','settlement','state_ag','consent_decree','pfas','environmental_contamination'], 'tags', ARRAY['Michigan_AG','Domtar','PFAS','composting_site','consent_decree','remediation'], 'document_url', 'https://www.michigan.gov/ag/-/media/Project/Websites/AG/releases/2025/June/Domtar-Consent-Decree.pdf', 'pillar', 'Environmental Crimes')
),
(
  'New Jersey AG and DEP v. 3M — Statewide PFAS Settlement Agreement',
  'new-jersey-ag-dep-v-3m-statewide-pfas-settlement',
  'Landmark statewide PFAS settlement resolves NJ lawsuits against 3M for contamination at multiple sites. Includes payments of $275M–$325M for natural resource damages and abatement.',
  'Landmark statewide PFAS settlement resolves NJ lawsuits and directive against 3M for contamination at multiple sites. It includes payments of $275M–$325M for natural resource damages and abatement. The agreement highlights gaps in federal preemption of state remediation claims and represents the largest NJ PFAS recovery to date.',
  'settlement', '2025-05-13', 'verified',
  'https://www.njoag.gov/ag-platkin-and-dep-commissioner-latourette-announce-historic-settlement-of-up-to-450-million-with-3m-for-statewide-pfas-contamination/',
  jsonb_build_object('original_id', '012', 'categories', ARRAY['government_record','settlement','state_ag','pfas','environmental_contamination'], 'tags', ARRAY['New_Jersey_AG','3M','PFAS','statewide_settlement','natural_resource_damages'], 'document_url', 'https://www.njoag.gov/ag-platkin-and-dep-commissioner-latourette-announce-historic-settlement-of-up-to-450-million-with-3m-for-statewide-pfas-contamination/', 'pillar', 'Environmental Crimes')
),
(
  'New Hampshire DOJ — First 3M PFAS Settlement Payment Public Water Systems',
  'new-hampshire-doj-first-3m-pfas-settlement-payment',
  'New Hampshire receives initial $7.96M installment from the nationwide 3M public water systems PFAS settlement for drinking water and groundwater trust fund.',
  'New Hampshire receives initial $7.96M installment from the nationwide 3M public water systems PFAS settlement for drinking water and groundwater trust fund. The payment documents ongoing multi-state recovery but reveals fragmented funding timelines across jurisdictions.',
  'government_record', '2025-09-24', 'verified',
  'https://www.doj.nh.gov/news-and-media/new-hampshire-receives-first-pfas-settlement-payment-nearly-8-million-3m-company',
  jsonb_build_object('original_id', '013', 'categories', ARRAY['government_record','settlement_payment','state_ag','pfas','environmental_contamination'], 'tags', ARRAY['New_Hampshire_DOJ','3M','PFAS','settlement_payment','public_water_systems'], 'document_url', 'https://www.doj.nh.gov/news-and-media/new-hampshire-receives-first-pfas-settlement-payment-nearly-8-million-3m-company', 'pillar', 'Environmental Crimes')
),
(
  'FISC Opinion — 2025 Section 702 Certifications A B C NSA CIA FBI NCTC',
  'fisc-opinion-2025-section-702-certifications-a-b-c',
  'FISC approves 2025 Certifications A/B/C and related targeting, minimization, and querying procedures for NSA, CIA, FBI, and NCTC. Addresses attorney-client privilege handling and travel-vetting expansions post-RISAA.',
  'FISC approves 2025 Certifications A/B/C and related targeting, minimization, and querying procedures for NSA, CIA, FBI, and NCTC. The opinion addresses attorney-client privilege handling and travel-vetting expansions post-RISAA while documenting continued compliance reforms amid privacy concerns.',
  'government_record', '2025-03-18', 'verified',
  'https://www.intel.gov/assets/documents/702-documents/declassified/2025/FISC_Opinion_Cert_ABC_03182025_Redacted.pdf',
  jsonb_build_object('original_id', '014', 'categories', ARRAY['government_record','fisc_opinion','ai_surveillance','fisa_702'], 'tags', ARRAY['FISC','Section_702','NSA','CIA','FBI','NCTC','RISAA','attorney_client_privilege'], 'document_url', 'https://www.intel.gov/assets/documents/702-documents/declassified/2025/FISC_Opinion_Cert_ABC_03182025_Redacted.pdf', 'pillar', 'Surveillance State')
),
(
  'House Ethics Committee — 2025 STOCK Act Financial Disclosure Guidance Update',
  'house-ethics-2025-stock-act-financial-disclosure-guidance',
  'Updated instructions clarify PTR filing for securities transactions over $1,000 within 45 days and annual FD statements for senior staff and Members. Reinforces prohibitions on using nonpublic information for profit.',
  'Updated instructions clarify PTR filing for securities transactions over $1,000 within 45 days and annual FD statements for senior staff and Members. The guidance reinforces prohibitions on using nonpublic information for private profit while noting persistent enforcement gaps in congressional trading oversight.',
  'government_record', '2025-01-17', 'verified',
  'https://ethics.house.gov/wp-content/uploads/2025/01/Appendix-II-B.pdf',
  jsonb_build_object('original_id', '015', 'categories', ARRAY['government_record','ethics_guidance','stock_act','financial_disclosure'], 'tags', ARRAY['House_Ethics','STOCK_Act','PTR','financial_disclosure','nonpublic_information'], 'document_url', 'https://ethics.house.gov/wp-content/uploads/2025/01/Appendix-II-B.pdf', 'pillar', 'Financial Systems')
),
(
  'NCMEC CyberTipline 2025 — Generative AI CSAM and Trafficking Supplemental Data',
  'ncmec-cybertipline-2025-generative-ai-csam-trafficking',
  'NCMEC reports over 1.5M CyberTipline submissions linked to generative AI child sexual exploitation in 2025. Documents explosive growth in AI-generated CSAM and platform reporting obligations under the REPORT Act.',
  'NCMEC reports over 1.5M CyberTipline submissions linked to generative AI child sexual exploitation in 2025 as part of 21.3M total reports. The data documents explosive growth in AI-generated CSAM and platform reporting obligations under the REPORT Act, exposing institutional delays in tech accountability.',
  'government_report', '2026-03-31', 'verified',
  'https://www.missingkids.org/blog/2026/the-work-never-stops-first-look-at-ncmecs-2025-data',
  jsonb_build_object('original_id', '016', 'categories', ARRAY['government_report','child_safety','trafficking','cybertipline'], 'tags', ARRAY['NCMEC','CyberTipline','generative_AI','CSAM','REPORT_Act','child_sex_trafficking'], 'document_url', 'https://www.missingkids.org/blog/2026/the-work-never-stops-first-look-at-ncmecs-2025-data', 'pillar', 'Trafficking Networks')
),
(
  'Michigan AG v. Ox Paperboard WP — White Pigeon PFAS Consent Judgment',
  'michigan-ag-ox-paperboard-wp-white-pigeon-pfas-judgment',
  'Consent judgment requires ongoing remediation and source control at the White Pigeon mill following repeated environmental violations. Part of a multi-settlement strategy addressing legacy industrial PFAS releases.',
  'Consent judgment requires ongoing remediation and source control at the White Pigeon mill following repeated environmental violations. It forms part of a multi-settlement strategy addressing legacy industrial PFAS releases into Michigan waterways.',
  'settlement', '2025-09-19', 'verified',
  'https://www.michigan.gov/ag/news/press-releases/2025/09/19/attorney-general-nessel-secures-settlements-with-past-and-present-operators-of-white-pigeon',
  jsonb_build_object('original_id', '017', 'categories', ARRAY['government_record','consent_judgment','state_ag','pfas','environmental_contamination'], 'tags', ARRAY['Michigan_AG','Ox_Paperboard','White_Pigeon','PFAS','consent_judgment','paper_mill'], 'document_url', 'https://www.michigan.gov/ag/news/press-releases/2025/09/19/attorney-general-nessel-secures-settlements-with-past-and-present-operators-of-white-pigeon', 'pillar', 'Environmental Crimes')
),
(
  'PCLOB Unclassified Report — Section 702 Post-RISAA Implementation Review 2026',
  'pclob-section-702-post-risaa-implementation-review-2026',
  'PCLOB evaluates post-RISAA implementation, compliance trends, and privacy impacts of expanded counternarcotics and travel-vetting queries. Recommends further warrant requirements and oversight enhancements.',
  'PCLOB evaluates post-RISAA implementation, compliance trends, and privacy impacts of expanded counternarcotics and travel-vetting queries. The report recommends further warrant requirements and oversight enhancements for U.S. person data.',
  'government_report', '2026-04-02', 'verified',
  'https://documents.pclob.gov/prod/Documents/OversightReport/315fe19c-07f3-4cc6-986a-ff199ce5b616/Unclassified%20PCLOB%20702%20Report%202026.pdf',
  jsonb_build_object('original_id', '018', 'categories', ARRAY['government_report','ai_surveillance','fisa_702','oversight'], 'tags', ARRAY['PCLOB','Section_702','FISA','RISAA','warrant_requirements'], 'document_url', 'https://documents.pclob.gov/prod/Documents/OversightReport/315fe19c-07f3-4cc6-986a-ff199ce5b616/Unclassified%20PCLOB%20702%20Report%202026.pdf', 'pillar', 'Surveillance State')
),
(
  'New Jersey v. 3M — Statewide PFAS Natural Resource Damages Settlement 450M',
  'new-jersey-v-3m-pfas-natural-resource-damages-settlement-450m',
  'Up to $450M settlement resolves New Jersey claims for PFAS damage to water and natural resources at multiple sites. Includes payments for abatement projects and natural resource damages.',
  'Up to $450M settlement resolves New Jersey claims for PFAS damage to water and natural resources at multiple sites. It includes payments for abatement projects and natural resource damages and represents the largest single-state PFAS recovery documented to date.',
  'settlement', '2025-05-13', 'verified',
  'https://www.njoag.gov/ag-platkin-and-dep-commissioner-latourette-announce-historic-settlement-of-up-to-450-million-with-3m-for-statewide-pfas-contamination/',
  jsonb_build_object('original_id', '019', 'categories', ARRAY['government_record','settlement','state_lawsuit','pfas','environmental_contamination'], 'tags', ARRAY['New_Jersey_AG','3M','PFAS','natural_resource_damages','statewide_settlement'], 'document_url', 'https://www.njoag.gov/ag-platkin-and-dep-commissioner-latourette-announce-historic-settlement-of-up-to-450-million-with-3m-for-statewide-pfas-contamination/', 'pillar', 'Environmental Crimes')
),
(
  'CRS Report — Proposals to Limit Member of Congress Financial Activities 119th Congress',
  'crs-proposals-to-limit-congress-financial-activities-119th',
  'CRS report analyzes over 25 bills in the 119th Congress proposing divestiture, blind trusts, or trading bans for Members beyond current STOCK Act disclosures.',
  'CRS report analyzes over 25 bills in the 119th Congress proposing divestiture, blind trusts, or trading bans for Members beyond current STOCK Act disclosures. It documents the ongoing legislative push against perceived insider trading.',
  'government_record', '2025-08-22', 'verified',
  'https://www.congress.gov/crs_external_products/R/PDF/R48641/R48641.2.pdf',
  jsonb_build_object('original_id', '020', 'categories', ARRAY['government_record','crs_report','stock_act','financial_systems'], 'tags', ARRAY['CRS','STOCK_Act','congressional_trading','blind_trusts','divestiture','insider_trading'], 'document_url', 'https://www.congress.gov/crs_external_products/R/PDF/R48641/R48641.2.pdf', 'pillar', 'Financial Systems')
)
ON CONFLICT (slug) DO NOTHING;
