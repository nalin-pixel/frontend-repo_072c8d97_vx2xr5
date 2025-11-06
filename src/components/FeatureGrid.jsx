import React from 'react';
import { Heart, Sparkles, PieChart } from 'lucide-react';

const features = [
  {
    icon: <PieChart className="h-5 w-5" />,
    title: 'Cute calorie tracking',
    desc: 'Log meals with adorable emojis and get a quick overview of macros — simple and sweet.'
  },
  {
    icon: <Heart className="h-5 w-5" />,
    title: 'Feel-good goals',
    desc: 'Set gentle daily goals and celebrate tiny wins with confetti and kind reminders.'
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'Playful progress',
    desc: 'Watch your streak glow brighter each day with pastel badges and sparkly progress bars.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-violet-900 sm:text-4xl">Sweet, simple features</h2>
        <p className="mt-3 text-violet-700/80">Everything you need to build gentle habits — nothing heavy, just helpful.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="group rounded-2xl bg-white/70 p-6 ring-1 ring-violet-200/60 backdrop-blur shadow-sm hover:shadow-md transition"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700 ring-1 ring-violet-200">
              {f.icon}
            </div>
            <h3 className="text-lg font-semibold text-violet-900">{f.title} <span className="ml-1">🍓</span></h3>
            <p className="mt-2 text-sm text-violet-700/80">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
