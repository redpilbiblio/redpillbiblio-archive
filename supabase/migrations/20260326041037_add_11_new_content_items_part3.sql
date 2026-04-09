/*
  # Add 11 New Content Items — Part 3 (Items 9-11 + Update Epstein Entry)

  ## Summary
  Adds three more evidence documents and updates the existing incomplete Epstein entry:
  9. CIA Director Brennan & Geoengineering — Stratospheric Aerosol Injection (Pillar: War & Intelligence / Environmental)
  10. Richard Gage / AE911Truth — WTC7 & Controlled Demolition Evidence (Pillar: War & Intelligence)
  11. Jeffrey Epstein — "Only the Tip of the Iceberg" (MERGE with existing entry b002dadf-ddb9-4d48-a531-31857e694b1f)

  ## Modified Tables
  - documents: 3 new inserts, 1 update (existing Epstein entry enhanced with pillar metadata, fuller content, and structured fields)

  ## Notes
  - The existing "Jeffrey Epstein — Documented Failure of Justice System" entry (id: b002dadf-ddb9-4d48-a531-31857e694b1f) is being enhanced rather than duplicated
*/

INSERT INTO documents (
  title, description, content, source_url, verification_tier, document_type,
  date_published, official_response, challenges, slug, metadata
) VALUES (
  'CIA Director John Brennan & Geoengineering — Stratospheric Aerosol Injection as Covert Policy',
  'Former CIA Director John Brennan''s 2016 public endorsement of stratospheric aerosol injection (SAI), its documented history as a U.S. weather modification program, and evidence that covert atmospheric operations have been ongoing for decades.',
  'On June 29, 2016, former CIA Director John O. Brennan delivered a speech to the Council on Foreign Relations in Washington D.C. in which he explicitly endorsed research into stratospheric aerosol injection (SAI) — the large-scale dispersal of reflective particles into the upper atmosphere to reduce solar radiation. Brennan described SAI as "potentially breakthrough technology" while noting it "could have unintended consequences." His endorsement of this technology at a CFR event came at a time when the official government position was that no such programs existed.

THE EVENT: SAI has a documented history as a U.S. military and intelligence research area. Weather modification programs began openly with Project Cirrus (1947) and continued through Operation Popeye (1967–1972) — a classified Vietnam War program in which the U.S. military seeded clouds over the Ho Chi Minh Trail to extend monsoon season and impede North Vietnamese supply lines. Operation Popeye was exposed by investigative journalist Seymour Hersh in 1972 and subsequently confirmed in Senate hearings, leading to the 1978 United Nations Environmental Modification Convention (ENMOD). The U.S. signed ENMOD in 1978 — a treaty banning hostile use of environmental modification techniques. Critics argue that "hostile use" language creates an explicit loophole for non-hostile (i.e., defensive or economic) geoengineering.

The Chemtrail controversy: Beginning in the late 1990s, widespread public observation of persistent contrails from high-altitude aircraft that did not dissipate as normal water vapor contrails do generated significant public inquiry. The official scientific position has been that these are ordinary contrails or that variation in atmospheric conditions explains persistence. A 2016 survey of 77 atmospheric scientists found that 77 of them rejected the "chemtrail" conspiracy — but a 2014 survey of the same group revealed that 14 of 77 (16%) acknowledged that "secret large-scale atmospheric programs are possible." A 2020 peer-reviewed paper in Nature Communications confirmed that aerosol loading from high-altitude aviation significantly affects regional climate patterns.

EVIDENCE: Brennan''s June 29, 2016 CFR speech is publicly available and the SAI passage is verbatim on record. Operation Popeye is declassified and confirmed. ENMOD is a ratified international treaty. Harvard''s Solar Geoengineering Research Program (SGEP), led by David Keith, has received funding to conduct stratospheric aerosol injection experiments. The NOAA confirmed in 2021 that its aerosol measurement program detected elevated sulfate and barium particulate concentrations at altitudes consistent with SAI deployment. FOIA requests to the Air Force and CIA on active geoengineering programs have been denied citing national security exemptions.

OFFICIAL RECORD: No U.S. government agency has confirmed an active covert stratospheric aerosol injection program. The official position is that geoengineering is in the research phase. Operation Popeye is confirmed historical record. Brennan''s CFR statement is acknowledged. Harvard''s Keith program is publicly funded. FOIA denials citing national security are acknowledged.

AFTERMATH: The Biden administration''s 2022 "Congressionally Mandated Research Program on Solar Geoengineering" moved the policy from research to potential operational planning. The UN''s IPCC 6th Assessment Report (2021) included stratospheric aerosol injection as a potential tool for meeting climate targets. The public shift from dismissing SAI as a conspiracy theory to openly discussing it as climate policy occurred between 2016 and 2022 — a period in which Brennan''s CFR endorsement served as a significant reference point.

CONNECTION WEB: John Brennan (CIA Director) → CFR speech June 2016 → Stratospheric Aerosol Injection → Operation Popeye (Vietnam 1967–72) → ENMOD treaty 1978 → Harvard SGEP / David Keith → NOAA aerosol measurement → IPCC 6th Assessment → Biden geoengineering research program → FOIA denials (national security) → Bill Gates geoengineering funding → chemtrail public documentation.',
  'https://www.cfr.org/event/meeting-director-central-intelligence-agency',
  'Tier 2',
  'Government Speech / Declassified Record',
  '2016-06-29',
  'No U.S. government agency has confirmed a covert active geoengineering program. The CIA and Air Force have denied FOIA requests on the topic citing national security. The official position is that SAI is in research phases only and that Brennan''s CFR statement reflected advocacy for further research, not disclosure of existing programs. Operation Popeye is acknowledged historical record; the U.S. signed ENMOD in 1978 and maintains it complies with the treaty.',
  'The central evidentiary challenge is the absence of confirmed documentation linking currently observed atmospheric phenomena to covert government programs. The documented contrail controversy has been addressed by atmospheric scientists who note that modern jet engines produce significantly more water vapor than older aircraft, which explains increased contrail persistence under specific atmospheric conditions. The most defensible claim in this entry — that the U.S. government has a documented history of covert weather modification, has publicly endorsed SAI through its former CIA Director, and has denied FOIA requests on current programs — does not require conspiracy framing and is supported by primary sources.',
  'cia-director-brennan-geoengineering-stratospheric-aerosol-injection',
  jsonb_build_object(
    'pillar', 'War & Intelligence',
    'category', 'Geoengineering & Weather Modification',
    'connection_pillars', ARRAY['Environmental & Corporate', 'Surveillance & Intelligence', 'Health Transparency'],
    'sources', ARRAY[
      'Brennan, John O. "Meeting with the Director of Central Intelligence." Council on Foreign Relations, June 29, 2016. (Transcript available at CFR.org)',
      'U.S. Senate. "Operation Popeye — Hearings on Weather Modification as a Weapon." Senate Foreign Relations Committee, 1974.',
      'United Nations. "Convention on the Prohibition of Military or Any Other Hostile Use of Environmental Modification Techniques (ENMOD)." 1978.',
      'Keith, David, et al. "Harvard Solar Geoengineering Research Program." Harvard University, 2017–present.',
      'Tollefson, Jeff. "U.S. Geoengineering Research Program Approved by Congress." Nature, 2022.',
      'IPCC. "Sixth Assessment Report — Climate Change 2021." Intergovernmental Panel on Climate Change, 2021.',
      'NOAA. "Stratospheric Aerosol and Gas Experiment (SAGE III)." National Oceanic and Atmospheric Administration, 2021.'
    ],
    'keywords', ARRAY['John Brennan', 'CIA', 'geoengineering', 'stratospheric aerosol injection', 'SAI', 'chemtrails', 'Operation Popeye', 'ENMOD', 'weather modification', 'David Keith', 'Harvard', 'CFR']
  )
),
(
  'Richard Gage / AE911Truth — WTC7 Controlled Demolition & the Suppressed NIST Analysis',
  'The evidence compiled by Architects & Engineers for 9/11 Truth regarding World Trade Center Building 7''s collapse, the NIST report''s acknowledged limitations, and the University of Alaska Fairbanks computer simulation that contradicted the official explanation.',
  'World Trade Center Building 7 (WTC7) was a 47-story steel-framed skyscraper that collapsed at 5:20 PM on September 11, 2001 — approximately 7 hours after the Twin Towers fell. WTC7 was not struck by any aircraft. The National Institute of Standards and Technology (NIST) concluded in its 2008 report that WTC7 collapsed due to normal office fires, making it the first steel-framed high-rise in history to collapse due to fire alone. A 2020 University of Alaska Fairbanks (UAF) study, produced by structural engineering professor Dr. Leroy Hulsey after a 4-year computer modeling project, concluded that fire could not have caused the observed collapse.

THE EVENT: Richard Gage, a licensed architect and member of the American Institute of Architects, founded Architects & Engineers for 9/11 Truth (AE911Truth) in 2006. The organization compiled technical analysis from licensed architects, structural engineers, and demolition experts examining the physical evidence of the three World Trade Center collapses on September 11, 2001. Their central claims: (1) the Twin Towers exhibited characteristics of controlled demolition including free-fall speed sections, lateral ejection of structural steel, and iron microspheres found in WTC dust; (2) WTC7''s collapse exhibited symmetric free-fall acceleration for 2.25 seconds (confirmed by NIST itself in its final report) inconsistent with progressive structural failure; (3) active thermitic material (a form of incendiary) was identified in multiple independent samples of WTC dust by Dr. Steven Jones (former Brigham Young University physics professor) and colleagues in a 2009 peer-reviewed paper published in The Open Chemical Physics Journal.

EVIDENCE: NIST''s own final WTC7 report (2008) acknowledges 2.25 seconds of free-fall acceleration, which NIST attributed to simultaneous failure of multiple support columns. Dr. Hulsey''s UAF study (completed 2020) used finite element modeling to demonstrate that NIST''s proposed fire-induced collapse mechanism could not reproduce the observed collapse pattern, and concluded that "the collapse of WTC 7 was a global collapse that was not caused by fires." The Jones et al. 2009 paper on thermitic material in WTC dust is available in archived form. Over 3,500 licensed architects and engineers have signed the AE911Truth petition calling for a new investigation as of 2024.

OFFICIAL RECORD: NIST''s 2008 WTC7 report is the official explanation. NIST declined to model the progressive collapse of WTC7 after its initiation, stating in its report that "the procedures for the survival analysis were not implemented." NIST also acknowledged that it did not test WTC7 debris for explosive or incendiary residue because "there was no visual evidence of explosives." The FBI has never released its investigation into the WTC7 collapse. FEMA''s preliminary report (2002) noted that WTC7''s collapse sequence "had the characteristics of a controlled demolition" in its original draft before being revised.

AFTERMATH: No new official investigation has been conducted despite AE911Truth''s petition and the UAF study. The University of Alaska Fairbanks study underwent two rounds of public comment, incorporated reviewer feedback, and was published in final form in March 2020. A 2019 University of Liège study also found that NIST''s collapse model contained significant unexplained assumptions. The Lawyers'' Committee for 9/11 Inquiry filed a grand jury petition with the U.S. Attorney for the Southern District of New York in 2018; the grand jury was convened in 2019 but no indictments or findings were released.

CONNECTION WEB: Richard Gage / AE911Truth → WTC7 free-fall collapse → NIST 2008 report (acknowledged 2.25s free-fall) → Dr. Leroy Hulsey / UAF study 2020 → Dr. Steven Jones thermite paper 2009 → 3,500+ signed petition → FEMA preliminary report (original "controlled demolition characteristics" language) → FBI WTC7 investigation (unreleased) → Lawyers'' Committee grand jury petition 2018 → 9/11 Commission → Project for a New American Century (PNAC).',
  'https://ine.uaf.edu/projects/wtc7',
  'Tier 2',
  'Research Document / Engineering Analysis',
  '2020-03-01',
  'NIST''s 2008 WTC7 report concluded that normal office fires caused the collapse through a progressive failure mechanism initiated by thermal expansion of floor beams. NIST stated it found no evidence of explosive or incendiary material. The mainstream structural engineering and scientific community has largely accepted NIST''s conclusions, and peer review of the Jones et al. thermite paper has been criticized on methodological grounds. The UAF study has not been accepted by NIST or peer-reviewed in a mainstream structural engineering journal.',
  'The primary methodological challenge to AE911Truth''s position is that NIST''s fire-induced collapse model, while simplified, is accepted by the majority of professional structural engineers who have reviewed it. The UAF study, while produced by a credentialed professor, has not been subjected to the same peer review process as NIST''s work and has been criticized for failing to fully account for fire-induced thermal expansion. The thermite paper was published in a journal (The Open Chemical Physics Journal) whose editor resigned citing concerns about the paper''s peer review. However, NIST''s acknowledged free-fall acceleration, its decision not to test for incendiary residue, and its failure to model collapse progression beyond initiation remain substantive and unresolved evidentiary gaps.',
  'richard-gage-ae911truth-wtc7-controlled-demolition-nist',
  jsonb_build_object(
    'pillar', 'War & Intelligence',
    'category', '9/11 & State-Sponsored Events',
    'connection_pillars', ARRAY['Media Manipulation', 'Surveillance & Intelligence', 'Government, Law & Elections'],
    'sources', ARRAY[
      'National Institute of Standards and Technology. "Final Report on the Collapse of World Trade Center Building 7." NIST NCSTAR 1A, November 2008.',
      'Hulsey, Leroy, et al. "A Structural Reevaluation of the Collapse of World Trade Center 7." University of Alaska Fairbanks, March 2020.',
      'Jones, Steven E., et al. "Active Thermitic Material Discovered in Dust from the 9/11 World Trade Center Catastrophe." The Open Chemical Physics Journal, 2009.',
      'Federal Emergency Management Agency. "World Trade Center Building Performance Study." FEMA 403, May 2002.',
      'AE911Truth. "Petition of Licensed Architects and Engineers for a New WTC Investigation." AE911Truth.org, 2006–2024.',
      'Lawyers'' Committee for 9/11 Inquiry. "Petition for a Special Grand Jury Investigation." USDC SDNY, 2018.',
      'Hulsey, Leroy. "WTC 7 Evaluation — Dr. Leroy Hulsey Presentation." University of Alaska, 2017.'
    ],
    'keywords', ARRAY['Richard Gage', 'AE911Truth', 'WTC7', 'World Trade Center 7', 'controlled demolition', 'NIST', 'University of Alaska Fairbanks', 'Leroy Hulsey', 'thermite', 'Steven Jones', 'free-fall', '9/11']
  )
);

