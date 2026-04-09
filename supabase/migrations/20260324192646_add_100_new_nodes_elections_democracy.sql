/*
  # Add Elections & Democracy Nodes (12 new documents)

  Adds 12 new evidence nodes to the "Government, Law & Elections" pillar:
  53. Watergate / CREEP
  54. Bush v. Gore (2000)
  55. Diebold Voting Machines
  56. COINTELPRO
  57. Citizens United v. FEC
  58. Gerrymandering / REDMAP
  59. Koch Network Dark Money
  60. Shelby County v. Holder
  61. Electoral College Subversion
  62. ALEC Model Legislation
  63. Lobbying Industrial Complex
  64. Iran-Contra / October Surprise
*/

INSERT INTO documents (title, slug, description, content, source_url, verification_tier, document_type, date_published, metadata)
VALUES

(
  'Watergate / CREEP / Nixon Criminality (1972-1974)',
  'watergate-creep-nixon-criminality',
  'The Watergate scandal revealed that President Nixon''s Committee to Re-Elect the President (CREEP) had orchestrated a break-in at the Democratic National Committee headquarters and a broader campaign of political espionage, sabotage, and illegal wiretapping. Nixon participated in the cover-up from its earliest days. Eighteen-and-a-half minutes of key White House tapes were erased. Nixon resigned in August 1974.',
  'On June 17, 1972, five men were arrested breaking into the Democratic National Committee headquarters at the Watergate complex in Washington, D.C. The burglars had ties to the Committee to Re-Elect the President (CREEP) and carried documents linking them to the White House. The Nixon administration immediately began an extensive cover-up, which included paying hush money to the burglars, destroying evidence, and misusing the CIA, FBI, and other federal agencies. White House tape recordings subpoenaed by the special prosecutor revealed that Nixon had participated in the cover-up within days of the break-in. The tapes also revealed 18.5 minutes of erasure at a critical point in the evidence — which Nixon''s secretary claimed was accidental but forensic analysts concluded was deliberate. The Senate Watergate Committee and House Judiciary Committee investigations documented a broader pattern of political crimes including illegal wiretapping of journalists and political opponents, forged diplomatic cables to undermine Senator Ted Kennedy''s presidential prospects, tax audit harassment of political enemies, and the creation of a secret Plumbers unit for covert operations. Nixon resigned on August 9, 1974, before the House could vote on his impeachment.',
  'https://en.wikipedia.org/wiki/Watergate_scandal',
  'verified',
  'Government, Law & Elections',
  '1974-08-09',
  '{"category": "Presidential criminality / obstruction of justice", "importance": "PURE_GOLD", "tags": ["Watergate", "Nixon", "CREEP", "cover-up", "White House tapes", "resignation", "political espionage"]}'
),

(
  'Bush v. Gore / 2000 Presidential Election (2000)',
  'bush-v-gore-2000-presidential-election',
  'The U.S. Supreme Court''s 5-4 decision in Bush v. Gore stopped the Florida recount in the 2000 presidential election, effectively awarding the presidency to George W. Bush. The majority opinion included the unprecedented statement that the ruling could not be used as precedent in future cases. Five of the justices in the majority had been appointed by Republican presidents; Justice Scalia''s son worked for the law firm representing Bush.',
  'On November 7, 2000, the presidential election between George W. Bush and Al Gore resulted in a contested outcome in Florida, where official tallies showed Bush leading by approximately 537 votes out of nearly 6 million cast. The Florida Supreme Court ordered a recount of undervotes — ballots where no presidential vote was registered by machines. On December 9, 2000, the U.S. Supreme Court issued a stay halting the recount 5-4. On December 12, in a 5-4 decision, the Court ruled that the varying recount standards across counties violated equal protection — and then ruled 5-4 to not allow time for a recount using uniform standards. The majority opinion contained the extraordinary statement: "our consideration is limited to the present circumstances, for the problem of equal protection in election processes generally presents many complexities." Critics noted this meant the decision was explicitly not to be used as precedent. Justice Scalia''s son Eugene worked for Gibson, Dunn & Crutcher, the law firm representing Bush''s team; Justice Thomas''s wife Ginni worked for the Heritage Foundation, which was preparing transition team documents for a Bush administration. Both Scalia and Thomas declined to recuse themselves.',
  'https://en.wikipedia.org/wiki/Bush_v._Gore',
  'verified',
  'Government, Law & Elections',
  '2000-12-12',
  '{"category": "Supreme Court election interference / judicial conflict of interest", "importance": "PURE_GOLD", "tags": ["Bush v. Gore", "2000 election", "Florida recount", "Supreme Court", "conflict of interest", "Scalia", "Thomas"]}'
),

