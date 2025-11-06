import React from 'react';

export default function CTA() {
  return (
    <section id="get-started" className="relative overflow-hidden py-16">
      <div className="absolute inset-0 -z-[0] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(251,182,206,0.25),transparent_60%)]" />
      <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-pink-50 via-violet-50 to-white p-8 ring-1 ring-violet-200/60 shadow-sm">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-2xl font-bold text-violet-900 sm:text-3xl">Ready to sip and track?</h3>
          <p className="mt-2 text-violet-700/80">
            Sign up and start logging your favorite bites and sips. Your future self will send you a hug.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button className="rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-300/60 transition hover:-translate-y-0.5 hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-300">
              Create free account 🌈
            </button>
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-violet-700 ring-1 ring-violet-200 transition hover:-translate-y-0.5">
              Explore demo 🍩
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
