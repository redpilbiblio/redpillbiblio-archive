import { useState, useRef, useCallback } from 'react';
import { Upload, Shield } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { SubmitStepIndicator } from './submit/SubmitStepIndicator';
import { StepDocumentType } from './submit/StepDocumentType';
import { StepEvidenceDetails } from './submit/StepEvidenceDetails';
import { StepSubmitterInfo } from './submit/StepSubmitterInfo';
import { StepConfirm } from './submit/StepConfirm';
import { SubmissionSuccess } from './submit/SubmissionSuccess';
import { StatusLookup } from './submit/StatusLookup';
import { INITIAL_FORM_DATA } from './submit/types';
import type { SubmissionFormData } from './submit/types';

export function Submit() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<SubmissionFormData>({ ...INITIAL_FORM_DATA });
  const [submitting, setSubmitting] = useState(false);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  const updateForm = useCallback((partial: Partial<SubmissionFormData>) => {
    setFormData((prev) => ({ ...prev, ...partial }));
  }, []);

  const handleSubmit = async () => {
    setSubmitting(true);
    setError(null);

    const { data, error: insertError } = await supabase
      .from('submissions')
      .insert([
        {
          document_type: formData.document_type,
          title: formData.title,
          source_url: formData.source_url,
          document_date: formData.document_date,
          pillar: formData.pillar,
          summary: formData.summary,
          criteria_notes: formData.criteria_notes || null,
          is_anonymous: formData.is_anonymous,
          submitter_handle: formData.is_anonymous ? null : formData.submitter_handle || null,
          signal_handle: formData.is_anonymous ? null : formData.signal_handle || null,
        },
      ])
      .select('id')
      .maybeSingle();

    setSubmitting(false);

    if (insertError || !data) {
      setError('Failed to submit. Please try again.');
      return;
    }

    setSubmissionId(data.id);
  };

  const handleReset = () => {
    setStep(1);
    setFormData({ ...INITIAL_FORM_DATA });
    setSubmissionId(null);
    setError(null);
  };

  const scrollToStatus = () => {
    statusRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5]">
      <SEOHead
        title="Submit Evidence"
        description="Submit verified evidence, government documents, court filings, and investigative reports to The Red Pill Bibliography for review and publication."
        url="https://redpillbiblio.wtf/submit"
      />
      <Navigation />

      <main id="main-content" tabIndex={-1} className="pt-24 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#e5e5e5] mb-3 flex items-center justify-center gap-3">
              <Upload className="w-9 h-9 text-[#00ff41]" />
              Submit Evidence
            </h1>
            <p className="text-base text-[#a0a0a0] max-w-xl mx-auto">
              Help build the archive. Submit verified documents and primary sources for review.
            </p>
          </div>

          <div className="mb-8 bg-[#0f0f0f] border border-[#00ff41]/20 rounded-lg p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-[#00ff41] flex-shrink-0 mt-0.5" />
              <div className="space-y-3 text-sm">
                <div>
                  <h3 className="font-semibold text-[#e5e5e5] mb-1">What We Accept</h3>
                  <p className="text-[#a0a0a0] leading-relaxed">
                    .gov documents, court filings, official transcripts, FOIA releases, authenticated
                    government records, peer-reviewed research, and investigative journalism from credible
                    institutions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#e5e5e5] mb-1">What We Do Not Accept</h3>
                  <p className="text-[#a0a0a0] leading-relaxed">
                    Opinion pieces, social media posts, unverifiable claims, or anonymous accusations without
                    documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0f0f0f] border border-white/10 rounded-lg p-5 sm:p-8">
            {submissionId ? (
              <SubmissionSuccess
                submissionId={submissionId}
                onReset={handleReset}
                onScrollToStatus={scrollToStatus}
              />
            ) : (
              <>
                <SubmitStepIndicator currentStep={step} />

                {error && (
                  <div className="mb-6 p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                    <p className="text-sm text-red-400">{error}</p>
                  </div>
                )}

                <div className="relative overflow-hidden">
                  <div
                    className="transition-all duration-300 ease-in-out"
                    style={{ transform: `translateX(-${(step - 1) * 0}%)` }}
                  >
                    {step === 1 && (
                      <StepDocumentType
                        formData={formData}
                        onChange={updateForm}
                        onNext={() => setStep(2)}
                      />
                    )}
                    {step === 2 && (
                      <StepEvidenceDetails
                        formData={formData}
                        onChange={updateForm}
                        onNext={() => setStep(3)}
                        onBack={() => setStep(1)}
                      />
                    )}
                    {step === 3 && (
                      <StepSubmitterInfo
                        formData={formData}
                        onChange={updateForm}
                        onNext={() => setStep(4)}
                        onBack={() => setStep(2)}
                      />
                    )}
                    {step === 4 && (
                      <StepConfirm
                        formData={formData}
                        onBack={() => setStep(3)}
                        onSubmit={handleSubmit}
                        submitting={submitting}
                      />
                    )}
                  </div>
                </div>
              </>
            )}
          </div>

          <div ref={statusRef} className="mt-16 pt-16 border-t border-white/10">
            <StatusLookup />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Submit;
