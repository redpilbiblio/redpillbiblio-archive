import { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, MessageSquare, Newspaper, TriangleAlert as AlertTriangle, Activity } from 'lucide-react';
import type { Document } from '@/lib/supabase';

const statusConfig: Record<string, { label: string; color: string; bg: string; border: string }> = {
  unchallenged: { label: 'UNCHALLENGED', color: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/50' },
  disputed: { label: 'DISPUTED', color: 'text-amber-400', bg: 'bg-amber-500/20', border: 'border-amber-500/50' },
  partially_debunked: { label: 'PARTIALLY DEBUNKED', color: 'text-red-400', bg: 'bg-red-500/20', border: 'border-red-500/50' },
  ongoing: { label: 'ONGOING', color: 'text-blue-400', bg: 'bg-blue-500/20', border: 'border-blue-500/50' },
};

const placeholder = 'No official response documented. If you have information, submit a tip.';

export function ContextAndResponse({ document }: { document: Document }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)');
    setIsOpen(mql.matches);
  }, []);

  const status = statusConfig[document.dispute_status || 'unchallenged'] || statusConfig.unchallenged;

  return (
    <div className="mb-8 bg-black border border-green-500/30 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-green-500/5 transition-colors"
      >
        <h2 className="text-green-400 font-mono text-sm font-bold flex items-center gap-2">
          <MessageSquare className="w-4 h-4" />
          &gt; CONTEXT_AND_RESPONSE
        </h2>
        <div className="flex items-center gap-3">
          <span className={`${status.bg} ${status.border} ${status.color} border rounded px-2 py-0.5 font-mono text-[10px] font-bold`}>
            {status.label}
          </span>
          {isOpen ? (
            <ChevronDown className="w-4 h-4 text-green-500/50" />
          ) : (
            <ChevronRight className="w-4 h-4 text-green-500/50" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 space-y-5 border-t border-green-500/20 pt-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-3.5 h-3.5 text-green-400" />
              <h3 className="text-green-400 font-mono text-xs font-bold">OFFICIAL RESPONSE</h3>
            </div>
            <div className="bg-green-500/5 border border-green-500/20 rounded p-3 font-mono text-xs text-green-300/70 leading-relaxed whitespace-pre-wrap">
              {document.official_response || placeholder}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Newspaper className="w-3.5 h-3.5 text-green-400" />
              <h3 className="text-green-400 font-mono text-xs font-bold">MAINSTREAM FRAMING</h3>
            </div>
            <div className="bg-green-500/5 border border-green-500/20 rounded p-3 font-mono text-xs text-green-300/70 leading-relaxed whitespace-pre-wrap">
              {document.mainstream_framing || placeholder}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-3.5 h-3.5 text-green-400" />
              <h3 className="text-green-400 font-mono text-xs font-bold">CHALLENGES</h3>
            </div>
            <div className="bg-green-500/5 border border-green-500/20 rounded p-3 font-mono text-xs text-green-300/70 leading-relaxed whitespace-pre-wrap">
              {document.challenges || placeholder}
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-green-500/10">
            <Activity className="w-3.5 h-3.5 text-green-500/50" />
            <span className="text-green-500/50 font-mono text-[10px]">STATUS:</span>
            <span className={`${status.bg} ${status.border} ${status.color} border rounded px-2 py-0.5 font-mono text-[10px] font-bold`}>
              {status.label}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
