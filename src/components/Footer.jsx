import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-violet-200/50 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-violet-700/80">© {new Date().getFullYear()} BooBites — made with 💜 and boba 🧋</p>
        <div className="flex items-center gap-4 text-sm text-violet-700/80">
          <a href="#features" className="hover:text-violet-900">Features</a>
          <a href="#get-started" className="hover:text-violet-900">Get Started</a>
          <a href="#" className="hover:text-violet-900">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
