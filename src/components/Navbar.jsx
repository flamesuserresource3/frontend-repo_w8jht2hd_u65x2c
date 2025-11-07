import { useState } from 'react';
import { Rocket, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-blue-500 to-green-400 grid place-content-center text-white">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="font-semibold text-slate-800 text-lg">DriveDrop</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#demo" className="hover:text-slate-900">Demo</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#security" className="hover:text-slate-900">Security</a>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a href="#login" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">Login</a>
            <a href="#signup" className="px-4 py-2 text-sm font-semibold text-white rounded-md bg-[#31d158] hover:opacity-90 transition">Sign up</a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="space-y-1">
              <a href="#features" className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">Features</a>
              <a href="#demo" className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">Demo</a>
              <a href="#pricing" className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">Pricing</a>
              <a href="#security" className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">Security</a>
              <div className="flex items-center gap-2 px-3 pt-2">
                <a href="#login" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">Login</a>
                <a href="#signup" className="px-4 py-2 text-sm font-semibold text-white rounded-md bg-[#31d158] hover:opacity-90 transition">Sign up</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
