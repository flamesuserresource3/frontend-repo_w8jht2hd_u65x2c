import { Cloud, Lock, ShieldCheck } from 'lucide-react';

export default function QuickStart() {
  return (
    <section id="quickstart" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-[#22335b]">Quick Start</h2>
          <p className="mt-2 text-slate-600">Connect your drives in seconds with secure OAuth flows.</p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <button className="flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white p-6 text-left hover:shadow-md transition">
            <div className="h-10 w-10 rounded-md bg-blue-50 grid place-content-center"><Cloud className="h-6 w-6 text-[#3a8fff]" /></div>
            <div>
              <p className="font-semibold text-slate-800">Connect Google Drive</p>
              <p className="text-sm text-slate-600">One-click OAuth authentication</p>
            </div>
          </button>
          <button className="flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white p-6 text-left hover:shadow-md transition">
            <div className="h-10 w-10 rounded-md bg-blue-50 grid place-content-center"><Cloud className="h-6 w-6 text-[#3a8fff]" /></div>
            <div>
              <p className="font-semibold text-slate-800">Connect Dropbox</p>
              <p className="text-sm text-slate-600">One-click OAuth authentication</p>
            </div>
          </button>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div className="flex items-center gap-3 text-slate-700">
            <ShieldCheck className="h-5 w-5 text-[#31d158]" />
            <p className="text-sm">We use AES-256 encryption, TLS 1.3, and are compliant with GDPR and OAuth 2.0 best practices.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
