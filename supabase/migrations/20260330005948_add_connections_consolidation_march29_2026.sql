/*
  # Connections and Consolidation Flags: March 29, 2026 Batch

  ## Summary
  Records network connections (entity relationships) from the March 29 batch as metadata
  documents for cross-reference, and flags consolidation actions for superseded entries.

  ## Connection Edges Added (stored as document metadata)
  17 new network relationship edges across 8 pillars

  ## Consolidation Actions
  - ARCHIVE: trump-directs-uap-file-release (superseded by alien-gov-registered entry)
  - ARCHIVE: defense-secretary-hegseth-confirms-pentagon-compliance (superseded)
  - MERGE: Prior Yale AI chatbot entry → ai-bot-swarms-coordinated-consensus-science-journal-2026

  ## Notes
  - Connection edges stored as document metadata JSON for use by ConnectionDiscovery service
  - Consolidation flags stored as searchable document entries for admin review
*/

-- Store connections batch as a metadata document for admin review
INSERT INTO documents (
  title, description, content, source_url, verification_tier, document_type,
  date_published, slug, dispute_status, subcategory, metadata
) VALUES
(
  'Connection Edges — March 29, 2026 Research Batch',
  'Network relationship edges identified in the March 29, 2026 evidence batch. 17 edges across financial systems, trafficking, surveillance, and elections pillars.',
  'EDGE LIST — March 29, 2026 Batch

Elections & Governance:
1. Donald Trump → SAVE America Act (sponsor/endorsement, February 2026)
2. DOJ → 24 States + D.C. (legal action to compel voter roll access, February 2026)
3. Dominion Voting Systems → Liberty Votes (corporate rebrand, post-2023 settlement)
4. J. Alex Halderman (UMich) → Dominion/Liberty Votes (security vulnerability documentation, 2022–2026)

Financial Systems:
5. Elon Musk → DOGE (leadership, January–August 2025)
6. DOGE → CFPB (elimination of consumer protection bureau, 2025)
7. Elon Musk / Tesla / SpaceX / xAI → $2.37B regulatory liability avoided (conflict of interest, 2025)
8. Michelle Bowman → Federal Reserve capital deregulation package (6-1 vote leadership, March 19, 2026)
9. Jeffrey Epstein → JPMorgan Chase ($290M settlement, financial enablement 2013–2019)
10. Jeffrey Epstein → Deutsche Bank ($75M settlement, financial enablement 2013–2018)
11. Jeffrey Epstein → Bank of America ($72.5M settlement, financial enablement, 2026)
12. DEA → Jeffrey Epstein + 14 unnamed co-targets (narcotics-linked money transfer investigation, five-year, dates classified)

Trafficking Networks:
13. Ghislaine Maxwell → House Oversight Committee (Fifth Amendment invocation, February 9, 2026)
14. Jes Staley (Barclays) → Jeffrey Epstein (documented relationship, UK FCA investigation)
15. Ghislaine Maxwell → Clemency offer to Trump (testimony-for-clemency, February 2026)

Surveillance:
16. FBI → Racial justice protesters (improper 702 database searches, 2020–documented)
17. White House → FISA 702 Clean Extension (lobbying for warrant-free renewal, 2026)',
  NULL,
  'preliminary',
  'investigation',
  '2026-03-29',
  'connection-edges-march-29-2026-batch',
  'unchallenged',
  'admin',
  '{"type": "CONNECTIONS_BATCH", "batch_date": "2026-03-29", "edge_count": 17, "pillars": ["elections-government", "financial-systems", "trafficking-networks", "surveillance-state"], "admin_use_only": true}'
),
(
  'Consolidation Flags — March 29, 2026 Batch',
  'Consolidation actions required following March 29, 2026 research batch processing. Three entries require archival or merge actions.',
  'CONSOLIDATION ACTIONS — March 29, 2026 Batch

ACTION 1: ARCHIVE
Slug target: trump-directs-uap-file-release
Reason: Superseded by alien-gov-registered-white-house-uap-disclosure-hegseth-2026
Action: Set has_mirror = true. Add metadata note: "Superseded March 29, 2026. See alien-gov-registered-white-house-uap-disclosure-hegseth-2026."

ACTION 2: ARCHIVE
Slug target: defense-secretary-hegseth-confirms-pentagon-compliance
Reason: Superseded by alien-gov-registered-white-house-uap-disclosure-hegseth-2026
Action: Set has_mirror = true. Add metadata note: "Superseded March 29, 2026. See alien-gov-registered-white-house-uap-disclosure-hegseth-2026."

ACTION 3: MERGE
Target: Any existing Yale AI chatbot persuasion entry (title contains "Yale" and "AI" and "chatbot" or "persuasion")
Merge into: ai-bot-swarms-coordinated-consensus-science-journal-2026
Action: Archive Yale-only entry. The ai-bot-swarms entry subsumes the Yale chatbot finding (AI 4x more persuasive than TV) as a documented fact within its broader content.

CROSS-LINK ACTIONS (no archival required):
- epstein-bank-settlements-437m-jpmorgan-deutsche-bofa-2026 ↔ epstein-files-3-million-pages-dea-probe-maxwell-fifth-2026 (same network, different angles)
- fy2026-pentagon-34-billion-anonymous-earmarks-unrequested ↔ pentagon-audit-failure-sixth-consecutive-4-trillion-unaccounted (defense spending accountability)
- doge-savings-vs-reality-senate-psi-bbc-verify-2026 ↔ pentagon-audit-failure-sixth-consecutive-4-trillion-unaccounted (DOGE claims vs unauditable systems)

ENTRIES NEEDING 18-MONTH REVIEW:
Any evidence entries with date_published before September 2024 that have not been updated should be flagged for accuracy review before November 2026 midterms.',
  NULL,
  'preliminary',
  'investigation',
  '2026-03-29',
  'consolidation-flags-march-29-2026-batch',
  'unchallenged',
  'admin',
  '{"type": "CONSOLIDATION_FLAGS", "batch_date": "2026-03-29", "archive_count": 2, "merge_count": 1, "cross_link_count": 3, "admin_use_only": true}'
);

-- Mark superseded UAP entries as mirrored (if they exist)
UPDATE documents
SET has_mirror = true,
    metadata = metadata || '{"superseded_by": "alien-gov-registered-white-house-uap-disclosure-hegseth-2026", "superseded_date": "2026-03-29"}'::jsonb
WHERE slug IN ('trump-directs-uap-file-release', 'defense-secretary-hegseth-confirms-pentagon-compliance');
