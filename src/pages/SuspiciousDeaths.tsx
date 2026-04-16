import { useState, useMemo } from 'react';
import { useResizableColumns } from '@/hooks/useResizableColumns';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Search, ExternalLink, Skull, ArrowUpDown, ArrowLeft,
  ShieldAlert, ChevronDown, ChevronUp, ChevronLeft, ChevronRight
} from 'lucide-react';
import suspiciousDeathsCsv from '@/data/suspicious_deaths_new.csv?raw';
import { missingScientistsCaseFile } from '@/data/missingScientistsCaseFile';
import { MissingScientistsSection } from '@/components/MissingScientistsSection';

interface CsvDeath {
  date: string;
  name: string;
  age: string;
  occupation: string;
  connection: string;
  officialCause: string;
  circumstances: string;
  investigation: string;
  sources: string;
}

function parseCsv(raw: string): CsvDeath[] {
  const lines = raw.trim().split('\n');
  const results: CsvDeath[] = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const cols: string[] = [];
    let inQuote = false;
    let cur = '';
    for (let j = 0; j < line.length; j++) {
      const ch = line[j];
      if (ch === '"') {
        if (inQuote && line[j + 1] === '"') { cur += '"'; j++; }
        else { inQuote = !inQuote; }
      } else if (ch === ',' && !inQuote) {
        cols.push(cur); cur = '';
      } else {
        cur += ch;
      }
    }
    cols.push(cur);
    if (cols.length >= 9) {
      results.push({
        date: cols[0],
        name: cols[1],
        age: cols[2],
        occupation: cols[3],
        connection: cols[4],
        officialCause: cols[5],
        circumstances: cols[6],
        investigation: cols[7],
        sources: cols[8],
      });
    }
  }
  return results;
}

const ALL_DEATHS = parseCsv(suspiciousDeathsCsv);

const CONNECTION_TYPES = [
  'All',
  'Political',
  'Corporate',
  'Whistleblower',
  'Intelligence',
  'Financial',
  'Military',
  'Media',
  'Religious',
  'Other',
] as const;

const INVESTIGATION_STATUSES = ['All', 'Closed', 'Open', 'Ongoing', 'Unsolved', 'Reopened'] as const;

const DECADE_OPTIONS = [
  { label: 'All Decades', value: 'all' },
  { label: '1960s', value: '196' },
  { label: '1970s', value: '197' },
  { label: '1980s', value: '198' },
  { label: '1990s', value: '199' },
  { label: '2000s', value: '200' },
  { label: '2010s', value: '201' },
  { label: '2020s', value: '202' },
];

function getConnectionType(connection: string): string {
  const c = connection.toLowerCase();
  if (c.includes('whistleblow') || c.includes('testified') || c.includes('testimony') || c.includes('witness')) return 'Whistleblower';
  if (c.includes('cia') || c.includes('fbi') || c.includes('nsa') || c.includes('intelligence') || c.includes('kgb') || c.includes('fsb')) return 'Intelligence';
  if (c.includes('congress') || c.includes('president') || c.includes('political') || c.includes('senator') || c.includes('election') || c.includes('jfk') || c.includes('assassination') || c.includes('kennedy') || c.includes('cointelpro') || c.includes('clinton') || c.includes('bush')) return 'Political';
  if (c.includes('corporate') || c.includes('company') || c.includes('executive') || c.includes('bank') || c.includes('financial') || c.includes('fraud') || c.includes('enron') || c.includes('boeing')) return 'Corporate';
  if (c.includes('military') || c.includes('army') || c.includes('navy') || c.includes('pentagon') || c.includes('defense')) return 'Military';
  if (c.includes('journalist') || c.includes('reporter') || c.includes('media') || c.includes('press') || c.includes('news')) return 'Media';
  if (c.includes('church') || c.includes('religious') || c.includes('priest') || c.includes('bishop')) return 'Religious';
  if (c.includes('stock') || c.includes('sec') || c.includes('ponzi') || c.includes('madoff') || c.includes('investor')) return 'Financial';
  return 'Other';
}

function normalizeInvestigation(inv: string): string {
  const i = inv.toLowerCase();
  if (i.includes('unsolved') || i.includes('unresolved')) return 'Unsolved';
  if (i.includes('reopen')) return 'Reopened';
  if (i.includes('ongoing') || i.includes('open investigation')) return 'Ongoing';
  if (i.includes('open')) return 'Open';
  return 'Closed';
}

const PAGE_SIZE = 25;

interface WhistleblowerRetaliation {
  id: string;
  name: string;
  role: string;
  agency: string;
  allegation: string;
  retaliation: string;
  status: 'Resolved' | 'Ongoing' | 'Appealing';
  dateTestimony?: string;
  sources: string[];
}

