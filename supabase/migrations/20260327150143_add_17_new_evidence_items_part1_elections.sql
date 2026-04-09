/*
  # Add New Evidence Items - Elections & Governance (Part 1)

  1. New Documents
    - HAVA & Electronic Voting Vendors
    - Dark Money Enforcement Failure / FEC
    - Post-Citizens United Arms Race

  2. Details
    - All items have VERIFIED tier
    - Includes comprehensive sources and context
    - Proper subcategory assignments for Elections & Governance pillar
*/

-- HAVA & Electronic Voting Vendors
INSERT INTO documents (
  title,
  description,
  content,
  source_url,
  verification_tier,
  document_type,
  date_published,
  subcategory,
  slug
) VALUES (
  'HAVA & Electronic Voting Vendors / Federal Reform Entrenching Private Machine Duopoly (2002–2006)',
  'The Help America Vote Act (HAVA) of 2002 poured billions into electronic voting systems, cementing a near-duopoly where Diebold and ES&S supplied roughly 80% of machines in 2004, with serious security flaws documented.',
  $$**The Reform That Created New Problems:**

The Help America Vote Act (HAVA) of 2002, passed after Florida's 2000 voting debacle, allocated billions of federal dollars for new electronic voting systems. By the 2004 presidential election, two private vendors — Diebold Election Systems and Election Systems & Software (ES&S) — controlled approximately 80% of the voting machine market nationwide.

**Key Evidence:**

- **Vendor Dominance:** Law review analysis found Diebold and ES&S were responsible for counting an estimated four out of five votes on electronic systems in 2004
- **Standards Lag:** Most 2004 machines were only qualified against outdated 1990 federal standards; even 2002-compliant systems lacked robust security requirements
- **Security Failures:** Technical reviews documented hard-wired DES encryption keys, identical physical keys across machines, easily picked locks, and hard-coded supervisor passwords
- **Paper Trail Issues:** Many direct-recording electronic (DRE) systems lacked voter-verified paper audit trails, limiting recount ability
- **Unintended Consequences:** Legal scholarship argues HAVA's rushed funding, vendor lobbying, and weak certification consolidated the market in poorly regulated private firms

**The Connection Web:**

→ Elections & Governance — voting infrastructure security
→ Financial Systems — vendor consolidation and lobbying power
→ Media Manipulation — limited coverage of technical vulnerabilities

**Sources:**

- Yale Law Journal. "The Help America Vote Act and Electronic Voting: The Unintended Consequences of HAVA." https://yalelawjournal.org/pdf/389_afu3te4t.pdf
- ACM Queue. "Electronic Voting Systems: The Good, the Bad, and the Stupid." https://queue.acm.org/detail.cfm?id=1035606
- UC Berkeley. "Preliminary Analysis of Voting System Standards." https://www.law.berkeley.edu/files/evoting_standards.pdf
- MIT. "Voting Technology Study." https://web.mit.edu/supportthevoter/www/files/2013/09/Voting_Technology_SDA_RLR.pdf$$,
  'https://yalelawjournal.org/pdf/389_afu3te4t.pdf',
  'verified',
  'Legal Analysis',
  '2002-10-29',
  'voting_infrastructure',
  'hava-electronic-voting-vendors-duopoly-2002-2006'
);

