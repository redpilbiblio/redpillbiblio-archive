/*
  # Add Missing Scientists Individual Entries (Part 2: Casias, Garcia, Loureiro, Grillmair, Thomas)

  1. New Documents
    - Melissa Casias (LANL) — MISSING since June 26, 2025
    - Steven Garcia (KCNSC) — MISSING since August 28, 2025
    - Nuno Loureiro (MIT PSFC) — DECEASED, SOLVED (personal grievance homicide)
    - Carl Grillmair (Caltech IPAC) — DECEASED, SOLVED (neighbor homicide)
    - Jason Thomas (Novartis) — DECEASED, undetermined

  2. Security
    - Uses existing RLS policies on documents table

  3. Notes
    - Loureiro and Grillmair flagged as SOLVED — perpetrators identified, motives established
    - Thomas flagged as weakest institutional connection
    - Garcia pattern closely mirrors McCasland disappearance
*/

INSERT INTO documents (title, description, content, source_url, verification_tier, document_type, date_published, slug, metadata, labeled_claims, dispute_status, subcategory)
VALUES
  (
    'Melissa Casias (LANL) — Missing',
    'LANL administrative employee with DoE advisory connections. Disappeared June 26, 2025 — four days after Monica Reza vanished. Mobile devices had been factory-reset before disappearance.',
    E'CIRCUMSTANCES:\nLANL administrative employee with Department of Energy advisory connections. Disappeared June 26, 2025 — just four days after Monica Reza vanished in California. Had uncharacteristically worked from home that day. Last seen walking alone miles from her residence without wallet, phone, or keys. Most unusual detail: her mobile devices had been factory-reset before her disappearance. New Mexico State Police reported no breakthroughs as of September 2025.',
    'https://cassiopaea.substack.com/p/missing-and-dead-scientists',
    'preliminary',
    'Missing Person Report',
    '2025-06-26',
    'casias-melissa-lanl',
    '{"pillar": "War & Intelligence", "tags": ["LANL", "DoE", "Missing-Person", "New-Mexico", "Factory-Reset-Devices", "Suspicious"], "region": "United States", "year": 2025, "cluster": "missing-scientists-cluster-2023-2026"}'::jsonb,
    '[
      {"type": "DOCUMENTED", "text": "Casias disappeared June 26, 2025 — four days after Reza vanished in California"},
      {"type": "DOCUMENTED", "text": "Last seen walking alone without wallet, phone, or keys"},
      {"type": "DOCUMENTED", "text": "Mobile devices had been factory-reset before disappearance"},
      {"type": "INFERRED", "text": "Factory-reset of devices suggests either premeditation or third-party data destruction"}
    ]'::jsonb,
    'ongoing',
    'Suspicious Deaths'
  ),
  (
    'Steven Garcia (KCNSC) — Missing',
    'KCNSC government contractor and property custodian for classified nuclear weapons components. Left home on foot carrying a handgun August 28, 2025. Pattern mirrors McCasland disappearance.',
    E'CIRCUMSTANCES:\nGovernment contractor at Kansas City National Security Campus (KCNSC), which produces more than 80% of all non-nuclear components for the U.S. military nuclear weapons arsenal. Age 48. Garcia served as property custodian overseeing assets valued in the tens or hundreds of millions of dollars — some classified — requiring high-level security clearance. Surveillance footage shows him leaving home on foot August 28, wearing green camouflage, carrying a handgun. Has not been seen since. KCNSC reportedly reviewed his computers, emails, and files — found no leads. Operational pattern closely mirrors McCasland disappearance 6 months later: Albuquerque, on-foot departure, carried firearm, personal items left behind.',
    'https://cassiopaea.substack.com/p/missing-and-dead-scientists',
    'preliminary',
    'Missing Person Report',
    '2025-08-28',
    'garcia-steven-kcnsc',
    '{"pillar": "War & Intelligence", "tags": ["Nuclear-Weapons", "KCNSC", "Missing-Person", "Albuquerque", "Security-Clearance", "Firearms"], "region": "United States", "year": 2025, "cluster": "missing-scientists-cluster-2023-2026"}'::jsonb,
    '[
      {"type": "DOCUMENTED", "text": "Garcia left home on foot Aug 28, 2025 carrying handgun; has not been seen since"},
      {"type": "DOCUMENTED", "text": "KCNSC custodian of classified nuclear weapons components valued in tens/hundreds of millions"},
      {"type": "DOCUMENTED", "text": "KCNSC reviewed computers and files — found no leads"},
      {"type": "INFERRED", "text": "Operational pattern closely mirrors McCasland disappearance 6 months later: Albuquerque, on-foot, firearm, items left behind"}
    ]'::jsonb,
    'ongoing',
    'Suspicious Deaths'
  ),
  (
    'Nuno Loureiro (MIT PSFC Director) — Deceased, Solved',
    'Director of MIT Plasma Science and Fusion Center. Shot at home December 15, 2025 in personal grievance homicide. Perpetrator identified: Claudio Valente (also Brown University mass shooter).',
    E'CIRCUMSTANCES:\nDirector of MIT''s Plasma Science and Fusion Center — one of MIT''s largest labs (250+ personnel) — was shot multiple times in the foyer of his home December 15, 2025 while his family was present. Died the following morning. Age 47. World-leading plasma physicist whose research on magnetic reconnection instability triggered what the Journal of Plasma Physics called ''a decisive paradigm shift.'' Had met with IAEA Director General Rafael Grossi in 2025. Active collaborations with Commonwealth Fusion Systems (SPARC tokamak project, targeting first plasma 2027).\n\nPERPETRATOR:\nClaudio Manuel Neves Valente, 48 — Portuguese national, former Brown University student who also carried out a mass shooting at Brown''s Barus and Holley Building Dec 13, 2025 (2 killed, 9 wounded). Valente found dead by FBI SWAT Dec 18, 2025 in Salem, NH — suicide. Both Loureiro and Valente attended Instituto Superior Técnico (IST), Lisbon in the 1990s. Dominant theory: Valente fixated on Loureiro as symbol of career success he never achieved.\n\nCASE STATUS: Solved. Motive established. Perpetrator dead. Included due to significance of victim''s role (fusion center director) amid broader pattern.',
    'https://cassiopaea.substack.com/p/missing-and-dead-scientists',
    'verified',
    'Death Record',
    '2025-12-15',
    'loureiro-nuno-mit',
    '{"pillar": "War & Intelligence", "tags": ["MIT-PSFC", "Fusion", "Magnetic-Reconnection", "Homicide-Solved", "Commonwealth-Fusion", "SPARC", "IAEA", "Portugal"], "region": "United States", "year": 2025, "cluster": "missing-scientists-cluster-2023-2026"}'::jsonb,
    '[
      {"type": "DOCUMENTED", "text": "Loureiro shot at home Dec 15, 2025; perpetrator Claudio Valente identified; motive established as personal grievance"},
      {"type": "DOCUMENTED", "text": "Valente also carried out Brown University mass shooting Dec 13, 2025; found dead by FBI SWAT Dec 18"},
      {"type": "DOCUMENTED", "text": "CASE SOLVED — included due to institutional significance of MIT Plasma Science and Fusion Center director"}
    ]'::jsonb,
    'unchallenged',
    'Suspicious Deaths'
  ),
  (
    'Carl Grillmair (Caltech IPAC) — Deceased, Solved',
    'Caltech astronomer with 30 years of service and NASA Scientific Achievement Medal. Shot dead on his porch February 16, 2026 by neighbor. System failure: suspect had prior weapons arrest but charges were dropped.',
    E'CIRCUMSTANCES:\nAstronomer and astrophysicist at Caltech''s IPAC (Infrared Processing and Analysis Center) with 30 years of service. Discovered and named multiple stellar streams. Held a NASA Scientific Achievement Medal with 40+ years of expertise and hundreds of publications. Had a personal observatory with multiple telescopes at his rural Llano, CA home. Found shot dead on his porch February 16, 2026 — single gunshot wound.\n\nPERPETRATOR:\nFreddy Snyder, 29, neighbor ~2 miles away with documented erratic behavior. Snyder had been arrested December 2025 on felony weapons charges for trespassing on Grillmair''s property with a loaded unregistered rifle — but was released on his own recognizance and had charges dropped in early February 2026, just two weeks before the murder. Investigators found no clear motive; the men were not known to each other. Snyder in custody, awaiting murder trial.\n\nCASE STATUS: Solved. Included due to Caltech-NASA/JPL institutional overlap with cluster.',
    'https://cassiopaea.substack.com/p/missing-and-dead-scientists',
    'verified',
    'Death Record',
    '2026-02-16',
    'grillmair-carl-caltech',
    '{"pillar": "War & Intelligence", "tags": ["Caltech", "NASA-JPL", "IPAC", "Stellar-Streams", "Homicide-Solved", "System-Failure"], "region": "United States", "year": 2026, "cluster": "missing-scientists-cluster-2023-2026"}'::jsonb,
    '[
      {"type": "DOCUMENTED", "text": "Grillmair shot dead on his porch Feb 16, 2026; suspect Freddy Snyder in custody awaiting trial"},
      {"type": "DOCUMENTED", "text": "Snyder had prior weapons arrest for trespassing on Grillmair property — charges dropped 2 weeks before murder"},
      {"type": "DOCUMENTED", "text": "CASE SOLVED — included due to Caltech/NASA-JPL institutional overlap with cluster"}
    ]'::jsonb,
    'unchallenged',
    'Suspicious Deaths'
  ),
  (
    'Jason Thomas (Novartis) — Deceased, Undetermined',
    'Novartis pharmaceutical researcher testing cancer treatments. Disappeared ~December 2025. Remains found in Massachusetts lake March 17, 2026. Weakest institutional connection in cluster.',
    E'CIRCUMSTANCES:\nNovartis pharmaceutical researcher testing cancer treatments. Disappeared approximately December 2025 while reportedly grieving the recent deaths of both parents. Remains discovered in a Massachusetts lake March 17, 2026. No foul play suspected. Cause of death remains undetermined as of mid-April 2026.\n\nNOTE: Weakest institutional connection in the cluster — pharmaceutical research, personal circumstances consistent with grief crisis, no aerospace/nuclear/propulsion link. Included in pattern coverage due to timing and scientist status.',
    'https://cassiopaea.substack.com/p/missing-and-dead-scientists',
    'preliminary',
    'Death Record',
    '2026-03-17',
    'thomas-jason-novartis',
    '{"pillar": "War & Intelligence", "tags": ["Pharmaceutical", "Missing-Person", "Massachusetts", "Personal-Grief", "Weakest-Connection"], "region": "United States", "year": 2026, "cluster": "missing-scientists-cluster-2023-2026"}'::jsonb,
    '[
      {"type": "DOCUMENTED", "text": "Thomas disappeared ~December 2025; remains found in Massachusetts lake March 17, 2026"},
      {"type": "DOCUMENTED", "text": "No foul play suspected; cause of death remains undetermined"},
      {"type": "INFERRED", "text": "Weakest connection to cluster — pharmaceutical research with no aerospace/nuclear link; personal grief circumstances"}
    ]'::jsonb,
    'ongoing',
    'Suspicious Deaths'
  )
ON CONFLICT (slug) DO NOTHING;