(
  'Diebold Voting Machines / Electronic Voting Vulnerabilities (2000s-Present)',
  'diebold-voting-machines-vulnerabilities',
  'Diebold Election Systems'' voting machines — used in numerous U.S. elections from the early 2000s onward — were found by security researchers to have fundamental security vulnerabilities including no paper trail, easily copied memory cards, and weak encryption. In 2006, a computer scientist demonstrated that the Diebold AccuVote-TS could be hacked in under a minute using a standard hotel room key. Diebold''s CEO had promised to deliver Ohio''s electoral votes to Bush in 2003.',
  'Diebold Election Systems (later Premier Election Solutions) manufactured electronic voting machines used in 34 states. Security researchers from Johns Hopkins University published a landmark study in 2003 documenting multiple critical vulnerabilities in the AccuVote-TS touch-screen voting system, including: the use of a single cryptographic key published in public Diebold source code; the ability to reboot machines using a standard Diebold key that fit most of the company''s products; the ability to alter vote tallies using memory cards without authorization; and the absence of a paper audit trail. In August 2006, computer scientist Avi Rubin demonstrated that the AccuVote-TS could be hacked and vote totals altered in under a minute. Earlier, in August 2003, Diebold CEO Walden O''Dell had written a Republican Party fundraising letter pledging he was "committed to helping Ohio deliver its electoral votes to the President next year." After internal Diebold memos and source code were leaked and published online in 2003, the company sought injunctions against websites hosting the information, citing DMCA violations.',
  'https://en.wikipedia.org/wiki/Diebold_Election_Systems',
  'verified',
  'Government, Law & Elections',
  '2003-07-23',
  '{"category": "Electronic voting machine vulnerabilities / election integrity", "importance": "GOLD", "tags": ["Diebold", "voting machines", "electronic voting", "security vulnerabilities", "election integrity", "Walden O''Dell", "Ohio"]}'
),

(
  'COINTELPRO / FBI Domestic Surveillance Program (1956-1971)',
  'cointelpro-fbi-domestic-surveillance',
  'COINTELPRO (Counter Intelligence Program) was a covert FBI program from 1956 to 1971 that targeted domestic political organizations — including the NAACP, Southern Christian Leadership Conference, Black Panther Party, anti-Vietnam War groups, and feminist organizations — using illegal surveillance, infiltration, blackmail, forged letters to provoke internal conflict, and evidence-planting. The program targeted Martin Luther King Jr. personally; the FBI sent King an anonymous letter urging him to commit suicide.',
  'COINTELPRO (Counter Intelligence Program) was a series of covert and illegal FBI projects conducted from 1956 to 1971 to surveil, infiltrate, discredit, and disrupt domestic political organizations. The program was exposed by the Citizens'' Commission to Investigate the FBI, which broke into an FBI field office in Media, Pennsylvania on March 8, 1971, and published stolen files. Subsequent Senate investigations (the Church Committee, 1975) documented extensive abuses. Targets included the NAACP, the Southern Christian Leadership Conference, the American Indian Movement, the Socialist Workers Party, the Students for a Democratic Society, feminist organizations, and the Communist Party USA. Methods included: planting illegal wiretaps; forging letters between organizations to provoke internal conflicts; sending anonymous letters to target spouses suggesting infidelity; planting provocateurs to encourage groups toward violence; assassinating or manufacturing evidence against group leaders. The FBI sent Martin Luther King Jr. a letter in November 1964 urging him to commit suicide, along with what purported to be a tape recording of sexual activity. The letter, drafted by FBI officials, was formally acknowledged as authentic by the Senate Intelligence Committee.',
  'https://en.wikipedia.org/wiki/COINTELPRO',
  'verified',
  'Government, Law & Elections',
  '1971-03-08',
  '{"category": "FBI domestic political persecution / illegal surveillance", "importance": "PURE_GOLD", "tags": ["COINTELPRO", "FBI", "MLK", "Black Panthers", "NAACP", "illegal surveillance", "Church Committee"]}'
),