-- Dark Money Enforcement Failure
INSERT INTO documents (
  title,
  description,
  content,
  source_url,
  verification_tier,
  document_type,
  date_published,
  subcategory,
  slug
) VALUES (
  'Dark Money Enforcement Failure / FEC''s Struggle to Police Sham "Social Welfare" Groups',
  'FEC investigation into Freedom Vote Inc. found the group operated as an unregistered political committee, but commissioners deadlocked along partisan lines and declined enforcement, illustrating systemic failure.',
  $$**The Enforcement Black Hole:**

Even when evidence shows that a 501(c)(4) "social welfare" nonprofit is effectively operating as an unregistered political committee, the Federal Election Commission often fails to enforce disclosure and registration rules. A 2026 investigation into Freedom Vote Inc. exemplifies this systemic failure.

**Key Facts:**

- **Legal Standard:** Groups whose "major purpose" is influencing federal elections must register as political committees and disclose donors
- **Freedom Vote Case:** FEC investigators determined Freedom Vote Inc. spent most funds on express advocacy and electioneering communications, acting as a de facto political committee
- **Commission Gridlock:** Despite staff findings, FEC commissioners split along partisan lines and declined to approve enforcement
- **Systemic Effect:** Similar deadlocks signal to operatives that dark money structures can skirt disclosure with little risk
- **Feedback Loop:** The Supreme Court's Citizens United decision assumed robust disclosure; enforcement weakness has allowed dark money to flourish

**The Connection Web:**

→ Elections & Governance — campaign finance enforcement failure
→ Financial Systems — corporate political spending
→ Media Manipulation — hidden funding of political advertising

**Sources:**

- CREW. "The Inside Story of How the FEC Investigated a Dark Money Group." https://www.citizensforethics.org/reports-investigations/crew-reports/the-inside-story-of-how-the-fec-investigated-a-dark-money-group/
- Brennan Center. "Citizens United Explained." https://www.brennancenter.org/our-work/research-reports/citizens-united-explained$$,
  'https://www.citizensforethics.org/reports-investigations/crew-reports/the-inside-story-of-how-the-fec-investigated-a-dark-money-group/',
  'verified',
  'Investigation Report',
  '2026-01-15',
  'campaign_finance',
  'dark-money-enforcement-failure-fec-gridlock'
);

-- Post-Citizens United Arms Race
INSERT INTO documents (
  title,
  description,
  content,
  source_url,
  verification_tier,
  document_type,
  date_published,
  subcategory,
  slug
) VALUES (
  'Post–Citizens United Arms Race / Super PACs, Shell Companies, and Shadow Party Structures',
  'After Citizens United, both parties built elaborate ecosystems of Super PACs and dark money nonprofits functioning as "shadow parties," funded by unlimited, often opaque money routed through shell LLCs.',
  $$**The Shadow Party System:**

In the decade and a half after Citizens United, both major U.S. parties built elaborate ecosystems of Super PACs and dark money nonprofits that function as "shadow parties," effectively running candidate-aligned campaigns funded by unlimited, often opaque money.

**Key Facts:**

- **Shadow Party Networks:** Groups like Senate Leadership Fund, House Majority PAC, and Future Forward USA have effectively taken over messaging and ad buys previously done by official party committees
- **Coordination in Practice:** Candidates appear at fundraisers for "independent" Super PACs; groups share vendors, strategists, and polling — technically legal but functionally coordinated
- **Shell Company Contributions:** Millions flow from LLCs with no real operations, sometimes created shortly before elections, obscuring actual donors
- **Regulatory Gaps:** FEC's narrow view of coordination and partisan deadlocks have allowed these arrangements with minimal enforcement
- **Democratic Impact:** This system replaces donor-regulated party structure with a more opaque, billionaire- and corporate-driven ecosystem harder for voters to understand or hold accountable

**The Connection Web:**

→ Elections & Governance — shadow party infrastructure
→ Financial Systems — corporate and billionaire influence
→ Media Manipulation — coordinated advertising campaigns

**Sources:**

- Brennan Center. "Dark Money Hit a Record High of $1.9 Billion in 2024 Federal Races." https://www.brennancenter.org/our-work/research-reports/dark-money-hit-record-high-19-billion-2024-federal-races
- OpenSecrets. "Unprecedented Surge in Dark Money Floods 2024 Elections." https://www.opensecrets.org/news/2024/03/unprecedented-surge-in-dark-money-floods-2024-elections/$$,
  'https://www.brennancenter.org/our-work/research-reports/dark-money-hit-record-high-19-billion-2024-federal-races',
  'verified',
  'Research Report',
  '2024-12-15',
  'campaign_finance',
  'post-citizens-united-arms-race-super-pacs-shell-companies'
);
