'use client';

import { ShieldCheck, Sparkles, BarChart2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <nav className="flex items-center justify-between h-20">
              <a href="/" className="flex items-center space-x-3">
                  <ShieldCheck className="w-8 h-8 text-blue-500" />
                  <span className="text-2xl font-bold text-gray-900 tracking-tight">Swipe Safe</span>
              </a>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/#features" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Features</Link>
                <Link href="/#how-it-works" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">How It Works</Link>
                <Link href="/#faq" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">FAQ</Link>
                <Link href="/about" className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">About Us</Link>
              </div>
              <div className="flex items-center">
                <a
                  href="/dashboard/chat/new"
                  className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-transform active:scale-95"
                >
                  Get Started
                </a>
              </div>
            </nav>
        </div>
      </header>

      <main>
        {/* About Us Section */}
        <section className="relative isolate py-24 sm:py-32">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80d1ff] to-[#5c67fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}></div>
            </div>
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-left">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Welcome to Swipe Safe! 🚀
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We believe everyone deserves to date with confidence. Navigating modern dating can be confusing, which is why we created an AI companion to help you read between the lines.
                    </p>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                                                Whether you&apos;re chatting on dating apps or texting on WhatsApp, our tool analyzes the tone and context of your conversations to reveal what’s really going on. We help you spot:
                    </p>
                    <ul className="mt-6 space-y-4 text-lg text-gray-600">
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">🚩</span>
                            <div><strong>Red Flags:</strong> Manipulation tactics, inconsistencies, and scam indicators.</div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">💚</span>
                            <div><strong>Green Flags:</strong> Signs of genuine interest, respect, and emotional availability.</div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-2xl mr-3">⚖️</span>
                            <div><strong>Balance:</strong> Insights into who is putting in the effort.</div>
                        </li>
                    </ul>
                    <div className="mt-8 border-t border-gray-200 pt-8">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Privacy First</h2>
                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            Your data is safe with us. All uploads are anonymous, and personal details are automatically redacted.
                        </p>
                    </div>
                    <p className="mt-8 text-xl font-semibold text-gray-800">
                        Get clarity. Date smarter. Swipe Safe.
                    </p>
                </div>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 lg:px-8">
            <nav className="mb-8 flex justify-center space-x-6" aria-label="Footer">
                <Link href="/#features" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Features</Link>
                <Link href="/#how-it-works" className="text-sm leading-6 text-gray-600 hover:text-gray-900">How It Works</Link>
                <Link href="/#faq" className="text-sm leading-6 text-gray-600 hover:text-gray-900">FAQ</Link>
                <Link href="/about" className="text-sm leading-6 text-blue-600 hover:text-gray-900">About Us</Link>
            </nav>
            <p className="text-center text-xs leading-5 text-gray-500">
                &copy; {new Date().getFullYear()} Swipe Safe. All rights reserved.
            </p>
        </div>
      </footer>
    </div>
  );
}