(
  'Citizens United v. FEC / Corporate Money in Elections (2010)',
  'citizens-united-v-fec-corporate-money',
  'The U.S. Supreme Court''s 5-4 ruling in Citizens United v. FEC (2010) struck down limits on independent political expenditures by corporations, unions, and other associations, holding that political spending is a form of free speech protected by the First Amendment. The ruling opened the floodgates for unlimited dark money in elections; total outside spending in federal elections increased from $338 million in 2008 to over $1.5 billion in 2012.',
  'Citizens United v. Federal Election Commission was decided by the U.S. Supreme Court on January 21, 2010, with a 5-4 decision along ideological lines. The ruling held that the Free Speech Clause of the First Amendment prohibited the government from restricting independent expenditures for political campaigns by corporations, including nonprofit corporations, for-profit corporations, labor unions, and other associations. The decision overruled Austin v. Michigan Chamber of Commerce (1990) and partially overruled McConnell v. FEC (2003). The ruling effectively allowed unlimited political spending from corporate treasuries through Super PACs and 501(c)(4) nonprofit organizations, which do not have to disclose their donors. Total outside spending in federal elections: $338 million in 2008 (pre-Citizens United); $1 billion in 2010; $1.5 billion in 2012; over $3.4 billion in 2020. Since the ruling, the number of super PACs has grown from zero to over 2,200. A 2014 Princeton study by Gilens and Page found that U.S. policy outcomes correlate almost entirely with the preferences of economic elites, not average citizens.',
  'https://en.wikipedia.org/wiki/Citizens_United_v._FEC',
  'verified',
  'Government, Law & Elections',
  '2010-01-21',
  '{"category": "Supreme Court / dark money / corporate political power", "importance": "PURE_GOLD", "tags": ["Citizens United", "Super PACs", "dark money", "corporate speech", "election finance", "Supreme Court"]}'
),

(
  'Gerrymandering / REDMAP / Republican District Manipulation (2010-Present)',
  'gerrymandering-redmap-district-manipulation',
  'In 2010, the Republican State Leadership Committee launched REDMAP (Redistricting Majority Project), a $30 million initiative to win state legislative seats in key states before the decennial redistricting. The effort succeeded, enabling Republicans to draw congressional districts in states like Pennsylvania, Michigan, and Ohio that consistently produced congressional majorities even when the overall vote was split nearly 50-50.',
  'Gerrymandering — drawing legislative district boundaries to favor a particular party — has been practiced throughout American history. The 2010 election cycle created a singular opportunity: it coincided with the decennial U.S. Census, after which state legislatures redraw congressional and state legislative districts. The Republican State Leadership Committee publicly launched REDMAP (Redistricting Majority Project) — a $30 million effort to win state legislative chambers in states with large congressional delegations, explicitly to control redistricting. The strategy succeeded in key states including Pennsylvania, Michigan, Ohio, North Carolina, and Wisconsin. In Pennsylvania, Republicans drew a congressional map that consistently produced 13 Republican seats to 5 Democratic seats, even in years where the statewide vote was approximately 50-50. A 2018 Pennsylvania Supreme Court ruling struck down the map as unconstitutional. In North Carolina, a federal court found the 2016 congressional map was drawn with discriminatory intent against African-American voters. The Democratic Party conducted similar gerrymandering in states it controlled, including Maryland. Advanced computer software (REDMAP used technology specifically developed for this purpose) has made modern gerrymandering more precise and harder to undo than historical examples.',
  'https://en.wikipedia.org/wiki/REDMAP',
  'verified',
  'Government, Law & Elections',
  '2010-09-01',
  '{"category": "Partisan gerrymandering / election manipulation", "importance": "GOLD", "tags": ["gerrymandering", "REDMAP", "redistricting", "Republican Party", "congressional districts", "election manipulation"]}'
),

