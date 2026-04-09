import { FileText, Scale, Clock as Unlock, Search, ShieldAlert, FileQuestion } from 'lucide-react';
import type { SubmissionFormData } from './types';
import { DOCUMENT_TYPES } from './types';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  Scale,
  Unlock,
  Search,
  ShieldAlert,
  FileQuestion,
};

interface Props {
  formData: SubmissionFormData;
  onChange: (data: Partial<SubmissionFormData>) => void;
  onNext: () => void;
}

export function StepDocumentType({ formData, onChange, onNext }: Props) {
  return (
    <div>
      <h2 className="text-lg font-mono font-bold text-[#e5e5e5] mb-1">Select Document Type</h2>
      <p className="text-sm text-[#a0a0a0] mb-6">What type of evidence are you submitting?</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {DOCUMENT_TYPES.map((type) => {
          const Icon = ICON_MAP[type.icon];
          const isSelected = formData.document_type === type.value;
          return (
            <button
              key={type.value}
              type="button"
              onClick={() => onChange({ document_type: type.value })}
              className={`text-left p-5 rounded-lg border-2 transition-all duration-200 min-h-[100px] ${
                isSelected
                  ? 'border-[#00ff41] bg-[#00ff41]/5 shadow-[0_0_15px_rgba(0,255,65,0.15)]'
                  : 'border-white/10 bg-[#0f0f0f] hover:border-white/20 hover:bg-white/[0.02]'
              }`}
            >
              <div className="flex items-start gap-3">
                <Icon
                  className={`w-6 h-6 mt-0.5 flex-shrink-0 ${
                    isSelected ? 'text-[#00ff41]' : 'text-[#a0a0a0]'
                  }`}
                />
                <div>
                  <div
                    className={`font-semibold text-sm mb-1 ${
                      isSelected ? 'text-[#00ff41]' : 'text-[#e5e5e5]'
                    }`}
                  >
                    {type.value}
                  </div>
                  <div className="text-xs text-[#a0a0a0] leading-relaxed">{type.description}</div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex justify-end mt-8">
        <button
          type="button"
          onClick={onNext}
          disabled={!formData.document_type}
          className="px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-200 bg-[#00ff41] text-black hover:bg-[#00ff41]/90 disabled:opacity-30 disabled:cursor-not-allowed min-h-[44px]"
        >
          Next
        </button>
      </div>
    </div>
  );
}
