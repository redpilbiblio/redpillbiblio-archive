/*
  # Batch: March 29, 2026 — Elections & Governance Entries (001, 002)

  ## Summary
  Adds two new evidence documents to the elections-government pillar:
  - SAVE America Act: citizenship proof requirement, elimination of online voter registration
  - Dominion → Liberty Votes rebrand: documented machine vulnerabilities unpatched for 2026 midterms

  ## New Documents
  1. save-america-act-citizenship-proof-online-registration-2026
  2. dominion-liberty-votes-rebrand-vulnerabilities-unpatched-2026

  ## Pillars
  - elections-government

  ## Notes
  - Both entries verified against primary institutional sources
  - Entry 001 flagged CRITICAL urgency due to midterm certification scenario risk
*/

INSERT INTO documents (
  title, description, content, source_url, verification_tier, document_type,
  date_published, slug, dispute_status, subcategory, metadata, labeled_claims
) VALUES
(
  'SAVE America Act — Citizenship Proof Required, Online Registration Eliminated',
  'The House passed the SAVE America Act on February 11, 2026, requiring documented proof of U.S. citizenship to register to vote and eliminating online voter registration nationwide. President Trump endorsed the bill in his February 24 State of the Union address and initiated legal action against 24 states and D.C. to compel access to voter rolls. Constitutional scholars warn of a scenario involving federal seizure of ballots from key congressional districts before January 3, 2027, which would prevent election certification entirely.',
  'The SAVE America Act passed the House on February 11, 2026 along party lines. The legislation requires documentary proof of U.S. citizenship to register to vote — a requirement critics argue would disenfranchise tens of millions of eligible voters who cannot readily produce such documentation — and eliminates online voter registration nationwide, reversing accessibility gains made in over 40 states over the past two decades.

President Trump formally endorsed the bill during his February 24, 2026 State of the Union address and simultaneously authorized DOJ legal action against 24 states and the District of Columbia to compel access to their voter rolls.

Constitutional scholars have identified a specific legal scenario that, if the bill passes the Senate and is signed into law before the 2026 midterms, could allow the federal government to contest ballot certifications in targeted congressional districts — and potentially prevent the seating of the new Congress before January 3, 2027, when the current Congress expires. Under that scenario, no quorum would exist to certify the 2028 presidential election.

The bill''s citizenship documentation requirements are broader than any previously enacted state law. Experts note that up to 10% of eligible U.S.-born voters — disproportionately elderly, low-income, and minority — do not possess a readily available U.S. passport or birth certificate. No exemption or alternative documentation pathway is specified in the current bill text.

The Supreme Court has not yet addressed the constitutionality of citizenship verification requirements for federal elections under the Elections Clause. SCOTUSblog analysts have noted the Court may need to rule before November 2026.',
  'https://theconversation.com/how-to-prevent-elections-from-being-stolen-lessons-from-around-the-world-for-the-us-275390',
  'confirmed',
  'government_record',
  '2026-02-11',
  'save-america-act-citizenship-proof-online-registration-2026',
  'ongoing',
  'voter-suppression',
  '{"urgency": "CRITICAL", "viral": "VERY_HIGH", "pillar": "elections-government", "tags": ["Elections", "SAVE Act", "Voter ID", "Online Registration", "Ballot Seizure", "Midterms 2026", "Certification Crisis"], "social_handles": ["@realDonaldTrump", "@splcenter", "@SCOTUSblog"], "additional_sources": [{"name": "SCOTUSblog — Electoral Integrity Feb 2026", "url": "https://scotusblog.com/2026/02/how-can-the-supreme-court-protect-electoral-integrity"}, {"name": "SPLC — Trump Executive Action on Voting", "url": "https://splcenter.org/resources/guides/trump-executive-action-voting-faq"}]}',
  '[{"type": "DOCUMENTED", "text": "House passed SAVE America Act February 11, 2026 requiring citizenship proof to register to vote"}, {"type": "DOCUMENTED", "text": "Trump endorsed the bill in February 24, 2026 State of the Union address"}, {"type": "DOCUMENTED", "text": "DOJ legal action initiated against 24 states and D.C. to access voter rolls"}, {"type": "INFERRED", "text": "Constitutional scholars identify potential scenario where federal ballot seizure prevents 2026 midterm certification before January 3, 2027"}, {"type": "CONTESTED", "text": "Proponents argue the bill prevents non-citizen voting; critics argue it disenfranchises millions of eligible citizens"}]'
),
(
  'Dominion → Liberty Votes Rebrand — Machine Vulnerabilities Unpatched for 2026 Midterms',
  'Dominion Voting Systems rebranded to "Liberty Votes" following its $787 million Fox News defamation settlement. Security vulnerabilities documented by University of Michigan engineer J. Alex Halderman — involving barcode-based vote interpretation in Georgia — remain unpatched as of early 2026. The Coffee County, Georgia physical machine breach has never been fully adjudicated.',
  'Dominion Voting Systems — the voting machine manufacturer that received a $787 million defamation settlement from Fox News in April 2023 — has rebranded its public-facing identity to "Liberty Votes." The rebrand does not alter the company''s ownership structure, software, or hardware.

Security researcher J. Alex Halderman, a computer science professor at the University of Michigan, documented in his sealed 2022 expert report (partially unsealed under federal court order) that Dominion''s ballot marking devices used in Georgia interpret voter choices via QR barcodes rather than human-readable text — meaning the actual vote recorded by the machine cannot be verified by the voter or election observer without specialized equipment. This vulnerability was confirmed by Judge Amy Totenberg''s 2023 federal ruling in Curling v. Raffensperger, which found the machines posed "significant security risks" but declined to order their replacement before the 2024 elections due to administrative disruption concerns.

As of the March 2026 Bipartisan Policy Center report, the barcode interpretation vulnerability documented by Halderman remains unpatched in machines deployed across Georgia and other states using the same platform. No replacement timeline has been publicly committed to before the November 2026 midterms.

The Coffee County, Georgia incident — in which a team organized by Sidney Powell ally Scott Hall physically breached election equipment and copied sensitive software and data — resulted in guilty pleas from some participants but has not been fully adjudicated regarding the chain of data custody or whether the copied data was subsequently used or distributed. Hall was sentenced in September 2023. The case involving other participants, including some connected to the Trump 2020 campaign, remains in progress.',
  'https://bipartisanpolicy.org/explainer/united-in-security-how-every-state-protects-your-vote-2026',
  'confirmed',
  'investigation',
  '2026-02-04',
  'dominion-liberty-votes-rebrand-vulnerabilities-unpatched-2026',
  'disputed',
  'election-integrity',
  '{"urgency": "HIGH", "viral": "MEDIUM", "pillar": "elections-government", "tags": ["Voting Machines", "Dominion", "Liberty Votes", "Election Security", "Georgia Breach", "Halderman", "Midterms 2026"], "social_handles": ["@jhalderm", "@BPC_Bipartisan"]}',
  '[{"type": "DOCUMENTED", "text": "Dominion Voting Systems rebranded to Liberty Votes following $787M Fox News settlement"}, {"type": "DOCUMENTED", "text": "J. Alex Halderman documented barcode-based vote interpretation vulnerability in Georgia Dominion machines in sealed 2022 report"}, {"type": "DOCUMENTED", "text": "Judge Amy Totenberg confirmed significant security risks in 2023 federal ruling but declined pre-2024 replacement"}, {"type": "DOCUMENTED", "text": "Coffee County GA physical machine breach resulted in guilty pleas; full adjudication ongoing"}, {"type": "INFERRED", "text": "Vulnerabilities remain unpatched as 2026 midterms approach based on February 2026 BPC report"}]'
);