(
  'Koch Network Dark Money Political Infrastructure (1970s-Present)',
  'koch-network-dark-money-political-infrastructure',
  'Charles Koch and the late David Koch built a network of political organizations — described by journalist Jane Mayer as a shadow government — that spent over $900 million on the 2016 elections alone. The Koch network funds think tanks, university programs, legal organizations, and political committees that have systematically shifted American policy on taxation, regulation, climate, and voting rights. Dark money flows through 501(c)(4) organizations that do not disclose donors.',
  'Charles Koch and David Koch (1940-2019) built an interconnected network of political organizations beginning in the 1970s that by the 2010s represented what investigative journalist Jane Mayer described in Dark Money (2016) as an unprecedented private political infrastructure. The network funds organizations including the Cato Institute, Heritage Foundation, Americans for Prosperity, Freedom Partners, the Mercatus Center at George Mason University, the Institute for Humane Studies, and scores of state-level policy organizations. Because most of the political spending flows through 501(c)(4) organizations — which are classified as social welfare organizations and do not have to disclose donors — the true scale of Koch political spending is unknown. Publicly reported figures include over $400 million in the 2012 elections and an announced budget of over $900 million for the 2016 cycle. The network has funded campaigns against climate science, against minimum wage increases, against union rights, against campaign finance disclosure laws, and in support of voter ID legislation and electoral college changes designed to reduce urban (majority Democratic) voting power.',
  'https://en.wikipedia.org/wiki/Koch_network',
  'corroborated',
  'Government, Law & Elections',
  '2016-01-01',
  '{"category": "Dark money political network / oligarchic influence", "importance": "PURE_GOLD", "tags": ["Koch network", "dark money", "Americans for Prosperity", "Citizens United", "political influence", "dark money infrastructure"]}'
),

(
  'Shelby County v. Holder / Voting Rights Gutted (2013)',
  'shelby-county-v-holder-voting-rights',
  'In a 5-4 decision in June 2013, the Supreme Court struck down Section 4 of the Voting Rights Act of 1965, effectively gutting the preclearance requirement that had required states with histories of discrimination to get federal approval before changing voting laws. Within 24 hours of the ruling, multiple states began implementing voter ID laws, polling place closures, and registration restrictions that had previously been blocked.',
  'The Voting Rights Act of 1965 contained a preclearance requirement (Section 5) under which states and localities with documented histories of racial discrimination in voting had to obtain federal approval before implementing any changes to voting laws or procedures. The formula identifying which jurisdictions required preclearance was contained in Section 4. In Shelby County v. Holder (2013), the Supreme Court ruled 5-4 that Section 4''s coverage formula was unconstitutional because it was based on 40-year-old data and did not reflect current conditions. The ruling effectively suspended Section 5, as there was no longer a valid coverage formula triggering preclearance. Within 24 hours of the ruling, Texas announced it would implement a voter ID law that had previously been blocked under preclearance. North Carolina quickly passed omnibus legislation restricting early voting, eliminating same-day registration, and implementing voter ID — a law a federal appeals court later found targeted African-American voters with almost surgical precision. In the decade following Shelby County, studies documented hundreds of polling place closures disproportionately in minority-majority counties across formerly covered states.',
  'https://en.wikipedia.org/wiki/Shelby_County_v._Holder',
  'verified',
  'Government, Law & Elections',
  '2013-06-25',
  '{"category": "Voting Rights Act gutted / racial voter suppression", "importance": "PURE_GOLD", "tags": ["Shelby County", "Voting Rights Act", "voter suppression", "Supreme Court", "preclearance", "racial discrimination", "polling closures"]}'
),

