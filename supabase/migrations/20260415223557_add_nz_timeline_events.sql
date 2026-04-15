/*
  # Add New Zealand Timeline Events

  ## New Events
  1. Kaikōura Lights — 30 Dec 1978, multi-radar corroborated UFO sightings
  2. Wellington Parliament Occupation start — 6 Feb 2022
  3. Wellington Parliament Occupation end/dispersal — 2 Mar 2022

  ## Pillar Assignment
  - Kaikōura Lights → "Media Manipulation" (state dismissal, institutional framing)
  - Wellington Occupation → "Elections & Democratic Process" (civil protest, state response)
*/

INSERT INTO events (id, title, description, event_date, pillar, document_ids, metadata)
VALUES
(
  gen_random_uuid(),
  'Kaikōura Lights — Multi-Radar UFO Sightings (New Zealand)',
  'Australian TV crew (reporter Quentin Fogarty, cameraman David Crockett) filmed luminous unidentified objects on an Argosy freighter flight over Kaikōura, South Island NZ. Objects simultaneously tracked on aircraft and Wellington Airport ground radar with corroborating ground witnesses. Footage broadcast internationally. First incident had occurred 21 Dec 1978 with Safe Air cargo pilots Vern Powell and Ian Pirie. RNZAF, NZ Police, and Carter Observatory investigated; results lodged in National Archives, Wellington (1979). Official explanations (squid boats, Venus, trains, meteors) disputed. No consensus explanation reached. MLA: RNZAF. Report on Kaikōura UFOs. National Archives Wellington, 1979. | Fogarty, Quentin. Let''s Hope They''re Friendly. Amazon, 2014.',
  '1978-12-30',
  'Media Manipulation',
  '[]',
  '{"region": "New Zealand", "status": "UNRESOLVED", "tags": ["UFO", "radar", "New Zealand", "Kaikōura", "RNZAF", "1978"]}'
),
(
  gen_random_uuid(),
  'Wellington Parliament Occupation Begins — Anti-Mandate Convoy',
  'Convoys inspired by Canada''s Freedom Convoy depart Cape Reinga and Bluff on Waitangi Day (6 Feb 2022), converging on NZ Parliament grounds in Wellington ~8–9 Feb. Triggered by PM Jacinda Ardern''s vaccine mandates for health workers, teachers, police, and military (late 2021). Peak encampment reaches ~1,000 participants. Groups include Freedoms & Rights Coalition, Voices for Freedom, and NZDSOS. MLA: NPR. "New Zealand Convoy Clogs Streets Near Parliament." 8 Feb. 2022. npr.org.',
  '2022-02-06',
  'Elections & Democratic Process',
  '[]',
  '{"region": "New Zealand", "status": "DOCUMENTED", "tags": ["New Zealand", "Wellington", "protest", "anti-mandate", "Freedom Convoy", "2022"]}'
),
(
  gen_random_uuid(),
  'Wellington Parliament Occupation Dispersed — ~250 Arrests, Police Operation',
  'After 24 days, NZ Police conduct large dispersal operation on Parliament grounds. Protesters set fires to tents, playground, and temporary structures. Police respond with riot gear, pepper spray, and sponge bullets. Total arrests: ~250 (220 charged). ~40 police injuries. No protester demands met. Vaccine mandates subsequently phased out Sept 2022 as pre-planned policy — not a concession. IPCA review (20 Apr 2023) found police "served the public well overall" with noted improvement areas. MLA: Independent Police Conduct Authority. Review of Policing of Parliament Protest. IPCA, 20 Apr. 2023. ipca.govt.nz.',
  '2022-03-02',
  'Elections & Democratic Process',
  '[]',
  '{"region": "New Zealand", "status": "DOCUMENTED", "tags": ["New Zealand", "Wellington", "IPCA", "police", "arrests", "2022", "dispersal"]}'
);
