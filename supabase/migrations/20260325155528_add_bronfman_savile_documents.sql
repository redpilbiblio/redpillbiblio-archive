/*
  # Add Bronfman Family and Jimmy Savile Documents

  1. New Documents (2 total)
    - Bronfman Family: Clare & Sara Bronfman and the NXIVM Cult/Trafficking Network
    - Jimmy Savile: BBC / NHS Elite Institutional Cover-Up Network (UK Parallel)

  2. Categorized under "Child Safety & Human Trafficking" document type
  3. No security changes - existing RLS policies apply
*/

INSERT INTO documents (title, description, content, source_url, verification_tier, document_type, date_published, slug, metadata)
VALUES
(
  'Bronfman Family — Clare & Sara Bronfman and the NXIVM Cult/Trafficking Network',
  'The Bronfman Family archive entry focuses on Clare and Sara Bronfman, Seagram liquor heiresses, and their documented multi-million-dollar funding of NXIVM, a self-help organization federally proven to operate as a sex-trafficking and forced-labor enterprise. Clare Bronfman pleaded guilty in 2019 to conspiracy to conceal and harbor aliens for financial gain and fraudulent use of identification. Court records detail her role in funding the operation, identity theft, hacking, and obstruction of justice. Sara Bronfman was also involved in executive-board activities.',
  E'Documented Evidence Includes:\n\n• Clare Bronfman''s guilty plea and sentencing memorandum (81 months'' imprisonment, $6 million forfeiture, $500,000 fine, and restitution).\n• Trial exhibits and records from U.S. v. Raniere showing Bronfman funding of NXIVM''s sex-trafficking and forced-labor components.\n• Court documents detailing hacking of Edgar Bronfman Sr.''s email, identity theft, and immigration fraud.\n• Civil lawsuits and executive-board records linking the Bronfman sisters to NXIVM''s operations and finances (estimated $150–$200 million invested).\n\nThese materials document elite-funded cult operations, trafficking, and accountability measures through federal prosecution. The case provides primary-source parallels to other elite-protected networks.\n\nPrimary Sources (MLA Format)\n\nUnited States v. Bronfman. United States District Court, Eastern District of New York, 18 Cr. 204 (sentencing memorandum and plea agreement, 30 Sept. 2020).\n\nUnited States. Department of Justice. "NXIVM Executive Board Member Clare Bronfman Sentenced to 81 Months in Prison for Identity Theft." 30 Sept. 2020, www.justice.gov/usao-edny/pr/nxivm-executive-board-member-clare-bronfman-sentenced-81-months-prison-identity-theft.\n\nUnited States v. Raniere. United States District Court, Eastern District of New York, 18 Cr. 204 (trial exhibits on Bronfman funding and hacking).',
  'https://www.justice.gov/usao-edny/pr/nxivm-executive-board-member-clare-bronfman-sentenced-81-months-prison-identity-theft',
  'verified',
  'Child Safety & Human Trafficking',
  '2026-03-24',
  'bronfman-family-nxivm-trafficking-network',
  '{"pillar": "Child Safety & Trafficking", "category": "Elite-Funded Trafficking Networks", "tags": ["Clare Bronfman", "Sara Bronfman", "NXIVM", "Keith Raniere", "sex trafficking", "forced labor", "Seagram", "DOJ"], "importance": "PURE_GOLD", "sources": [{"title": "U.S. v. Bronfman, 18 Cr. 204", "url": "", "type": "court_filing"}, {"title": "DOJ Press Release - Bronfman Sentenced", "url": "https://www.justice.gov/usao-edny/pr/nxivm-executive-board-member-clare-bronfman-sentenced-81-months-prison-identity-theft", "type": "primary_source"}, {"title": "U.S. v. Raniere, 18 Cr. 204", "url": "", "type": "court_filing"}]}'::jsonb
),
(
  'Jimmy Savile — BBC / NHS Elite Institutional Cover-Up Network (UK Parallel)',
  'The Jimmy Savile archive entry (international node) documents the case of Sir James Wilson Savile, BBC television personality and knighted philanthropist, and the systemic institutional failures that enabled his decades-long abuse across BBC, NHS hospitals, and British institutions. Posthumous independent inquiries confirmed widespread sexual abuse and elite-level protection. Multiple official UK government and institutional reports detail ignored complaints, cover-ups, and access granted by hospitals and media organizations.',
  E'Documented Evidence Includes:\n\n• Dame Janet Smith Report (BBC internal investigation into Savile''s activities at the corporation).\n• Kate Lampard Report and NHS-wide investigations (lessons learned from abuse at 28+ hospitals and one hospice).\n• Metropolitan Police Operation Yewtree files and victim statements documenting approximately 450 allegations.\n• Individual hospital inquiry reports (e.g., Stoke Mandeville, Leeds, Broadmoor) confirming abuse on NHS premises and institutional failures.\n\nThese primary official inquiries provide documented evidence of media and healthcare institutional protection of an elite abuser — paralleling other elite-network accountability gaps. All reports are publicly available through UK government archives.\n\nPrimary Sources (MLA Format)\n\nSmith, Janet. The Jimmy Savile Investigation Report. BBC, 25 Feb. 2016.\n\nLampard, Kate. Lessons Learnt from the NHS Investigation into Jimmy Savile. Department of Health (UK), Feb. 2015, assets.publishing.service.gov.uk/media/5a80958eed915d74e33fb42d/KL_lessons_learned_report_FINAL.pdf.\n\nUnited Kingdom. Department of Health. Jimmy Savile NHS Investigations: Lessons Learned. 26 Feb. 2015, www.gov.uk/government/publications/jimmy-savile-nhs-investigations-lessons-learned.\n\nMetropolitan Police. Operation Yewtree Files (public summaries).',
  'https://www.gov.uk/government/publications/jimmy-savile-nhs-investigations-lessons-learned',
  'verified',
  'Child Safety & Human Trafficking',
  '2026-03-24',
  'jimmy-savile-institutional-coverup',
  '{"pillar": "Child Safety & Trafficking", "category": "Institutional Cover-Ups", "tags": ["Jimmy Savile", "BBC", "NHS", "Operation Yewtree", "UK", "institutional abuse", "child exploitation"], "importance": "PURE_GOLD", "sources": [{"title": "Dame Janet Smith Report", "url": "", "type": "government_report"}, {"title": "Kate Lampard NHS Report", "url": "https://assets.publishing.service.gov.uk/media/5a80958eed915d74e33fb42d/KL_lessons_learned_report_FINAL.pdf", "type": "government_report"}, {"title": "UK Department of Health - Lessons Learned", "url": "https://www.gov.uk/government/publications/jimmy-savile-nhs-investigations-lessons-learned", "type": "government_report"}]}'::jsonb
)
ON CONFLICT DO NOTHING;