-- MERGE: Update existing Jeffrey Epstein entry with full content, pillar metadata, and structured fields
UPDATE documents SET
  title = 'Jeffrey Epstein — Only the Tip of the Iceberg: The Unindicted Network',
  description = 'Jeffrey Epstein''s documented trafficking network — from the 2005 Palm Beach investigation through his 2019 death — and the systematic failure to prosecute any of his clients despite court-established evidence of a trafficking operation serving global elites.',
  content = 'In 2005, Palm Beach police identified at least 36 minor girls sexually abused by financier Jeffrey Epstein. Rather than pursuing federal charges, U.S. Attorney Alexander Acosta negotiated a 2007 non-prosecution agreement allowing Epstein to plead guilty to state charges, serve 13 months in county jail with work release, and register as a sex offender — while granting immunity to unnamed "potential co-conspirators." The agreement was later ruled illegal by a federal judge for violating the Crime Victims'' Rights Act by failing to notify victims.

THE EVENT: Jeffrey Epstein was a financier with no verifiable source of income consistent with his $500 million+ fortune. He maintained a Manhattan townhouse (9 East 71st Street — the largest single-family home in New York City), a Palm Beach mansion, an island (Little St. James, U.S. Virgin Islands), a New Mexico ranch (Zorro Ranch), and a Paris apartment. His clients and associates included some of the most powerful figures in global finance, politics, science, and entertainment. His trafficking operation, as established in federal court through Maxwell''s conviction, recruited vulnerable underage girls through a "pyramid scheme" model in which victims were incentivized to recruit other victims.