interface WhistleblowerCaseFile {
  id: string;
  title: string;
  subtitle: string;
  openingQuote: { text: string; attribution: string };
  background: string;
  testimony: { title: string; points: { heading: string; content: string }[] };
  retaliation: { title: string; points: string[] };
  legalBattle?: { title: string; content: string };
  resolution?: { title: string; content: string; keyTerms: string[] };
  relatedWhistleblowers: WhistleblowerRetaliation[];
  redFlags: string[];
  officialSources: { name: string; description: string }[];
  lastUpdated: string;
}

export function SuspiciousDeathsContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [connectionFilter, setConnectionFilter] = useState<string>('All');
  const [investigationFilter, setInvestigationFilter] = useState<string>('All');
  const [decadeFilter, setDecadeFilter] = useState<string>('all');
  const [sortField, setSortField] = useState<keyof CsvDeath>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [expandedCaseFile, setExpandedCaseFile] = useState<string | null>('oboyle');
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const SD_DEFAULT_WIDTHS = [110, 160, 60, 150, 180, 150, 220, 130, 90];
  const { columnWidths: sdWidths, handleMouseDown: sdMouseDown, resetColumnWidth: sdReset } = useResizableColumns(SD_DEFAULT_WIDTHS);

  const toggleCard = (i: number) => {
    setExpandedCards(prev => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  };

  const whistleblowerCaseFiles: WhistleblowerCaseFile[] = [
    {
      id: 'oboyle',
      title: "FBI Agent Garret O'Boyle",
      subtitle: "The Agent Who Swore His Oath to the Constitution",
      openingQuote: {
        text: "I am sad, I am disappointed, and I am angry that I have to be here to testify about the weaponization of the FBI and DOJ — weaponization against not only its own employees, but against those institutions and individuals that are supposed to protect Americans.",
        attribution: "Garret O'Boyle, Congressional Testimony, May 18, 2023"
      },
      background: "Garret O'Boyle is a former FBI Special Agent who served the US Army before joining law enforcement and then the FBI. He is one of three FBI employees — alongside Marcus Allen and Steve Friend — who testified before the House Judiciary Committee's Select Subcommittee on the Weaponization of the Federal Government on May 18, 2023. All three were actively suspended from their jobs at the time of their testimony. All three testified under oath about what they described as the systematic political weaponization of the FBI against American citizens, conservative employees, gun owners, parents at school board meetings, and January 6 defendants. O'Boyle's closing declaration before Congress: \"I never swore an oath to the FBI. I swore my oath to the Constitution.\"",
      testimony: {
        title: "What O'Boyle Told Congress",
        points: [
          {
            heading: "Every January 6 Case Classified as Domestic Terrorism",
            content: "O'Boyle testified that the FBI classified \"every single January 6th case as a domestic terrorism case\" — yet hundreds of those same cases were ultimately resolved as petty crimes such as trespassing and disorderly conduct. The terrorism classification dramatically expanded FBI jurisdiction, resource allocation, and the legal tools available against defendants — applied to cases that prosecutors themselves later treated as misdemeanors."
          },
          {
            heading: "Bank of America Warrantless Surveillance",
            content: "O'Boyle was present for and corroborated testimony by retired FBI Supervisory Intelligence Analyst George Hill, who revealed that Bank of America voluntarily handed over customer financial records to the FBI's Washington Field Office with no legal process — no warrant, no subpoena. The records identified customers who made debit or credit card transactions between January 5–7, 2021. Those who had previously purchased firearms were elevated to the top of the list."
          },
          {
            heading: "FBI Spied on Parents at School Board Meetings",
            content: "Whistleblowers testified the FBI conducted surveillance operations targeting parents who voiced concerns at local school board meetings, following a controversial October 2021 memo from Attorney General Merrick Garland directing law enforcement agencies to address \"threats\" at school board meetings."
          },
          {
            heading: "Statistical Manipulation to Inflate Domestic Terrorism Numbers",
            content: "O'Boyle testified he held a \"reasonable belief\" that the FBI was \"padding statistics\" in favor of one political party to present to Congress — manufacturing a domestic terrorism crisis that justified expanded surveillance and enforcement powers. He described the corruption as concentrated at the senior executive staff level: \"That rot is at the headquarters level. It is at the top. I would estimate that probably 20% of the agency, the senior executive staff level... have really distorted and twisted the agency.\""
          }
        ]
      },
      retaliation: {
        title: "The Retaliation: What the FBI Did to O'Boyle",
        points: [
          "O'Boyle was selected for a new specialty unit in the Quantico region",
          "His family sold their home and moved across the country",
          "On his first day reporting for duty, he was promptly suspended",
          "The FBI then refused to release his family's household goods, including their children's clothes, for weeks",
          "His security clearance was suspended — based on a letter that did not identify the source or basis for the allegations",
          "He was placed on indefinite unpaid administrative leave beginning January 1, 2023",
          "He and his family were effectively rendered homeless and financially destroyed",
          "The official justification for his suspension changed over time. The FBI eventually claimed he had leaked information to Project Veritas. O'Boyle denied this under oath."
        ]
      },
      legalBattle: {
        title: "The Legal Battle: Courts, Appeals & Constitutional Questions",
        content: "O'Boyle's case raised a fundamental constitutional question: Can the government strip a federal employee of their security clearance in retaliation for protected whistleblowing — with no judicial review? The Merit Systems Protection Board (MSPB) ruled it lacked jurisdiction to examine whether O'Boyle's security clearance suspension was retaliatory. O'Boyle, represented by the American Center for Law and Justice (ACLJ), appealed — arguing the MSPB's refusal to examine whistleblower retaliation in the context of security clearance revocations violates the First, Fifth, and Fourteenth Amendments. The case (No. 25-1404) was filed at the Federal Circuit Court of Appeals in July 2025."
      },
      resolution: {
        title: "Resolution: 10 Whistleblowers, $0 Accountability for Senior FBI Officials",
        content: "In August 2025, after years of legal battles and over 12 combined years of unwarranted suspension time across all cases, 10 FBI whistleblowers — including O'Boyle — reached settlement agreements with the FBI, mediated by Senate Judiciary Committee Chairman Chuck Grassley (R-Iowa). Not a single senior FBI official responsible for the retaliation campaign against the whistleblowers has been publicly disciplined, charged, or removed as a result of these cases.",
        keyTerms: [
          "All agreements included lump sum payments for damages",
          "Four required full back pay restoration under the Back Pay Act, including interest, restored leave, and replaced retirement contributions",
          "Three agents were reinstated to active FBI duty — including O'Boyle, Steve Friend, and Zachery Schoffstall",
          "None required resignations as a condition",
          "Steve Friend was subsequently fired again in December 2025 for \"unauthorized media interactions and poor judgment\" — which Friend called retaliation by FBI Director Kash Patel"
        ]
      },
      relatedWhistleblowers: [
        {
          id: 'allen',
          name: 'Marcus Allen',
          role: 'Staff Operations Specialist, Charlotte',
          agency: 'FBI',
          allegation: 'Forwarded news articles questioning Jan 6 official narrative — accused of "promoting conspiratorial views"',
          retaliation: '27-month suspension, security clearance revoked, no pay, forced to raid retirement accounts',
          status: 'Resolved',
          dateTestimony: '2023-05-18',
          sources: ['https://judiciary.house.gov']
        },
        {
          id: 'friend',
          name: 'Steve Friend',
          role: 'FBI SWAT Agent',
          agency: 'FBI',
          allegation: 'Objected to using SWAT team to arrest Jan 6 misdemeanor defendant',
          retaliation: 'Indefinitely suspended, forced to resign, later reinstated then fired again Dec 2025',
          status: 'Ongoing',
          dateTestimony: '2023-05-18',
          sources: ['https://judiciary.house.gov']
        },
        {
          id: 'hill',
          name: 'George Hill',
          role: 'Retired FBI Supervisory Intelligence Analyst',
          agency: 'FBI',
          allegation: 'Submitted written testimony confirming Bank of America warrantless data transfer',
          retaliation: 'N/A (retired)',
          status: 'Resolved',
          sources: ['https://judiciary.house.gov']
        }
      ],
      redFlags: [
        "The FBI suspended O'Boyle on his first day at a new assignment — after his family had already sold their home and moved. The timing suggests the suspension was planned in advance of his arrival.",
        "The suspension letter did not identify the source or basis for the allegations against him — a due process violation his attorneys have argued in federal court.",
        "Bank of America provided no-warrant financial surveillance data to the FBI on Americans who made purchases around January 6 — and gun buyers were specifically flagged. No criminal referrals have been made against Bank of America executives for this.",
        "The MSPB ruled it had no jurisdiction to examine whether the FBI's security clearance revocations were retaliatory. This means the FBI can weaponize the clearance process against any employee — with no judicial check — unless Congress or a higher court intervenes.",
        "Settlements were reached. Back pay was paid. Agents were reinstated. No senior FBI official was held accountable. The machine that destroyed these families' lives remains intact and operational.",
        "The official response to O'Boyle's testimony was a Democratic letter to the AG accusing him of perjury — not an investigation into the FBI abuses he described."
      ],
      officialSources: [
        { name: "US House of Representatives — Judiciary Committee Official Hearing Record", description: "May 18, 2023" },
        { name: "House Judiciary Committee Report", description: "FBI Whistleblower Testimony Highlights Government Abuse, Misallocation of Resources and Retaliation" },
        { name: "GovInfo.gov", description: "Full Congressional Hearing Transcript, CHRG-118hhrg52419" },
        { name: "ACLJ Federal Circuit Court Brief", description: "Case No. 25-1404 (July 2025)" },
        { name: "Senate Judiciary Committee", description: "Senator Grassley Settlement Announcement (August 25, 2025)" },
        { name: "Empower Oversight", description: "Settlement documentation" }
      ],
      lastUpdated: "2026-03-25"
    }
  ];

  const enrichedDeaths = useMemo(() =>
    ALL_DEATHS.map(d => ({
      ...d,
      connectionType: getConnectionType(d.connection),
      investigationNorm: normalizeInvestigation(d.investigation),
    })),
    []
  );

  const stats = useMemo(() => {
    const total = enrichedDeaths.length;
    const whistleblowers = enrichedDeaths.filter(d => d.connectionType === 'Whistleblower').length;
    const political = enrichedDeaths.filter(d => d.connectionType === 'Political').length;
    const open = enrichedDeaths.filter(d => d.investigationNorm === 'Open' || d.investigationNorm === 'Ongoing' || d.investigationNorm === 'Unsolved').length;
    return { total, whistleblowers, political, open };
  }, [enrichedDeaths]);

  const filteredDeaths = useMemo(() => {
    let filtered = enrichedDeaths.filter(d => {
      const sl = searchTerm.toLowerCase();
      const matchesSearch = !sl ||
        d.name.toLowerCase().includes(sl) ||
        d.connection.toLowerCase().includes(sl) ||
        d.circumstances.toLowerCase().includes(sl) ||
        d.occupation.toLowerCase().includes(sl);

      const matchesConnection = connectionFilter === 'All' || d.connectionType === connectionFilter;
      const matchesInvestigation = investigationFilter === 'All' || d.investigationNorm === investigationFilter;
      const matchesDecade = decadeFilter === 'all' || d.date.startsWith(decadeFilter);

      return matchesSearch && matchesConnection && matchesInvestigation && matchesDecade;
    });

    filtered = [...filtered].sort((a, b) => {
      const aVal = a[sortField] ?? '';
      const bVal = b[sortField] ?? '';
      const dir = sortDirection === 'asc' ? 1 : -1;
      return aVal > bVal ? dir : -dir;
    });

    return filtered;
  }, [enrichedDeaths, searchTerm, connectionFilter, investigationFilter, decadeFilter, sortField, sortDirection]);

  const totalPages = Math.max(1, Math.ceil(filteredDeaths.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const pageStart = (safePage - 1) * PAGE_SIZE;
  const pageEnd = Math.min(pageStart + PAGE_SIZE, filteredDeaths.length);
  const pageDeath = filteredDeaths.slice(pageStart, pageEnd);

  const handleSort = (field: keyof CsvDeath) => {
    if (sortField === field) setSortDirection(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortField(field); setSortDirection('desc'); }
    setCurrentPage(1);
  };

  const resetPage = () => setCurrentPage(1);

  const pageNumbers = useMemo(() => {
    const range: (number | '...')[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) range.push(i);
    } else {
      range.push(1);
      if (safePage > 3) range.push('...');
      const lo = Math.max(2, safePage - 1);
      const hi = Math.min(totalPages - 1, safePage + 1);
      for (let i = lo; i <= hi; i++) range.push(i);
      if (safePage < totalPages - 2) range.push('...');
      range.push(totalPages);
    }
    return range;
  }, [totalPages, safePage]);

  const investigationBadgeClass = (inv: string) => {
    switch (inv) {
      case 'Closed': return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
      case 'Unsolved': return 'bg-red-500/20 text-red-400 border-red-500/50';
      case 'Ongoing': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'Open': return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
      case 'Reopened': return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  return (
    <div className="pt-4">
      <div className="mb-8">
        <p className="text-[#a0a0a0] text-base">
          Documented cases of deaths under questionable circumstances involving whistleblowers, investigators, and individuals connected to sensitive cases.
        </p>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <ShieldAlert className="w-7 h-7 text-[#f59e0b]" />
          <h2 className="text-2xl font-bold text-[#e5e5e5] font-mono">
            &gt; WHISTLEBLOWER_RETALIATION.files
          </h2>
        </div>

        {whistleblowerCaseFiles.map((caseFile) => {
          const isExpanded = expandedCaseFile === caseFile.id;
          return (
            <div key={caseFile.id} className="bg-[#0a0a0a] border border-[#f59e0b]/30 rounded-lg overflow-hidden mb-4">
              <button
                onClick={() => setExpandedCaseFile(isExpanded ? null : caseFile.id)}
                className="w-full p-6 text-left hover:bg-[#f59e0b]/5 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#e5e5e5] mb-1">{caseFile.title}</h3>
                    <p className="text-[#f59e0b] text-sm font-mono">{caseFile.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-[#f59e0b]/20 text-[#f59e0b] border-[#f59e0b]/50 font-mono text-xs">
                      PARTIALLY RESOLVED
                    </Badge>
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-[#f59e0b]" /> : <ChevronDown className="w-5 h-5 text-[#f59e0b]" />}
                  </div>
                </div>
              </button>

              {isExpanded && (
                <div className="px-6 pb-6 border-t border-[#f59e0b]/20">
                  <div className="bg-[#111] border-l-4 border-[#f59e0b] p-4 my-6">
                    <p className="text-[#e5e5e5] italic leading-relaxed">"{caseFile.openingQuote.text}"</p>
                    <p className="text-[#f59e0b] text-sm mt-2 font-mono">— {caseFile.openingQuote.attribution}</p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-[#e5e5e5] mb-3 font-mono">Who Is {caseFile.title.split(':')[0].replace('FBI Agent ', '')}?</h4>
                    <p className="text-[#a0a0a0] leading-relaxed">{caseFile.background}</p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-[#e5e5e5] mb-4 font-mono">{caseFile.testimony.title}</h4>
                    <div className="space-y-4">
                      {caseFile.testimony.points.map((point, idx) => (
                        <div key={idx} className="bg-[#111] border border-[#333] rounded-lg p-4">
                          <h5 className="text-[#f59e0b] font-semibold mb-2">{idx + 1}. {point.heading}</h5>
                          <p className="text-[#a0a0a0] text-sm leading-relaxed">{point.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-[#ff4444] mb-4 font-mono">{caseFile.retaliation.title}</h4>
                    <ul className="space-y-2">
                      {caseFile.retaliation.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-[#ff4444] mt-1">-</span>
                          <span className="text-[#a0a0a0] text-sm leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {caseFile.legalBattle && (
                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-[#e5e5e5] mb-3 font-mono">{caseFile.legalBattle.title}</h4>
                      <p className="text-[#a0a0a0] leading-relaxed">{caseFile.legalBattle.content}</p>
                    </div>
                  )}

                  {caseFile.resolution && (
                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-[#00ff41] mb-3 font-mono">{caseFile.resolution.title}</h4>
                      <p className="text-[#a0a0a0] leading-relaxed mb-4">{caseFile.resolution.content}</p>
                      <div className="bg-[#111] border border-[#00ff41]/30 rounded-lg p-4">
                        <p className="text-[#00ff41] text-sm font-mono mb-3">KEY SETTLEMENT TERMS:</p>
                        <ul className="space-y-2">
                          {caseFile.resolution.keyTerms.map((term, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="text-[#00ff41] mt-1">-</span>
                              <span className="text-[#a0a0a0] text-sm">{term}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-[#e5e5e5] mb-4 font-mono">Related Whistleblowers</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-black border-b border-[#f59e0b]/30">
                            <th className="text-left p-3 text-[#f59e0b] font-mono">Witness</th>
                            <th className="text-left p-3 text-[#f59e0b] font-mono">Role</th>
                            <th className="text-left p-3 text-[#f59e0b] font-mono">Allegation</th>
                            <th className="text-left p-3 text-[#f59e0b] font-mono">Retaliation</th>
                          </tr>
                        </thead>
                        <tbody>
                          {caseFile.relatedWhistleblowers.map((wb) => (
                            <tr key={wb.id} className="border-b border-[#333]">
                              <td className="p-3 text-[#e5e5e5] font-semibold">{wb.name}</td>
                              <td className="p-3 text-[#a0a0a0]">{wb.role}</td>
                              <td className="p-3 text-[#a0a0a0] max-w-xs">{wb.allegation}</td>
                              <td className="p-3 text-[#ff4444] max-w-xs">{wb.retaliation}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-[#ff4444] mb-4 font-mono">Red Flags / Questions Worth Asking</h4>
                    <ul className="space-y-3">
                      {caseFile.redFlags.map((flag, idx) => (
                        <li key={idx} className="flex items-start gap-3 bg-[#111] border border-[#ff4444]/20 rounded-lg p-3">
                          <span className="text-[#ff4444] font-mono">[{idx + 1}]</span>
                          <span className="text-[#a0a0a0] text-sm leading-relaxed">{flag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#111] border border-[#333] rounded-lg p-4">
                    <h4 className="text-sm font-bold text-[#00ff41] mb-3 font-mono">OFFICIAL SOURCE CONFIRMATION</h4>
                    <ul className="space-y-2">
                      {caseFile.officialSources.map((source, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#00ff41]">-</span>
                          <span className="text-[#a0a0a0] text-sm">
                            <strong className="text-[#e5e5e5]">{source.name}</strong> — {source.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-[#666] text-xs mt-4 font-mono">
                      Category: SUSPICIOUS_DEATHS.db / Whistleblower Retaliation | Sub-category: FBI Weaponization | Last updated: {caseFile.lastUpdated}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Skull className="w-7 h-7 text-[#3b82f6]" />
          <h2 className="text-2xl font-bold text-[#e5e5e5] font-mono">
            &gt; MISSING_SCIENTISTS.cluster
          </h2>
        </div>
        <MissingScientistsSection data={missingScientistsCaseFile} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { label: 'Total Cases', value: stats.total, color: '#ff4444' },
          { label: 'Whistleblowers', value: stats.whistleblowers, color: '#f59e0b' },
          { label: 'Political', value: stats.political, color: '#3b82f6' },
          { label: 'Open / Unsolved', value: stats.open, color: '#00ff41' },
        ].map(s => (
          <div key={s.label} className="bg-[#0a0a0a] border rounded-lg p-3 text-center" style={{ borderColor: s.color + '40' }}>
            <div className="text-2xl font-bold font-mono" style={{ color: s.color }}>{s.value}</div>
            <div className="text-[#666] text-xs font-mono mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="mb-5 space-y-3">
        <div className="flex items-center gap-3 bg-[#0a0a0a] border border-[#ff4444]/30 rounded-lg p-3" style={{ minHeight: '52px' }}>
          <Search className="w-5 h-5 text-[#ff4444] shrink-0" />
          <Input
            type="text"
            placeholder="Search by name, connection, circumstances, occupation..."
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value); resetPage(); }}
            className="flex-1 bg-black border-[#ff4444]/30 text-[#e5e5e5] placeholder:text-[#666] focus:border-[#ff4444] h-11"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block text-[#666] text-xs font-mono mb-1 pl-1">CONNECTION TYPE</label>
            <select
              value={connectionFilter}
              onChange={(e) => { setConnectionFilter(e.target.value); resetPage(); }}
              className="w-full bg-[#0a0a0a] border border-[#ff4444]/30 text-[#e5e5e5] rounded-lg px-3 font-mono text-sm focus:outline-none focus:border-[#ff4444]"
              style={{ minHeight: '44px' }}
            >
              {CONNECTION_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-[#666] text-xs font-mono mb-1 pl-1">INVESTIGATION STATUS</label>
            <select
              value={investigationFilter}
              onChange={(e) => { setInvestigationFilter(e.target.value); resetPage(); }}
              className="w-full bg-[#0a0a0a] border border-[#ff4444]/30 text-[#e5e5e5] rounded-lg px-3 font-mono text-sm focus:outline-none focus:border-[#ff4444]"
              style={{ minHeight: '44px' }}
            >
              {INVESTIGATION_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-[#666] text-xs font-mono mb-1 pl-1">DECADE</label>
            <select
              value={decadeFilter}
              onChange={(e) => { setDecadeFilter(e.target.value); resetPage(); }}
              className="w-full bg-[#0a0a0a] border border-[#ff4444]/30 text-[#e5e5e5] rounded-lg px-3 font-mono text-sm focus:outline-none focus:border-[#ff4444]"
              style={{ minHeight: '44px' }}
            >
              {DECADE_OPTIONS.map(d => <option key={d.value} value={d.value}>{d.label}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-3 font-mono text-xs text-[#666]">
        <span>
          Showing <span className="text-[#ff4444]">{filteredDeaths.length > 0 ? pageStart + 1 : 0}–{pageEnd}</span> of <span className="text-[#ff4444]">{filteredDeaths.length}</span> records
        </span>
        <span>Page <span className="text-[#ff4444]">{safePage}</span> of <span className="text-[#ff4444]">{totalPages}</span></span>
      </div>

      {/* Mobile card layout */}
      <div className="md:hidden space-y-3 mb-4">
        {pageDeath.map((death, index) => {
          const absIndex = pageStart + index;
          const isExpanded = expandedCards.has(absIndex);
          return (
            <div key={absIndex} className="rounded-xl border border-[#333] overflow-hidden" style={{ background: '#1e1e1e', borderRadius: '12px' }}>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="flex-1 min-w-0">
                    <div className="text-[#e5e5e5] font-semibold text-base leading-tight">{death.name}</div>
                    <div className="text-[#666] font-mono text-xs mt-0.5">{death.date}</div>
                  </div>
                  <Badge className={`font-mono text-xs shrink-0 ${investigationBadgeClass(death.investigationNorm)}`}>{death.investigationNorm}</Badge>
                </div>
                <div className="text-[#a0a0a0] text-sm mt-1 leading-snug">{death.connection}</div>
                <div className="text-[#e5e5e5] text-sm mt-1">{death.officialCause}</div>
              </div>
              <button
                onClick={() => toggleCard(absIndex)}
                className="w-full flex items-center justify-between px-4 py-3 text-xs font-mono text-[#ff4444] border-t border-[#333] hover:bg-[#ff4444]/5 transition-colors"
                style={{ minHeight: '44px' }}
              >
                <span>{isExpanded ? 'Hide Details' : 'Show Details'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>
              {isExpanded && (
                <div className="px-4 pb-4 pt-3 space-y-2 border-t border-[#222]">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="text-[#666] text-xs font-mono">AGE</div>
                      <div className="text-[#a0a0a0] text-sm mt-0.5">{death.age}</div>
                    </div>
                    <div>
                      <div className="text-[#666] text-xs font-mono">OCCUPATION</div>
                      <div className="text-[#e5e5e5] text-sm mt-0.5">{death.occupation}</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[#666] text-xs font-mono">CIRCUMSTANCES</div>
                    <div className="text-[#a0a0a0] text-xs mt-0.5 leading-relaxed">{death.circumstances}</div>
                  </div>
                  {death.sources && (
                    <a href={death.sources} target="_blank" rel="noopener noreferrer" className="text-[#ff4444] hover:text-[#ff4444]/80 flex items-center gap-1 text-xs">
                      Source <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}
        {pageDeath.length === 0 && (
          <div className="p-8 text-center text-[#666] font-mono text-sm">No records match the current filters.</div>
        )}
      </div>

      {/* Desktop table */}
      <div className="hidden md:block bg-[#0a0a0a] border border-[#ff4444]/30 rounded-lg overflow-hidden">
        <div className="relative tracker-table-container" style={{ overflowX: 'auto', overflowY: 'visible' }}>
          <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-black/60 to-transparent z-10 rounded-r-lg" />
          <div className="text-[#666] text-xs font-mono px-3 pt-2 pb-1 border-b border-[#ff4444]/10 lg:hidden">Swipe for more columns →</div>
          <table style={{ tableLayout: 'fixed', width: `${sdWidths.reduce((a,b)=>a+b,0)}px`, minWidth: '100%', borderCollapse: 'collapse', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem' }}>
            <colgroup>
              {sdWidths.map((w, i) => <col key={i} style={{ width: `${w}px` }} />)}
            </colgroup>
            <thead>
              <tr className="bg-black border-b border-[#ff4444]/30">
                <th style={{ width: `${sdWidths[0]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ff4444', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none', cursor: 'pointer' }} onClick={() => handleSort('date')}>
                  <div className="flex items-center gap-2">Date <ArrowUpDown className="w-4 h-4" /></div>
                  <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); sdMouseDown(0, e.clientX); }} onDoubleClick={() => sdReset(0)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ff444466'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                </th>
                <th style={{ width: `${sdWidths[1]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ff4444', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none', cursor: 'pointer' }} onClick={() => handleSort('name')}>
                  <div className="flex items-center gap-2">Name <ArrowUpDown className="w-4 h-4" /></div>
                  <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); sdMouseDown(1, e.clientX); }} onDoubleClick={() => sdReset(1)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ff444466'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                </th>
                <th style={{ width: `${sdWidths[2]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ff4444', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                  Age
                  <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); sdMouseDown(2, e.clientX); }} onDoubleClick={() => sdReset(2)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ff444466'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                </th>
                <th style={{ width: `${sdWidths[3]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ff4444', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                  Occupation
                  <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); sdMouseDown(3, e.clientX); }} onDoubleClick={() => sdReset(3)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ff444466'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                </th>
                <th style={{ width: `${sdWidths[4]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ff4444', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                  Connection
                  <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); sdMouseDown(4, e.clientX); }} onDoubleClick={() => sdReset(4)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ff444466'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                </th>
                <th style={{ width: `${sdWidths[5]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ff4444', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                  Official Cause
                  <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); sdMouseDown(5, e.clientX); }} onDoubleClick={() => sdReset(5)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ff444466'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                </th>
                <th style={{ width: `${sdWidths[6]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ff4444', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                  Circumstances
                  <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); sdMouseDown(6, e.clientX); }} onDoubleClick={() => sdReset(6)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ff444466'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                </th>
                <th style={{ width: `${sdWidths[7]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ff4444', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                  Investigation
                  <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); sdMouseDown(7, e.clientX); }} onDoubleClick={() => sdReset(7)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ff444466'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                </th>
                <th style={{ width: `${sdWidths[8]}px`, position: 'relative', padding: '1rem', textAlign: 'left', color: '#ff4444', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', userSelect: 'none' }}>
                  Source
                  <div className="column-resize-handle" onMouseDown={(e) => { e.preventDefault(); sdMouseDown(8, e.clientX); }} onDoubleClick={() => sdReset(8)} style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', cursor: 'col-resize', background: 'transparent', zIndex: 1 }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#ff444466'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }} />
                </th>
              </tr>
            </thead>
            <tbody>
              {pageDeath.map((death, index) => (
                <tr
                  key={pageStart + index}
                  className="border-b border-[#ff4444]/10 hover:border-l-4 hover:border-l-[#ff4444] transition-all"
                  style={{ backgroundColor: index % 2 === 0 ? '#0a0a0a' : '#111' }}
                >
                  <td className="p-4 text-[#e5e5e5] text-sm font-mono whitespace-nowrap">{death.date}</td>
                  <td className="p-4 text-[#e5e5e5] text-sm font-semibold whitespace-nowrap">{death.name}</td>
                  <td className="p-4 text-[#a0a0a0] text-sm">{death.age}</td>
                  <td className="p-4 text-[#e5e5e5] text-sm">{death.occupation}</td>
                  <td className="p-4 text-[#a0a0a0] text-sm" style={{ maxWidth: '200px' }}>{death.connection}</td>
                  <td className="p-4 text-[#e5e5e5] text-sm">{death.officialCause}</td>
                  <td className="p-4 text-[#a0a0a0] text-sm" style={{ maxWidth: '300px' }}>{death.circumstances}</td>
                  <td className="p-4 whitespace-nowrap">
                    <Badge className={`font-mono text-xs ${investigationBadgeClass(death.investigationNorm)}`}>
                      {death.investigationNorm}
                    </Badge>
                  </td>
                  <td className="p-4">
                    {death.sources ? (
                      <a
                        href={death.sources}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ff4444] hover:text-[#ff4444]/80 flex items-center gap-1 text-xs whitespace-nowrap"
                      >
                        Source <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-[#666] text-xs">—</span>
                    )}
                  </td>
                </tr>
              ))}
              {pageDeath.length === 0 && (
                <tr>
                  <td colSpan={9} className="p-8 text-center text-[#666] font-mono text-sm">
                    No records match the current filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-1 mt-6">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={safePage === 1}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-mono border border-[#333] bg-[#111] text-[#a0a0a0] rounded-sm hover:border-[#ff4444]/50 hover:text-[#ff4444] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-3 h-3" /> Prev
          </button>

          {pageNumbers.map((p, i) =>
            p === '...' ? (
              <span key={`e-${i}`} className="px-2 py-1.5 text-xs font-mono text-[#666]">…</span>
            ) : (
              <button
                key={p}
                onClick={() => setCurrentPage(p as number)}
                className={`px-3 py-1.5 text-xs font-mono border rounded-sm transition-all ${
                  safePage === p
                    ? 'border-[#ff4444]/60 bg-[#ff4444]/10 text-[#ff4444]'
                    : 'border-[#333] bg-[#111] text-[#a0a0a0] hover:border-[#ff4444]/50 hover:text-[#ff4444]'
                }`}
              >
                {p}
              </button>
            )
          )}

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={safePage === totalPages}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-mono border border-[#333] bg-[#111] text-[#a0a0a0] rounded-sm hover:border-[#ff4444]/50 hover:text-[#ff4444] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            Next <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      )}

      <div className="mt-6 bg-[#0a0a0a] border border-red-500/30 rounded-lg p-4">
        <p className="text-red-400/80 text-sm leading-relaxed">
          <strong className="font-mono">DISCLAIMER:</strong> This tracker documents cases where official explanations have been questioned
          by family members, colleagues, investigators, or independent experts. Inclusion does not constitute proof of foul play.
          All information is sourced from publicly available news reports and official documents. These cases warrant further scrutiny
          and transparent investigation.
        </p>
      </div>
    </div>
  );
}

export default function SuspiciousDeaths() {
  return (
    <div className="min-h-screen bg-black text-[#e5e5e5]">
      <SEOHead
        title="Suspicious Deaths Tracker"
        description="Documented cases of unexplained deaths connected to major investigations, whistleblowing, and sensitive information."
        url={`${window.location.origin}/trackers/suspicious-deaths`}
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
            <Skull className="w-8 h-8 text-[#ff4444]" />
            <h1 className="text-3xl font-bold text-[#e5e5e5] font-mono">&gt; SUSPICIOUS_DEATHS.db</h1>
          </div>
        </div>
        <SuspiciousDeathsContent />
      </main>
      <Footer />
    </div>
  );
}
