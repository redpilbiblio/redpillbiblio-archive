import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, TriangleAlert as AlertTriangle, Beaker } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { MissingScientistsCaseFile } from '@/data/missingScientistsCaseFile';

const statusConfig: Record<string, { label: string; className: string }> = {
  'MISSING': { label: 'MISSING — ACTIVE', className: 'bg-red-500/20 text-red-400 border-red-500/50' },
  'DECEASED-UNKNOWN': { label: 'DECEASED — UNKNOWN', className: 'bg-amber-500/20 text-amber-400 border-amber-500/50' },
  'DECEASED-SOLVED': { label: 'DECEASED — SOLVED', className: 'bg-gray-500/20 text-gray-400 border-gray-500/50' },
  'DECEASED-UNDETERMINED': { label: 'DECEASED — UNDETERMINED', className: 'bg-amber-500/20 text-amber-400 border-amber-500/50' },
};

export function MissingScientistsSection({ data }: { data: MissingScientistsCaseFile }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedEntries, setExpandedEntries] = useState<Set<string>>(new Set());
  const [showTechContext, setShowTechContext] = useState(false);

  const toggleEntry = (id: string) => {
    setExpandedEntries(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  return (
    <div className="bg-[#0a0a0a] border border-[#3b82f6]/30 rounded-lg overflow-hidden mb-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left hover:bg-[#3b82f6]/5 transition-colors"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Badge className="bg-[#3b82f6]/20 text-[#3b82f6] border-[#3b82f6]/50 font-mono text-[10px]">
                CLUSTER
              </Badge>
              <h3 className="text-xl font-bold text-[#e5e5e5]">{data.title}</h3>
            </div>
            <p className="text-[#3b82f6] text-sm font-mono">{data.subtitle}</p>
          </div>
          <div className="flex items-center gap-3">
            <Badge className="bg-[#ff4444]/20 text-[#ff4444] border-[#ff4444]/50 font-mono text-xs">
              {data.statusBadge}
            </Badge>
            {isExpanded ? <ChevronUp className="w-5 h-5 text-[#3b82f6]" /> : <ChevronDown className="w-5 h-5 text-[#3b82f6]" />}
          </div>
        </div>
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 border-t border-[#3b82f6]/20">
          <div className="bg-[#111] border-l-4 border-[#3b82f6] p-4 my-6">
            <p className="text-[#e5e5e5] leading-relaxed">{data.openingStatement}</p>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-bold text-[#e5e5e5] mb-3 font-mono">The Mondaloy Chain</h4>
            <p className="text-[#a0a0a0] leading-relaxed">{data.clusterDescription}</p>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-bold text-[#3b82f6] mb-4 font-mono">Congressional & Executive Attention</h4>
            <div className="space-y-3">
              {data.congressionalAttention.map((item, idx) => (
                <div key={idx} className="bg-[#111] border border-[#333] rounded-lg p-3">
                  <span className="text-[#3b82f6] font-semibold text-sm">{item.speaker}:</span>
                  <span className="text-[#a0a0a0] text-sm ml-2">"{item.quote}"</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-bold text-[#e5e5e5] mb-4 font-mono">Individual Cases ({data.entries.length})</h4>
            <div className="overflow-x-auto mb-4 hidden md:block">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-black border-b border-[#3b82f6]/30">
                    <th className="text-left p-3 text-[#3b82f6] font-mono">Name</th>
                    <th className="text-left p-3 text-[#3b82f6] font-mono">Status</th>
                    <th className="text-left p-3 text-[#3b82f6] font-mono">Date</th>
                    <th className="text-left p-3 text-[#3b82f6] font-mono">Institution</th>
                    <th className="text-left p-3 text-[#3b82f6] font-mono">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {data.entries.map((entry) => {
                    const sc = statusConfig[entry.status] || statusConfig['DECEASED-UNKNOWN'];
                    return (
                      <tr
                        key={entry.id}
                        className="border-b border-[#333] hover:bg-[#3b82f6]/5 cursor-pointer transition-colors"
                        onClick={() => toggleEntry(entry.id)}
                      >
                        <td className="p-3 text-[#e5e5e5] font-semibold">{entry.name}</td>
                        <td className="p-3"><Badge className={`font-mono text-xs ${sc.className}`}>{sc.label}</Badge></td>
                        <td className="p-3 text-[#a0a0a0] font-mono text-xs">{entry.date}</td>
                        <td className="p-3 text-[#a0a0a0] max-w-xs text-xs">{entry.institution}</td>
                        <td className="p-3 text-[#a0a0a0] text-xs">{entry.location}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="space-y-3">
              {data.entries.map((entry) => {
                const isOpen = expandedEntries.has(entry.id);
                const sc = statusConfig[entry.status] || statusConfig['DECEASED-UNKNOWN'];
                return (
                  <div key={entry.id} className="bg-[#111] border border-[#333] rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleEntry(entry.id)}
                      className="w-full p-4 text-left hover:bg-[#3b82f6]/5 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[#e5e5e5] font-semibold">{entry.name}</span>
                            <Badge className={`font-mono text-[10px] ${sc.className}`}>{sc.label}</Badge>
                          </div>
                          <div className="text-[#666] font-mono text-xs mt-1">{entry.date} — {entry.institution}</div>
                        </div>
                        {isOpen ? <ChevronUp className="w-4 h-4 text-[#3b82f6] shrink-0" /> : <ChevronDown className="w-4 h-4 text-[#3b82f6] shrink-0" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 border-t border-[#333] space-y-3">
                        <div className="mt-3">
                          <div className="text-[#666] text-xs font-mono mb-1">LOCATION</div>
                          <div className="text-[#a0a0a0] text-sm">{entry.location}</div>
                        </div>
                        <div>
                          <div className="text-[#666] text-xs font-mono mb-1">SUMMARY</div>
                          <div className="text-[#a0a0a0] text-sm leading-relaxed">{entry.summary}</div>
                        </div>
                        {entry.connections && entry.connections.length > 0 && (
                          <div>
                            <div className="text-[#666] text-xs font-mono mb-1">CONNECTIONS</div>
                            <ul className="space-y-1">
                              {entry.connections.map((conn, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-[#3b82f6] mt-0.5 text-xs">-</span>
                                  <span className="text-[#a0a0a0] text-sm">{conn}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {entry.note && (
                          <div className="bg-[#0a0a0a] border-l-2 border-[#f59e0b] p-3">
                            <span className="text-[#f59e0b] text-xs font-mono">NOTE: </span>
                            <span className="text-[#a0a0a0] text-sm">{entry.note}</span>
                          </div>
                        )}
                        <div className="flex flex-wrap gap-1">
                          {entry.tags.map((tag) => (
                            <span key={tag} className="px-2 py-0.5 bg-[#3b82f6]/10 text-[#3b82f6] text-[10px] font-mono rounded border border-[#3b82f6]/20">{tag}</span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {entry.sourceLinks.map((link, idx) => (
                            <a key={idx} href={link} target="_blank" rel="noopener noreferrer" className="text-[#3b82f6] hover:text-[#3b82f6]/80 flex items-center gap-1 text-xs">
                              Source {idx + 1} <ExternalLink className="w-3 h-3" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-8">
            <button
              onClick={() => setShowTechContext(!showTechContext)}
              className="w-full flex items-center justify-between gap-2 p-4 bg-[#111] border border-[#00ff41]/30 rounded-lg hover:bg-[#00ff41]/5 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Beaker className="w-5 h-5 text-[#00ff41]" />
                <span className="text-[#00ff41] font-mono text-sm font-semibold">{data.techContext.title}</span>
                <Badge className="bg-[#00ff41]/20 text-[#00ff41] border-[#00ff41]/50 font-mono text-[10px]">CONTEXT</Badge>
              </div>
              {showTechContext ? <ChevronUp className="w-4 h-4 text-[#00ff41]" /> : <ChevronDown className="w-4 h-4 text-[#00ff41]" />}
            </button>
            {showTechContext && (
              <div className="bg-[#111] border border-[#00ff41]/20 border-t-0 rounded-b-lg p-4">
                {data.techContext.content.split('\n\n').map((para, idx) => (
                  <p key={idx} className="text-[#a0a0a0] text-sm leading-relaxed mb-3 last:mb-0 whitespace-pre-line">{para}</p>
                ))}
                <div className="flex flex-wrap gap-1 mt-3">
                  {data.techContext.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-[#00ff41]/10 text-[#00ff41] text-[10px] font-mono rounded border border-[#00ff41]/20">{tag}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-bold text-[#ff4444] mb-4 font-mono flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Red Flags / Questions Worth Asking
            </h4>
            <ul className="space-y-3">
              {data.redFlags.map((flag, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-[#111] border border-[#ff4444]/20 rounded-lg p-3">
                  <span className="text-[#ff4444] font-mono">[{idx + 1}]</span>
                  <span className="text-[#a0a0a0] text-sm leading-relaxed">{flag}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#111] border border-[#333] rounded-lg p-4">
            <h4 className="text-sm font-bold text-[#3b82f6] mb-3 font-mono">SOURCE CONFIRMATION</h4>
            <ul className="space-y-2">
              {data.officialSources.map((source, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#3b82f6]">-</span>
                  <span className="text-[#a0a0a0] text-sm">
                    <strong className="text-[#e5e5e5]">{source.name}</strong> — {source.description}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-[#666] text-xs mt-4 font-mono">
              Category: SUSPICIOUS_DEATHS.db / Missing Scientists Cluster | Sub-category: Advanced Propulsion / National Security | Last updated: {data.lastUpdated}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
