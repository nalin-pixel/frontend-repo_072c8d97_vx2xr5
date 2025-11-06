import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[78vh] min-h-[520px] overflow-hidden bg-gradient-to-b from-pink-50 via-violet-50 to-white">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/fTzRQ8pMbm1-BzvF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays to harmonize with the scene (non-interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(216,180,254,0.35),transparent_60%)]" />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-violet-700 shadow-sm ring-1 ring-violet-200 backdrop-blur">
          <span>👻</span>
          <span>Introducing BooBites — your cutest calorie buddy</span>
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-violet-900 drop-shadow-sm sm:text-5xl md:text-6xl">
          Track calories, stay cozy, feel good
          <span className="ml-2">🧋💖</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-violet-800/80 sm:text-lg">
          Make mindful eating magical with a playful, pastel space. Log bites, watch progress, and
          celebrate tiny wins — one sip, one snack at a time.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#get-started"
            className="rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-300/60 transition hover:-translate-y-0.5 hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-300"
          >
            Start Tracking ✨
          </a>
          <a
            href="#features"
            className="rounded-full bg-white/80 px-6 py-3 text-sm font-semibold text-violet-700 ring-1 ring-violet-200 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
          >
            See Features 🍓
          </a>
        </div>
      </div>
    </section>
  );
}