(
  'Electoral College Minority Rule / Constitutional Distortion (1787-Present)',
  'electoral-college-minority-rule',
  'The Electoral College system established in the U.S. Constitution has produced five presidents who lost the popular vote, including two in the 21st century alone (Bush 2000, Trump 2016). The system was designed in part to protect slavery — smaller slave states demanded equal representation — and has been identified by constitutional scholars as the most significant structural democracy deficit in the American political system.',
  'The Electoral College was established in Article II of the U.S. Constitution as a mechanism for selecting the president, giving each state a number of electors equal to its total representation in Congress (House plus Senate). This system creates a structural advantage for smaller states, since every state gets a minimum of three electoral votes regardless of population — effectively giving Wyoming voters approximately four times the electoral weight of California voters in presidential elections. The three-fifths compromise and related provisions that inflated Southern states'' political power in the Constitution were directly related to the design of the Electoral College. Constitutional historian Garry Wills, Akhil Amar, and others have documented that the Electoral College was in part a concession to slave states, whose large enslaved populations counted toward representation under the three-fifths clause while being unable to vote. Five presidents have won the presidency while losing the popular vote: John Quincy Adams (1824), Rutherford Hayes (1876), Benjamin Harrison (1888), George W. Bush (2000, by approximately 540,000 votes), and Donald Trump (2016, by approximately 2.9 million votes). The United States is the only major democracy in the world that does not elect its head of government by direct popular vote.',
  'https://en.wikipedia.org/wiki/United_States_Electoral_College',
  'verified',
  'Government, Law & Elections',
  '1787-09-17',
  '{"category": "Constitutional minority rule / democracy deficit", "importance": "GOLD", "tags": ["Electoral College", "popular vote", "minority rule", "slavery origins", "democracy deficit", "presidential elections"]}'
),

(
  'ALEC Model Legislation / Corporate Lawmaking (1973-Present)',
  'alec-model-legislation-corporate-lawmaking',
  'The American Legislative Exchange Council (ALEC) is a 501(c)(3) nonprofit that brings together state legislators and corporate lobbyists to draft model legislation, which member legislators then introduce in their home states as if it were their own original work. ALEC has drafted model bills on voter ID, stand-your-ground laws, private prison expansion, anti-union legislation, and environmental deregulation — all benefiting corporate funders.',
  'The American Legislative Exchange Council (ALEC) was founded in 1973 by conservative activists including Paul Weyrich. It operates as a membership organization for state legislators and corporations, hosting conferences where legislators and corporate representatives sit together on task forces to develop model legislation. Corporations pay from $7,000 to $25,000 annually for membership, while legislators pay nominal fees. ALEC describes itself as a nonpartisan educational organization and claims tax-exempt 501(c)(3) status. Critics and investigative reporters note that model legislation developed at ALEC conferences — which corporations help draft — consistently benefits those corporations and is introduced by member legislators without disclosure of ALEC''s involvement. Documented model bills include: voter ID legislation (adopted in 36 states); Stand Your Ground laws (adopted in 26 states, cited in the Trayvon Martin case); private prison expansion legislation; anti-union right-to-work laws; legislation attacking independent oversight of corporate activity; and multiple bills blocking climate and environmental regulation. In 2011, the Center for Media and Democracy published over 800 ALEC model bills through its ALECexposed.org project.',
  'https://en.wikipedia.org/wiki/American_Legislative_Exchange_Council',
  'verified',
  'Government, Law & Elections',
  '1973-09-12',
  '{"category": "Corporate lawmaking / model legislation / shadow democracy", "importance": "GOLD", "tags": ["ALEC", "model legislation", "corporate lobbying", "voter ID", "Stand Your Ground", "private prisons", "dark money"]}'
),

