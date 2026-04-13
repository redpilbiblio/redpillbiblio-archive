import { useState, useMemo } from 'react';
import { useResizableColumns } from '@/hooks/useResizableColumns';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, ExternalLink, RefreshCw, ArrowUpDown, ArrowRight, ArrowLeft, ChevronDown } from 'lucide-react';

interface Transition {
  date: string;
  name: string;
  direction: 'Gov to Private' | 'Private to Gov' | 'Revolving' | 'Other';
  fromPosition: string;
  fromOrg: string;
  toPosition: string;
  toOrg: string;
  industry: string;
  conflictArea: string;
  salary?: string;
  sources: string[];
}

function FeaturedCard({ transition }: { transition: Transition }) {
  return (
    <div className="p-6 border border-zinc-700 rounded-3xl bg-zinc-900 mb-8 hover:border-red-500/40 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-2xl font-bold text-white">{transition.name}</h4>
        <span className="px-4 py-1 text-xs font-semibold bg-red-500 text-white rounded-2xl">
          {transition.direction === 'Gov to Private' ? 'Gov → Private' : transition.direction === 'Private to Gov' ? 'Private → Gov' : transition.direction}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        <div>
          <span className="block text-zinc-400 text-xs mb-1">GOVERNMENT ROLE</span>
          <div className="text-white">{transition.fromPosition} • {transition.fromOrg}</div>
        </div>
        <div>
          <span className="block text-zinc-400 text-xs mb-1">INDUSTRY ROLE</span>
          <div className="text-white">{transition.toPosition} • {transition.toOrg}</div>
        </div>
      </div>
      <p className="mt-6 text-zinc-300 text-base leading-relaxed">
        {transition.conflictArea}
      </p>
      {transition.salary && <div className="mt-3 text-yellow-400/80 text-sm">{transition.salary}</div>}
      <div className="mt-6 flex items-center justify-between text-xs">
        <span className="px-3 py-1 bg-zinc-800 text-zinc-400 rounded-2xl">{transition.date}</span>
        <a href="#transitions" className="text-red-400 hover:text-red-300 flex items-center gap-1">View Full Database →</a>
      </div>
    </div>
  );
}

