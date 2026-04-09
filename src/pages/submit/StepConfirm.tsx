import { useState } from 'react';
import { TriangleAlert as AlertTriangle, Send } from 'lucide-react';
import type { SubmissionFormData } from './types';

interface Props {
  formData: SubmissionFormData;
  onBack: () => void;
  onSubmit: () => Promise<void>;
  submitting: boolean;
}

export function StepConfirm({ formData, onBack, onSubmit, submitting }: Props) {
  const [confirmed, setConfirmed] = useState(false);

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const rows = [
    { label: 'Document Type', value: formData.document_type },
    { label: 'Title', value: formData.title },
    {
      label: 'Source URL',
      value: (
        <a
          href={formData.source_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00ff41] hover:underline break-all"
        >
          {formData.source_url}
        </a>
      ),
    },
    { label: 'Document Date', value: formatDate(formData.document_date) },
    { label: 'Pillar', value: formData.pillar },
    { label: 'Summary', value: formData.summary },
    { label: 'Verification Notes', value: formData.criteria_notes || 'None provided' },
    { label: 'Submitter', value: formData.is_anonymous ? 'Anonymous' : formData.submitter_handle || 'Anonymous' },
    { label: 'Signal Contact', value: formData.is_anonymous ? 'None provided' : formData.signal_handle || 'None provided' },
  ];

  return (
    <div>
      <h2 className="text-lg font-mono font-bold text-[#e5e5e5] mb-1">Review Your Submission</h2>
      <p className="text-sm text-[#a0a0a0] mb-6">Please verify all information before submitting.</p>

      <div className="bg-[#0a0a0a] border border-white/10 rounded-lg divide-y divide-white/5">
        {rows.map((row) => (
          <div key={row.label} className="px-5 py-3.5 flex flex-col sm:flex-row sm:gap-4">
            <span className="text-xs font-mono text-[#a0a0a0] uppercase tracking-wider sm:w-40 flex-shrink-0 mb-1 sm:mb-0 sm:pt-0.5">
              {row.label}
            </span>
            <span className="text-sm text-[#e5e5e5] flex-1 break-words">{row.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 border border-yellow-500/30 bg-yellow-500/5 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-yellow-200/80 leading-relaxed">
            All submissions are reviewed by our verification team before publication. False or fabricated
            submissions are discarded. We do not collect IP addresses, browser fingerprints, or any metadata
            beyond what you provide in this form.
          </p>
        </div>
      </div>

      <label className="flex items-start gap-3 mt-5 cursor-pointer group">
        <input
          type="checkbox"
          checked={confirmed}
          onChange={(e) => setConfirmed(e.target.checked)}
          className="mt-1 w-4 h-4 rounded border-white/20 bg-[#0a0a0a] text-[#00ff41] focus:ring-[#00ff41]/50 focus:ring-offset-0 accent-[#00ff41]"
        />
        <span className="text-sm text-[#a0a0a0] group-hover:text-[#e5e5e5] transition-colors select-none">
          I confirm this submission contains truthful information supported by verifiable sources.
        </span>
      </label>

      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={onBack}
          disabled={submitting}
          className="px-8 py-3 rounded-lg font-semibold text-sm text-[#a0a0a0] border border-white/10 hover:border-white/20 hover:text-[#e5e5e5] transition-all disabled:opacity-50 min-h-[44px]"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onSubmit}
          disabled={!confirmed || submitting}
          className="w-full sm:w-auto sm:min-w-[240px] ml-0 sm:ml-4 px-8 py-3.5 rounded-lg font-bold text-sm transition-all duration-200 bg-[#00ff41] text-black hover:bg-[#00ff41]/90 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-h-[44px]"
        >
          {submitting ? (
            <>
              <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Submit Evidence
            </>
          )}
        </button>
      </div>
    </div>
  );
}
