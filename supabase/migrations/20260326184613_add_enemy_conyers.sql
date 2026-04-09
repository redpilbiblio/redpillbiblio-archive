/*
  # Add John Conyers to Enemies of Truth

  1. New Entry
    - `John Conyers` — Taxpayer-funded $27,000 settlement for sexual harassment; resigned as Dean of the House. Severity: DECEASED.

  2. Notes
    - Conyers died October 27, 2019
    - The $27,000 settlement was paid from his congressional office budget (taxpayer funds) rather than the Office of Compliance
    - Multiple women made allegations spanning two decades
*/

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES (
  'JOHN CONYERS',
  'Former U.S. Representative, Michigan',
  'Taxpayer-Funded $27,000 Settlement for Sexual Harassment; Resigned as Dean of the House',
  'DECEASED',
  'John Conyers represented Michigan''s 13th Congressional District from 1965 to 2017, serving as the Dean of the House and Ranking Member/Chairman of the Judiciary Committee. A BuzzFeed investigation in November 2017, backed by signed notarized affidavits verified by four parties, revealed that Conyers'' office paid $27,000 from his congressional office budget — taxpayer-funded money allocated for official staff expenses — to settle a wrongful dismissal complaint filed by a former female staffer who alleged she was fired for refusing his sexual advances. The settlement included a confidentiality agreement. What distinguished this case is that the money came directly from his House office budget rather than from the Office of Compliance''s taxpayer fund, because the House Administration Committee declined to authorize an OOC settlement. Conyers announced his retirement on December 5, 2017, amid mounting allegations from multiple women spanning two decades. DECEASED — October 27, 2019; at his home in Detroit, MI; age 90.',
  '[
    "Congressional office paid $27,000 from House office budget (taxpayer funds) to settle sexual harassment/wrongful dismissal complaint in 2015",
    "Settlement included a confidentiality agreement",
    "Settlement came directly from his office budget — House Administration Committee declined to authorize an OOC settlement — making this taxpayer-funded suppression of harassment allegations",
    "BuzzFeed investigation backed by signed, notarized affidavits verified by four separate parties",
    "House Ethics Committee launched formal inquiry November 2017",
    "Resigned December 5, 2017 as Dean of the House amid allegations from multiple women spanning two decades"
  ]'::jsonb,
  '[
    "TAXPAYER-FUNDED SETTLEMENT",
    "RESIGNED UNDER PRESSURE",
    "ETHICS INQUIRY OPENED",
    "DECEASED — 2019"
  ]'::jsonb,
  E'John Conyers represented Michigan''s 13th Congressional District from 1965 to 2017 — the Dean of the House and Ranking Member/Chairman of the Judiciary Committee.\n\nA BuzzFeed investigation (November 2017), backed by signed notarized affidavits verified by four parties, revealed his office paid $27,000 from his congressional office budget — taxpayer-funded money — to settle a wrongful dismissal complaint.\n\nThe former female staffer alleged she was fired for refusing Conyers'' sexual advances. The settlement included a confidentiality agreement.\n\nThe money came directly from his House office budget rather than from the Office of Compliance fund, because the House Administration Committee declined to authorize an OOC settlement — making this taxpayer-funded suppression of harassment allegations.\n\nThe House Ethics Committee launched a formal inquiry in November 2017.\n\nConyers announced his retirement on December 5, 2017, amid mounting allegations from multiple women spanning two decades.\n\n▸ SURVIVING FAMILY:\nDeceased — October 27, 2019; at his home in Detroit, MI; age 90.',
  '[
    {"name": "NPR — Conyers Acknowledges Settlement but Denies Harassment Claim", "url": "https://www.npr.org/2017/11/21/565681045/rep-john-conyers-acknowledges-settlement-but-denies-sexual-harassment-claim", "date": "2017-11-21"},
    {"name": "Washington Post — Conyers Won''t Seek Re-Election Following Harassment Allegations", "url": "https://www.washingtonpost.com/powerpost/conyers-wont-seek-reelection-following-harassment-allegations-report-says/2017/12/05/17057ea0-d9bb-11e7-a841-2066faf731ef_story.html", "date": "2017-12-05"}
  ]'::jsonb
)
ON CONFLICT DO NOTHING;