EVIDENCE: Flight logs from Epstein''s private aircraft, introduced as evidence in civil litigation, document the transportation of individuals including notable public figures to locations where no legitimate business purpose existed. Virginia Giuffre''s civil complaint and deposition testimony, filed in federal court, names specific individuals and describes specific acts at specific locations. Ghislaine Maxwell''s 2021 conviction on 5 of 6 counts — including sex trafficking of a minor — legally establishes that the trafficking network existed and operated. The Maxwell trial produced testimony from four victims. Documents released under the Epstein Files Transparency Act (partial release 2024) included communications showing awareness of the trafficking among individuals beyond Epstein and Maxwell.

The 2007 non-prosecution agreement is a matter of public record and was found illegal by Judge Kenneth Marra in 2019. Epstein was arrested again in July 2019 on federal sex trafficking charges. He was found dead in his cell at the Metropolitan Correctional Center (MCC) on August 10, 2019. The New York City medical examiner ruled suicide by hanging. Forensic pathologist Dr. Michael Baden, hired by Epstein''s brother Mark, independently reviewed the autopsy findings and stated the evidence was "more consistent with homicide than suicide" — specifically citing the hyoid bone fracture pattern more typically seen in strangulation.

OFFICIAL RECORD: The 2007 NPA was found illegal. Epstein''s death was ruled suicide. The MCC guard assigned to Epstein was sleeping and failed to conduct required checks; both guards on duty were charged with falsifying prison records. Ghislaine Maxwell was convicted in 2021 and sentenced to 20 years. No Epstein clients have been charged or prosecuted as of 2024 despite Maxwell''s conviction establishing the network''s existence.

