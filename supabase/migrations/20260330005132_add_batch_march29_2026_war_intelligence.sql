/*
  # Batch: March 29, 2026 — War & Intelligence Entries (003, 007)

  ## Summary
  Adds two documents to the military-covert-ops pillar:
  - FY2026 Pentagon: $34B anonymous unrequested congressional earmarks (1,090 line items, 75% unrequested)
  - Pentagon 6th consecutive audit failure: 63% of $4T in assets unaccounted

  ## New Documents
  1. fy2026-pentagon-34-billion-anonymous-earmarks-unrequested
  2. pentagon-audit-failure-sixth-consecutive-4-trillion-unaccounted

  ## Notes
  - Entry 007 designated ANCHOR status — recurring systemic failure
  - Entry 003 cross-links to DOGE savings entry and pentagon audit entry
*/

INSERT INTO documents (
  title, description, content, source_url, verification_tier, document_type,
  date_published, slug, dispute_status, subcategory, metadata, labeled_claims
) VALUES
(
  'FY2026 Pentagon — $34 Billion in Anonymous, Unrequested Congressional Earmarks',
  'Congress anonymously inserted $34 billion into the FY2026 Pentagon budget through 1,090 individual line-item increases — 75% of which the Pentagon itself never requested. Cost per earmark spiked 60% versus FY2024. Members of Congress are not required to disclose sponsorship or financial interests when routing these funds.',
  'A March 2026 analysis by Taxpayers for Common Sense identified 1,090 individual line-item additions to the FY2026 Pentagon budget that were inserted by Congress — collectively totaling $34 billion — without any requirement that the sponsoring member of Congress be identified or that their financial interests in the recipients be disclosed.

Key findings from the Taxpayers for Common Sense report:
- 75% of the 1,090 line items were for programs the Pentagon itself never requested in its formal budget submission
- The average cost per earmark increased 60% compared to the FY2024 defense appropriations cycle
- No member of Congress is required to publicly link their name to any specific earmark
- No member of Congress is required to disclose whether they hold financial interests in the companies receiving the funded contracts
- The mechanism operates identically to the pre-2011 earmark ban — but is technically compliant because funding flows through the appropriations line-item process rather than through named earmark designations

The practical result is that defense contractors can direct campaign contributions to sympathetic members of Congress, who then route appropriations to those contractors through anonymous line-item additions — without any public record connecting the donor, the legislator, and the funding.

This mechanism is distinct from but compounds the broader Pentagon audit failure problem: if the DoD cannot track its existing assets, newly appropriated funds routed through non-requested line items are effectively unauditable from the moment of appropriation.

Cross-reference: The $34 billion in anonymous earmarks is larger than DOGE''s claimed total savings as verified by BBC and Senate PSI. The Senate PSI found DOGE generated $21.7 billion in waste during roughly the same fiscal window.',
  'https://taxpayer.net/national-security/backdoor-earmarks-in-the-fy2026-pentagon-budget',
  'confirmed',
  'investigation',
  '2026-03-25',
  'fy2026-pentagon-34-billion-anonymous-earmarks-unrequested',
  'unchallenged',
  'defense-spending',
  '{"urgency": "HIGH", "viral": "HIGH", "pillar": "military-covert-ops", "tags": ["Congressional Earmarks", "Pentagon", "Defense Contracts", "Dark Money", "Accountability", "FY2026", "Black Budget"], "social_handles": ["@TaxpayersForCS"], "cross_links": ["pentagon-audit-failure-sixth-consecutive-4-trillion-unaccounted", "doge-savings-vs-reality-senate-psi-bbc-verify-2026"]}',
  '[{"type": "DOCUMENTED", "text": "Congress inserted $34 billion into FY2026 Pentagon budget via 1,090 anonymous line-item additions per Taxpayers for Common Sense March 2026 analysis"}, {"type": "DOCUMENTED", "text": "75% of the 1,090 line items were never requested by the Pentagon in its formal budget submission"}, {"type": "DOCUMENTED", "text": "Average cost per earmark increased 60% compared to FY2024"}, {"type": "DOCUMENTED", "text": "No disclosure requirement for sponsoring member identity or financial interests in recipient companies"}, {"type": "INFERRED", "text": "Mechanism enables campaign donors to extract defense contracts through legislation untraceable to its source"}]'
),
(
  'Pentagon Fails 6th Consecutive Audit — 63% of $4 Trillion in Assets Unaccounted',
  'The Department of Defense has failed every mandatory financial audit since auditing began in 2018 — six consecutive failures. The most recent audit found the DoD cannot account for 63% of nearly $4 trillion in assets. DOGE claimed $11.1 billion in Pentagon "efficiencies," but the underlying accounting systems remain unauditable, making any verification impossible.',
  'The Department of Defense completed its sixth consecutive failed financial audit in 2023, unable to account for 63% of its nearly $4 trillion in reported assets. Mandatory auditing of the DoD was required by the National Defense Authorization Act and began in 2018. In six years, the department has never passed.

Specific documented failures from the most recent audit cycle:
- The Army overstated spare parts inventory needs by $202 million in a single fiscal year
- The Army simultaneously spent $148 million on unforecasted parts
- The DoD cannot provide a verifiable accounting of physical property, equipment, or financial positions for 63% of its asset base
- No individual audit failure has resulted in criminal referral, clawback of appropriations, or leadership accountability

In August 2025, DOGE published claims of $11.1 billion in Pentagon "efficiencies." Breaking Defense analysis confirmed that the claimed savings are drawn from the same unauditable accounting systems — meaning the DoD cannot verify the savings any more than it can account for the underlying assets. The claim is structurally unverifiable.

The six consecutive audit failures represent the longest unresolved audit failure of any federal agency in the modern auditing era. The DoD receives approximately $800 billion in annual appropriations. The Pentagon''s Inspector General has repeatedly noted that the audit failures are systemic and stem from legacy accounting systems that do not meet federal accounting standards — systems that would require an estimated $100 billion+ to modernize.

This entry is an ANCHOR document: it establishes the baseline accounting failure that renders all Pentagon-related "savings" and "efficiency" claims by DOGE, Congressional earmark sponsors, and agency leadership structurally unverifiable.',
  'https://responsiblestatecraft.org/pentagon-audit-2666415734',
  'confirmed',
  'government_record',
  '2023-12-03',
  'pentagon-audit-failure-sixth-consecutive-4-trillion-unaccounted',
  'unchallenged',
  'defense-spending',
  '{"urgency": "HIGH", "viral": "HIGH", "pillar": "military-covert-ops", "status": "ANCHOR", "tags": ["Pentagon", "Audit Failure", "Black Budget", "Defense Spending", "Waste Fraud Abuse", "DOGE", "DoD"], "social_handles": ["@RespStatecraft", "@BreakingDefense"], "additional_sources": [{"name": "Breaking Defense — DOGE Pentagon Efficiencies Aug 2025", "url": "https://breakingdefense.com/2025/08/mining-for-doge-defense-budget-docs-show-11b-in-efficiencies-but-what-are-they"}]}',
  '[{"type": "DOCUMENTED", "text": "DoD has failed every mandatory financial audit since auditing began in 2018 — six consecutive failures"}, {"type": "DOCUMENTED", "text": "Most recent audit: DoD cannot account for 63% of nearly $4 trillion in reported assets"}, {"type": "DOCUMENTED", "text": "Army overstated spare parts needs by $202M while spending $148M on unforecasted parts in same cycle"}, {"type": "DOCUMENTED", "text": "DOGE claimed $11.1B in Pentagon efficiencies — drawn from same unauditable accounting systems"}, {"type": "INFERRED", "text": "All Pentagon-related savings claims are structurally unverifiable given six consecutive audit failures"}]'
);
