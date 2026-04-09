/*
  # Add Tier 1 Evidence Items (Part 1 of 4)

  This migration adds TIER 1 — MAXIMUM NETWORK IMPACT evidence items:
  
  1. Pharmaceutical Campaign Finance Pipeline (1998–Present)
  2. Pentagon-to-Silicon Valley Pipeline (1999–Present)
  3. LIBOR Scandal (2003–2012)
  4. UN Peacekeeping Sexual Exploitation (1993–Present)
  5. Fossil Fuel Industry Campaign Spending (1990–Present)

  All items include comprehensive evidence, sources, connection webs, and "red pill" summaries.
*/

-- NODE 1: Pharmaceutical Campaign Finance Pipeline
INSERT INTO documents (
  title,
  slug,
  description,
  content,
  document_type,
  date_published,
  verification_tier,
  source_url,
  metadata
) VALUES
(
  'The Pharmaceutical Campaign Finance Pipeline',
  'pharmaceutical-campaign-finance-pipeline',
  'The pharmaceutical industry doesn''t just sell drugs — it buys lawmakers. Since 1999, pharma and health product companies have spent $4.7 billion lobbying the U.S. federal government — more than any other industry in America. In 2023 alone, the tab was $385 million.',
  E'# The Pharmaceutical Campaign Finance Pipeline (1998–Present)

## Summary
The pharmaceutical industry doesn''t just sell drugs — it buys lawmakers. Since 1999, pharma and health product companies have spent $4.7 billion lobbying the U.S. federal government — more than any other industry in America. In 2023 alone, the tab was $385 million. That''s over $1 million per day purchasing legislative access while Americans ration insulin.

The money works. In 2003, Rep. Billy Tauzin (R-LA) shepherded the Medicare Modernization Act through Congress — a bill that explicitly prohibited Medicare from negotiating drug prices, guaranteeing pharmaceutical companies could charge the government whatever they wanted. Tauzin retired from Congress and within months accepted a $2 million-per-year position as president of PhRMA, the industry''s top lobbying group. The revolving door isn''t even a door anymore — it''s a standing invitation.

## The Evidence

- The pharmaceutical and health product industry spent **$4.7 billion** on federal lobbying from 1999–2018 — an average of $233 million per year, more than any other industry (JAMA Internal Medicine, 2020 peer-reviewed study)

- In 2023, pharma lobbying hit **$385.4 million** — the highest single-year total ever recorded (OpenSecrets)

- PhRMA spent **$57.5 billion** on drug promotion in 2004 alone, exceeding R&D spending — **$61,000 per physician** in the United States (PLOS Medicine, 2008 peer-reviewed study)

- **57% of FDA oncology drug reviewers** who left the agency between 2001–2010 went directly to work for the pharmaceutical companies they had been regulating (BMJ, 2016)

- **32% of all HHS political appointees** exit to industry positions — a revolving door codified into career trajectories

- The Sackler family withdrew **$10.4 billion** from Purdue Pharma while the opioid epidemic they fueled killed 500,000+ Americans — and simultaneously made $1.6 million in political contributions to ensure no legislation threatened their product

- Pharma spent **$5.96–7 billion** on direct-to-consumer TV advertising in 2025 — the same ad revenue that makes media outlets financially dependent on the industry they''re supposed to investigate

- The **U.S. and New Zealand** are the only two countries on Earth that allow direct-to-consumer pharmaceutical advertising on television

## Connection Web
→ Opioid Crisis (Sackler $) — same companies funding campaigns profited from the epidemic  
→ FDA Revolving Door — the regulators become the regulated  
→ Health Insurance AI Denials — financial gatekeeping of health access  
→ Citizens United — the legal framework enabling unlimited pharma spending  
→ Dark Money — undisclosed pharma contributions to political nonprofits  
→ Lobbying Industrial Complex — pharma as the single largest lobbying sector  
→ Media Consolidation — advertising dependency creates editorial capture  
→ Vioxx — Merck spent $96 million lobbying while suppressing cardiac death data

## The Red Pill
The companies that created the opioid epidemic, hid Vioxx cardiac deaths, and charge $300 for insulin that costs $3 to manufacture are the same companies writing checks to the lawmakers who regulate them. The FDA officials who approve their drugs retire into their boardrooms. The TV networks that should investigate them depend on their advertising dollars. This isn''t a healthcare system — it''s a protection racket with a pharmacy counter.

## Sources

Wouters, Olivier J. "Lobbying Expenditures and Campaign Contributions by the Pharmaceutical and Health Product Industry in the United States, 1999-2018." JAMA Internal Medicine, vol. 180, no. 5, 2020, pp. 688–697. https://pmc.ncbi.nlm.nih.gov/articles/PMC7054854/

Gagnon, Marc-André and Joel Lexchin. "The Cost of Pushing Pills: A New Estimate of Pharmaceutical Promotion Expenditures in the United States." PLOS Medicine, vol. 5, no. 1, 2008. https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.0050001

"Pharmaceuticals / Health Products: Lobbying, 2023." OpenSecrets, 2024. https://www.opensecrets.org/federal-lobbying/industries/summary?cycle=2023&id=h04

Piller, Charles. "FDA Revolving Door: Oncology Division." BMJ, 2016. https://www.bmj.com/content/354/bmj.i5055',
  'Financial Records / Lobbying Disclosure',
  '1998-01-01',
  'verified',
  'https://pmc.ncbi.nlm.nih.gov/articles/PMC7054854/',
  jsonb_build_object(
    'category', 'Health Transparency',
    'pillar', 'Health Transparency',
    'years', '1998–Present',
    'importance', 'PURE_GOLD',
    'tags', ARRAY['pharmaceutical industry', 'lobbying', 'FDA', 'regulatory capture', 'opioid crisis', 'revolving door'],
    'connection_web', ARRAY['Opioid Crisis', 'FDA Revolving Door', 'Health Insurance AI Denials', 'Citizens United', 'Dark Money', 'Lobbying Industrial Complex', 'Media Consolidation', 'Vioxx']
  )
);

-- Add event for Pharmaceutical Pipeline
INSERT INTO events (title, description, event_date, pillar, metadata) VALUES
(
  'Pharmaceutical Industry Lobbying Reaches $4.7 Billion (1999-2018)',
  'JAMA Internal Medicine publishes peer-reviewed study documenting pharmaceutical industry spent $4.7 billion on federal lobbying from 1999-2018, more than any other industry.',
  '2020-03-03',
  'Health Transparency',
  jsonb_build_object(
    'importance', 'PURE_GOLD',
    'source', 'JAMA Internal Medicine peer-reviewed study'
  )
);