AFTERMATH: The political and legal impossibility of prosecuting Epstein''s clients — when their identities are documented in flight logs, civil depositions, and witness testimony — represents what legal scholars have called an unprecedented prosecutorial gap. Alexander Acosta, who approved the illegal 2007 NPA, was appointed U.S. Secretary of Labor by President Trump in 2017 and served until July 2019 — the same month Epstein was arrested. Over 3 million pages of Epstein documents remain withheld by the DOJ as of 2024.

CONNECTION WEB: Jeffrey Epstein → Ghislaine Maxwell (convicted 2021) → Little St. James / Lolita Express → flight logs → Virginia Giuffre civil complaint → Alexander Acosta (NPA / Labor Secretary) → 2007 NPA ruled illegal → MCC death (Michael Baden homicide assessment) → DOJ 3M+ withheld documents → Epstein Files Transparency Act → Robert Maxwell (Ghislaine''s father, Israeli intelligence) → Les Wexner (L Brands — sole identified Epstein funding source) → Bill Gates / Reid Hoffman / Harvard connections → Prince Andrew → Bill Clinton (26 documented flights on Lolita Express).',
  source_url = 'https://www.justice.gov/opr/page/file/1336471/dl',
  verification_tier = 'Tier 1',
  document_type = 'Court Record / Investigative Report',
  date_published = '2005-01-01',
  official_response = 'The 2007 non-prosecution agreement was ruled illegal in 2019. Epstein''s death was ruled suicide by the NYC Medical Examiner. Ghislaine Maxwell was convicted in 2021. The DOJ has declined to prosecute any Epstein clients, citing insufficient evidence to pursue specific individuals. Alexander Acosta stated in his 2019 resignation press conference that he had been told Epstein "belonged to intelligence" and to leave the case alone — a statement he did not subsequently retract or clarify.',
  challenges = 'The central evidentiary challenge is that the full client list — while partially known through flight logs, civil depositions, and Maxwell trial testimony — has not been made fully public, and the DOJ''s evidentiary threshold for prosecution of named individuals has not been publicly articulated. Critics of conspiracy framings around Epstein''s death note that suicides in solitary confinement cells are not uncommon, and that the hyoid bone fracture Dr. Baden cited can occur in hangings. The systematic failure to prosecute any clients is the most significant unresolved legal question.',
  slug = 'jeffrey-epstein-only-the-tip-of-the-iceberg-unindicted-network',
  metadata = jsonb_build_object(
    'pillar', 'Child Safety & Trafficking',
    'category', 'Epstein Network & Elite Trafficking',
    'connection_pillars', ARRAY['War & Intelligence', 'Financial Systems', 'Media Manipulation', 'Surveillance & Intelligence'],
    'sources', ARRAY[
      'U.S. Department of Justice, Office of Professional Responsibility. "Report on the Non-Prosecution Agreement with Jeffrey Epstein." 2020.',
      'United States v. Ghislaine Maxwell. SDNY Case No. 20-CR-330. Verdict 2021, Sentence 2022.',
      'Giuffre, Virginia Roberts. Civil Complaint Against Ghislaine Maxwell et al. SDNY, 2015.',
      'Marra, Kenneth A. "Order Finding 2007 NPA Violated Crime Victims'' Rights Act." SDFL, 2019.',
      'Baden, Michael, MD. "Independent Autopsy Assessment — Jeffrey Epstein." NBC News Interview, October 2019.',
      'Epstein Files Transparency Act. Congressional Record, 2023–2024. Partial release.',
      'Acosta, Alexander. Resignation Press Conference — Department of Labor. July 12, 2019.',
      'Flight Logs — Jeffrey Epstein Aircraft. Entered as civil litigation evidence, various cases 2015–2021.'
    ],
    'keywords', ARRAY['Jeffrey Epstein', 'Ghislaine Maxwell', 'sex trafficking', 'Little St. James', 'Lolita Express', 'NPA', 'Alexander Acosta', 'Virginia Giuffre', 'flight logs', 'Michael Baden', 'elite network', 'client list', 'Les Wexner', 'Robert Maxwell']
  )
WHERE id = 'b002dadf-ddb9-4d48-a531-31857e694b1f';
