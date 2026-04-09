import { useState } from 'react';
import { Flag, X, Check, Loader as Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface ReportBrokenLinkProps {
  documentId: string;
}

type ReportType = 'broken_link' | 'wrong_document' | 'other';

const reportOptions: { value: ReportType; label: string }[] = [
  { value: 'broken_link', label: 'Broken link' },
  { value: 'wrong_document', label: 'Wrong document' },
  { value: 'other', label: 'Other issue' },
];

export function ReportBrokenLink({ documentId }: ReportBrokenLinkProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<ReportType | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!selectedType) return;

    setSubmitting(true);
    setError(null);

    try {
      const { error: insertError } = await supabase
        .from('link_reports')
        .insert({
          document_id: documentId,
          report_type: selectedType,
        });

      if (insertError) throw insertError;

      setSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        setSubmitted(false);
        setSelectedType(null);
      }, 2000);
    } catch (err) {
      setError('Failed to submit report. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedType(null);
    setError(null);
  };

  if (submitted) {
    return (
      <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-green-500/10 border border-green-500/30 rounded text-[10px] font-mono text-green-400">
        <Check className="w-3 h-3" />
        Report submitted
      </div>
    );
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-mono text-[#666] hover:text-[#a0a0a0] hover:bg-white/5 rounded transition-all"
        title="Report an issue with this document"
      >
        <Flag className="w-3 h-3" />
        Report Issue
      </button>
    );
  }

  return (
    <div className="relative inline-block">
      <div className="absolute bottom-full right-0 mb-1 w-48 bg-[#0a0a0a] border border-[#00ff41]/30 rounded-lg shadow-xl shadow-black/50 p-3 z-50">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[9px] uppercase tracking-wider text-[#555] font-mono">Report Issue</span>
          <button
            onClick={handleClose}
            className="text-[#555] hover:text-[#a0a0a0] transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
        </div>

        <div className="space-y-1.5 mb-3">
          {reportOptions.map(option => (
            <button
              key={option.value}
              onClick={() => setSelectedType(option.value)}
              className={`w-full text-left px-2 py-1.5 rounded text-[10px] font-mono transition-all ${
                selectedType === option.value
                  ? 'bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41]/30'
                  : 'text-[#888] hover:text-[#a0a0a0] hover:bg-white/5 border border-transparent'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {error && (
          <div className="text-[9px] text-red-400 font-mono mb-2">{error}</div>
        )}

        <button
          onClick={handleSubmit}
          disabled={!selectedType || submitting}
          className="w-full px-2 py-1.5 bg-[#00ff41]/10 border border-[#00ff41]/40 text-[#00ff41] font-mono text-[10px] rounded hover:bg-[#00ff41]/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-1.5"
        >
          {submitting ? (
            <>
              <Loader2 className="w-3 h-3 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Report'
          )}
        </button>
      </div>

      <button
        onClick={handleClose}
        className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-mono text-[#00ff41] bg-[#00ff41]/10 rounded transition-all"
      >
        <Flag className="w-3 h-3" />
        Report Issue
      </button>
    </div>
  );
}
