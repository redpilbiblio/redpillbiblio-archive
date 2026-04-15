/*
  # Add New Zealand Regional Evidence Documents

  ## New Documents
  1. Pre-Māori Settlement Theories — debunked pseudohistory used politically against Treaty settlements
  2. Kaikōura Lights 1978 — multi-radar corroborated UFO sightings, unresolved
  3. 2022 Wellington Parliament Occupation — IPCA-reviewed, documented anti-mandate protest

  ## Fields
  - verification_tier: 'preliminary' for unresolved/debunked; 'corroborated' for IPCA-documented
  - dispute_status: 'partially_debunked' | 'ongoing' | 'unchallenged'
  - document_type: 'Investigation Report' | 'government_report'
  - metadata: includes tags and region
*/

INSERT INTO documents (
  id, title, slug, description, content, source_url,
  verification_tier, document_type, date_published,
  metadata, dispute_status, labeled_claims, has_mirror
) VALUES
(
  gen_random_uuid(),
  'Pre-Māori Settlement Theories (New Zealand)',
  'pre-maori-settlement-theories-nz',
  'Colonial pseudohistory claiming Celts, Egyptians, or "red-haired giants" preceded Māori in Aotearoa. Used politically to undermine Treaty of Waitangi settlements. Debunked by archaeologists — Polynesian settlement dated 1250–1300 CE via Pacific rat DNA analysis (Wilmshurst et al., PNAS, 2008).',
  'Colonial pseudohistory claiming Celts, Egyptians, or "red-haired giants" preceded Māori in Aotearoa. Used politically to undermine Treaty of Waitangi settlements. Debunked by archaeologists — Polynesian settlement dated 1250–1300 CE via Pacific rat DNA analysis (Wilmshurst et al., PNAS, 2008). Key artifacts: Martin Doutré, Ancient Celtic New Zealand (1999); Kaimanawa Wall — confirmed natural ignimbrite formation by NZ Skeptics Journal (Ritchie, 1996); TVNZ pulled documentary Skeletons in the Cupboard (2018) after RNZ Mediawatch called it pseudo-science. Moriori sub-myth — debunked: Moriori are distinct Polynesian settlers of Rēkohu (Chathams), not mainland victims of Māori (Te Ara Encyclopedia of NZ, 2004). Status: DEBUNKED — academic consensus, no credible physical evidence. MLA: Wilmshurst, Janet M., et al. "Dating the Late Prehistoric Dispersal of Polynesians to New Zealand." PNAS, vol. 105, no. 22, 2008. | Mills, Keri. "The Moriori Myth." The Spinoff, 3 Aug. 2018. | Rose, Jeremy. "TVNZ Pulls Doco Peddling Pre-Māori Pseudo-Science." The Spinoff, 18 Aug. 2018.',
  NULL,
  'preliminary',
  'Investigation Report',
  '2008-01-01',
  '{"tags": ["New Zealand", "pseudohistory", "Treaty of Waitangi", "archaeology", "Māori", "debunked"], "region": "New Zealand", "status_label": "DEBUNKED"}',
  'partially_debunked',
  '[{"type": "DOCUMENTED", "text": "Polynesian settlement of New Zealand dated 1250–1300 CE by Pacific rat DNA analysis (Wilmshurst et al., PNAS, 2008)"}, {"type": "DOCUMENTED", "text": "Kaimanawa Wall confirmed as natural ignimbrite formation (NZ Skeptics Journal, Ritchie, 1996)"}, {"type": "DOCUMENTED", "text": "TVNZ pulled documentary Skeletons in the Cupboard (2018) after RNZ Mediawatch called it pseudo-science"}, {"type": "CONTESTED", "text": "Pre-Māori Celtic/Egyptian settlement claims — no credible physical evidence, rejected by archaeological consensus"}]',
  false
),
(
  gen_random_uuid(),
  'Kaikōura Lights — 1978 UFO Sightings (New Zealand)',
  'kaikoura-lights-1978-nz',
  'Series of UFO sightings over Kaikōura, South Island NZ in December 1978. Multi-radar corroborated across Wellington Airport radar, aircraft radar, and ground witnesses. Australian TV crew filmed luminous objects; footage broadcast internationally. RNZAF and NZ Police investigated; results lodged in National Archives, Wellington (1979). No consensus explanation reached.',
  'Series of UFO sightings over Kaikōura, South Island NZ. First incident: 21 Dec 1978 — Safe Air cargo pilots Vern Powell and Ian Pirie reported lights surrounding their aircraft; simultaneously tracked on Wellington Airport radar with corroborating ground witnesses. Second incident: 30 Dec 1978 — Australian TV crew (reporter Quentin Fogarty, cameraman David Crockett) filmed luminous objects on an Argosy freighter flight; objects simultaneously tracked on aircraft and ground radar. Footage broadcast internationally. RNZAF, NZ Police, and Carter Observatory investigated; results lodged in National Archives, Wellington (1979). Ministry of Defence proposed squid boats, Venus, trains, meteors as explanations. DSIR scientist Bill Ireland (1982 BBC documentary) concluded squid boat lights most likely. No consensus explanation reached. Status: UNRESOLVED — multi-radar corroboration documented; official explanation disputed. MLA: "Kaikōura Lights." Wikipedia, en.wikipedia.org/wiki/Kaikoura_lights. | RNZAF. Report on Kaikōura UFOs. National Archives Wellington, 1979. | Fogarty, Quentin. Let''s Hope They''re Friendly. Amazon, 2014.',
  'https://en.wikipedia.org/wiki/Kaikoura_lights',
  'corroborated',
  'Investigation Report',
  '1978-12-30',
  '{"tags": ["New Zealand", "UFO", "Kaikōura", "radar", "RNZAF", "1978", "unresolved"], "region": "New Zealand", "status_label": "UNRESOLVED"}',
  'ongoing',
  '[{"type": "DOCUMENTED", "text": "Objects simultaneously tracked on Wellington Airport radar, aircraft radar, and by ground witnesses on 21 Dec 1978"}, {"type": "DOCUMENTED", "text": "Australian TV crew filmed luminous objects on Argosy freighter flight 30 Dec 1978; footage broadcast internationally"}, {"type": "DOCUMENTED", "text": "RNZAF investigation results lodged in National Archives, Wellington (1979)"}, {"type": "CONTESTED", "text": "Ministry of Defence explanation (squid boats, Venus, trains, meteors) disputed by investigators and witnesses"}]',
  false
),
(
  gen_random_uuid(),
  '2022 Wellington Parliament Occupation (New Zealand)',
  'wellington-parliament-occupation-2022',
  '24-day anti-mandate occupation of NZ Parliament grounds (6 Feb – 2 Mar 2022). Inspired by Canada''s Freedom Convoy. Ended with large police operation; ~250 arrests. IPCA review (20 Apr 2023) found police "served the public well overall." Mandates phased out Sept 2022 as pre-planned policy — not a concession to protesters.',
  '24-day anti-mandate occupation of NZ Parliament grounds, Wellington. Inspired by Canada''s Freedom Convoy. Triggered by PM Jacinda Ardern''s vaccine mandates for health workers, teachers, police, and military (late 2021). Convoys departed Cape Reinga and Bluff on Waitangi Day (6 Feb 2022), converging in Wellington ~8–9 Feb. Peak encampment: ~1,000 participants. Groups: Freedoms & Rights Coalition, Voices for Freedom, NZDSOS. Ended 2 Mar 2022 with large police operation; protesters set fires to tents, playground, and structures; police used riot gear, pepper spray, sponge bullets. Total arrests: ~250 (220 charged). Police injuries: ~40 officers. No protester demands met. Most mandates phased out by Sept 2022 (pre-planned, not a concession). IPCA review (20 Apr 2023) found police "served the public well overall" with noted improvement areas. Status: DOCUMENTED — IPCA reviewed, Royal Commission on COVID response referenced. MLA: Independent Police Conduct Authority. Review of Policing of Parliament Protest. IPCA, 20 Apr. 2023. ipca.govt.nz. | Rennie, Sian and Sina Matagi. "Vaccine Passports Equal Apartheid." Social Movement Studies, 11 Sept. 2022. doi:10.1080/14742837.2022.2123316. | NPR. "New Zealand Convoy Clogs Streets Near Parliament." 8 Feb. 2022. npr.org.',
  'https://www.ipca.govt.nz',
  'corroborated',
  'government_report',
  '2023-04-20',
  '{"tags": ["New Zealand", "Wellington", "parliament", "protest", "anti-mandate", "IPCA", "2022", "Freedom Convoy"], "region": "New Zealand", "status_label": "DOCUMENTED"}',
  'unchallenged',
  '[{"type": "DOCUMENTED", "text": "24-day occupation of NZ Parliament grounds, 6 Feb – 2 Mar 2022"}, {"type": "DOCUMENTED", "text": "~250 arrests (220 charged); ~40 police injuries on 2 Mar 2022 dispersal"}, {"type": "DOCUMENTED", "text": "IPCA review (20 Apr 2023) found police served the public well overall"}, {"type": "DOCUMENTED", "text": "Vaccine mandates phased out Sept 2022 as pre-planned policy, not a concession to protesters"}]',
  false
);
