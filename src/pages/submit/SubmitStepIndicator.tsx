import { Check } from 'lucide-react';

const STEPS = [
  { num: 1, label: 'Document Type' },
  { num: 2, label: 'Evidence Details' },
  { num: 3, label: 'Submitter Info' },
  { num: 4, label: 'Confirm & Submit' },
];

interface StepIndicatorProps {
  currentStep: number;
}

export function SubmitStepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-between w-full max-w-2xl mx-auto mb-8">
      {STEPS.map((step, i) => {
        const isCompleted = currentStep > step.num;
        const isCurrent = currentStep === step.num;
        const isUpcoming = currentStep < step.num;

        return (
          <div key={step.num} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-mono font-bold border-2 transition-all duration-300 ${
                  isCompleted
                    ? 'border-[#00ff41] bg-transparent text-[#00ff41]'
                    : isCurrent
                    ? 'border-[#00ff41] bg-[#00ff41] text-black'
                    : 'border-white/20 bg-transparent text-white/30'
                }`}
              >
                {isCompleted ? <Check className="w-5 h-5" /> : step.num}
              </div>
              <span
                className={`mt-2 text-xs font-mono text-center hidden sm:block ${
                  isCurrent
                    ? 'text-[#00ff41]'
                    : isCompleted
                    ? 'text-[#00ff41]/70'
                    : 'text-white/30'
                }`}
              >
                {step.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`flex-1 h-px mx-3 transition-colors duration-300 ${
                  isCompleted ? 'bg-[#00ff41]/50' : 'bg-white/10'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
