/*
  # Add Missing Scientists Individual Entries (Part 1: McCasland, Reza, Hicks, Maiwald, Chavez)

  1. New Documents
    - Maj. Gen. William Neil McCasland — MISSING since Feb 27, 2026
    - Monica Jacinto Reza — MISSING since June 22, 2025
    - Michael David Hicks — DECEASED, cause undisclosed (July 30, 2023)
    - Frank Maiwald — DECEASED, cause undisclosed (July 4, 2024)
    - Anthony Chavez — MISSING since May 4, 2025

  2. Security
    - Uses existing RLS policies on documents table

  3. Notes
    - All entries linked to missing-scientists-cluster-2023-2026
    - McCasland and Reza are the highest-significance entries
    - Hicks and Maiwald are JPL colleagues who died within 12 months
*/

INSERT INTO documents (title, description, content, source_url, verification_tier, document_type, date_published, slug, metadata, labeled_claims, dispute_status, subcategory)
VALUES
  (
    'Maj. Gen. William Neil McCasland (USAF, Ret.) — Missing',
    'Retired USAF Maj. Gen. and AFRL commander (2011-2013) with $4.4B annual R&D oversight vanished on foot from his Albuquerque home Feb 27, 2026. FBI assisting Bernalillo County Sheriff. No confirmed sightings.',
    E'CIRCUMSTANCES:\nRetired USAF Maj. Gen. and AFRL commander (2011–2013) with $4.4B annual R&D oversight vanished on foot from his Albuquerque home Feb 27, 2026. Left behind: phone (turned off), prescription glasses, smartwatch. Took: .38-cal revolver in leather holster, red backpack, hiking boots, wallet. Last seen 10:00 AM by repairman; wife called 911 at 3:07 PM. FBI Albuquerque Field Office assisting Bernalillo County Sheriff (BCSO). Gray USAF sweatshirt found ~1.25 miles east March 7 — no blood detected. Hiking boots/green shirt found at his second home in Pagosa Springs, CO (200 miles north). Silver Alert issued due to reported ''mental fog.'' No confirmed sightings in 47 days.\n\nCONNECTIONS:\n• Monica Jacinto Reza (Mondaloy co-inventor, also missing — he oversaw funding for her work)\n• Dallis Hardwick (Mondaloy co-inventor, died Jan 2014)\n• Tom DeLonge / TTSA (unpaid consultant; named in 2016 WikiLeaks/Podesta emails as UAP insider)\n• AFRL Space Vehicles Directorate, Phillips Research Site Kirtland AFB 2001–2004\n• Riverside Research (board member 2019+, classified IC/DoD research nonprofit)\n\nCONGRESSIONAL ATTENTION:\n• Rep. Eric Burlison (MO-R): "McCasland has a lot of information about UFOs — national security concern."\n• Rep. Tim Burchett (TN-R): "Dark patterns in the deaths and disappearances."\n• White House Press Secretary Karoline Leavitt acknowledged pattern April 15, 2026.\n• BCSO April 14: "We have not uncovered evidence linking disappearance to his classified work."',
    'https://www.uniladtech.com/science/space/william-neil-mccasland-ufo-links-vanish-us-scientists-missing-158153-20260323',
    'corroborated',
    'Investigation Report',
    '2026-02-27',
    'mccasland-william-neil',
    '{"pillar": "War & Intelligence", "tags": ["UAP", "AFRL", "Missing-Person", "Nuclear-Secrets", "Mondaloy", "Advanced-Propulsion", "Wright-Patterson", "WikiLeaks", "DeLonge-TTSA", "New-Mexico", "FBI-Investigation"], "region": "United States", "year": 2026, "cluster": "missing-scientists-cluster-2023-2026"}'::jsonb,
    '[
      {"type": "DOCUMENTED", "text": "McCasland vanished Feb 27, 2026 from Albuquerque home; FBI assisting BCSO; no confirmed sightings as of April 15"},
      {"type": "DOCUMENTED", "text": "Silver Alert issued; left phone, glasses, smartwatch behind; took .38-cal revolver and backpack"},
      {"type": "DOCUMENTED", "text": "Congressional members Burlison and Burchett raised national security concerns on the record"},
      {"type": "DOCUMENTED", "text": "White House acknowledged pattern April 15, 2026"},
      {"type": "INFERRED", "text": "McCasland oversaw AFRL funding chain that included Mondaloy program — connecting him directly to also-missing Monica Reza"},
      {"type": "CONTESTED", "text": "BCSO states no evidence linking disappearance to classified work; congressional members suggest otherwise"}
    ]'::jsonb,
    'ongoing',
    'Suspicious Deaths'
  ),
  (
    'Monica Jacinto Reza — Missing',
    'Senior aerospace engineer and co-inventor of Mondaloy superalloy. Vanished June 22, 2025 on Mount Waterman Trail. Months of searches found no trace.',
    E'CIRCUMSTANCES:\nSenior aerospace engineer and co-inventor of Mondaloy — a burn-resistant nickel superalloy developed with colleague Dallis Hardwick, implemented in the AR1 rocket engine that replaced the Russian RD-180 strategic dependency. After 30 years at Aerojet Rocketdyne she joined NASA-JPL as Director, Materials Processing Group. On June 22, 2025, she was hiking with two companions on the Mount Waterman Trail in Angeles National Forest. At ~9:10 AM she was observed ~30 feet behind her companion, ''smiling and waving.'' When her companion turned back moments later, she had vanished. Months of helicopter, drone, service dog, and volunteer searches found no trace. Still listed as missing person by Los Angeles County Sheriff''s Department. BCSO confirmed detectives are examining a potential connection to the McCasland disappearance.\n\nCONNECTIONS:\n• William Neil McCasland (AFRL commander whose budget directly funded Mondaloy program)\n• Dallis Hardwick (Mondaloy co-inventor, worked under McCasland at Wright-Patterson, died Jan 2014)\n• AR1 Rocket Engine program (Aerojet Rocketdyne — replacing Russian RD-180 strategic dependency)\n\nNOTE: Reza and McCasland represent the complete surviving human knowledge chain for Mondaloy — a classified strategic propulsion material. With Hardwick (2014), Reza (2025), and McCasland (2026) all now dead or missing, the entire institutional chain of custody for this technology has been disrupted.',
    'https://www.wionews.com',
    'corroborated',
    'Investigation Report',
    '2025-06-22',
    'reza-monica-jacinto',
    '{"pillar": "War & Intelligence", "tags": ["Mondaloy", "Missing-Person", "NASA-JPL", "Aerojet-Rocketdyne", "Advanced-Propulsion", "Superalloy", "AR1-Engine", "AFRL-Connection", "California"], "region": "United States", "year": 2025, "cluster": "missing-scientists-cluster-2023-2026"}'::jsonb,
    '[
      {"type": "DOCUMENTED", "text": "Reza vanished June 22, 2025 on Mount Waterman Trail; last seen 30 feet behind companion; months of searches found no trace"},
      {"type": "DOCUMENTED", "text": "Co-inventor of Mondaloy superalloy used in AR1 rocket engine replacing Russian RD-180"},
      {"type": "DOCUMENTED", "text": "BCSO confirmed cross-investigation of potential connection to McCasland disappearance"},
      {"type": "INFERRED", "text": "With Hardwick dead (2014), Reza missing (2025), and McCasland missing (2026), the entire Mondaloy knowledge chain has been disrupted"}
    ]'::jsonb,
    'ongoing',
    'Suspicious Deaths'
  ),
  (
    'Michael David Hicks — Deceased, Cause Undisclosed',
    'JPL scientist for 24 years. Contributed to 80+ scientific papers including DART asteroid deflection. Died July 30, 2023 at age 59. No cause of death disclosed.',
    E'CIRCUMSTANCES:\nJPL scientist for 24 years; contributed to 80+ scientific papers including the DART asteroid deflection project, NEAT (Near Earth Asteroid Tracking), Dawn mission, and Deep Space 1. Died July 30, 2023, approximately one year after leaving JPL. Age 59. No cause of death disclosed publicly. No autopsy details released. JPL/NASA did not comment. Obituary requests donations to Alcoholics Anonymous, suggesting possible alcohol-related illness. No institutional memorial published by JPL or NASA.',
    'https://cassiopaea.substack.com/p/missing-and-dead-scientists',
    'preliminary',
    'Death Record',
    '2023-07-30',
    'hicks-michael-david',
    '{"pillar": "War & Intelligence", "tags": ["NASA-JPL", "DART", "Unexplained-Death", "No-Cause-Disclosed"], "region": "United States", "year": 2023, "cluster": "missing-scientists-cluster-2023-2026"}'::jsonb,
    '[
      {"type": "DOCUMENTED", "text": "Hicks died July 30, 2023 at age 59 — approximately one year after leaving JPL"},
      {"type": "DOCUMENTED", "text": "No cause of death publicly disclosed; no autopsy details released; JPL/NASA did not comment"},
      {"type": "INFERRED", "text": "Obituary requests donations to Alcoholics Anonymous suggesting possible alcohol-related cause"}
    ]'::jsonb,
    'ongoing',
    'Suspicious Deaths'
  ),
  (
    'Frank Maiwald — Deceased, Cause Undisclosed',
    'JPL Principal-level scientist. Lead researcher on biosignature detection breakthrough for Europa and Enceladus. Died July 4, 2024 at age 61. No cause disclosed. No autopsy performed.',
    E'CIRCUMSTANCES:\nJPL Principal-level scientist — the highest individual contributor designation — died July 4, 2024, age 61. His work: high-frequency electronics, mass spectrometry, remote sensing instruments. June 2023 — 13 months before death — he was lead researcher on a biosignature detection breakthrough designed to detect chemical signs of life on Europa, Enceladus, and Ceres. No cause of death publicly disclosed. No autopsy performed (confirmed by officials). Only public acknowledgment was a single Legacy.com obituary. JPL and NASA did not comment or respond to media inquiries. Longtime colleague of Michael David Hicks — two JPL Principal-level deaths within 12 months.',
    'https://cassiopaea.substack.com/p/missing-and-dead-scientists',
    'preliminary',
    'Death Record',
    '2024-07-04',
    'maiwald-frank',
    '{"pillar": "War & Intelligence", "tags": ["NASA-JPL", "Biosignatures", "Europa", "Unexplained-Death", "No-Cause-Disclosed"], "region": "United States", "year": 2024, "cluster": "missing-scientists-cluster-2023-2026"}'::jsonb,
    '[
      {"type": "DOCUMENTED", "text": "Maiwald died July 4, 2024 at age 61 — no cause disclosed, no autopsy performed"},
      {"type": "DOCUMENTED", "text": "Lead researcher on biosignature detection breakthrough 13 months before death"},
      {"type": "DOCUMENTED", "text": "JPL and NASA did not comment or respond to media inquiries"},
      {"type": "INFERRED", "text": "Two JPL Principal-level scientists (Hicks and Maiwald) died within 12 months of each other"}
    ]'::jsonb,
    'ongoing',
    'Suspicious Deaths'
  ),
  (
    'Anthony Chavez (LANL, Ret.) — Missing',
    'Retired LANL employee vanished May 4, 2025 from his Los Alamos residence. Wallet, keys, and cigarettes left behind. No leads after nearly one year.',
    E'CIRCUMSTANCES:\nRetired LANL employee, age ~78–79, vanished May 4, 2025 from his Los Alamos residence. Wallet, keys, and cigarettes left on the living room table. Car locked in driveway. No signs of forced entry. No blood. Cadaver dogs found nothing. Banking transactions ceased around May 5. Los Alamos PD confirmed search remains active with no new leads after nearly one year. Geographic overlap: New Mexico, same regional pattern as Garcia and McCasland disappearances.',
    'https://cassiopaea.substack.com/p/missing-and-dead-scientists',
    'preliminary',
    'Missing Person Report',
    '2025-05-04',
    'chavez-anthony-lanl',
    '{"pillar": "War & Intelligence", "tags": ["LANL", "Missing-Person", "New-Mexico", "No-Body-Found"], "region": "United States", "year": 2025, "cluster": "missing-scientists-cluster-2023-2026"}'::jsonb,
    '[
      {"type": "DOCUMENTED", "text": "Chavez vanished May 4, 2025 from Los Alamos residence; wallet, keys left behind; car locked"},
      {"type": "DOCUMENTED", "text": "No signs of forced entry, no blood, cadaver dogs found nothing"},
      {"type": "DOCUMENTED", "text": "Los Alamos PD confirmed search active with no new leads after nearly one year"},
      {"type": "INFERRED", "text": "Geographic overlap with Garcia and McCasland disappearances in New Mexico pattern"}
    ]'::jsonb,
    'ongoing',
    'Suspicious Deaths'
  )
ON CONFLICT (slug) DO NOTHING;
