import { Lock } from 'lucide-react';
import type { SubmissionFormData } from './types';

interface Props {
  formData: SubmissionFormData;
  onChange: (data: Partial<SubmissionFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function StepSubmitterInfo({ formData, onChange, onNext, onBack }: Props) {
  return (
    <div>
      <h2 className="text-lg font-mono font-bold text-[#e5e5e5] mb-1">Submitter Information</h2>
      <p className="text-sm text-[#a0a0a0] mb-6">Choose how you'd like to be identified.</p>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm font-medium text-[#e5e5e5]">Submit Anonymously</span>
            <p className="text-xs text-[#a0a0a0] mt-0.5">No identifying information will be stored</p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={formData.is_anonymous}
            onClick={() =>
              onChange({
                is_anonymous: !formData.is_anonymous,
                submitter_handle: !formData.is_anonymous ? '' : formData.submitter_handle,
                signal_handle: !formData.is_anonymous ? '' : formData.signal_handle,
              })
            }
            className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#00ff41]/50 min-h-[44px] min-w-[48px] ${
              formData.is_anonymous ? 'bg-[#00ff41]' : 'bg-white/20'
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform duration-200 ${
                formData.is_anonymous ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {formData.is_anonymous && (
          <div className="bg-[#00ff41]/5 border border-[#00ff41]/20 rounded-lg p-4">
            <p className="text-sm text-[#00ff41]/80">
              Your submission will be completely anonymous. No identifying information will be stored.
            </p>
          </div>
        )}

        <div
          className={`space-y-4 overflow-hidden transition-all duration-300 ${
            formData.is_anonymous ? 'max-h-0 opacity-0' : 'max-h-[400px] opacity-100'
          }`}
        >
          <div>
            <label className="block text-sm font-medium text-[#e5e5e5] mb-1.5">
              Handle / Pseudonym
              <span className="text-[#a0a0a0] font-normal ml-1">(optional)</span>
            </label>
            <input
              type="text"
              value={formData.submitter_handle}
              onChange={(e) => onChange({ submitter_handle: e.target.value })}
              placeholder="How should we credit you?"
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-[#e5e5e5] text-sm placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#00ff41]/50 focus:border-[#00ff41]/50 transition-all min-h-[44px]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#e5e5e5] mb-1.5">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#a0a0a0]" />
                Signal Username
                <span className="text-[#a0a0a0] font-normal">(optional)</span>
              </span>
            </label>
            <input
              type="text"
              value={formData.signal_handle}
              onChange={(e) => onChange({ signal_handle: e.target.value })}
              placeholder="For secure follow-up only"
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-[#e5e5e5] text-sm placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#00ff41]/50 focus:border-[#00ff41]/50 transition-all min-h-[44px]"
            />
            <p className="text-xs text-[#a0a0a0] mt-1.5">
              Signal is end-to-end encrypted. We will only contact you if we need clarification.
            </p>
          </div>
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
          className="px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-200 bg-[#00ff41] text-black hover:bg-[#00ff41]/90 min-h-[44px]"
        >
          Next
        </button>
      </div>
    </div>
  );
}
