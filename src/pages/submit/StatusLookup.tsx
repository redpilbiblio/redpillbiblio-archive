import { useState } from 'react';
import { Search, Clock, CircleCheck as CheckCircle, Circle as XCircle, Eye } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface SubmissionStatus {
  id: string;
  title: string;
  status: string;
  status_message: string;
  created_at: string;
}

const STATUS_CONFIG: Record<string, { label: string; color: string; bg: string; border: string; icon: React.ComponentType<{ className?: string }> }> = {
  received: { label: 'RECEIVED', color: 'text-gray-300', bg: 'bg-gray-500/10', border: 'border-gray-500/30', icon: Clock },
  under_review: { label: 'UNDER REVIEW', color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', icon: Eye },
  accepted: { label: 'ACCEPTED', color: 'text-[#00ff41]', bg: 'bg-[#00ff41]/10', border: 'border-[#00ff41]/30', icon: CheckCircle },
  rejected: { label: 'REJECTED', color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30', icon: XCircle },
};

export function StatusLookup() {
  const [lookupId, setLookupId] = useState('');
  const [result, setResult] = useState<SubmissionStatus | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLookup = async () => {
    const trimmed = lookupId.trim();
    if (!trimmed) return;

    setLoading(true);
    setNotFound(false);
    setResult(null);

    const { data, error } = await supabase
      .from('submissions')
      .select('id, title, status, status_message, created_at')
      .eq('id', trimmed)
      .maybeSingle();

    setLoading(false);

    if (error || !data) {
      setNotFound(true);
      return;
    }

    setResult(data);
  };

  const config = result ? STATUS_CONFIG[result.status] || STATUS_CONFIG.received : null;

  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <Search className="w-6 h-6 text-[#00ff41]" />
        <h2 className="text-xl font-bold text-[#e5e5e5]">Check Submission Status</h2>
      </div>
      <p className="text-sm text-[#a0a0a0] mb-6">
        Enter your submission ID to check the current review status.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={lookupId}
          onChange={(e) => {
            setLookupId(e.target.value);
            setNotFound(false);
            setResult(null);
          }}
          onKeyDown={(e) => e.key === 'Enter' && handleLookup()}
          placeholder="Enter your submission ID (e.g., a1b2c3d4-...)"
          className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-[#e5e5e5] text-sm font-mono placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#00ff41]/50 focus:border-[#00ff41]/50 transition-all min-h-[44px]"
        />
        <button
          onClick={handleLookup}
          disabled={!lookupId.trim() || loading}
          className="px-6 py-3 rounded-lg font-semibold text-sm bg-[#00ff41] text-black hover:bg-[#00ff41]/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all min-h-[44px] flex items-center justify-center gap-2"
        >
          {loading ? (
            <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
          ) : (
            'Check Status'
          )}
        </button>
      </div>

      {notFound && (
        <div className="mt-6 p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
          <p className="text-sm text-red-400">
            No submission found with that ID. Please check and try again.
          </p>
        </div>
      )}

      {result && config && (
        <div className="mt-6 bg-[#0a0a0a] border border-white/10 rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-3">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold ${config.color} ${config.bg} border ${config.border}`}
            >
              <config.icon className="w-3.5 h-3.5" />
              {config.label}
            </span>
          </div>

          <p className="text-sm text-[#a0a0a0]">{result.status_message}</p>

          <div className="space-y-2 pt-2 border-t border-white/5">
            <div className="flex gap-3">
              <span className="text-xs font-mono text-[#a0a0a0] uppercase tracking-wider w-28 flex-shrink-0">
                Submitted on
              </span>
              <span className="text-sm text-[#e5e5e5]">
                {new Date(result.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <div className="flex gap-3">
              <span className="text-xs font-mono text-[#a0a0a0] uppercase tracking-wider w-28 flex-shrink-0">
                Document
              </span>
              <span className="text-sm text-[#e5e5e5]">{result.title}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
