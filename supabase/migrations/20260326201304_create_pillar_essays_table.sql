/*
  # Create Pillar Essays Table

  1. New Tables
    - `pillar_essays`
      - `id` (uuid, primary key)
      - `pillar_slug` (text, unique, the URL slug for the pillar)
      - `title` (text, display title for the pillar overview)
      - `subtitle` (text, nullable, short tagline)
      - `body_markdown` (text, long-form essay in markdown)
      - `last_updated` (timestamptz, tracks content freshness)
      - `word_count` (integer, auto-tracked word count)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `pillar_essays` table
    - Public read access for all visitors (SEO content)
    - No write access via client

  3. Seed Data
    - Insert placeholder essays for all 10 pillars
*/

CREATE TABLE IF NOT EXISTS pillar_essays (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  pillar_slug text UNIQUE NOT NULL,
  title text NOT NULL,
  subtitle text,
  body_markdown text NOT NULL DEFAULT '',
  last_updated timestamptz DEFAULT now(),
  word_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_pillar_essays_slug ON pillar_essays(pillar_slug);

ALTER TABLE pillar_essays ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read pillar essays"
  ON pillar_essays
  FOR SELECT
  TO anon, authenticated
  USING (true);

INSERT INTO pillar_essays (pillar_slug, title, subtitle, body_markdown, word_count) VALUES
(
  'financial-systems',
  'Financial Systems & Corporate Power',
  'Tracing the mechanisms of economic control, from banking cartels to regulatory capture',
  E'## The Architecture of Financial Control\n\nThe modern financial system operates through layers of institutional complexity that obscure accountability. From the creation of the Federal Reserve in 1913 to the 2008 financial crisis and beyond, documented evidence reveals patterns of regulatory capture, insider trading, and systemic fraud that transfer wealth upward while socializing losses.\n\n## Key Patterns\n\nThis pillar documents **verified cases** of:\n\n- **Banking fraud and manipulation**: LIBOR rigging, forex manipulation, and mortgage fraud that affected millions of homeowners\n- **Regulatory capture**: The revolving door between Wall Street and regulatory agencies like the SEC and Treasury Department\n- **Corporate corruption**: From Enron to Wirecard, documented cases of corporate fraud enabled by institutional failures\n- **Tax evasion infrastructure**: The Panama Papers, Paradise Papers, and Pandora Papers revealing offshore financial networks\n\n## Why This Matters\n\nFinancial crimes are not victimless. Every fraudulent mortgage packaged into securities, every manipulated interest rate, every captured regulator who looked the other way created real consequences for real people. This archive documents those consequences with primary sources.',
  156
),
(
  'media-manipulation',
  'Media Manipulation & Information Control',
  'Documenting verified instances of narrative management, propaganda operations, and corporate media influence',
  E'## The Manufacturing of Consensus\n\nFrom Operation Mockingbird to modern algorithmic content curation, the relationship between media institutions and power has been documented extensively through declassified files, congressional testimony, and investigative journalism.\n\n## Key Patterns\n\n- **Government-media coordination**: Documented cases of intelligence agencies placing stories in major outlets\n- **Corporate consolidation**: The reduction of media ownership to a handful of conglomerates and its documented effects on editorial independence\n- **Digital manipulation**: Algorithmic amplification, astroturfing campaigns, and documented social media manipulation programs\n- **Whistleblower suppression**: Cases where journalists and sources were targeted for exposing institutional wrongdoing\n\n## Primary Sources\n\nEvery item in this pillar links to court records, FOIA releases, congressional testimony, or verified investigative reporting from established institutions.',
  128
),
(
  'health-transparency',
  'Health & Pharma Transparency',
  'Pharmaceutical influence, suppressed research, and documented public health failures',
  E'## When Health Becomes a Business\n\nThe intersection of public health and corporate profit creates documented conflicts of interest that affect billions of people. This pillar catalogs verified cases where pharmaceutical companies, regulatory agencies, and health institutions prioritized profit over patient safety.\n\n## Key Patterns\n\n- **Pharmaceutical fraud**: Documented cases of data manipulation, ghost-writing, and suppressed clinical trial results\n- **Regulatory failures**: FDA approval processes influenced by industry funding and revolving-door employment\n- **Opioid crisis documentation**: The Sackler family, Purdue Pharma, and the documented campaign to downplay addiction risks\n- **Suppressed research**: Verified cases where inconvenient scientific findings were buried or discredited\n\n## The Evidence Standard\n\nItems in this pillar are sourced from peer-reviewed research, court filings, FDA warning letters, DOJ settlements, and congressional investigations.',
  130
),
(
  'elections-government',
  'Elections & Governance',
  'Voting integrity, government accountability, and documented institutional failures',
  E'## The Machinery of Democracy\n\nDemocratic governance depends on transparent processes, accountable institutions, and informed citizens. This pillar documents verified cases where those foundations were compromised — not through speculation, but through court records, audit reports, and official investigations.\n\n## Key Patterns\n\n- **Election integrity**: Documented irregularities, court challenges, and verified instances of voter suppression from primary sources\n- **Campaign finance**: Dark money flows, PAC coordination, and documented violations tracked through FEC filings\n- **Government corruption**: Convicted officials, documented abuse of power, and institutional cover-ups\n- **Whistleblower cases**: Government employees who exposed wrongdoing and the documented retaliation they faced\n\n## Source Standards\n\nEvery item links to official government records, court filings, inspector general reports, or verified investigative journalism.',
  126
),
(
  'military-covert-ops',
  'War & Intelligence Operations',
  'Declassified military programs, covert operations, and defense spending accountability',
  E'## The Hidden History of Power\n\nDeclassified documents reveal a consistent pattern: operations that were denied, dismissed as conspiracy theories, or hidden behind classification walls were later confirmed through FOIA releases, congressional investigations, and official admissions.\n\n## Key Patterns\n\n- **Declassified operations**: MKUltra, COINTELPRO, Operation Northwoods, and other programs confirmed through official records\n- **Intelligence failures and deception**: Documented cases where intelligence was manipulated to justify military action\n- **Defense spending**: Unaccounted Pentagon expenditures documented through audit reports and inspector general findings\n- **Whistleblower testimony**: Military and intelligence personnel who testified before Congress about institutional wrongdoing\n\n## Why Declassification Matters\n\nEvery declassified document in this archive was once classified. The pattern of denial followed by eventual confirmation demonstrates why primary source documentation is essential.',
  133
),
(
  'suppressed-technology',
  'Energy & Suppressed Technology',
  'Patent secrecy orders, energy policy manipulation, and documented technology suppression',
  E'## Innovation Under Lock and Key\n\nThe U.S. Patent and Trademark Office maintains a classified list of patents under secrecy orders — technologies deemed too sensitive for public release. As of 2023, over 5,900 patents remain classified. This pillar documents verified cases of technology suppression, energy policy manipulation, and institutional barriers to innovation.\n\n## Key Patterns\n\n- **Patent secrecy orders**: The Invention Secrecy Act of 1951 and its documented use to suppress thousands of patents\n- **Energy industry influence**: Documented cases of fossil fuel companies suppressing renewable energy research\n- **Regulatory barriers**: How institutional frameworks have been documented to slow or prevent disruptive technologies\n- **Whistleblower accounts**: Engineers and scientists who documented institutional suppression of their work\n\n## Evidence Standards\n\nItems are sourced from USPTO records, congressional testimony, court filings, and verified investigative reporting.',
  131
),
(
  'trafficking-networks',
  'Child Safety & Human Trafficking Networks',
  'Documented institutional failures in protecting children, trafficking prosecutions, and systemic abuse',
  E'## Protecting the Most Vulnerable\n\nThis pillar documents verified cases of institutional failure to protect children, human trafficking prosecutions, and systemic abuse enabled by power structures. Every item is sourced from court records, law enforcement reports, and official investigations.\n\n## Key Patterns\n\n- **Institutional abuse**: Documented cases in religious institutions, government facilities, and private organizations\n- **Trafficking prosecutions**: Court records and DOJ cases documenting trafficking networks and their connections\n- **Systemic failures**: Cases where institutions that were supposed to protect children documented failures at every level\n- **Cover-ups**: Verified instances where abuse was concealed by institutional actors, documented through investigations\n\n## A Note on Sensitivity\n\nThis is the most difficult pillar in our archive. Every item represents real victims. We document these cases because silence enables repetition. All items meet our highest verification standards.',
  132
),
(
  'black-budget',
  'Space & Black Budget Programs',
  'Classified programs, unaccounted government spending, and secret projects documented through official records',
  E'## Following the Money Into the Black\n\nThe U.S. government maintains programs whose very existence is classified. The "black budget" — funding for classified defense and intelligence programs — has grown to over $80 billion annually. This pillar documents what we can verify through declassified records, audit findings, and congressional oversight.\n\n## Key Patterns\n\n- **Unaccounted spending**: Pentagon audit failures documenting trillions in untracked expenditures\n- **Classified programs**: Programs confirmed through declassification, FOIA releases, and congressional testimony\n- **Contractor accountability**: Defense contractors documented receiving funds with minimal oversight\n- **Congressional oversight gaps**: Documented instances where elected officials were denied access to program details\n\n## The Transparency Gap\n\nDemocracy requires accountability. When programs operate entirely outside public oversight, documented abuses become inevitable. This pillar tracks what the public record reveals.',
  128
),
(
  'surveillance-state',
  'AI & Surveillance Infrastructure',
  'Digital monitoring, algorithmic control, and documented erosion of privacy rights',
  E'## The Architecture of Observation\n\nEdward Snowden''s 2013 disclosures confirmed what many suspected: mass surveillance programs operated far beyond their legal authority. But surveillance infrastructure extends well beyond the NSA. This pillar documents the growing intersection of artificial intelligence, corporate data collection, and government monitoring.\n\n## Key Patterns\n\n- **Government surveillance**: NSA programs documented through the Snowden disclosures and subsequent FISA court rulings\n- **Corporate data harvesting**: Documented practices of major technology companies collecting and monetizing personal data\n- **AI-powered monitoring**: Facial recognition, predictive policing, and social credit systems documented through official records\n- **Legal erosion**: How surveillance authorities have expanded through documented legislative and executive actions\n\n## Digital Rights\n\nPrivacy is not a luxury — it is the foundation of free thought and free speech. This pillar documents threats to that foundation with verified sources.',
  134
),
(
  'environmental-crimes',
  'Environmental & Corporate Accountability',
  'Documented cases of corporate environmental destruction, industrial poisoning, and regulatory failures',
  E'## When Corporations Poison Communities\n\nFrom Love Canal to Flint, Michigan, the pattern is documented and repeating: corporations cut corners, regulators fail to act, communities suffer, and accountability comes years or decades too late. This pillar catalogs these cases with primary sources.\n\n## Key Patterns\n\n- **Industrial contamination**: Documented cases of water, soil, and air contamination by corporate actors\n- **Regulatory capture**: How industry influence over environmental agencies has been documented through internal communications and whistleblower testimony\n- **Climate disinformation**: Internal documents revealing fossil fuel companies'' documented knowledge of climate impacts\n- **Environmental justice**: How toxic facilities and contamination disproportionately affect documented communities\n\n## Accountability Through Documentation\n\nEnvironmental crimes leave evidence — in water tables, in medical records, in internal memos. This pillar collects that evidence and connects it to responsible parties through court records and official investigations.',
  128
)
ON CONFLICT (pillar_slug) DO NOTHING;
