/*
  # Create Enemies of Truth Table

  1. New Tables
    - `enemies_of_truth`
      - `id` (uuid, primary key)
      - `name` (text, not null) - Person's name
      - `title` (text, not null) - Role/position
      - `subtitle` (text) - Secondary descriptor
      - `severity` (text, default 'HIGH') - CRITICAL, HIGH, MEDIUM
      - `summary` (text, not null) - 2-3 sentence overview
      - `key_facts` (jsonb, not null) - Array of bullet-point strings
      - `status_tags` (jsonb) - Array of status labels
      - `evidence_documented` (text, not null) - Full evidence section
      - `sources` (jsonb, not null) - Array of {name, url, date} objects
      - `date_added` (timestamptz, default now())
      - `last_updated` (timestamptz, default now())
      - `created_at` (timestamptz, default now())

  2. Security
    - Enable RLS on `enemies_of_truth` table
    - Add policy for public read access (authenticated users only for SELECT)

  3. Seed Data
    - 3 initial entries: Leon Black, Les Wexner, Bill Gates
*/

CREATE TABLE IF NOT EXISTS enemies_of_truth (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT,
  severity TEXT NOT NULL DEFAULT 'HIGH',
  summary TEXT NOT NULL,
  key_facts JSONB NOT NULL DEFAULT '[]'::jsonb,
  status_tags JSONB DEFAULT '[]'::jsonb,
  evidence_documented TEXT NOT NULL DEFAULT '',
  sources JSONB NOT NULL DEFAULT '[]'::jsonb,
  date_added TIMESTAMPTZ DEFAULT NOW(),
  last_updated TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE enemies_of_truth ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read enemies_of_truth"
  ON enemies_of_truth
  FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Anonymous users can read enemies_of_truth"
  ON enemies_of_truth
  FOR SELECT
  TO anon
  USING (true);

INSERT INTO enemies_of_truth (name, title, subtitle, severity, summary, key_facts, status_tags, evidence_documented, sources)
VALUES
(
  'LEON BLACK',
  'Apollo Global Management Co-Founder',
  'Post-Conviction Epstein Financier',
  'CRITICAL',
  'Leon Black paid approximately $170 million to Jeffrey Epstein between 2012 and 2017 — years after Epstein''s 2008 sex-offender conviction. Senate Finance Committee investigations established these payments were at compensation rates roughly 30 times higher than Black paid any other elite advisor. The U.S. Virgin Islands settlement agreement explicitly states Epstein used funds received from Black to partially finance his sex-trafficking operations.',
  '["$170 million paid to Epstein (2012–2017), all post-conviction", "Compensation rate 30x higher than any other elite tax/estate advisor", "$10M+ routed through sham 501(c)(3) to ''avoid public disclosure''", "USVI settlement ($62.5M): States funds ''partially funded'' Epstein''s sex trafficking", "2025–2026 DOJ releases reveal emails suggesting hush-money payments and surveillance of women on Black''s behalf", "Senate Finance Committee inquiry ongoing (Wyden letter March 20, 2026)", "No criminal charges despite documented financial enablement"]'::jsonb,
  '["NO CRIMINAL CHARGES", "ACTIVE CONGRESSIONAL INVESTIGATION", "USVI SETTLEMENT IMMUNITY"]'::jsonb,
  'Bank records and wire transfers documenting $170 million paid by Black to Epstein and Epstein-controlled entities from 2012 through 2017 for claimed ''tax and estate planning services.'' Senate Finance Committee analysis showing Epstein''s compensation rate was approximately 30 times higher than Black paid other top professional advisors for similar work. Email documentation of at least $10 million routed through a 501(c)(3) charity specifically to conceal the payments from public view and to secure maximum tax deductions. U.S. Virgin Islands settlement agreement and release (January 20, 2023) in which Black paid $62.5 million to secure immunity; the agreement states: ''Jeffrey Epstein used the money Black paid him to partially fund his operations in the Virgin Islands.'' 2025–2026 DOJ Epstein Files releases containing additional emails, payment ledgers, and records indicating Epstein and associates (including Paul Weiss law firm personnel) conducted surveillance of women on Black''s behalf in connection with these payments. Ongoing Senate Finance Committee inquiry led by Ranking Member Ron Wyden (letter dated March 20, 2026, and public findings released March 23, 2026) examining whether the payments constituted financing of Epstein''s criminal enterprise, potential tax fraud, and failure of banks to report suspicious activity under the Bank Secrecy Act.',
  '[{"name": "Senate Finance Committee — Wyden Letter to Leon Black", "url": "https://www.finance.senate.gov/imo/media/doc/senator_wyden_letter_to_leon_black_redacted.pdf", "date": "2026-03-20"}, {"name": "USVI Settlement Agreement with Leon Black", "url": "https://www.finance.senate.gov/imo/media/doc/usvi_black_settlement_agreement_-_executedpdf.pdf", "date": "2023-01-20"}, {"name": "DOJ — Epstein Library", "url": "https://www.justice.gov/epstein", "date": "2026-01-30"}, {"name": "DOJ — 3.5 Million Pages Release", "url": "https://www.justice.gov/opa/pr/department-justice-publishes-35-million-responsive-pages-compliance-epstein-files", "date": "2026-01-30"}, {"name": "Senate Finance Committee — Wyden Findings on Black", "url": "https://www.finance.senate.gov/continuing-epstein-investigation-wyden-questions-leon-black-over-new-revelations-in-epstein-files-appearance-of-hush-money-payments-and-surveillance-of-women", "date": "2026-03-23"}]'::jsonb
),
(
  'LES WEXNER',
  'L Brands / Victoria''s Secret Founder',
  'Epstein Financial Facilitator & FBI-Designated Co-Conspirator',
  'CRITICAL',
  'Leslie H. Wexner granted Jeffrey Epstein full power-of-attorney in 1991, giving him virtually unlimited authority over billions in personal finances, philanthropy, and business dealings for 16 years. Epstein used this access to facilitate property transfers including the Manhattan townhouse later used for trafficking. A 2019 FBI internal memorandum explicitly listed Wexner as a co-conspirator. His name appears more than 4,000 times across the Epstein Files.',
  '["Full power-of-attorney granted to Epstein (July 30, 1991) — hire, fire, sign checks, borrow, buy/sell property", "Epstein controlled Wexner''s finances with minimal oversight for 16+ years", "9 East 71st Street mansion transferred to Epstein at steeply discounted price — later site of trafficking", "FBI internal memo (Aug 15, 2019) explicitly lists Wexner as co-conspirator", "Name appears 4,000+ times across DOJ Epstein Files releases", "Subpoenaed and deposed by House Oversight Committee (Feb 18, 2026)", "No criminal charges — maintains he was ''duped by a world-class con man''"]'::jsonb,
  '["NO CRIMINAL CHARGES", "FBI CO-CONSPIRATOR DESIGNATION", "CONGRESSIONAL DEPOSITION"]'::jsonb,
  'Power-of-attorney agreement dated July 30, 1991, executed by Leslie H. Wexner appointing Jeffrey E. Epstein with broad legal and financial authority. Transfer of high-value assets, including the 9 East 71st Street Manhattan mansion (acquired by Wexner in 1989 and conveyed to Epstein-controlled entities at a steeply discounted price) and other properties collectively valued at approximately $100 million. 2019 FBI internal memorandum explicitly listing Wexner as a co-conspirator in Epstein''s sex-trafficking investigation; his name appears more than 4,000 times across the Epstein Files. February 18, 2026 closed-door deposition before the U.S. House Oversight Committee in which Democratic members questioned Wexner''s credibility, citing inconsistencies in his claims of ignorance. Internal investigative records and emails showing Epstein exercised near-total control over Wexner''s personal finances, investments, and philanthropy with virtually no documented oversight for more than 15 years. 2025–2026 DOJ releases containing additional correspondence, financial ledgers, and surveillance-related documents tying Epstein''s activities directly to Wexner-controlled entities.',
  '[{"name": "DOJ — Epstein Library", "url": "https://www.justice.gov/epstein", "date": "2026-01-30"}, {"name": "Wexner Power of Attorney Document (NYT Archive)", "url": "https://int.nyt.com/data/documenthelper/1494-epstein-wexner-power-of-attorney/04e6cef6bfb8b25c8684/optimized/full.pdf", "date": "1991-07-30"}, {"name": "House Oversight Committee — Wexner Deposition Release", "url": "https://oversight.house.gov/release/oversight-committee-releases-les-wexner-deposition-video/", "date": "2026-02-19"}, {"name": "NBC News — DOJ Names FBI Co-Conspirators", "url": "https://www.nbcnews.com/politics/justice-department/doj-names-3-people-fbi-once-called-jeffrey-epstein-co-conspirators-rcna258335", "date": "2026-02-10"}, {"name": "DOJ — 3.5 Million Pages Release", "url": "https://www.justice.gov/opa/pr/department-justice-publishes-35-million-responsive-pages-compliance-epstein-files", "date": "2026-01-30"}]'::jsonb
),
(
  'BILL GATES',
  'Microsoft Co-Founder, Cascade Investment',
  'Antitrust Violator, Epstein Associate, Largest Private Farmland Owner',
  'HIGH',
  'Bill Gates maintained documented post-conviction contact with Jeffrey Epstein from 2011–2014, including meetings, dinners, flights, and extensive email coordination revealed in the 2025–2026 DOJ releases. Microsoft faced federal antitrust prosecution for monopolistic conduct. Through Cascade Investment, Gates became the largest private owner of U.S. farmland (~275,000 acres). Melinda French Gates has publicly stated the Epstein association contributed to their 2021 divorce.',
  '["Multiple documented meetings with Epstein (2011–2014), all post-conviction", "Hundreds of references in DOJ Epstein Files — emails, calendar entries, photographs", "March 1, 2013 documented flight (Teterboro to Palm Beach) on Epstein-associated aircraft", "Microsoft antitrust: DOJ + 19 states sued under Sherman Act for monopolistic conduct (1998–2001)", "Cascade Investment: ~275,000 acres of U.S. farmland across 18+ states (largest private owner)", "Gates Foundation: $1.6B pledge to GAVI (June 2025); co-founded GAVI vaccine alliance", "Melinda French Gates cited Epstein association as factor in 2021 divorce (CBS, Feb 2026)", "Epstein''s self-drafted emails contain unverified allegations (Gates calls them ''absolutely absurd and completely false'')", "No criminal charges related to any documented matters"]'::jsonb,
  '["NO CRIMINAL CHARGES", "ACKNOWLEDGED ''HUGE MISTAKE''", "ANTITRUST FINDINGS OF FACT"]'::jsonb,
  'Microsoft Antitrust Violations (1998–2001): DOJ and 19 states sued under Sections 1 and 2 of the Sherman Act for monopolizing PC operating-system market. Court findings detail exclusionary contracts, bundling Internet Explorer to disadvantage Netscape, and predatory conduct. Gates'' videotaped deposition described as evasive. Cascade Investment: Gates became largest private U.S. farmland owner (~275,000 acres across 18+ states per 2025 Land Report). Holdings include active cropland, with investments in patented fertilizers, synthetic meat companies, and agribusiness. GAVI/WHO/CEPI: Gates Foundation committed billions including $1.6B pledge (June 2025) to GAVI vaccine alliance. Foundation co-founded GAVI and partners with WHO and CEPI. Divorce: Bill and Melinda divorced in 2021 after 27 years. Melinda met with divorce lawyers in 2019 after learning of Bill''s Epstein meetings. February 2026 interviews: described Epstein association as ''painful times'' and ''muck.'' Epstein Ties: Hundreds of references in DOJ Epstein Library (3.5M+ pages). Emails, Google Calendar entries, photographs document multiple meetings, dinners, calls (2011–2014). March 1, 2013 flight documented. Epstein''s July 18, 2013 self-drafted emails contain unverified allegations Gates called ''absolutely absurd and completely false.'' No evidence places Gates on Epstein''s island or directly participating in trafficking.',
  '[{"name": "DOJ — Epstein Library", "url": "https://www.justice.gov/epstein", "date": "2026-01-30"}, {"name": "DOJ — 3.5 Million Pages Release", "url": "https://www.justice.gov/opa/pr/department-justice-publishes-35-million-responsive-pages-compliance-epstein-files", "date": "2026-01-30"}, {"name": "DOJ Antitrust — U.S. v. Microsoft Findings of Fact", "url": "https://www.justice.gov/atr/us-v-microsoft-courts-findings-fact", "date": "1999-11-05"}, {"name": "Gates Foundation — $1.6B GAVI Pledge", "url": "https://www.gatesfoundation.org/ideas/media-center/press-releases/2025/06/gates-foundation-pledges-1-6-billion-bolster-gavis-childhood-vaccine-efforts", "date": "2025-06-24"}, {"name": "Melinda French Gates — CBS/NPR Wild Card Interview", "url": "https://www.youtube.com/watch?v=1iPe6Iegom4", "date": "2026-02-03"}, {"name": "CNN — Gates Epstein Scrutiny", "url": "https://www.cnn.com/2026/02/05/politics/kfile-gates-scrutiny-justice-department-documents", "date": "2026-02-05"}, {"name": "Yahoo Finance — Gates Farmland 275K Acres", "url": "https://finance.yahoo.com/news/bill-gates-owns-275-000-154614844.html", "date": "2025-10-03"}]'::jsonb
)
ON CONFLICT DO NOTHING;
