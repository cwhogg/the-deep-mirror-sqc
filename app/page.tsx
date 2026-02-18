'use client';

import { useState, FormEvent } from 'react';
import JsonLd from '../components/content/JsonLd';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error — please try again');
    }
  }

  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Organization","name":"The Deep Mirror","url":"https://the-deep-mirror.vercel.app"}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"WebSite","name":"The Deep Mirror","url":"https://the-deep-mirror.vercel.app"}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Has the Enneagram been debunked scientifically?","acceptedAnswer":{"@type":"Answer","text":"The Enneagram framework itself has research support, but traditional testing methods are problematic. Static surveys suffer from social desirability bias and oversimplification. Our AI approach addresses these methodological issues with dynamic questioning and validation techniques."}},{"@type":"Question","name":"What is the criticism of traditional Enneagram tests?","acceptedAnswer":{"@type":"Answer","text":"Main criticisms include high mistyping rates, social desirability bias, and lack of subtype precision. Most tests ask what you think about yourself rather than uncovering underlying motivations. Professional typists often disagree with survey results for these reasons."}},{"@type":"Question","name":"What is the best site for accurate Enneagram testing?","acceptedAnswer":{"@type":"Answer","text":"Currently, Integrative9 offers the most rigorous approach with conditional logic and subtype detection. However, it still relies on static surveys. The Deep Mirror advances beyond this with conversational AI that eliminates survey limitations entirely."}},{"@type":"Question","name":"How much does professional Enneagram assessment cost?","acceptedAnswer":{"@type":"Answer","text":"Traditional professional assessments range from $30-60 per test, plus certification costs for practitioners. Enterprise solutions require custom pricing. The Deep Mirror will offer transparent pricing without requiring expensive training programs."}},{"@type":"Question","name":"What do psychologists think of Enneagram accuracy?","acceptedAnswer":{"@type":"Answer","text":"Psychologists generally support the personality framework but criticize testing methodologies for lacking clinical rigor. Many prefer human interview approaches over surveys. Our AI combines the scalability of testing with the depth of clinical interviews."}}]}} />

      <header className="border-b border-border bg-background-elevated">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-bold text-primary" style={{ fontFamily: "'Inter', sans-serif" }}>
            The Deep Mirror
          </a>
          <div className="flex items-center gap-6 text-sm">
            <a href="/blog" className="text-text-muted hover:text-text transition-colors">Blog</a>
            <a href="/compare" className="text-text-muted hover:text-text transition-colors">Comparisons</a>
            <a href="/faq" className="text-text-muted hover:text-text transition-colors">FAQ</a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section aria-label="Hero" className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-text mb-4 leading-tight">
            Why Enneagram Tests Are Inaccurate—And How AI Fixes Everything
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Replace biased surveys with dynamic conversations. Get clinical-grade Enneagram typing through AI-powered psychological interviewing designed for executive coaching and HR assessment.
          </p>

          {/* Email Signup */}
          <div className="max-w-md mx-auto">
            {status === 'success' ? (
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <p className="text-primary font-medium">Thanks for signing up! We&apos;ll be in touch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-background-elevated border border-border text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : `Get Early Access`}
                </button>
              </form>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm mt-2">{errorMsg}</p>
            )}
          </div>
        </section>

        {/* Value Props */}
        <section aria-label="Features" className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="text-2xl font-bold text-text text-center mb-8">Why The Deep Mirror?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <section aria-label="Conversational AI Eliminates Survey Bias" className="bg-background-elevated border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">Conversational AI Eliminates Survey Bias</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Dynamic interviews adapt in real-time, probing inconsistencies and motivations that static questionnaires miss. No more social desirability bias distorting your results.</p>
          </section>
          <section aria-label="Clinical-Grade Accuracy for Professionals" className="bg-background-elevated border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">Clinical-Grade Accuracy for Professionals</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Built for executive coaches and HR leaders who need precise typing, not entertainment. Advanced subtype detection with validation techniques used in professional assessment.</p>
          </section>
          <section aria-label="Executive Coaching Integration Ready" className="bg-background-elevated border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">Executive Coaching Integration Ready</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Seamlessly fits into coaching workflows with detailed reports and development insights. Skip expensive certification programs—get professional-grade results immediately.</p>
          </section>
          </div>
        </section>

        {/* FAQ */}
        <section aria-label="Frequently Asked Questions" className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-2xl font-bold text-text text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">Has the Enneagram been debunked scientifically?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">The Enneagram framework itself has research support, but traditional testing methods are problematic. Static surveys suffer from social desirability bias and oversimplification. Our AI approach addresses these methodological issues with dynamic questioning and validation techniques.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">What is the criticism of traditional Enneagram tests?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Main criticisms include high mistyping rates, social desirability bias, and lack of subtype precision. Most tests ask what you think about yourself rather than uncovering underlying motivations. Professional typists often disagree with survey results for these reasons.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">What is the best site for accurate Enneagram testing?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Currently, Integrative9 offers the most rigorous approach with conditional logic and subtype detection. However, it still relies on static surveys. The Deep Mirror advances beyond this with conversational AI that eliminates survey limitations entirely.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">How much does professional Enneagram assessment cost?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Traditional professional assessments range from \$30-60 per test, plus certification costs for practitioners. Enterprise solutions require custom pricing. The Deep Mirror will offer transparent pricing without requiring expensive training programs.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">What do psychologists think of Enneagram accuracy?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Psychologists generally support the personality framework but criticize testing methodologies for lacking clinical rigor. Many prefer human interview approaches over surveys. Our AI combines the scalability of testing with the depth of clinical interviews.</p>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-border bg-background-elevated mt-auto">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-text-muted text-sm">&copy; 2026 The Deep Mirror. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="/" className="text-text-muted hover:text-text transition-colors">Home</a>
              <a href="/blog" className="text-text-muted hover:text-text transition-colors">Blog</a>
              <a href="/compare" className="text-text-muted hover:text-text transition-colors">Comparisons</a>
              <a href="/faq" className="text-text-muted hover:text-text transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
