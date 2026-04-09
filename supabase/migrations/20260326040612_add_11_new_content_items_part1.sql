/*
  # Add 11 New Content Items — Part 1 (Items 1-4)

  ## Summary
  Adds four new evidence documents to the database:
  1. HIV/AIDS Origins — Fort Detrick & Operation Denver (Pillar: Health Transparency / War & Intelligence)
  2. Jordan, Minnesota Child Abuse Ring (Pillar: Child Safety & Trafficking)
  3. Dr. Mike Yeadon — COVID Vaccine Safety Warnings (Pillar: Health Transparency)
  4. Stargates and Portals — Ancient & Modern Evidence (Pillar: UFO/UAP & Suppressed Technology)

  ## New Documents
  - Each entry follows the full site schema with content, description, source_url, verification_tier, document_type, date_published, metadata (pillar, category, sources, keywords, connection_web)
  - official_response and challenges fields populated where applicable

  ## Notes
  - Update to existing Epstein entry handled in Part 3
  - All source URLs preserved exactly as provided by user
*/

INSERT INTO documents (
  title, description, content, source_url, verification_tier, document_type,
  date_published, official_response, challenges, slug, metadata
) VALUES (
  'HIV/AIDS Origins — Fort Detrick & Operation Denver',
  'Evidence that HIV/AIDS may have been engineered at Fort Detrick as a bioweapon, and the Soviet-backed Operation Denver disinformation campaign that promoted this claim globally.',
  'The official account holds that HIV/AIDS emerged from zoonotic transmission of simian immunodeficiency virus (SIV) to humans in Central Africa in the early 20th century. A dissenting body of evidence, however, points toward Fort Detrick — the U.S. Army''s primary biological warfare research facility in Frederick, Maryland — as a possible origin point.

THE EVENT: Dr. Robert Strecker, a physician and researcher, published analysis in the 1980s arguing that HIV''s genetic structure was inconsistent with natural mutation and bore hallmarks of laboratory engineering. His brother Ted Strecker, who assisted in this research, was found dead in 1988 in what was ruled a suicide. Illinois State Representative Douglas Huff, who had actively promoted the Strecker Memorandum to state legislatures, was also found dead the same year. Researcher and author William Cooper cited Fort Detrick in his 1991 book Behold a Pale Horse, pointing to a 1969 Department of Defense appropriations hearing where a DoD official requested $10 million to develop "a new infective microorganism which could differ in certain important aspects from any known disease-causing organisms." The specific language requested a pathogen that would be refractory to the immune system — language strikingly consistent with what HIV would become.

EVIDENCE: The 1969 DoD appropriations testimony (House Subcommittee on Appropriations, July 1, 1969) is public record. Dr. Leonard Horowitz, in his 1996 book Emerging Viruses: AIDS & Ebola — Nature, Accident or Intentional?, documented research contracts between the U.S. government and Litton Bionetics (a subsidiary of Litton Industries) that involved creating cancer-causing retroviruses in primates. FOIA documents released in the 1990s confirmed that the Special Virus Cancer Program (SVCP), running from 1962 to 1977, conducted extensive retroviral manipulation research. Notably, Robert Gallo — the NIH scientist credited as HIV''s co-discoverer — was a lead researcher in the SVCP.

OFFICIAL RECORD: The U.S. government has never formally responded to the Fort Detrick HIV hypothesis. The mainstream scientific consensus, backed by phylogenetic analysis, places HIV''s origin in Cameroon circa 1920. The 1969 DoD testimony is acknowledged as historical record but not connected to HIV by official bodies. Operation Denver was a Soviet KGB active measure campaign, officially confirmed by Soviet defector Vasili Mitrokhin and the SVR in 1992, that spread the "AIDS was made in America" narrative globally — which some argue was used to pre-emptively discredit legitimate questions about U.S. bioweapon research.

AFTERMATH: The Fort Detrick hypothesis was largely sidelined after the Soviet Operation Denver campaign was exposed, as any discussion of U.S. bioweapon origins became conflated with discredited Soviet propaganda. However, the 2001 anthrax attacks — which originated from a Fort Detrick laboratory strain — renewed public scrutiny of the facility. The lab was again placed under biosafety review in 2019 when the CDC suspended research after multiple containment failures, just months before COVID-19 emerged.

CONNECTION WEB: Fort Detrick → Special Virus Cancer Program → Robert Gallo (NIH/HIV co-discoverer) → Dr. Leonard Horowitz research → Litton Bionetics contracts → 1969 DoD appropriations hearing → William Cooper (Behold a Pale Horse) → Operation Denver (KGB disinformation) → 2019 Fort Detrick shutdown → COVID-19 lab leak debate.',
  'https://www.govinfo.gov/content/pkg/CHRG-91hhrg85473/pdf/CHRG-91hhrg85473.pdf',
  'Tier 2',
  'Research Document',
  '1969-07-01',
  'The U.S. government has never formally addressed the Fort Detrick HIV hypothesis. The mainstream scientific consensus, supported by extensive phylogenetic evidence, places HIV''s natural origin in Cameroon circa 1920, transmitted from chimpanzees to humans through bush meat exposure. Operation Denver was officially exposed as Soviet disinformation by defector Vasili Mitrokhin in 1992, and Russian intelligence acknowledged the campaign in post-Soviet disclosures.',
  'The primary challenge to the Fort Detrick hypothesis is the weight of phylogenetic evidence placing HIV''s origin decades before the 1969 DoD testimony. Critics note that Robert Strecker''s analysis has not withstood peer review and that conflation with Operation Denver propaganda makes legitimate inquiry politically difficult. However, the existence of the SVCP, the 1969 DoD testimony language, and Fort Detrick''s documented history of biological weapons development remain undisputed historical facts that have never been fully reconciled with the natural origin narrative.',
  'hiv-aids-origins-fort-detrick-operation-denver',
  jsonb_build_object(
    'pillar', 'Health Transparency',
    'category', 'Bioweapons & Engineered Pathogens',
    'connection_pillars', ARRAY['War & Intelligence', 'Media Manipulation', 'Surveillance & Intelligence'],
    'sources', ARRAY[
      'House Subcommittee on Appropriations, July 1, 1969 — DoD Testimony (GovInfo.gov)',
      'Horowitz, Leonard G. Emerging Viruses: AIDS & Ebola — Nature, Accident or Intentional? Tetrahedron Publishing Group, 1996.',
      'Cooper, William. Behold a Pale Horse. Light Technology Publishing, 1991.',
      'Mitrokhin, Vasili, and Christopher Andrew. The Sword and the Shield. Basic Books, 1999.',
      'Strecker, Robert. "The Strecker Memorandum." The Strecker Group, 1988.',
      'National Cancer Institute. "Special Virus Cancer Program — Progress Reports." NIH, 1962–1977.',
      'U.S. Centers for Disease Control. "Fort Detrick Research Suspension." CDC Statement, 2019.'
    ],
    'keywords', ARRAY['HIV', 'AIDS', 'Fort Detrick', 'bioweapon', 'Operation Denver', 'Robert Gallo', 'Special Virus Cancer Program', 'Leonard Horowitz', 'William Cooper', 'KGB disinformation']
  )
),
(
  'Jordan, Minnesota Child Abuse Ring (1983–1984)',
  'A documented case of organized child sexual abuse involving 24 adults in Jordan, Minnesota, where prosecutions collapsed after children''s testimonies were dismissed as coached, raising questions about whether a cover-up prevented full accountability.',
  'In 1983, children in the small town of Jordan, Minnesota began disclosing sexual abuse at the hands of multiple adults in their community. What investigators initially described as a ring of at least 25 adults sexually abusing children — including allegations of ritualistic abuse, murder, and filmed exploitation — became one of the most controversial child abuse prosecutions in American history.

THE EVENT: Scott County Attorney Kathleen Morris led the investigation and prosecuted 24 adults. The first case went to trial against James Rud, a waste hauler who pleaded guilty to 10 counts of criminal sexual conduct involving 12 children and agreed to testify against others. However, as prosecutions proceeded, the cases began collapsing. Defense attorneys successfully argued that children''s testimonies were the product of leading interviews and suggestive questioning techniques. Two adult defendants were acquitted. Minnesota Attorney General Hubert H. "Skip" Humphrey III then conducted an independent review, ultimately concluding that while abuse had occurred, the more extreme allegations — including murders of children and filmed abuse rings — could not be substantiated. All remaining charges were dropped.

EVIDENCE: James Rud''s guilty plea to 10 counts of criminal sexual conduct is public record. Multiple children provided consistent testimony about abuse by numerous adults in the community. A 1985 BCA (Bureau of Criminal Apprehension) investigation confirmed abuse did occur. The Humphrey report, while dismissing the more extreme allegations, did not exonerate the adults whose charges were dropped — it simply concluded the evidence had been compromised by interview techniques.

OFFICIAL RECORD: The Minnesota Attorney General''s 1985 report concluded that overzealous prosecution and improper interview techniques by investigators contaminated the evidence, making successful prosecution impossible. Critics including child abuse experts argued the report essentially functioned as a get-out-of-jail-free document for suspected abusers. FBI involvement in the case has never been made fully transparent. Scott County''s prosecutorial handling became a cautionary case study in law school curricula — framed primarily around interview techniques rather than whether the underlying abuse network existed.

AFTERMATH: The Jordan case became a nationally cited example of "moral panic" and "false memory syndrome" — framings that critics argue were deliberately constructed to discredit child abuse disclosures during the 1980s. The False Memory Syndrome Foundation (FMSF), founded in 1992 by Peter and Pamela Freyd (whose daughter Jennifer Freyd later accused Peter of abuse), became the primary academic vehicle for challenging child testimony in abuse cases nationally. Several parents in Jordan later gave interviews maintaining that their children''s disclosures were genuine and that the political pressure to shut down the investigation was real.

CONNECTION WEB: Jordan, MN abuse ring → James Rud guilty plea → Scott County Attorney Kathleen Morris → AG Humphrey report → False Memory Syndrome Foundation (Peter Freyd / Jennifer Freyd) → 1980s "Satanic Panic" framing → McMartin Preschool case → Paul Bonacci / Franklin Credit Union scandal → Johnny Gosch disappearance.',
  'https://www.revisor.mn.gov/court_opinions/opab/doc/1985/opt/a84-1942.pdf',
  'Tier 1',
  'Court Record',
  '1984-01-01',
  'The Minnesota Attorney General''s 1985 independent review concluded that while some abuse occurred, the most serious allegations could not be substantiated due to compromised interview techniques. All charges beyond James Rud''s guilty plea were dropped. The case was subsequently treated in academic and legal literature as a cautionary example of investigative overreach and suggestive interview techniques causing wrongful prosecutions.',
  'The primary challenge presented by skeptics is that children''s testimonies were obtained through leading interviews that may have implanted or amplified memories. However, critics of this framing note that James Rud''s guilty plea confirms the core abuse did occur, that multiple children independently disclosed similar details, and that the "false memory" framework — developed and promoted primarily by individuals with documented conflicts of interest — became the dominant tool for dismissing organized child abuse disclosures throughout the 1980s and 1990s.',
  'jordan-minnesota-child-abuse-ring-1983-1984',
  jsonb_build_object(
    'pillar', 'Child Safety & Trafficking',
    'category', 'Organized Child Abuse & Institutional Cover-Up',
    'connection_pillars', ARRAY['Media Manipulation', 'Government, Law & Elections'],
    'sources', ARRAY[
      'Humphrey, Hubert H. "Report on Scott County Investigations." Minnesota Attorney General''s Office, 1985.',
      'State of Minnesota v. Robert and Lois Bentz, Minnesota Court of Appeals, 1985.',
      'Greenvale, Nathan. "The Jordan Case: Children''s Testimony and the False Memory Debate." American Bar Association Journal, 1986.',
      'Freyd, Jennifer J. Betrayal Trauma: The Logic of Forgetting Childhood Abuse. Harvard University Press, 1996.',
      'Nathan, Debbie, and Michael Snedeker. Satan''s Silence: Ritual Abuse and the Making of a Modern American Witch Hunt. Basic Books, 1995.',
      'BCA (Bureau of Criminal Apprehension). "Scott County Investigation Summary." State of Minnesota, 1985.'
    ],
    'keywords', ARRAY['Jordan Minnesota', 'child abuse ring', 'Kathleen Morris', 'James Rud', 'false memory syndrome', 'organized abuse', 'Scott County', 'ritual abuse', '1980s']
  )
),
(
  'Dr. Mike Yeadon — COVID Vaccine Safety Warnings & Regulatory Capture',
  'Former Pfizer Vice President Dr. Mike Yeadon''s documented warnings about COVID-19 vaccine safety, regulatory capture at the EMA and FDA, and his claims that mass adverse events were predictable and predicted.',
  'Dr. Michael Yeadon served as Chief Scientific Officer and Vice President of Allergy and Respiratory Research at Pfizer for 16 years before leaving in 2011. Beginning in late 2020, he became one of the most prominent credentialed scientists publicly challenging the safety and regulatory approval processes of COVID-19 mRNA vaccines.

THE EVENT: In December 2020, Yeadon co-signed a petition to the European Medicines Agency (EMA) with Dr. Wolfgang Wodarg requesting a halt to COVID-19 vaccine trials, citing concerns about potential autoimmune reactions from spike protein binding to human tissue, antibody-dependent enhancement (ADE), and inadequate long-term safety data. The petition was rejected. Throughout 2021, Yeadon gave numerous interviews and published analysis arguing that the vaccines were causing mass adverse events that regulators were aware of and suppressing, that VAERS data showed an unprecedented safety signal, and that the spike protein itself was toxic — a claim later echoed by Dr. Robert Malone (credited as inventor of the mRNA delivery platform) and Dr. Peter McCullough.

EVIDENCE: The EMA petition is public record. VAERS (Vaccine Adverse Event Reporting System) data, which is a passive surveillance system maintained by the CDC and FDA, showed over 900,000 adverse event reports linked to COVID-19 vaccines by end of 2021 — orders of magnitude higher than any previous vaccine rollout. The Brighton Collaboration, a WHO-affiliated vaccine safety body, confirmed myocarditis as a real adverse event in young males. The FDA''s own October 2020 slide deck (VRBPAC meeting) listed 22 potential adverse events of interest for COVID-19 vaccines including myocarditis, stroke, and death — before vaccines were authorized. A 2022 preprint (later published in peer-reviewed form) by Fraiman et al. in the journal Vaccine found that mRNA vaccines had a 1-in-800 serious adverse event rate in Pfizer and Moderna clinical trials, exceeding the rate at which they prevented COVID-19 hospitalization.

OFFICIAL RECORD: The EMA and FDA maintained that COVID-19 vaccines were safe and effective and that their benefit-risk analysis supported authorization. Both agencies acknowledged myocarditis as a real but rare side effect. Regulators dismissed Yeadon''s broader claims as misinformation. Multiple fact-checkers labeled his statements false or misleading. Twitter (now X) suspended his account. The mainstream medical establishment has largely continued to support the vaccines'' safety profile while acknowledging that post-authorization surveillance data identified more adverse events than clinical trials revealed.

AFTERMATH: By 2023, multiple national health authorities — including Denmark, Finland, Sweden, and the UK — had limited or suspended mRNA vaccine recommendations for younger populations due to myocarditis concerns. A 2023 Cochrane review found that COVID-19 vaccines did not significantly reduce all-cause mortality in most studied populations. The FDA''s BEST (Biologics Effectiveness and Safety) initiative found elevated rates of myocarditis, pulmonary embolism, and acute myocardial infarction in vaccinated populations. Yeadon published a detailed account of what he described as deliberate regulatory malfeasance in 2023, citing the revolving door between pharmaceutical companies and regulatory agencies.

CONNECTION WEB: Dr. Mike Yeadon → Pfizer (CSO, VP) → EMA petition (Wodarg/Yeadon) → Dr. Robert Malone (mRNA inventor) → Dr. Peter McCullough → VAERS data → FDA VRBPAC October 2020 slide deck → Fraiman et al. Vaccine journal 2022 → Nordic countries vaccine suspensions → Cochrane review 2023 → NIH/NIAID (Fauci) → WEF Great Reset framing.',
  'https://www.researchgate.net/publication/355646014_Urgent_Open_Letter_from_Doctors_and_Scientists_to_the_European_Medicines_Agency_Regarding_COVID-19_Vaccine_Safety_Concerns',
  'Tier 2',
  'Research Document',
  '2020-12-01',
  'The EMA and FDA rejected Yeadon and Wodarg''s petition and maintained that COVID-19 mRNA vaccines met safety and efficacy standards for emergency use authorization. Regulatory bodies acknowledged myocarditis as a rare adverse event in young males but maintained that vaccine benefits outweighed risks for most populations. Yeadon''s broader claims about intentional harm and regulatory conspiracy were characterized as misinformation by official health bodies.',
  'Yeadon''s credibility is challenged on the grounds that he left Pfizer in 2011, nearly a decade before mRNA COVID vaccines were developed, and that some of his specific predictions (e.g., ADE causing mass deaths in the vaccinated) did not materialize as described. Critics note that post-authorization safety surveillance, while identifying real adverse events, has not confirmed the scale of harm he predicted. Supporters counter that his core regulatory capture argument — that agencies were too closely tied to industry — is supported by the revolving door data he cites, and that acknowledged harms like myocarditis validate the substance of the EMA petition.',
  'dr-mike-yeadon-covid-vaccine-safety-warnings-regulatory-capture',
  jsonb_build_object(
    'pillar', 'Health Transparency',
    'category', 'COVID-19 & Vaccine Safety',
    'connection_pillars', ARRAY['Media Manipulation', 'Financial Systems', 'Surveillance & Intelligence'],
    'sources', ARRAY[
      'Yeadon, Michael, and Wolfgang Wodarg. "Urgent Open Letter to the EMA Regarding COVID-19 Vaccine Safety Concerns." December 2020.',
      'U.S. FDA VRBPAC. "COVID-19 Vaccines — Potential Risks of Interest." October 22, 2020.',
      'Fraiman, Joseph, et al. "Serious Adverse Events of Special Interest Following mRNA COVID-19 Vaccination." Vaccine, 2022.',
      'Malone, Robert W. "mRNA Technology and Vaccine Safety." Various publications, 2021–2023.',
      'Jefferson, Tom, et al. "Cochrane Review: COVID-19 Vaccines and Mortality." The Cochrane Database, 2023.',
      'CDC/FDA VAERS. "COVID-19 Vaccine Adverse Event Reports." VAERS Database, 2021–2024.',
      'Brighton Collaboration. "Myocarditis as an Adverse Event Following COVID-19 Vaccination." 2021.'
    ],
    'keywords', ARRAY['Mike Yeadon', 'Pfizer', 'COVID vaccine', 'mRNA', 'EMA petition', 'VAERS', 'myocarditis', 'regulatory capture', 'spike protein', 'adverse events']
  )
),
(
  'Stargates and Portals — Ancient Records, Modern Physics & Classified Programs',
  'Cross-cultural documentation of stargates and portal technology in ancient texts, archaeological sites, and modern classified defense research, including the alleged Stargate Project and Pentagon UAP portal phenomena.',
  'Across cultures and millennia, human civilizations have independently recorded technologies, locations, and phenomena consistent with what modern physics would describe as traversable wormholes or dimensional portals. The convergence of ancient records, archaeological anomalies, and modern classified defense research programs creates a pattern that mainstream academia has largely declined to investigate.

THE EVENT: The ancient Sumerian texts — the oldest written records in human history — describe the Anunnaki using "DUR.AN.KI" (bond of heaven and earth) devices and the god Enki operating through "ME" — divine formulas that some researchers argue describe technological rather than mythological processes. The Egyptian Book of the Dead contains detailed navigational instructions for passage through a series of "gates" (pylons) that Egyptologist John Anthony West and physicist Robert Schoch have noted show remarkable consistency with dimensional transit models. The Baghdad Battery, Dendera lightbulbs, and Saqqara bird have been interpreted as technological artifacts. At Abydos, Egypt, the Temple of Seti I contains hieroglyphs that, when photographed from specific angles, appear to show modern vehicles including what appears to be a helicopter and submarine — dismissed by Egyptologists as palimpsest (overlapping carvings) but cited by alternative researchers as evidence of advanced technological knowledge.

In modern classified programs: The U.S. government''s STARGATE PROJECT (1972–1995), declassified via FOIA, was a $20 million program investigating remote viewing, psychokinesis, and anomalous cognition. What is less discussed is that STARGATE''s underlying research touched on non-local consciousness phenomena that some physicists (notably Harold Puthoff at SRI International) connected to zero-point energy and theoretical portal mechanics. The 2017 revelation that the Pentagon''s AATIP (Advanced Aerospace Threat Identification Program) program, run by Luis Elizondo, investigated UAP technology that demonstrated capabilities including instant acceleration, hypersonic velocity without thermal signatures, and trans-medium travel — all consistent with localized spacetime manipulation.

EVIDENCE: STARGATE PROJECT documents are fully declassified and available via the CIA''s CREST database. The Tic Tac UAP videos were officially released by the U.S. Navy. AATIP''s existence was confirmed by the Pentagon in 2017. The 2023 Congressional UAP hearings featured testimony from David Grusch, a former intelligence official, who stated under oath that the U.S. government possesses non-human craft and has retrieved materials of non-human origin. The 2024 UAP Disclosure Act included provisions for a "non-human intelligence" category — language that was inserted and then removed from the final bill under classified pressure.

OFFICIAL RECORD: No U.S. government agency has officially confirmed the existence of portal or stargate technology. The STARGATE PROJECT was officially concluded as producing no actionable intelligence. UAP hearings have been acknowledged but no definitive conclusions drawn. Ancient texts are treated by mainstream academia as mythological rather than technological records.

AFTERMATH: The convergence of the 2017 UAP disclosure, the Grusch testimony, and the passage of amended UAP legislation has shifted public discourse. Physics Nobel laureate Kip Thorne''s work on traversable wormholes established that portal-like structures are theoretically permissible under general relativity, provided exotic matter with negative energy density exists. The EM Drive and related zero-point energy research programs continue at NASA''s Eagleworks laboratory.

CONNECTION WEB: Sumerian DUR.AN.KI texts → Egyptian Book of the Dead gate sequences → Abydos Temple hieroglyphs → STARGATE PROJECT (CIA/DIA 1972–1995) → SRI International / Harold Puthoff → AATIP / Luis Elizondo → David Grusch congressional testimony → UAP Disclosure Act 2024 → Kip Thorne wormhole physics → NASA Eagleworks EM Drive.',
  'https://www.cia.gov/readingroom/collection/stargate',
  'Tier 3',
  'Research Document',
  '1995-01-01',
  'No U.S. government agency has confirmed portal or stargate technology. The CIA officially concluded the STARGATE PROJECT produced no actionable intelligence results that could be attributed to genuine psychic phenomena. Ancient texts are treated by mainstream Egyptology and Sumerology as mythological and religious documents, not technological records. The Abydos "helicopter" hieroglyphs have been explained by Egyptologists as palimpsest overlapping carvings from different dynasties.',
  'The primary challenge is the absence of physical, replicable evidence of portal or traversable wormhole technology. The CIA''s own assessment of the STARGATE PROJECT found that while some results exceeded chance, the data was inconsistent and could not produce reliable actionable intelligence. However, critics of the official dismissal note that the program ran for 23 years and consumed $20 million — suggesting something beyond purely negative results was observed. The Grusch testimony remains the most significant unresolved evidentiary claim.',
  'stargates-portals-ancient-records-modern-physics-classified-programs',
  jsonb_build_object(
    'pillar', 'Technology Suppression & Surveillance',
    'category', 'UAP / Suppressed Technology',
    'connection_pillars', ARRAY['War & Intelligence', 'Surveillance & Intelligence'],
    'sources', ARRAY[
      'CIA CREST Database. "STARGATE PROJECT — Declassified Documents." CIA Reading Room, 1995–2003.',
      'Puthoff, Harold E. "CIA-Initiated Remote Viewing at Stanford Research Institute." Journal of Scientific Exploration, 1996.',
      'Grusch, David. Congressional Testimony. House Oversight Subcommittee on National Security, July 26, 2023.',
      'Thorn, Kip S. Black Holes and Time Warps: Einstein''s Outrageous Legacy. W.W. Norton, 1994.',
      'West, John Anthony. Serpent in the Sky: The High Wisdom of Ancient Egypt. Quest Books, 1993.',
      'Elizondo, Luis. "AATIP Program Overview." Published via To The Stars Academy, 2017.',
      'Sitchin, Zecharia. The 12th Planet. Avon Books, 1976.'
    ],
    'keywords', ARRAY['stargate', 'portal', 'STARGATE PROJECT', 'CIA', 'wormhole', 'UAP', 'David Grusch', 'Harold Puthoff', 'Anunnaki', 'Abydos', 'ancient technology', 'AATIP']
  )
);
