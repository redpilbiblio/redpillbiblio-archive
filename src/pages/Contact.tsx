import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '@/lib/supabase';
import { Send, Shield, CircleAlert as AlertCircle, CircleCheck as CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Link } from 'react-router-dom';

const formSchema = z.object({
  contact_email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(50, 'Message must be at least 50 characters'),
  documentation: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contact_email: '',
      subject: '',
      message: '',
      documentation: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setError(null);

    try {
      const { error: submitError } = await supabase.from('tips').insert([
        {
          contact_email: data.contact_email,
          subject: data.subject,
          message: data.message,
          documentation: data.documentation || null,
          status: 'new',
        },
      ]);

      if (submitError) throw submitError;

      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error('Error submitting tip:', err);
      setError('Failed to submit tip. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5]">
      <SEOHead
        title="Submit a Tip"
        description="Submit verified information, primary sources, and evidence documentation to The Red Pill Bibliography research team. Secure and confidential tip submission."
        url="https://redpillbiblio.wtf/contact"
      />
      <Navigation />
      <main id="main-content" tabIndex={-1} className="pt-24 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#e5e5e5] mb-4 flex items-center justify-center gap-3">
            <Send className="w-10 h-10 text-[#00ff41]" aria-hidden="true" />
            Submit a Tip
          </h1>
          <p className="text-lg text-[#a0a0a0] max-w-2xl mx-auto">
            Help us maintain transparency by submitting verified information and
            primary sources.
          </p>
        </div>

        <div className="mb-8 bg-[#0f0f0f] border border-[#00ff41]/30 rounded-lg p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-[#a0a0a0]">
            Want to submit evidence directly? Use our secure submission system.
          </p>
          <Link
            to="/submit"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00ff41] text-black font-semibold text-sm hover:bg-[#00ff41]/90 transition-all whitespace-nowrap min-h-[44px]"
          >
            Submit Evidence
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Guidelines */}
        <div className="mb-8 bg-[#0f0f0f] border border-[#00ff41]/20 rounded-lg p-6">
          <div className="flex items-start gap-3 mb-4">
            <Shield className="w-6 h-6 text-[#00ff41] flex-shrink-0 mt-1" aria-hidden="true" />
            <div>
              <h2 className="text-xl font-semibold text-[#e5e5e5] mb-2">
                Submission Guidelines
              </h2>
              <div className="space-y-3 text-[#a0a0a0] leading-relaxed">
                <p>
                  All submissions undergo rigorous verification before publication.
                  To ensure quality and authenticity:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Provide primary sources whenever possible (official documents,
                    records, direct testimony)
                  </li>
                  <li>
                    Include verifiable details: dates, locations, official
                    references, document numbers
                  </li>
                  <li>
                    Clearly distinguish between verified facts and interpretation
                  </li>
                  <li>
                    Be prepared to provide additional context or corroboration if
                    contacted
                  </li>
                  <li>
                    Never submit information obtained illegally or unethically
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/10">
            <h3 className="text-sm font-semibold text-[#e5e5e5] mb-2">
              Verification Process
            </h3>
            <div className="space-y-2 text-sm text-[#a0a0a0] font-mono">
              <div className="flex gap-3">
                <span className="text-[#00ff41]">1.</span>
                <span>Initial review and source authentication</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#ffbf00]">2.</span>
                <span>Cross-reference with existing documentation</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#00ff41]">3.</span>
                <span>Independent verification of claims</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#ffbf00]">4.</span>
                <span>Publication with appropriate tier classification</span>
              </div>
            </div>
          </div>
        </div>

        {/* Submission Form */}
        <div className="bg-[#0f0f0f] border border-white/10 rounded-lg p-8">
          {submitted && (
            <Alert className="mb-6 bg-[#00ff41]/10 border-[#00ff41] text-[#00ff41]">
              <CheckCircle2 className="h-4 w-4" />
              <AlertDescription>
                Your submission has been received and will be reviewed. Thank you
                for contributing to transparency.
              </AlertDescription>
            </Alert>
          )}

          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="contact_email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#e5e5e5]">
                      Contact Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="your@email.com"
                        className="bg-[#0a0a0a] border-white/20 text-[#e5e5e5] focus:border-[#00ff41] focus:ring-[#00ff41] min-h-[44px]"
                        aria-required="true"
                      />
                    </FormControl>
                    <FormDescription className="text-[#a0a0a0]">
                      We may contact you for clarification or follow-up.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#e5e5e5]">Subject</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Brief description of the information"
                        className="bg-[#0a0a0a] border-white/20 text-[#e5e5e5] focus:border-[#00ff41] focus:ring-[#00ff41] min-h-[44px]"
                        aria-required="true"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#e5e5e5]">
                      Detailed Information
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Provide detailed information including context, relevant dates, parties involved, and any other pertinent details..."
                        className="bg-[#0a0a0a] border-white/20 text-[#e5e5e5] focus:border-[#00ff41] focus:ring-[#00ff41] min-h-[200px] font-mono text-sm"
                        aria-required="true"
                      />
                    </FormControl>
                    <FormDescription className="text-[#a0a0a0]">
                      Minimum 50 characters. Be as specific as possible.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="documentation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#e5e5e5]">
                      Supporting Documentation
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Links to source documents, official records, reference numbers, or detailed citations..."
                        className="bg-[#0a0a0a] border-white/20 text-[#e5e5e5] focus:border-[#00ff41] focus:ring-[#00ff41] min-h-[120px] font-mono text-sm"
                      />
                    </FormControl>
                    <FormDescription className="text-[#a0a0a0]">
                      Optional. Include URLs, document references, or other
                      verifiable sources.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#00ff41] text-[#0a0a0a] hover:bg-[#00ff41]/90 text-lg py-6 font-semibold transition-all focus:ring-2 focus:ring-[#00ff41] focus:ring-offset-2 focus:ring-offset-[#0f0f0f]"
              >
                {submitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-[#0a0a0a] border-t-transparent rounded-full animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Tip
                    <Send className="ml-2 w-5 h-5" aria-hidden="true" />
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>

        <div className="mt-8 text-center text-sm text-[#a0a0a0]">
          <p>
            Your privacy is important. Email addresses are used solely for
            verification purposes and never shared.
          </p>
        </div>
      </div>
      </main>

      <Footer />
    </div>
  );
}
