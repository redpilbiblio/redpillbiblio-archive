import type { SubmissionFormData } from './types';
import { PILLARS } from './types';

interface Props {
  formData: SubmissionFormData;
  onChange: (data: Partial<SubmissionFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function StepEvidenceDetails({ formData, onChange, onNext, onBack }: Props) {
  const isUrlValid =
    formData.source_url.startsWith('http://') || formData.source_url.startsWith('https://');
  const canProceed =
    formData.title.trim() &&
    formData.source_url.trim() &&
    isUrlValid &&
    formData.document_date &&
    formData.pillar &&
    formData.summary.trim();

  return (
    <div>
      <h2 className="text-lg font-mono font-bold text-[#e5e5e5] mb-1">Evidence Details</h2>
      <p className="text-sm text-[#a0a0a0] mb-6">Provide details about the document you're submitting.</p>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-[#e5e5e5] mb-1.5">
            Title <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => onChange({ title: e.target.value })}
            placeholder="Official title or descriptive name of the document"
            className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-[#e5e5e5] text-sm placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#00ff41]/50 focus:border-[#00ff41]/50 transition-all min-h-[44px]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#e5e5e5] mb-1.5">
            URL to Source <span className="text-red-400">*</span>
          </label>
          <input
            type="url"
            value={formData.source_url}
            onChange={(e) => onChange({ source_url: e.target.value })}
            placeholder="https://..."
            className={`w-full bg-[#0a0a0a] border rounded-lg px-4 py-3 text-[#e5e5e5] text-sm placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#00ff41]/50 focus:border-[#00ff41]/50 transition-all min-h-[44px] ${
              formData.source_url && !isUrlValid ? 'border-red-500/50' : 'border-white/10'
            }`}
          />
          {formData.source_url && !isUrlValid && (
            <p className="text-red-400 text-xs mt-1 font-mono">URL must start with http:// or https://</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-[#e5e5e5] mb-1.5">
            Date of Document <span className="text-red-400">*</span>
          </label>
          <input
            type="date"
            value={formData.document_date}
            onChange={(e) => onChange({ document_date: e.target.value })}
            className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-[#e5e5e5] text-sm focus:outline-none focus:ring-2 focus:ring-[#00ff41]/50 focus:border-[#00ff41]/50 transition-all min-h-[44px] [color-scheme:dark]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#e5e5e5] mb-1.5">
            Pillar <span className="text-red-400">*</span>
          </label>
          <select
            value={formData.pillar}
            onChange={(e) => onChange({ pillar: e.target.value })}
            className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-[#e5e5e5] text-sm focus:outline-none focus:ring-2 focus:ring-[#00ff41]/50 focus:border-[#00ff41]/50 transition-all min-h-[44px] [color-scheme:dark]"
          >
            <option value="" disabled>
              Select a pillar...
            </option>
            {PILLARS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#e5e5e5] mb-1.5">
            Summary in Your Own Words <span className="text-red-400">*</span>
          </label>
          <textarea
            value={formData.summary}
            onChange={(e) => {
              if (e.target.value.length <= 500) onChange({ summary: e.target.value });
            }}
            placeholder="Briefly describe what this document reveals and why it matters..."
            rows={4}
            className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-[#e5e5e5] text-sm placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#00ff41]/50 focus:border-[#00ff41]/50 transition-all resize-none"
          />
          <p className="text-xs text-[#a0a0a0] text-right font-mono mt-1">
            {formData.summary.length} / 500
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#e5e5e5] mb-1.5">
            Why This Meets VERIFIED/VALID Criteria
            <span className="text-[#a0a0a0] font-normal ml-1">(optional)</span>
          </label>
          <textarea
            value={formData.criteria_notes}
            onChange={(e) => {
              if (e.target.value.length <= 300) onChange({ criteria_notes: e.target.value });
            }}
            placeholder="Explain how this can be independently verified..."
            rows={3}
            className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-[#e5e5e5] text-sm placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#00ff41]/50 focus:border-[#00ff41]/50 transition-all resize-none"
          />
          <p className="text-xs text-[#a0a0a0] text-right font-mono mt-1">
            {formData.criteria_notes.length} / 300
          </p>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={onBack}
          className="px-8 py-3 rounded-lg font-semibold text-sm text-[#a0a0a0] border border-white/10 hover:border-white/20 hover:text-[#e5e5e5] transition-all min-h-[44px]"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!canProceed}
          className="px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-200 bg-[#00ff41] text-black hover:bg-[#00ff41]/90 disabled:opacity-30 disabled:cursor-not-allowed min-h-[44px]"
        >
          Next
        </button>
      </div>
    </div>
  );
}
