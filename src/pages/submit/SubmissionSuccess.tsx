import { useState } from 'react';
import { CircleCheck as CheckCircle, Copy, Check, RotateCcw, ArrowDown } from 'lucide-react';

interface Props {
  submissionId: string;
  onReset: () => void;
  onScrollToStatus: () => void;
}

export function SubmissionSuccess({ submissionId, onReset, onScrollToStatus }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(submissionId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="text-center py-8 animate-in fade-in duration-500">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#00ff41]/10 border-2 border-[#00ff41] mb-6">
        <CheckCircle className="w-10 h-10 text-[#00ff41]" />
      </div>

      <h2 className="text-2xl font-bold text-[#e5e5e5] mb-3">Submission Received</h2>

      <div className="bg-[#0a0a0a] border border-[#00ff41]/30 rounded-lg p-4 inline-block mb-4 max-w-full">
        <p className="text-xs text-[#a0a0a0] font-mono uppercase tracking-wider mb-2">Your Submission ID</p>
        <div className="flex items-center gap-2">
          <code className="text-[#00ff41] font-mono text-sm break-all">{submissionId}</code>
          <button
            onClick={handleCopy}
            className="flex-shrink-0 p-2 rounded hover:bg-white/5 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Copy submission ID"
          >
            {copied ? (
              <Check className="w-4 h-4 text-[#00ff41]" />
            ) : (
              <Copy className="w-4 h-4 text-[#a0a0a0]" />
            )}
          </button>
        </div>
      </div>

      <p className="text-sm text-[#a0a0a0] max-w-md mx-auto mb-2">
        Save this ID to check your submission status below. Your evidence will be reviewed according to our
        verification methodology.
      </p>
      <p className="text-sm text-[#a0a0a0] font-mono">Average review time: 48-72 hours</p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
        <button
          onClick={onReset}
          className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-[#a0a0a0] border border-white/10 hover:border-white/20 hover:text-[#e5e5e5] transition-all min-h-[44px]"
        >
          <RotateCcw className="w-4 h-4" />
          Submit Another
        </button>
        <button
          onClick={onScrollToStatus}
          className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41]/30 hover:bg-[#00ff41]/20 transition-all min-h-[44px]"
        >
          <ArrowDown className="w-4 h-4" />
          Check Status
        </button>
      </div>
    </div>
  );
}
