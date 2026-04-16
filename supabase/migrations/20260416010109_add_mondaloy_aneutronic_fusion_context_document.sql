/*
  # Add Mondaloy / Aneutronic Fusion Technology Context Document

  1. New Documents
    - Technology reference card explaining Mondaloy superalloy and aneutronic fusion
    - Not a death entry — explanatory reference for the Missing Scientists cluster

  2. Security
    - Uses existing RLS policies on documents table

  3. Notes
    - Provides technology context for McCasland-Reza-Hardwick Mondaloy chain
    - Covers aneutronic fusion (proton-Boron 11) and its military/propulsion applications
    - References DIA report, NASA architecture paper, TAE Technologies breakthrough
*/

INSERT INTO documents (title, description, content, source_url, verification_tier, document_type, date_published, slug, metadata, labeled_claims, dispute_status, subcategory)
VALUES (
  'Why Mondaloy and Aneutronic Fusion Matter — Technology Context',
  'The institutional connections in the Missing Scientists cluster trace back to two advanced propulsion technologies with significant national security implications: the Mondaloy superalloy and aneutronic fusion research.',
  E'MONDALOY:\nA burn-resistant nickel-based superalloy co-developed by Monica Reza and Dallis Hardwick in the 1990s. By 2016–2017 it was incorporated into the AR1 rocket engine, ending U.S. dependence on Russian RD-180 engines for national security satellite launches. The AR1 program was a direct strategic response to the 2014 Russian sanctions that threatened U.S. access to the RD-180. Mondaloy''s unique burn-resistance properties made it critical to the AR1''s development.\n\nANEUTRONIC FUSION (proton-Boron 11):\nUnlike standard D-T fusion which produces neutrons requiring massive shielding, p-B fusion yields only charged alpha particles that can be directly converted to electricity or thrust at efficiencies potentially 70–90% — bypassing the thermodynamic Carnot limit.\n\nApplications:\n• Directed-energy weapons\n• Advanced aerospace propulsion (specific impulse 10,000–1,000,000 seconds vs. chemical rockets'' ~450)\n• Energy-independent military platforms\n\nThe Defense Intelligence Agency addressed direct conversion potential in 2010 (DIA-08-1011-003). NASA published on aneutronic fusion spacecraft architecture in 2012. TAE Technologies announced a breakthrough p-B plasma result in Nature Communications April 2025.\n\nMcCasland''s AFRL Propulsion and Space Vehicle Directorates were precisely the programs investigating these technologies. Loureiro''s MIT PSFC was directly building toward plasma confinement for fusion systems.',
  'https://cassiopaea.substack.com/p/missing-and-dead-scientists',
  'corroborated',
  'Technical Reference',
  '2026-04-15',
  'mondaloy-aneutronic-fusion-context',
  '{"pillar": "War & Intelligence", "tags": ["Mondaloy", "Aneutronic-Fusion", "TAE-Technologies", "DIA", "NASA", "Advanced-Propulsion", "Direct-Energy-Conversion", "National-Security", "AR1-Engine", "RD-180"], "region": "United States", "year": 2026, "type": "technology-context", "cluster": "missing-scientists-cluster-2023-2026"}'::jsonb,
  '[
    {"type": "DOCUMENTED", "text": "Mondaloy superalloy was incorporated into AR1 rocket engine, ending U.S. dependence on Russian RD-180 engines"},
    {"type": "DOCUMENTED", "text": "DIA addressed aneutronic fusion direct conversion potential in 2010 report (DIA-08-1011-003)"},
    {"type": "DOCUMENTED", "text": "TAE Technologies announced breakthrough proton-Boron plasma result in Nature Communications April 2025"},
    {"type": "DOCUMENTED", "text": "McCasland''s AFRL Propulsion and Space Vehicle Directorates were the programs investigating these technologies"}
  ]'::jsonb,
  'unchallenged',
  'Technology Reference'
)
ON CONFLICT (slug) DO NOTHING;