(
  'Lobbying Industrial Complex / Revolving Door (1970s-Present)',
  'lobbying-industrial-complex-revolving-door',
  'The U.S. federal lobbying industry has grown from approximately 175 registered lobbyists in 1975 to over 12,000 active federal lobbyists spending over $3.7 billion annually. The revolving door between government and K Street is well-documented: a 2016 Harvard study found 50% of former U.S. senators and 42% of former House members went to work for lobbying firms. Corporate lobbying consistently produces returns of 2,200% or higher on investment in legislation.',
  'Federal lobbying in the United States has transformed from a marginal activity to a central mechanism of governance. The number of registered federal lobbyists grew from approximately 175 in 1975 to a peak of over 14,000 in the late 2000s, with approximately 12,000 active as of recent years. Total lobbying spending in 2022 was approximately $3.97 billion. The pharmaceutical industry consistently spends more on federal lobbying than any other sector. A 2014 study by political scientists Gilens and Page found that U.S. policy outcomes have a near-zero statistical correlation with the preferences of average voters, while correlating strongly with the preferences of economic elites and organized interest groups. A 2016 study found that corporations received returns of 2,200% on lobbying investment in the tax code, measured by subsequent regulatory and tax benefits. The revolving door — the movement of individuals between government positions and private-sector lobbying or consulting roles — is documented by OpenSecrets.org: a 2016 Harvard study found 50% of former senators and 42% of former House members subsequently registered as lobbyists. Current law prohibits a two-year cooling-off period for senators; this is routinely worked around through advisory or consulting roles.',
  'https://en.wikipedia.org/wiki/Lobbying_in_the_United_States',
  'verified',
  'Government, Law & Elections',
  '2014-09-18',
  '{"category": "Institutional corruption / lobbying industry", "importance": "PURE_GOLD", "tags": ["lobbying", "revolving door", "K Street", "corporate influence", "policy capture", "Gilens & Page", "2200% ROI"]}'
),

(
  'Iran-Contra / October Surprise Allegations (1980-1987)',
  'iran-contra-october-surprise-allegations',
  'The Iran-Contra affair revealed that senior Reagan administration officials secretly sold weapons to Iran (then under a U.S. arms embargo) and illegally diverted the proceeds to fund Contra rebels in Nicaragua against explicit congressional prohibition. Fourteen administration officials were indicted; most convictions were overturned or pardoned. The October Surprise allegation — that the Reagan campaign negotiated to delay the Iran hostage release until after the 1980 election — has been corroborated by multiple witnesses.',
  'The Iran-Contra affair was a political scandal that emerged in 1986 when it was revealed that members of the Reagan administration had secretly arranged the sale of arms to Iran — then under a U.S. arms embargo — in exchange for Iran''s help securing the release of American hostages held in Lebanon by Hezbollah. More critically, the proceeds from the arms sales were secretly diverted to fund the Contra rebel forces in Nicaragua, in direct violation of the Boland Amendment, which had explicitly prohibited U.S. government support for the Contras. Fourteen administration officials were indicted; eleven were convicted; most convictions were overturned on appeal or pardoned by President George H.W. Bush. Independent Counsel Lawrence Walsh later documented that Bush had been more involved in the affair than he had acknowledged. The October Surprise allegation — supported by testimony from former Iranian officials and a 1991 investigation led by Senator Kerry — holds that Reagan campaign officials, including possibly William Casey, met with Iranian representatives in 1980 to negotiate a delay in the release of 52 American hostages until after the presidential election, in exchange for arms. The hostages were released minutes after Reagan was inaugurated.',
  'https://en.wikipedia.org/wiki/Iran%E2%80%93Contra_affair',
  'verified',
  'Government, Law & Elections',
  '1986-11-03',
  '{"category": "Presidential criminality / illegal arms sales / election interference", "importance": "PURE_GOLD", "tags": ["Iran-Contra", "October Surprise", "Reagan", "Oliver North", "Boland Amendment", "arms sales", "Nicaragua"]}'
)

ON CONFLICT (slug) DO NOTHING;
