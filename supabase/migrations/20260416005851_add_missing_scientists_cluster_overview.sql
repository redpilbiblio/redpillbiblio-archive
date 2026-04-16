/*
  # Add Missing Scientists Cluster (2023-2026) Overview Document

  1. New Documents
    - Missing Scientists Pattern cluster overview (2023-2026)
      - Covers 10 deaths/disappearances of scientists and officials
      - Centers on Maj. Gen. William Neil McCasland disappearance (Feb 27, 2026)
      - Institutional connections: NASA-JPL, LANL, MIT-PSFC, Caltech, AFRL, KCNSC

  2. Security
    - Uses existing RLS policies on documents table

  3. Notes
    - Cluster overview document linking individual entries
    - Congressional attention documented (Rep. Burlison, Rep. Burchett)
    - White House acknowledgment April 15, 2026
*/

INSERT INTO documents (title, description, content, source_url, verification_tier, document_type, date_published, slug, metadata, labeled_claims, official_response, mainstream_framing, challenges, dispute_status, subcategory)
VALUES (
  'The Missing Scientists Pattern (2023–2026)',
  'Since July 2023, at least 10 individuals connected to NASA-JPL, Los Alamos National Laboratory, MIT Plasma Science and Fusion Center, Caltech, and the Air Force Research Laboratory have died or disappeared. The cluster centers on retired USAF Maj. Gen. William Neil McCasland, missing since Feb 27, 2026. His professional connection to missing NASA engineer Monica Jacinto Reza runs through Mondaloy, a classified nickel superalloy for rocket engines. Law enforcement has found no coordinated link. Congress has taken notice. The White House acknowledged the pattern on April 15, 2026.',
  E'TIMELINE OF CASES:\n\n1. Michael David Hicks (July 30, 2023) — DECEASED, cause undisclosed\n   JPL scientist for 24 years; contributed to 80+ scientific papers including DART asteroid deflection. Died age 59, approximately one year after leaving JPL. No cause of death disclosed publicly.\n\n2. Frank Maiwald (July 4, 2024) — DECEASED, cause undisclosed\n   JPL Principal-level scientist (highest individual contributor designation). Died age 61. Lead researcher on biosignature detection breakthrough for Europa, Enceladus, and Ceres (June 2023). Longtime colleague of Hicks — two JPL Principal-level deaths within 12 months. No cause of death disclosed. No autopsy performed.\n\n3. Anthony Chavez (May 4, 2025) — MISSING, 1+ year\n   Retired LANL employee, age ~78–79. Vanished from Los Alamos residence. Wallet, keys, and cigarettes left on table. Car locked. No signs of forced entry. Banking ceased around May 5. No leads after nearly one year.\n\n4. Monica Jacinto Reza (June 22, 2025) — MISSING\n   NASA-JPL Director, Materials Processing Group; formerly Aerojet Rocketdyne Technical Fellow (30 years). Co-inventor of Mondaloy — a burn-resistant nickel superalloy for the AR1 rocket engine. Vanished on Mount Waterman Trail. Last seen smiling and waving ~30 feet behind companion; when companion turned back moments later, she had vanished. Months of searches found no trace.\n\n5. Melissa Casias (June 26, 2025) — MISSING\n   LANL administrative employee with DoE advisory ties. Disappeared just four days after Reza. Had uncharacteristically worked from home that day. Last seen walking alone without wallet, phone, or keys. Most unusual detail: her mobile devices had been factory-reset before disappearance.\n\n6. Steven Garcia (August 28, 2025) — MISSING\n   KCNSC government contractor. Property custodian overseeing classified assets valued in tens/hundreds of millions. High-level security clearance. Left home on foot carrying handgun, wearing green camouflage. Pattern closely mirrors McCasland disappearance 6 months later.\n\n7. Nuno Loureiro (December 15, 2025) — DECEASED, SOLVED\n   MIT Plasma Science and Fusion Center Director. Shot multiple times at home. Perpetrator: Claudio Manuel Neves Valente (personal grievance, also mass shooter at Brown University Dec 13). CASE SOLVED — included due to institutional significance.\n\n8. Carl Grillmair (February 16, 2026) — DECEASED, SOLVED\n   Caltech IPAC astronomer, 30 years. NASA Scientific Achievement Medal. Found shot dead on porch. Suspect: Freddy Snyder, neighbor with prior weapons arrest. CASE SOLVED — included due to institutional overlap.\n\n9. William Neil McCasland (February 27, 2026) — MISSING\n   Retired USAF Maj. Gen. AFRL commander (2011–2013) with $4.4B annual R&D oversight. Vanished on foot from Albuquerque home. Left phone, glasses, smartwatch. Took .38-cal revolver, backpack. Gray USAF sweatshirt found ~1.25 miles east. No confirmed sightings. FBI assisting BCSO. White House acknowledged pattern April 15, 2026.\n\n10. Jason Thomas (found March 17, 2026) — DECEASED, undetermined\n    Novartis pharmaceutical researcher. Disappeared ~December 2025. Remains found in Massachusetts lake. Weakest institutional connection in cluster.\n\nTECHNOLOGY CONTEXT — WHY MONDALOY AND ANEUTRONIC FUSION MATTER:\nThe institutional connections trace back to two advanced propulsion technologies. Mondaloy is a burn-resistant nickel superalloy co-developed by Monica Reza and Dallis Hardwick in the 1990s, incorporated into the AR1 rocket engine ending U.S. dependence on Russian RD-180 engines. Aneutronic fusion (proton-Boron 11) yields only charged alpha particles convertible to electricity/thrust at 70–90% efficiency. McCasland''s AFRL Propulsion and Space Vehicle Directorates investigated these technologies. Loureiro''s MIT PSFC was building toward plasma confinement for fusion systems.\n\nCONGRESSIONAL ATTENTION:\n• Rep. Eric Burlison (MO-R): "McCasland has a lot of information about UFOs — national security concern."\n• Rep. Tim Burchett (TN-R): "Dark patterns in the deaths and disappearances."\n• White House Press Secretary Karoline Leavitt acknowledged the pattern on April 15, 2026.\n• BCSO April 14, 2026: "We have not uncovered evidence linking disappearance to his classified work."',
  'https://cassiopaea.substack.com/p/missing-and-dead-scientists',
  'corroborated',
  'Investigation Report',
  '2026-04-15',
  'missing-scientists-cluster-2023-2026',
  '{"pillar": "War & Intelligence", "tags": ["UAP", "AFRL", "JPL", "LANL", "MIT-PSFC", "Mondaloy", "Aneutronic-Fusion", "Missing-Persons", "Nuclear-Weapons", "Advanced-Propulsion", "Congressional-Oversight"], "region": "United States", "year": 2026}'::jsonb,
  '[
    {"type": "DOCUMENTED", "text": "10 individuals connected to NASA-JPL, LANL, MIT-PSFC, Caltech, and AFRL have died or disappeared since July 2023"},
    {"type": "DOCUMENTED", "text": "Maj. Gen. McCasland missing since Feb 27, 2026 — no confirmed sightings; FBI assisting BCSO"},
    {"type": "DOCUMENTED", "text": "Monica Reza vanished June 22, 2025 on Mount Waterman Trail — months of searches found no trace"},
    {"type": "DOCUMENTED", "text": "Congressional attention: Rep. Burlison and Rep. Burchett raised national security concerns on the record"},
    {"type": "DOCUMENTED", "text": "White House Press Secretary Karoline Leavitt acknowledged the pattern April 15, 2026"},
    {"type": "DOCUMENTED", "text": "Two cases (Loureiro, Grillmair) are solved homicides with identified perpetrators and established motives unrelated to research"},
    {"type": "INFERRED", "text": "Reza, Hardwick (2014), and McCasland represent the complete surviving knowledge chain for Mondaloy — all now dead or missing"},
    {"type": "CONTESTED", "text": "Law enforcement states no evidence linking disappearances to classified work; congressional members suggest otherwise"}
  ]'::jsonb,
  'BCSO April 14, 2026: "We have not uncovered evidence linking disappearance to his classified work." No federal agency has announced a coordinated investigation into the pattern.',
  'Mainstream coverage treats each case individually. The cluster pattern has been covered primarily by investigative journalists and independent researchers. Congressional attention has brought mainstream visibility since March 2026.',
  'Congressional members have raised national security concerns on the record. The Mondaloy knowledge chain disruption (Hardwick dead 2014, Reza missing 2025, McCasland missing 2026) represents a documented loss of institutional knowledge for a classified strategic propulsion material. The factory-reset devices in the Casias case and operational parallels between Garcia and McCasland disappearances have been noted by investigators.',
  'ongoing',
  'Suspicious Deaths'
)
ON CONFLICT (slug) DO NOTHING;