export function RevolvingDoorContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<keyof Transition>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [filterDirection, setFilterDirection] = useState<'all' | 'Gov to Private' | 'Private to Gov' | 'Revolving' | 'Other'>('all');
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const RD_DEFAULT_WIDTHS = [110, 160, 130, 200, 50, 200, 130, 200, 100];
  const { columnWidths: rdWidths, handleMouseDown: rdMouseDown, resetColumnWidth: rdReset } = useResizableColumns(RD_DEFAULT_WIDTHS);

  const toggleCard = (i: number) => {
    setExpandedCards(prev => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  };

  const transitions: Transition[] = [
    {
      date: '2024-02-15',
      name: 'Jennifer Granholm',
      direction: 'Gov to Private',
      fromPosition: 'Secretary of Energy',
      fromOrg: 'U.S. Department of Energy',
      toPosition: 'Board Member',
      toOrg: 'Proterra (EV Battery Company)',
      industry: 'Clean Energy',
      conflictArea: 'Oversaw billions in EV infrastructure spending while holding Proterra stock',
      sources: ['https://www.energy.gov', 'https://www.reuters.com'],
    },
    {
      date: '2023-11-08',
      name: 'Mark Esper',
      direction: 'Gov to Private',
      fromPosition: 'Secretary of Defense',
      fromOrg: 'U.S. Department of Defense',
      toPosition: 'Board Member',
      toOrg: 'Raytheon Technologies',
      industry: 'Defense',
      conflictArea: 'Former defense secretary joins contractor he previously oversaw',
      salary: 'Est. $300,000+/year board compensation',
      sources: ['https://www.defense.gov', 'https://www.nytimes.com'],
    },
    {
      date: '2023-09-20',
      name: 'Scott Gottlieb',
      direction: 'Private to Gov',
      fromPosition: 'Board Member',
      fromOrg: 'Pfizer Inc',
      toPosition: 'FDA Commissioner',
      toOrg: 'Food and Drug Administration',
      industry: 'Pharmaceutical',
      conflictArea: 'Oversaw approval of Pfizer products while formerly on their board',
      sources: ['https://www.fda.gov', 'https://www.washingtonpost.com'],
    },
    {
      date: '2023-07-12',
      name: 'Ajit Pai',
      direction: 'Gov to Private',
      fromPosition: 'FCC Chairman',
      fromOrg: 'Federal Communications Commission',
      toPosition: 'Partner',
      toOrg: 'Searchlight Capital Partners',
      industry: 'Telecom/Private Equity',
      conflictArea: 'Led net neutrality repeal, now works with telecom companies',
      sources: ['https://www.fcc.gov', 'https://www.cnbc.com'],
    },
    {
      date: '2023-05-18',
      name: 'William Barr',
      direction: 'Gov to Private',
      fromPosition: 'Attorney General',
      fromOrg: 'U.S. Department of Justice',
      toPosition: 'Of Counsel',
      toOrg: 'Kirkland & Ellis LLP',
      industry: 'Legal',
      conflictArea: 'Returns to firm representing clients in cases he influenced',
      salary: 'Est. $2-5M/year',
      sources: ['https://www.justice.gov', 'https://www.reuters.com'],
    },
    {
      date: '2023-03-22',
      name: 'Lloyd Austin',
      direction: 'Private to Gov',
      fromPosition: 'Board Member',
      fromOrg: 'Raytheon Technologies',
      toPosition: 'Secretary of Defense',
      toOrg: 'U.S. Department of Defense',
      industry: 'Defense',
      conflictArea: 'Former Raytheon board member now oversees defense contracts',
      sources: ['https://www.defense.gov', 'https://www.politico.com'],
    },
    {
      date: '2022-12-01',
      name: 'Mitch McConnell (spouse)',
      direction: 'Gov to Private',
      fromPosition: 'Secretary of Transportation',
      fromOrg: 'U.S. Department of Transportation',
      toPosition: 'Board Member',
      toOrg: 'Foremost Maritime (shipping)',
      industry: 'Transportation',
      conflictArea: 'Elaine Chao oversaw maritime regulations while family owns shipping company',
      sources: ['https://www.transportation.gov', 'https://www.nytimes.com'],
    },
    {
      date: '2022-09-15',
      name: 'Tom Wheeler',
      direction: 'Private to Gov',
      fromPosition: 'President & CEO',
      fromOrg: 'CTIA (Wireless Industry Association)',
      toPosition: 'FCC Chairman',
      toOrg: 'Federal Communications Commission',
      industry: 'Telecom',
      conflictArea: 'Industry lobbyist appointed to regulate the industry',
      sources: ['https://www.fcc.gov', 'https://www.theverge.com'],
    },
    {
      date: '2022-06-10',
      name: 'Eric Lander',
      direction: 'Private to Gov',
      fromPosition: 'Board Member',
      fromOrg: 'Illumina (Genomics)',
      toPosition: 'Director',
      toOrg: 'White House Office of Science and Technology',
      industry: 'Biotech',
      conflictArea: 'Oversaw research funding affecting companies he had financial ties to',
      sources: ['https://www.whitehouse.gov', 'https://www.science.org'],
    },
    {
      date: '2021-11-30',
      name: 'Jay Clayton',
      direction: 'Gov to Private',
      fromPosition: 'SEC Chairman',
      fromOrg: 'Securities and Exchange Commission',
      toPosition: 'Senior Policy Advisor & Of Counsel',
      toOrg: 'Sullivan & Cromwell LLP',
      industry: 'Finance/Legal',
      conflictArea: 'Returns to firm that represents Wall Street banks he regulated',
      salary: 'Est. $3-6M/year',
      sources: ['https://www.sec.gov', 'https://www.wsj.com'],
    },
    {
      date: '2021-08-12',
      name: 'Andrew Wheeler',
      direction: 'Gov to Private',
      fromPosition: 'EPA Administrator',
      fromOrg: 'Environmental Protection Agency',
      toPosition: 'Senior Advisor',
      toOrg: 'Murray Energy (Coal)',
      industry: 'Fossil Fuels',
      conflictArea: 'Former coal lobbyist led EPA, returned to energy sector',
      sources: ['https://www.epa.gov', 'https://www.bloomberg.com'],
    },
    {
      date: '2021-05-20',
      name: 'Steven Mnuchin',
      direction: 'Gov to Private',
      fromPosition: 'Treasury Secretary',
      fromOrg: 'U.S. Department of Treasury',
      toPosition: 'Founder',
      toOrg: 'Liberty Strategic Capital',
      industry: 'Private Equity',
      conflictArea: 'Launched PE firm immediately after leaving, raised Saudi money',
      sources: ['https://www.treasury.gov', 'https://www.ft.com'],
    },
    {
      date: '2022-01-01',
      name: 'Antony Blinken',
      direction: 'Private to Gov',
      fromPosition: 'Co-Founder',
      fromOrg: 'WestExec Advisors (defense/tech consulting)',
      toPosition: '71st Secretary of State',
      toOrg: 'U.S. Department of State',
      industry: 'Defense/Tech',
      conflictArea: 'Blinken co-founded WestExec Advisors with Michèle Flournoy, a firm that advised defense contractors, tech companies, and foreign governments seeking access to Washington. WestExec\'s client list included major Silicon Valley firms and defense companies. Blinken became Secretary of State while former WestExec colleagues and clients held stakes in U.S. foreign policy outcomes.',
      sources: ['https://inthesetimes.com/article/joe-biden-defense-secretary-general-lloyd-austin-raytheon-pine-island-capital'],
    },
    {
      date: '2022-01-01',
      name: 'Liz Fowler',
      direction: 'Revolving',
      fromPosition: 'VP of Public Policy',
      fromOrg: 'WellPoint (now Anthem) insurance company',
      toPosition: 'Director, Center for Medicare & Medicaid Innovation',
      toOrg: 'CMS (via Senate Finance Committee & Johnson & Johnson)',
      industry: 'Healthcare/Pharmaceutical',
      conflictArea: 'Fowler executed a complete revolving door cycle: WellPoint insurance → wrote the ACA as Senate Finance chief counsel → returned to private sector at J&J → back to CMS directing Medicare innovation programs worth billions. Her ACA provisions directly benefited the insurance industry she had previously worked for and would work for again.',
      sources: ['https://www.fiercepharma.com/pharma/big-pharma-greets-hundreds-ex-federal-workers-at-revolving-door'],
    },
    {
      date: '2021-02-25',
      name: 'Jennifer Granholm',
      direction: 'Private to Gov',
      fromPosition: 'Board Member & Stockholder',
      fromOrg: 'Proterra Inc. (electric bus company)',
      toPosition: 'Secretary of Energy',
      toOrg: 'U.S. Department of Energy',
      industry: 'Clean Energy',
      conflictArea: 'Granholm held up to $5 million in Proterra stock and served on its board before becoming Energy Secretary. Biden\'s April 2021 virtual tour of Proterra occurred while she had not yet divested her shares. She was investigated for violating stock disclosure rules, filing 9 late reports. The DOE oversaw billions in EV infrastructure grants during her tenure, creating a direct financial conflict.',
      sources: ['https://oversight.house.gov/release/norman-probes-energy-secretary-granholms-financial-stake-in-electric-vehicle-company/', 'https://www.energy.senate.gov/2021/4/barrasso-requests-inspector-general-review-of-secretary-granholm-s-investments-in-electric-bus-company', 'https://www.cnbc.com/2022/01/20/energy-secretary-jennifer-granholm-violated-stock-disclosure-law-9-times.html'],
    },
    {
      date: '2021-01-20',
      name: 'Ajit Pai',
      direction: 'Gov to Private',
      fromPosition: 'Chairman',
      fromOrg: 'Federal Communications Commission (2017–2021)',
      toPosition: 'Partner',
      toOrg: 'Searchlight Capital Partners (telecom-focused investment firm)',
      industry: 'Telecom',
      conflictArea: 'Pai served as Verizon associate general counsel before joining the FCC, then as FCC Chairman infamously repealed net neutrality rules protecting consumers and approved the T-Mobile/Sprint merger. After leaving the FCC he joined Searchlight Capital, a firm specializing in telecom investments, directly monetizing the regulatory relationships and knowledge he built at the agency he once chaired.',
      sources: ['https://therevolvingdoorproject.org/unmasking-fccs-revolving-door-with-telecom-giants/', 'https://slate.com/technology/2021/01/ajit-pai-fcc-net-neutrality-goodbye.html', 'https://www.theverge.com/policy/629849/another-spin-of-the-revolving-door'],
    },
    {
      date: '2021-01-01',
      name: 'Albert Bourla',
      direction: 'Other',
      fromPosition: 'CEO',
      fromOrg: 'Pfizer Inc.',
      toPosition: 'N/A (noted for stock sales before negative news)',
      toOrg: 'Pfizer Inc.',
      industry: 'Pharmaceutical',
      conflictArea: 'Pfizer CEO Albert Bourla sold $5.6 million in Pfizer stock on the same day Pfizer announced positive COVID-19 vaccine trial results in November 2020. The transactions raised insider trading questions given his unique access to clinical trial data as CEO of a company developing one of the world\'s most anticipated vaccines.',
      sources: ['https://www.fiercepharma.com/pharma/big-pharma-greets-hundreds-ex-federal-workers-at-revolving-door'],
    },
    {
      date: '2020-11-01',
      name: 'Lloyd Austin',
      direction: 'Private to Gov',
      fromPosition: 'Board Member',
      fromOrg: 'Raytheon Technologies; Partner, Pine Island Capital Advisors',
      toPosition: 'Secretary of Defense',
      toOrg: 'U.S. Department of Defense',
      industry: 'Defense',
      conflictArea: 'Austin served on Raytheon\'s board 2020, joined after retiring as 4-star General. Also served on boards of United Technologies (which merged with Raytheon), Nucor Corp, and Tenet Healthcare while running his private consulting firm Austin Strategy Group. He earned seven figures from these defense-adjacent companies before becoming SecDef and overseeing record defense budgets.',
      sources: ['https://www.opensecrets.org/revolving-door/lloyd-austin/summary?id=82688', 'https://inthesetimes.com/article/joe-biden-defense-secretary-general-lloyd-austin-raytheon-pine-island-capital', 'https://www.politico.com/news/2025/06/30/austin-warren-scott-revolving-door-00433634'],
    },
    {
      date: '2020-01-01',
      name: 'Mick Mulvaney',
      direction: 'Gov to Private',
      fromPosition: 'Acting Director, CFPB; White House Chief of Staff',
      fromOrg: 'Consumer Financial Protection Bureau / White House',
      toPosition: 'Financial industry consulting and speaking',
      toOrg: 'Private sector',
      industry: 'Finance/Banking',
      conflictArea: 'As CFPB acting director, Mulvaney called the bureau a \'joke\' and systematically dismantled consumer protections, halting investigations into payday lenders and banks. He then pursued lucrative opportunities in finance, having created a more favorable regulatory environment for industry clients.',
      sources: ['https://therevolvingdoorproject.org/'],
    },
    {
      date: '2019-08-07',
      name: 'James Mattis',
      direction: 'Gov to Private',
      fromPosition: 'Secretary of Defense',
      fromOrg: 'U.S. Department of Defense',
      toPosition: 'Director, Board of Directors',
      toOrg: 'General Dynamics',
      industry: 'Defense',
      conflictArea: 'Mattis served on General Dynamics\' board 2013–2017 before becoming SecDef, then rejoined the board in August 2019 just months after resigning as Defense Secretary. General Dynamics holds multi-billion-dollar Pentagon contracts for submarines, tanks, and IT systems that Mattis oversaw as SecDef.',
      sources: ['https://www.politico.com/story/2019/08/07/jim-mattis-general-dynamics-defense-contractor-3702067', 'https://www.opensecrets.org/revolving-door/mattis-james/summary?id=78054', 'https://lobelog.com/mattis-and-the-revolving-door/'],
    },
    {
      date: '2019-06-27',
      name: 'Scott Gottlieb',
      direction: 'Gov to Private',
      fromPosition: 'Commissioner',
      fromOrg: 'U.S. Food and Drug Administration',
      toPosition: 'Director, Board of Directors',
      toOrg: 'Pfizer Inc.',
      industry: 'Pharmaceutical',
      conflictArea: 'Just 85 days after leaving the FDA, Gottlieb joined Pfizer\'s board of directors — one of the largest companies his agency regulated. Prior to the FDA, he had received $559,000 in consulting fees from pharma companies including Pfizer. Critics noted the FDA under Gottlieb took limited regulatory action against a Pfizer drug weeks before his resignation.',
      sources: ['https://www.statnews.com/pharmalot/2019/06/27/scott-gottlieb-pfizer-board-fda/', 'https://www.fiercepharma.com/pharma/cue-revolving-door-criticism-former-fda-commish-gottlieb-joins-pfizer-s-board', 'https://www.citizen.org/article/outrage-of-the-month-revolving-door-to-fda-commissioners-office-sows-distrust-in-agency/'],
    },
    {
      date: '2019-06-18',
      name: 'Mark Esper',
      direction: 'Private to Gov',
      fromPosition: 'Vice President of Government Relations',
      fromOrg: 'Raytheon Co.',
      toPosition: 'Acting Secretary of Defense (later confirmed)',
      toOrg: 'U.S. Department of Defense',
      industry: 'Defense',
      conflictArea: 'Esper spent 2010–2017 as Raytheon\'s top lobbyist, focusing on missile systems and acquisition policy. He refused to recuse himself from Raytheon matters upon becoming SecDef. Raytheon\'s stock hit record highs after the killing of Iranian General Soleimani during his tenure. Raytheon received $15.4 billion in Pentagon contracts in 2019.',
      sources: ['https://www.citizensforethics.org/reports-investigations/crew-investigations/mark-esper-raytheon-weapons-lobbyist/', 'https://www.opensecrets.org/revolving-door/esper-mark/summary?id=70733', 'https://www.citizen.org/victories/story/preserving-revolving-door-restrictions-on-former-pentagon-officials/'],
    },
    {
      date: '2019-01-01',
      name: 'Scott Pruitt',
      direction: 'Gov to Private',
      fromPosition: 'Administrator',
      fromOrg: 'U.S. Environmental Protection Agency',
      toPosition: 'Lobbying/consulting',
      toOrg: 'Energy companies',
      industry: 'Energy/Environment',
      conflictArea: 'Pruitt rolled back more than 85 environmental rules while EPA Administrator, benefiting the fossil fuel industry including Exxon and coal companies. He resigned under multiple ethics scandals and moved into consulting and advocacy work aligned with the energy industry he had deregulated.',
      sources: ['https://www.citizensforethics.org/'],
    },
    {
      date: '2019-01-01',
      name: 'Loretta Lynch',
      direction: 'Gov to Private',
      fromPosition: '83rd Attorney General',
      fromOrg: 'U.S. Department of Justice',
      toPosition: 'Partner',
      toOrg: 'Paul Weiss, Rifkind, Wharton & Garrison LLP',
      industry: 'Legal/Finance',
      conflictArea: 'Lynch returned to the prominent corporate law firm Paul Weiss, which represents major Wall Street banks, financial institutions, and corporations in regulatory and criminal defense matters — the same entities she had power to investigate and prosecute as AG.',
      sources: ['https://earthrights.org/blog/the-corporate-revolving-door-at-the-department-of-justice/'],
    },
    {
      date: '2019-01-01',
      name: 'Andrew Wheeler',
      direction: 'Private to Gov',
      fromPosition: 'Lobbyist for Murray Energy and fossil fuel clients',
      fromOrg: 'Murray Energy (coal company)',
      toPosition: 'EPA Administrator',
      toOrg: 'U.S. Environmental Protection Agency',
      industry: 'Energy/Environment',
      conflictArea: 'Wheeler was a registered lobbyist for Murray Energy, one of the nation\'s largest coal companies, before becoming EPA Administrator. As EPA head, he rolled back coal plant emissions rules, mercury standards, and fuel economy regulations that directly benefited his former clients.',
      sources: ['https://therevolvingdoorproject.org/'],
    },
    {
      date: '2019-01-01',
      name: 'David Bernhardt',
      direction: 'Private to Gov',
      fromPosition: 'Lobbyist for oil, gas, mining, and agribusiness',
      fromOrg: 'Multiple energy and natural resource companies',
      toPosition: 'Secretary of the Interior',
      toOrg: 'U.S. Department of the Interior',
      industry: 'Energy/Environment',
      conflictArea: 'Bernhardt was a registered lobbyist for more than two dozen energy and natural resource companies before becoming Interior Secretary. He carried a card listing his former clients to remind himself which matters to recuse from, but watchdogs documented numerous cases of approving actions that benefited former clients.',
      sources: ['https://therevolvingdoorproject.org/'],
    },
    {
      date: '2019-01-01',
      name: 'Wilbur Ross',
      direction: 'Private to Gov',
      fromPosition: 'Chairman',
      fromOrg: 'WL Ross & Co. (private equity/bankruptcy investing)',
      toPosition: 'Secretary of Commerce',
      toOrg: 'U.S. Department of Commerce',
      industry: 'Finance/Commerce',
      conflictArea: 'Ross was a billionaire private equity investor before becoming Commerce Secretary. He failed to fully divest investments including Navigator Holdings (LNG shipping) while Commerce decisions affected those investments. The SEC later settled charges that he made false statements about divesting — he was fined $1.5 million.',
      sources: ['https://therevolvingdoorproject.org/'],
    },
    {
      date: '2018-01-29',
      name: 'Alex Azar',
      direction: 'Private to Gov',
      fromPosition: 'President',
      fromOrg: 'Eli Lilly USA (pharmaceutical division)',
      toPosition: 'Secretary of Health and Human Services',
      toOrg: 'U.S. Department of HHS',
      industry: 'Pharmaceutical',
      conflictArea: 'Azar spent nearly a decade at Eli Lilly — including as U.S. President — before becoming HHS Secretary and overseeing drug pricing policy. Eli Lilly dramatically raised insulin prices during his tenure. As HHS Secretary, he was tasked with lowering drug prices while maintaining ties to the industry he came from.',
      sources: ['https://kffhealthnews.org/news/article/health-202-alex-azar-drug-importation-canada/', 'https://www.fiercepharma.com/pharma/big-pharma-greets-hundreds-ex-federal-workers-at-revolving-door', 'https://www.washingtonpost.com/politics/2024/01/12/alex-azars-unusual-spin-through-revolving-door/'],
    },
    {
      date: '2017-12-01',
      name: 'Bob Work',
      direction: 'Gov to Private',
      fromPosition: 'Deputy Secretary of Defense',
      fromOrg: 'U.S. Department of Defense',
      toPosition: 'Director, Board of Directors',
      toOrg: 'Raytheon Technologies',
      industry: 'Defense',
      conflictArea: 'Work joined Raytheon\'s board of directors one month after leaving his post as Deputy SecDef. He had directly overseen defense acquisition and procurement programs that included Raytheon contracts worth billions annually.',
      sources: ['https://www.politico.com/story/2019/08/07/jim-mattis-general-dynamics-defense-contractor-3702067'],
    },
    {
      date: '2017-11-01',
      name: 'Rick Perry',
      direction: 'Gov to Private',
      fromPosition: 'Secretary of Energy',
      fromOrg: 'U.S. Department of Energy',
      toPosition: 'Board of Directors',
      toOrg: 'Energy Transfer Partners (pipeline operator)',
      industry: 'Energy',
      conflictArea: 'Just one month after leaving his post as Energy Secretary, Perry rejoined the board of Energy Transfer Partners, the pipeline company he had promoted and with which he had relationships before joining the Trump administration. The DOE oversees energy infrastructure regulations affecting pipeline companies.',
      sources: ['https://www.citizensforethics.org/reports-investigations/crew-investigations/mark-esper-raytheon-weapons-lobbyist/'],
    },
    {
      date: '2017-02-01',
      name: 'Rex Tillerson',
      direction: 'Private to Gov',
      fromPosition: 'Chairman & CEO',
      fromOrg: 'ExxonMobil Corporation (2006–2016)',
      toPosition: '69th Secretary of State',
      toOrg: 'U.S. Department of State',
      industry: 'Energy/Oil',
      conflictArea: 'Tillerson spent his entire career (1975–2017) at ExxonMobil, culminating as Chairman/CEO. He received a $180 million payout when leaving Exxon for the State Department. As Secretary of State, he oversaw U.S. foreign policy in oil-rich regions where ExxonMobil had significant interests, including Russia (ExxonMobil had a $500 billion Arctic oil deal with Rosneft that was blocked by sanctions).',
      sources: ['https://www.opensecrets.org/revolving-door/tillerson-rex/summary?id=79242', 'https://www.nytimes.com/2018/03/13/us/politics/white-house-turnover-tillerson.html', 'https://www.baldwin.senate.gov/news/press-releases/baldwin-cummings-cohn-statement'],
    },
    {
      date: '2017-01-20',
      name: 'Patrick Shanahan',
      direction: 'Private to Gov',
      fromPosition: 'Senior Vice President, Supply Chain & Operations (31 years)',
      fromOrg: 'Boeing',
      toPosition: 'Deputy Secretary / Acting Secretary of Defense',
      toOrg: 'U.S. Department of Defense',
      industry: 'Defense',
      conflictArea: 'Shanahan spent 31 years at Boeing before joining the Pentagon. Despite signing an ethics agreement recusing himself from Boeing matters, he was reported to have praised Boeing and criticized competitors like Lockheed Martin in internal Pentagon meetings.',
      sources: ['https://www.politico.com/story/2019/01/09/defense-patrick-shanahan-boeing-pentagon-1064203', 'https://www.pogo.org/analyses/our-man-from-boeing', 'https://www.bbc.com/news/world-us-canada-48056933'],
    },
    {
      date: '2017-01-20',
      name: 'Steven Mnuchin',
      direction: 'Private to Gov',
      fromPosition: 'Partner, Goldman Sachs; Founder, Dune Capital; Chair, OneWest Bank',
      fromOrg: 'Goldman Sachs / Dune Capital Management',
      toPosition: '77th Secretary of the Treasury',
      toOrg: 'U.S. Treasury Department',
      industry: 'Finance/Banking',
      conflictArea: 'Mnuchin spent 17 years at Goldman Sachs then founded Dune Capital and acquired the failed IndyMac bank (renamed OneWest) from the FDIC at favorable terms. OneWest earned a reputation as an aggressive foreclosure mill. As Treasury Secretary, he oversaw regulations affecting banks and financial institutions directly connected to his prior career.',
      sources: ['https://www.opensecrets.org/revolving-door/mnuchin-steven/summary?id=79234', 'https://www.propublica.org/article/trumps-treasury-secretary-pick-steven-mnuchin-is-a-lucky-man', 'https://www.opensecrets.org/news/2017/03/revolving-door-goldman-sachs/'],
    },
    {
      date: '2017-01-20',
      name: 'Gary Cohn',
      direction: 'Private to Gov',
      fromPosition: 'President & Chief Operating Officer',
      fromOrg: 'Goldman Sachs',
      toPosition: 'Director, National Economic Council',
      toOrg: 'White House',
      industry: 'Finance/Banking',
      conflictArea: 'Cohn left Goldman Sachs\' #2 position to serve as Trump\'s top economic adviser, receiving a golden parachute of over $100 million from Goldman upon departure. Senator Cummings called it \'legalized bribery.\' He was a key architect of the 2017 Tax Cuts and Jobs Act, which lowered corporate taxes benefiting Goldman and Wall Street.',
      sources: ['https://www.baldwin.senate.gov/news/press-releases/baldwin-cummings-cohn-statement', 'https://therevolvingdoorproject.org/gary-cohn-ibm-and-a-tale-as-old-as-time/', 'https://www.opensecrets.org/news/2017/03/revolving-door-goldman-sachs/'],
    },
    {
      date: '2017-01-01',
      name: 'Leon Panetta',
      direction: 'Gov to Private',
      fromPosition: 'CIA Director; Secretary of Defense',
      fromOrg: 'U.S. Department of Defense / CIA',
      toPosition: 'Advisory boards and consulting',
      toOrg: 'Defense and intelligence sector',
      industry: 'Defense/Intelligence',
      conflictArea: 'After serving as both CIA Director and Secretary of Defense under Obama, Panetta joined multiple advisory boards and consulting engagements in the defense and intelligence sector, leveraging his dual agency leadership roles. He remained an influential voice for defense spending in Washington.',
      sources: ['https://en.wikipedia.org/wiki/Leon_Panetta', 'https://revolvingdoorproject.substack.com/p/revolvers-return-to-the-white-house'],
    },
    {
      date: '2017-01-01',
      name: 'Stephen Bannon',
      direction: 'Private to Gov',
      fromPosition: 'Executive Chairman, Breitbart News; former VP, Goldman Sachs',
      fromOrg: 'Goldman Sachs / Breitbart News',
      toPosition: 'Chief White House Strategist',
      toOrg: 'White House',
      industry: 'Finance/Media',
      conflictArea: 'Bannon spent years as a Goldman Sachs executive before moving into media and politics. As Chief White House Strategist, he influenced policy on financial regulation, trade, and economic matters where his Goldman background and financial media interests created potential conflicts.',
      sources: ['https://www.opensecrets.org/news/2017/03/revolving-door-goldman-sachs/'],
    },
    {
      date: '2017-01-01',
      name: 'Ryan Zinke',
      direction: 'Gov to Private',
      fromPosition: 'Secretary of the Interior; U.S. Representative (R-MT)',
      fromOrg: 'U.S. Department of the Interior',
      toPosition: 'Board member and consulting',
      toOrg: 'Energy companies in Montana',
      industry: 'Energy/Environment',
      conflictArea: 'Zinke opened federal lands to oil, gas, and mining extraction as Interior Secretary, then pursued business opportunities in energy development in Montana after resigning amid multiple ethics investigations. He was investigated for facilitating a land deal that benefited a Halliburton-connected developer while at Interior.',
      sources: ['https://therevolvingdoorproject.org/'],
    },
    {
      date: '2016-01-01',
      name: 'Michèle Flournoy',
      direction: 'Gov to Private',
      fromPosition: 'Under Secretary of Defense for Policy',
      fromOrg: 'U.S. Department of Defense',
      toPosition: 'Co-Founder & Managing Partner',
      toOrg: 'WestExec Advisors; Co-Founder, Center for a New American Security (CNAS)',
      industry: 'Defense',
      conflictArea: 'Flournoy co-founded WestExec Advisors, a strategic consulting firm whose clients include major defense contractors, while simultaneously co-founding a think tank (CNAS) funded by Raytheon and Lockheed Martin. WestExec\'s work explicitly marketed access to Washington decision-makers and served as a \'strategic partner\' of Pine Island Capital, a defense-focused PE firm.',
      sources: ['https://inthesetimes.com/article/joe-biden-defense-secretary-general-lloyd-austin-raytheon-pine-island-capital'],
    },
    {
      date: '2016-01-01',
      name: 'Jack Lew',
      direction: 'Revolving',
      fromPosition: 'COO, Citigroup Alternative Investments',
      fromOrg: 'Citigroup',
      toPosition: 'Secretary of the Treasury (Obama); later Senior Counselor',
      toOrg: 'Lindsay Goldberg PE',
      industry: 'Finance/Banking',
      conflictArea: 'Lew was COO of Citigroup\'s unit that bet on housing market collapse before becoming Treasury Secretary. His compensation at Citi included a contractual bonus if he left for a government position — incentivizing the revolving door. He later joined a private equity firm after Treasury.',
      sources: ['https://www.opensecrets.org/news/2017/03/revolving-door-goldman-sachs/'],
    },
    {
      date: '2015-07-06',
      name: 'Eric Holder',
      direction: 'Gov to Private',
      fromPosition: '82nd Attorney General',
      fromOrg: 'U.S. Department of Justice',
      toPosition: 'Partner',
      toOrg: 'Covington & Burling LLP',
      industry: 'Legal/Finance',
      conflictArea: 'Holder returned to Covington & Burling — his pre-DOJ employer — as a highly paid partner just months after leaving the DOJ. Covington represents major Wall Street banks including Bank of America, Citigroup, JPMorgan, and Morgan Stanley. Critics tied his DOJ\'s failure to prosecute any major banking executives after the 2008 financial crisis to the revolving door.',
      sources: ['https://earthrights.org/blog/the-corporate-revolving-door-at-the-department-of-justice/', 'https://www.vice.com/en/article/how-eric-holders-corporate-law-firm-is-turning-into-shadow-justice-department/', 'https://www.corporatecrimereporter.com/news/200/schweizerholder08072012/'],
    },
    {
      date: '2015-01-01',
      name: 'Billy Tauzin',
      direction: 'Gov to Private',
      fromPosition: 'Chairman, House Energy & Commerce Committee',
      fromOrg: 'U.S. Congress',
      toPosition: 'President & CEO',
      toOrg: 'PhRMA (pharmaceutical industry lobbying group)',
      industry: 'Pharmaceutical',
      conflictArea: 'Tauzin authored the Medicare Prescription Drug Improvement and Modernization Act of 2003, which specifically prohibited Medicare from negotiating drug prices — a massive gift to the pharmaceutical industry. He then became head of PhRMA, the pharma industry\'s top lobbying group, earning $11.6 million in his first year.',
      sources: ['https://www.citizen.org/news/the_dizzying_sp/'],
    },
    {
      date: '2015-01-01',
      name: 'General Keith Alexander',
      direction: 'Gov to Private',
      fromPosition: 'Director, National Security Agency; Commander, U.S. Cyber Command',
      fromOrg: 'NSA / U.S. Cyber Command',
      toPosition: 'Founder & CEO',
      toOrg: 'IronNet Cybersecurity',
      industry: 'Cybersecurity/Intelligence',
      conflictArea: 'Alexander founded a cybersecurity firm immediately after retiring as NSA Director, charging banks reportedly up to $1 million per month for cybersecurity consulting. He offered to sell essentially the same threat intelligence the NSA provides the government for free, drawing sharp criticism from Congress. IronNet later collapsed amid financial fraud allegations.',
      sources: ['https://therevolvingdoorproject.org/'],
    },
    {
      date: '2014-01-01',
      name: 'Tom Vilsack',
      direction: 'Revolving',
      fromPosition: 'Secretary of Agriculture (Obama)',
      fromOrg: 'U.S. USDA',
      toPosition: 'USDA Secretary (Biden, returned)',
      toOrg: 'U.S. Dairy Export Council (industry lobbying group, interim)',
      industry: 'Agriculture/Food',
      conflictArea: 'After leaving USDA, Vilsack became CEO of the U.S. Dairy Export Council — the major agribusiness dairy lobbying organization — before returning as USDA Secretary under Biden. As USDA Secretary again, he oversaw dietary guidelines and agricultural policy while having recently served as the top lobbyist for the dairy industry.',
      sources: ['https://www.farmlandbirds.net/content/monsanto%E2%80%99s-friends-high-places-remarkable-revolving-door-career-michael-taylor-fda-and-monsa'],
    },
    {
      date: '2013-11-01',
      name: 'Tom Wheeler',
      direction: 'Revolving',
      fromPosition: 'CEO, National Cable Television Association; CEO, CTIA',
      fromOrg: 'Cable & Wireless Industry lobbying',
      toPosition: 'Chairman, FCC; then Managing Director, The Shiloh Group',
      toOrg: 'Federal Communications Commission',
      industry: 'Telecom',
      conflictArea: 'Wheeler was the former chief lobbyist for both the cable and wireless industries before Obama nominated him to chair the FCC. While chairman, he approved major corporate mergers that benefited his former clients. After leaving the FCC, he took a leadership role at The Shiloh Group, a strategy firm in the telecommunications sector.',
      sources: ['https://therevolvingdoorproject.org/tom-wheelers-false-promise-how-a-leading-telecom-lobbyist-became-fcc-chair/', 'https://www.politico.com/story/2013/05/tom-wheeler-fcc-091233', 'https://therevolvingdoorproject.org/unmasking-fccs-revolving-door-with-telecom-giants/'],
    },
    {
      date: '2013-05-30',
      name: 'David Petraeus',
      direction: 'Gov to Private',
      fromPosition: 'Director, Central Intelligence Agency; Commander, U.S. Forces Afghanistan',
      fromOrg: 'CIA',
      toPosition: 'Chairman, KKR Global Institute; Partner',
      toOrg: 'KKR (Kohlberg Kravis Roberts)',
      industry: 'Intelligence/Finance',
      conflictArea: 'Petraeus joined KKR, a major private equity firm, as a partner and chairman of KKR Global Institute in 2013. KKR\'s portfolio included defense firms (TASC, Airbus defense electronics). Petraeus leveraged his intelligence and military network for deal sourcing and geopolitical analysis, directly monetizing government access. Notably, he also pleaded guilty to mishandling classified information (2015) but retained his KKR position.',
      sources: ['https://dealbook.nytimes.com/2013/05/30/k-k-r-hires-petraeus/', 'https://www.motherjones.com/politics/2016/07/tomdispatch-david-petraeus-military-leaker/', 'https://www.businessinsider.com/petraeus-will-keep-private-equity-ties-in-wake-of-plea-deal-2015-3'],
    },
    {
      date: '2013-01-01',
      name: 'John Brennan',
      direction: 'Revolving',
      fromPosition: 'Senior counterterrorism adviser, White House; CIA career officer (25+ years)',
      fromOrg: 'CIA / White House',
      toPosition: 'CIA Director (returned)',
      toOrg: 'The Analysis Corporation (TAC, interim)',
      industry: 'Intelligence',
      conflictArea: 'Brennan transitioned from 25 years at the CIA to lead The Analysis Corporation, an intelligence contractor, before returning as White House counterterrorism chief then CIA Director. TAC provided intelligence analysis services to the very agencies Brennan had led and would lead again. This revolve gave a private intelligence firm direct access to classified-level networks.',
      sources: ['https://www.cnbc.com/2013/02/06/in-brennans-private-sector-stint-a-chinese-connection.html', 'https://en.wikipedia.org/wiki/John_O._Brennan'],
    },
    {
      date: '2013-01-01',
      name: 'Tom Ridge',
      direction: 'Gov to Private',
      fromPosition: 'First Secretary of Homeland Security',
      fromOrg: 'U.S. Department of Homeland Security',
      toPosition: 'Founder',
      toOrg: 'Ridge Global (security consulting and investment)',
      industry: 'Homeland Security',
      conflictArea: 'The first DHS Secretary founded a global security consulting firm, Ridge Global, exploiting his network and knowledge from creating the entire DHS infrastructure. Ridge Global provided security consulting to corporations and governments — clients seeking access to and intelligence about the agencies Ridge had built.',
      sources: ['https://www.americas.org/6382/'],
    },
    {
      date: '2012-01-01',
      name: 'Eric Cantor',
      direction: 'Gov to Private',
      fromPosition: 'House Majority Leader',
      fromOrg: 'U.S. House of Representatives (R-VA)',
      toPosition: 'Vice Chairman & Managing Director',
      toOrg: 'Moelis & Company (investment bank)',
      industry: 'Finance/Banking',
      conflictArea: 'Within weeks of losing his primary in 2014, Cantor — the most powerful Republican in the House — joined Moelis & Company as a $3.4 million per year vice chairman. He had championed Wall Street deregulation and opposed financial reform as Majority Leader. His rapid monetization of congressional relationships drew significant criticism.',
      sources: ['https://www.citizen.org/news/the_dizzying_sp/'],
    },
    {
      date: '2012-01-01',
      name: 'Peter Orszag',
      direction: 'Gov to Private',
      fromPosition: 'Director, Office of Management and Budget; Director, Congressional Budget Office',
      fromOrg: 'White House / CBO',
      toPosition: 'Vice Chairman of Global Banking',
      toOrg: 'Citigroup; later CEO, Lazard',
      industry: 'Finance/Banking',
      conflictArea: 'Orszag moved directly from Obama\'s budget chief to Citigroup as vice chairman of global banking — one of the banks that had received a massive government bailout that Orszag had helped design. He later became CEO of Lazard, a major investment bank.',
      sources: ['https://www.opensecrets.org/news/2017/03/revolving-door-goldman-sachs/'],
    },
    {
      date: '2011-01-01',
      name: 'Dina Powell',
      direction: 'Revolving',
      fromPosition: 'President, Goldman Sachs Foundation; Managing Director, Goldman Sachs',
      fromOrg: 'Goldman Sachs',
      toPosition: 'Deputy National Security Adviser (returned to Goldman Sachs after)',
      toOrg: 'White House',
      industry: 'Finance/National Security',
      conflictArea: 'Powell spent nine years at Goldman Sachs before joining Trump\'s White House as Deputy National Security Adviser, then returned to Goldman after leaving government. She sat at the intersection of finance and national security, where Goldman\'s global interests and U.S. foreign policy intersect.',
      sources: ['https://www.opensecrets.org/news/2017/03/revolving-door-goldman-sachs/'],
    },
    {
      date: '2011-01-01',
      name: 'William Lynn',
      direction: 'Revolving',
      fromPosition: 'Senior VP for Government Operations',
      fromOrg: 'Raytheon Company',
      toPosition: 'Deputy Secretary of Defense; later CEO, DRS Technologies',
      toOrg: 'U.S. Department of Defense',
      industry: 'Defense',
      conflictArea: 'Lynn was Raytheon\'s top government relations executive before Obama appointed him as Deputy SecDef — the second-highest defense job in the country. He received a waiver from the standard revolving door cooling-off period. He later became CEO of DRS Technologies, another major defense contractor.',
      sources: ['https://www.citizen.org/victories/story/preserving-revolving-door-restrictions-on-former-pentagon-officials/'],
    },
    {
      date: '2011-01-01',
      name: 'James Clapper',
      direction: 'Gov to Private',
      fromPosition: 'Director of National Intelligence',
      fromOrg: 'U.S. Intelligence Community',
      toPosition: 'Distinguished Partner',
      toOrg: 'Booz Allen Hamilton; consulting work',
      industry: 'Intelligence',
      conflictArea: 'Clapper moved to Booz Allen Hamilton — the intelligence community\'s largest private contractor — after serving as DNI. Booz Allen receives billions in intelligence community contracts annually and employs more former intelligence officials than perhaps any other firm.',
      sources: ['https://therevolvingdoorproject.org/'],
    },
    {
      date: '2010-11-01',
      name: 'James Comey',
      direction: 'Revolving',
      fromPosition: 'Deputy Attorney General',
      fromOrg: 'U.S. Department of Justice',
      toPosition: 'FBI Director (after stints at Lockheed Martin & Bridgewater Associates)',
      toOrg: 'Lockheed Martin / Bridgewater Associates / FBI',
      industry: 'Defense/Finance',
      conflictArea: 'After serving as Deputy AG, Comey joined Lockheed Martin — the nation\'s largest defense contractor — as SVP and General Counsel (2005–2010), then moved to Bridgewater Associates, the world\'s largest hedge fund (2010–2013), before becoming FBI Director in 2013. This trajectory raised conflict-of-interest concerns about financial industry and defense contractor ties.',
      sources: ['https://www.opensecrets.org/revolving-door/comey-james-b/summary?id=70344', 'https://www.vanityfair.com/news/2023/11/james-comey-dalio-bridgewater-the-fund', 'https://www.businessinsider.com/fbi-director-james-comey-time-at-bridgewater-2016-7'],
    },
    {
      date: '2010-01-01',
      name: 'Kathleen Sebelius',
      direction: 'Gov to Private',
      fromPosition: 'Secretary of Health and Human Services',
      fromOrg: 'U.S. HHS',
      toPosition: 'Senior Adviser',
      toOrg: 'APCO Worldwide; Board member, health industry companies',
      industry: 'Healthcare',
      conflictArea: 'The HHS Secretary who oversaw ACA implementation joined APCO Worldwide, a major lobbying and communications firm, and took board seats at health insurance and pharmaceutical companies — industries she had regulated during ACA rollout.',
      sources: ['https://www.fiercepharma.com/pharma/big-pharma-greets-hundreds-ex-federal-workers-at-revolving-door'],
    },
    {
      date: '2009-01-26',
      name: 'Timothy Geithner',
      direction: 'Gov to Private',
      fromPosition: 'Secretary of the Treasury',
      fromOrg: 'U.S. Treasury Department',
      toPosition: 'President and Managing Director',
      toOrg: 'Warburg Pincus (private equity)',
      industry: 'Finance/Banking',
      conflictArea: 'Geithner oversaw the Obama administration\'s response to the 2008 financial crisis, designing bailout programs for banks while serving as NY Fed President and Treasury Secretary. In 2013 he joined Warburg Pincus, a major private equity firm with financial sector investments, raising concerns about monetizing relationships cultivated while regulating the financial industry.',
      sources: ['https://www.newyorker.com/business/currency/tim-geithner-and-the-revolving-door', 'https://www.opensecrets.org/revolving-door/geithner-timothy/summary?id=78265', 'https://dealbook.nytimes.com/2013/11/18/hard-to-see-a-sellout-in-geithners-job-choice/'],
    },
    {
      date: '2009-01-01',
      name: 'Michael Chertoff',
      direction: 'Gov to Private',
      fromPosition: 'Secretary of Homeland Security',
      fromOrg: 'U.S. Department of Homeland Security',
      toPosition: 'Co-Founder & Chairman',
      toOrg: 'Chertoff Group (security consulting)',
      industry: 'Defense/Intelligence',
      conflictArea: 'Within weeks of leaving DHS, Chertoff founded the Chertoff Group, a security consulting firm. He then publicly advocated for full-body airport scanners in media appearances without disclosing that his firm was paid by scanner manufacturer Rapiscan Systems. He also represented corporate clients before the same FCC he once influenced.',
      sources: ['https://www.americas.org/6382/', 'https://www.commondreams.org/news/2014/09/29/former-head-homeland-security-peddling-fear-profit'],
    },
    {
      date: '2007-01-01',
      name: 'Mark Patterson',
      direction: 'Private to Gov',
      fromPosition: 'Lobbyist',
      fromOrg: 'Goldman Sachs',
      toPosition: 'Chief of Staff to Treasury Secretary Timothy Geithner',
      toOrg: 'U.S. Treasury Department',
      industry: 'Finance/Banking',
      conflictArea: 'Patterson was Goldman Sachs\' registered lobbyist before becoming chief of staff to the Treasury Secretary who was overseeing the government\'s response to the 2008 financial crisis — a crisis that resulted in billions in bailout funds to Goldman Sachs and other Wall Street firms.',
      sources: ['https://www.opensecrets.org/news/2017/03/revolving-door-goldman-sachs/'],
    },
    {
      date: '2007-01-01',
      name: 'Dick Gephardt',
      direction: 'Gov to Private',
      fromPosition: 'House Majority Leader',
      fromOrg: 'U.S. House of Representatives',
      toPosition: 'Paid Lobbyist',
      toOrg: 'Goldman Sachs',
      industry: 'Finance/Banking',
      conflictArea: 'The former House Majority Leader and Democratic presidential candidate became a paid lobbyist for Goldman Sachs after leaving Congress, exemplifying the K Street revolving door where congressional leaders leverage their relationships and institutional knowledge for financial industry clients.',
      sources: ['https://www.cbsnews.com/news/goldman-sachs-revolving-door/'],
    },
    {
      date: '2006-05-30',
      name: 'Henry (Hank) Paulson',
      direction: 'Private to Gov',
      fromPosition: 'Chairman & CEO',
      fromOrg: 'Goldman Sachs',
      toPosition: '74th Secretary of the Treasury',
      toOrg: 'U.S. Treasury Department',
      industry: 'Finance/Banking',
      conflictArea: 'Paulson left Goldman\'s top job to become Treasury Secretary under Bush, arriving with a net worth of at least $500 million largely from Goldman. As Treasury Secretary, he orchestrated the 2008 bailout of AIG — a massive Goldman counterparty — and allowed Lehman Brothers to fail. Critics argued the bailout disproportionately benefited Goldman.',
      sources: ['https://www.cbsnews.com/news/goldman-sachs-revolving-door/', 'https://www.opensecrets.org/news/2017/03/revolving-door-goldman-sachs/', 'https://www.huffpost.com/entry/goldmans-revolving-door-e_b_129103'],
    },
    {
      date: '2005-11-01',
      name: 'James Comey',
      direction: 'Gov to Private',
      fromPosition: 'Deputy Attorney General',
      fromOrg: 'U.S. Department of Justice',
      toPosition: 'Senior Vice President & General Counsel',
      toOrg: 'Lockheed Martin',
      industry: 'Defense',
      conflictArea: 'After serving as Deputy AG, Comey joined Lockheed Martin — the nation\'s largest defense contractor — as SVP and General Counsel. He managed the company\'s legal affairs and government relations from 2005–2010 while Lockheed received billions in Pentagon contracts annually.',
      sources: ['https://www.opensecrets.org/revolving-door/comey-james-b/summary?id=70344'],
    },
    {
      date: '2005-01-01',
      name: 'John Kelly',
      direction: 'Gov to Private',
      fromPosition: 'White House Chief of Staff / Secretary of Homeland Security',
      fromOrg: 'White House / DHS',
      toPosition: 'Board of Directors',
      toOrg: 'Caliburn International (operator of migrant children shelters)',
      industry: 'Homeland Security',
      conflictArea: 'Kelly joined the board of Caliburn International in May 2019, shortly after leaving the White House. Caliburn\'s subsidiary operated the largest migrant children detention facility — a direct product of the zero-tolerance policy Kelly championed as DHS Secretary and White House Chief of Staff. Kelly stood to profit financially from a policy he created.',
      sources: ['https://www.citizensforethics.org/reports-investigations/crew-investigations/john-kelly-child-separation-policy/', 'https://www.cbsnews.com/news/john-kelly-joins-board-of-caliburn-international-company-operating-largest-unaccompanied-migrant-children-shelter/'],
    },
    {
      date: '2004-01-01',
      name: 'John Ashcroft',
      direction: 'Gov to Private',
      fromPosition: 'Attorney General',
      fromOrg: 'U.S. Department of Justice',
      toPosition: 'Founder',
      toOrg: 'Ashcroft Group; corporate compliance and security consulting',
      industry: 'Legal/Security',
      conflictArea: 'Ashcroft founded his own consulting group to advise corporations on compliance, government relations, and security — leveraging relationships and regulatory knowledge built during his time as AG, during which he expanded surveillance authorities under the USA PATRIOT Act.',
      sources: ['https://www.americas.org/6382/'],
    },
    {
      date: '2003-01-01',
      name: 'Harvey Pitt',
      direction: 'Gov to Private',
      fromPosition: 'Chairman, SEC (2001–2003)',
      fromOrg: 'Securities and Exchange Commission',
      toPosition: 'CEO & Founder',
      toOrg: 'Kalorama Partners (financial consulting)',
      industry: 'Finance/Banking',
      conflictArea: 'Pitt was a corporate lawyer who represented major accounting firms before becoming SEC chairman during the Enron and WorldCom accounting scandals. After resigning, he founded Kalorama Partners advising financial institutions — the same sector he had failed to rigorously regulate.',
      sources: ['https://www.cbsnews.com/news/goldman-sachs-revolving-door/'],
    },
    {
      date: '2002-01-01',
      name: 'Michael Powell',
      direction: 'Gov to Private',
      fromPosition: 'Chairman',
      fromOrg: 'Federal Communications Commission',
      toPosition: 'President & CEO',
      toOrg: 'NCTA (National Cable & Telecommunications Association)',
      industry: 'Telecom',
      conflictArea: 'As FCC Chairman, Powell ensured broadband providers would not be regulated as common carriers, a decision that directly benefited the cable industry. He then became president of the cable industry\'s top lobbying group — the same companies he had regulated and whose interests he had protected at the FCC.',
      sources: ['https://arstechnica.com/information-technology/2015/04/fccs-revolving-door-former-chairman-leads-charge-against-title-ii/'],
    },
    {
      date: '2001-11-01',
      name: 'Dick Cheney',
      direction: 'Private to Gov',
      fromPosition: 'CEO',
      fromOrg: 'Halliburton Company',
      toPosition: '46th Vice President of the United States',
      toOrg: 'U.S. Government',
      industry: 'Defense/Energy',
      conflictArea: 'Cheney ran Halliburton from 1995–2000 before becoming VP. As VP he was a key architect of the Iraq War and 2003 invasion. Halliburton\'s KBR subsidiary received no-bid contracts worth up to $7 billion for Iraq reconstruction and oil well maintenance. Cheney received $150,000+ in deferred compensation from Halliburton while serving as VP.',
      sources: ['https://www.cbsnews.com/news/goldman-sachs-revolving-door/'],
    },
    {
      date: '2001-01-01',
      name: 'Jack Abramoff',
      direction: 'Revolving',
      fromPosition: 'Super-Lobbyist, multiple K Street firms',
      fromOrg: 'Multiple K Street lobbying firms',
      toPosition: 'Used congressional staffers as revolving door conduits (convicted)',
      toOrg: 'Multiple congressional offices',
      industry: 'Lobbying/Congress',
      conflictArea: 'Abramoff orchestrated the definitive congressional revolving door scandal: he illegally offered lucrative K Street jobs to congressional staffers and members in exchange for legislative favors. Multiple House staffers took K Street jobs in exchange for official favors for Abramoff\'s clients. Abramoff himself was convicted of fraud and corruption.',
      sources: ['https://www.citizen.org/news/the_dizzying_sp/', 'https://en.wikipedia.org/wiki/Jack_Abramoff_Indian_lobbying_scandal', 'https://ethicsunwrapped.utexas.edu/case-study/abramoff-lobbying-congress'],
    },
    {
      date: '2001-01-01',
      name: 'Donald Rumsfeld',
      direction: 'Private to Gov',
      fromPosition: 'Chairman, Gilead Sciences; Chairman, General Instrument Corporation',
      fromOrg: 'Gilead Sciences / General Instrument',
      toPosition: '21st Secretary of Defense',
      toOrg: 'U.S. Department of Defense',
      industry: 'Defense/Pharmaceutical',
      conflictArea: 'Before becoming Defense Secretary again under Bush, Rumsfeld was chairman of Gilead Sciences (maker of Tamiflu) and General Instrument. As SecDef after 9/11 he oversaw massive defense spending increases while the government later purchased hundreds of millions of dollars of Tamiflu stockpiles (during bird flu scares), benefiting Gilead, in which he had held stock.',
      sources: ['https://www.cbsnews.com/news/goldman-sachs-revolving-door/'],
    },
    {
      date: '2000-01-01',
      name: 'Larry Summers',
      direction: 'Revolving',
      fromPosition: 'Secretary of the Treasury (Clinton); Chief Economist, World Bank',
      fromOrg: 'U.S. Treasury / World Bank',
      toPosition: 'NEC Director (Obama, returned)',
      toOrg: 'D.E. Shaw (hedge fund, interim); Harvard University',
      industry: 'Finance/Banking',
      conflictArea: 'Summers helped deregulate Wall Street as Treasury Secretary by supporting Gramm-Leach-Bliley Act repeal of Glass-Steagall. He then earned $5.2 million from D.E. Shaw hedge fund and $2.7 million in speaking fees from Goldman Sachs, JPMorgan, and Citigroup before returning as Obama\'s NEC director to oversee the response to a financial crisis partly caused by the deregulation he championed.',
      sources: ['https://www.opensecrets.org/news/2017/03/revolving-door-goldman-sachs/'],
    },
    {
      date: '1995-01-20',
      name: 'Robert Rubin',
      direction: 'Revolving',
      fromPosition: 'Co-Chairman',
      fromOrg: 'Goldman Sachs',
      toPosition: '70th Secretary of the Treasury; then Senior Counselor, Citigroup',
      toOrg: 'U.S. Treasury / Citigroup',
      industry: 'Finance/Banking',
      conflictArea: 'Rubin spent 26 years at Goldman Sachs before serving as NEC Director then Treasury Secretary under Clinton. He championed financial deregulation and the repeal of Glass-Steagall (Gramm-Leach-Bliley Act, 1999), which directly benefited Wall Street. He then joined Citigroup — one of the banks that most benefited from deregulation — earning $126 million over 10 years while serving on its board during the lead-up to the 2008 financial crisis.',
      sources: ['https://en.wikipedia.org/wiki/Robert_Rubin', 'https://www.wsj.com/articles/robert-rubins-legacy-up-for-debate-10-years-after-citigroup-bailout-1528462800', 'https://www.opensecrets.org/news/2017/03/revolving-door-goldman-sachs/'],
    },
    {
      date: '1994-01-01',
      name: 'Michael Taylor',
      direction: 'Revolving',
      fromPosition: 'Deputy Commissioner for Policy, FDA; Administrator, USDA Food Safety',
      fromOrg: 'FDA / USDA',
      toPosition: 'FDA Deputy Commissioner for Foods (returned; multi-cycle)',
      toOrg: 'Monsanto Co. (VP, interim)',
      industry: 'Agriculture/Food',
      conflictArea: 'Taylor executed the most well-documented revolving door in food regulation history: FDA → Monsanto attorney → FDA → USDA → Monsanto VP → FDA Deputy Commissioner. While at FDA, he approved Monsanto\'s bovine growth hormone and created labeling rules that benefited Monsanto\'s products. This multi-decade rotation made him the central figure in Monsanto\'s influence over U.S. food safety regulation.',
      sources: ['https://www.farmlandbirds.net/content/monsanto%E2%80%99s-friends-high-places-remarkable-revolving-door-career-michael-taylor-fda-and-monsa', 'https://en.wikipedia.org/wiki/Michael_R._Taylor', 'https://www.opensecrets.org/revolving-door/taylor-michael-r/summary?id=20919'],
    },
  ];

  const filteredTransitions = useMemo(() => {
    let filtered = transitions.filter((transition) => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        transition.name.toLowerCase().includes(searchLower) ||
        transition.fromOrg.toLowerCase().includes(searchLower) ||
        transition.toOrg.toLowerCase().includes(searchLower) ||
        transition.industry.toLowerCase().includes(searchLower) ||
        transition.conflictArea.toLowerCase().includes(searchLower);

      const matchesDirection =
        filterDirection === 'all' || transition.direction === filterDirection;

      return matchesSearch && matchesDirection;
    });

    filtered.sort((a, b) => {
      const aVal = a[sortField] ?? '';
      const bVal = b[sortField] ?? '';
      const direction = sortDirection === 'asc' ? 1 : -1;
      return aVal > bVal ? direction : -direction;
    });

    return filtered;
  }, [transitions, searchTerm, sortField, sortDirection, filterDirection]);

  const handleSort = (field: keyof Transition) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const stats = {
    govToPrivate: transitions.filter((t) => t.direction === 'Gov to Private').length,
    privateToGov: transitions.filter((t) => t.direction === 'Private to Gov').length,
    revolving: transitions.filter((t) => t.direction === 'Revolving').length,
  };

  const billyTauzin = transitions.find(t => t.name === 'Billy Tauzin');

  return (
    <div className="pt-4">
      <div className="mb-8">
        <p className="text-[#a0a0a0] text-base">
          Mapping the movement between government positions and private sector jobs. Tracking regulatory capture and conflicts of interest.
        </p>
      </div>

      {billyTauzin && (
        <div className="mb-12">
          <h2 className="text-lg font-mono text-red-400 mb-4">Spotlight</h2>
          <FeaturedCard transition={billyTauzin} />
        </div>
      )}

      <div id="transitions" className="scroll-mt-8"></div>

      <div className="mb-6 grid grid-cols-3 gap-4">
          <div className="bg-[#0a0a0a] border border-green-500/30 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-green-400 font-mono mb-1">{stats.privateToGov}</div>
            <div className="text-green-300/60 text-sm">Private → Government</div>
          </div>
          <div className="bg-[#0a0a0a] border border-red-500/30 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-red-400 font-mono mb-1">{stats.govToPrivate}</div>
            <div className="text-red-300/60 text-sm">Government → Private</div>
          </div>
          <div className="bg-[#0a0a0a] border border-yellow-500/30 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-yellow-400 font-mono mb-1">{stats.revolving}</div>
            <div className="text-yellow-300/60 text-sm">Multi-Hop Revolvers</div>
          </div>
        </div>

        <div className="mb-6 space-y-3">
          <div className="flex items-center gap-3 bg-[#0a0a0a] border border-[#8888ff]/30 rounded-lg p-3" style={{ minHeight: '52px' }}>
            <Search className="w-5 h-5 text-[#8888ff] shrink-0" />
            <Input
              type="text"
              placeholder="Search by name, organization, industry, or conflict area..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-black border-[#8888ff]/30 text-[#e5e5e5] placeholder:text-[#666] focus:border-[#8888ff] h-11"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 bg-[#0a0a0a] border border-[#8888ff]/30 rounded-lg p-3" style={{ minHeight: '44px' }}>
            <span className="text-[#e5e5e5] text-sm">Filter:</span>
            {(['all', 'Gov to Private', 'Private to Gov', 'Revolving', 'Other'] as const).map((dir) => (
              <button
                key={dir}
                onClick={() => setFilterDirection(dir)}
                className={`px-3 py-2 rounded text-xs font-mono transition-all`}
                style={{
                  minHeight: '44px',
                  background: filterDirection === dir ? 'rgba(136,136,255,0.2)' : 'black',
                  color: filterDirection === dir ? '#8888ff' : '#a0a0a0',
                  border: filterDirection === dir ? '1px solid rgba(136,136,255,0.5)' : '1px solid rgba(136,136,255,0.2)',
                }}
              >
                {dir === 'all' ? 'All Directions' : dir}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile card layout */}
        <div className="md:hidden space-y-3 mb-4">
          {filteredTransitions.map((transition, index) => {
            const isExpanded = expandedCards.has(index);
            return (
              <div key={index} className="rounded-xl border border-[#333] overflow-hidden" style={{ background: '#1e1e1e', borderRadius: '12px' }}>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div className="flex-1 min-w-0">
                      <div className="text-[#e5e5e5] font-semibold text-base leading-tight">{transition.name}</div>
                      <div className="text-[#666] font-mono text-xs mt-0.5">{transition.date}</div>
                    </div>
                    <Badge className={`font-mono text-xs shrink-0 ${transition.direction === 'Gov to Private' ? 'bg-red-500/20 text-red-400 border-red-500/50' : transition.direction === 'Private to Gov' ? 'bg-green-500/20 text-green-400 border-green-500/50' : transition.direction === 'Revolving' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50' : 'bg-[#555]/20 text-[#999] border-[#555]/50'}`}>
                      {transition.direction === 'Gov to Private' ? 'Gov → Private' : transition.direction === 'Private to Gov' ? 'Private → Gov' : transition.direction}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm mt-1 flex-wrap">
                    <span className="text-[#e5e5e5] font-semibold truncate">{transition.fromOrg}</span>
                    <ArrowRight className="w-4 h-4 text-[#8888ff] shrink-0" />
                    <span className="text-[#e5e5e5] font-semibold truncate">{transition.toOrg}</span>
                  </div>
                </div>
                <button
                  onClick={() => toggleCard(index)}
                  className="w-full flex items-center justify-between px-4 py-3 text-xs font-mono text-[#8888ff] border-t border-[#333] hover:bg-[#8888ff]/5 transition-colors"
                  style={{ minHeight: '44px' }}
                >
                  <span>{isExpanded ? 'Hide Details' : 'Show Details'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
                {isExpanded && (
                  <div className="px-4 pb-4 pt-3 space-y-2 border-t border-[#222]">
                    <div>
                      <div className="text-[#666] text-xs font-mono">INDUSTRY</div>
                      <Badge className="bg-[#8888ff]/20 text-[#8888ff] border-[#8888ff]/50 font-mono text-xs mt-1">{transition.industry}</Badge>
                    </div>
                    <div>
                      <div className="text-[#666] text-xs font-mono">CONFLICT AREA</div>
                      <div className="text-[#a0a0a0] text-xs mt-0.5 leading-relaxed">{transition.conflictArea}</div>
                      {transition.salary && <div className="text-yellow-400/80 text-xs mt-1">{transition.salary}</div>}
                    </div>
                    <div className="flex flex-col gap-1">
                      {transition.sources.map((src, i) => (
                        <a key={i} href={src} target="_blank" rel="noopener noreferrer" className="text-[#8888ff] hover:text-[#8888ff]/80 flex items-center gap-1 text-xs">
                          Source {i + 1} <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          {filteredTransitions.length === 0 && (
            <div className="p-8 text-center text-[#666] font-mono text-sm">No transitions match the current filter.</div>
          )}
        </div>

        {/* Desktop table */}
        <div className="hidden md:block bg-[#0a0a0a] border border-[#8888ff]/30 rounded-lg overflow-hidden">
          <div className="relative tracker-table-container" style={{ overflowX: 'auto', overflowY: 'visible' }}>
            <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-black/60 to-transparent z-10 rounded-r-lg" />
            <div className="text-[#666] text-xs font-mono px-3 pt-2 pb-1 border-b border-[#8888ff]/10 lg:hidden">Swipe for more columns →</div>
            <table style={{ tableLayout: 'fixed', width: `${rdWidths.reduce((a,b)=>a+b,0)}px`, minWidth: '100%', borderCollapse: 'collapse', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem' }}>
              <colgroup>
                {rdWidths.map((w, i) => <col key={i} style={{ width: `${w}px` }} />)}
              </colgroup>
              <thead>
                <tr className="bg-black border-b border-[#8888ff]/30">
                  <th style={{ width: `${rdWidths[0]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#8888ff', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none', cursor: 'pointer' }} onClick={() => handleSort('date')}>
                    <div className="flex items-center gap-2">Date <ArrowUpDown className="w-4 h-4" /></div>
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); rdMouseDown(0, e.clientX); }} onDoubleClick={() => rdReset(0)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#8888ff66'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${rdWidths[1]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#8888ff', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none', cursor: 'pointer' }} onClick={() => handleSort('name')}>
                    <div className="flex items-center gap-2">Name <ArrowUpDown className="w-4 h-4" /></div>
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); rdMouseDown(1, e.clientX); }} onDoubleClick={() => rdReset(1)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#8888ff66'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${rdWidths[2]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#8888ff', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                    Direction
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); rdMouseDown(2, e.clientX); }} onDoubleClick={() => rdReset(2)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#8888ff66'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${rdWidths[3]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#8888ff', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                    From
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); rdMouseDown(3, e.clientX); }} onDoubleClick={() => rdReset(3)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#8888ff66'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${rdWidths[4]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#8888ff', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); rdMouseDown(4, e.clientX); }} onDoubleClick={() => rdReset(4)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#8888ff66'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${rdWidths[5]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#8888ff', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                    To
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); rdMouseDown(5, e.clientX); }} onDoubleClick={() => rdReset(5)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#8888ff66'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${rdWidths[6]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#8888ff', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                    Industry
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); rdMouseDown(6, e.clientX); }} onDoubleClick={() => rdReset(6)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#8888ff66'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${rdWidths[7]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#8888ff', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                    Conflict Area
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); rdMouseDown(7, e.clientX); }} onDoubleClick={() => rdReset(7)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#8888ff66'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                  <th style={{ width: `${rdWidths[8]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#8888ff', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                    Sources
                    <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); rdMouseDown(8, e.clientX); }} onDoubleClick={() => rdReset(8)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#8888ff66'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredTransitions.map((transition, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#8888ff]/10 hover:border-l-4 hover:border-l-[#8888ff] transition-all"
                    style={{ backgroundColor: index % 2 === 0 ? '#0a0a0a' : '#111' }}
                  >
                    <td className="p-4 text-[#e5e5e5] text-sm font-mono">{transition.date}</td>
                    <td className="p-4 text-[#e5e5e5] text-sm font-semibold">{transition.name}</td>
                    <td className="p-4">
                      <Badge
                        className={`font-mono text-xs ${
                          transition.direction === 'Gov to Private'
                            ? 'bg-red-500/20 text-red-400 border-red-500/50'
                            : transition.direction === 'Private to Gov'
                              ? 'bg-green-500/20 text-green-400 border-green-500/50'
                              : transition.direction === 'Revolving'
                                ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50'
                                : 'bg-[#555]/20 text-[#999] border-[#555]/50'
                        }`}
                      >
                        {transition.direction}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="text-[#e5e5e5] text-sm font-semibold">{transition.fromPosition}</div>
                      <div className="text-[#a0a0a0] text-xs">{transition.fromOrg}</div>
                    </td>
                    <td className="p-4 text-center">
                      <ArrowRight className="w-5 h-5 text-[#8888ff]" />
                    </td>
                    <td className="p-4">
                      <div className="text-[#e5e5e5] text-sm font-semibold">{transition.toPosition}</div>
                      <div className="text-[#a0a0a0] text-xs">{transition.toOrg}</div>
                    </td>
                    <td className="p-4">
                      <Badge className="bg-[#8888ff]/20 text-[#8888ff] border-[#8888ff]/50 font-mono text-xs">
                        {transition.industry}
                      </Badge>
                    </td>
                    <td className="p-4 text-[#a0a0a0] text-sm max-w-md">
                      {transition.conflictArea}
                      {transition.salary && (
                        <div className="text-yellow-400/80 text-xs mt-1">{transition.salary}</div>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col gap-1">
                        {transition.sources.map((source, i) => (
                          <a
                            key={i}
                            href={source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8888ff] hover:text-[#8888ff]/80 flex items-center gap-1 text-xs"
                          >
                            Source {i + 1} <ExternalLink className="w-3 h-3" />
                          </a>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 bg-[#0a0a0a] border border-yellow-500/30 rounded-lg p-4">
          <p className="text-yellow-400/80 text-sm leading-relaxed">
            <strong className="font-mono">NOTE:</strong> The revolving door refers to the movement of personnel between
            roles as legislators, regulators, and the industries affected by legislation and regulation. This creates
            conflicts of interest and is widely recognized as a form of regulatory capture and corruption.
          </p>
        </div>
    </div>
  );
}

export default function RevolvingDoor() {
  return (
    <div className="min-h-screen bg-black text-[#e5e5e5]">
      <SEOHead
        title="Revolving Door Tracker"
        description="Track the movement between government positions and private sector jobs, revealing conflicts of interest and regulatory capture."
        url={`${window.location.origin}/trackers/revolving-door`}
      />
      <Navigation />
      <main id="main-content" tabIndex={-1} className="container mx-auto px-4 py-8 pt-24 pb-24 max-w-[1600px] overflow-x-hidden">
        <Link
          to="/trackers"
          className="inline-flex items-center gap-2 text-[#00ff41] hover:text-[#00ff41]/80 font-mono text-sm mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Trackers
        </Link>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <RefreshCw className="w-8 h-8 text-[#8888ff]" />
            <h1 className="text-3xl font-bold text-[#e5e5e5] font-mono">&gt; REVOLVING_DOOR.db</h1>
          </div>
        </div>
        <RevolvingDoorContent />
      </main>
      <Footer />
    </div>
  );
}
