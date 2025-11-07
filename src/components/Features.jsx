import { Shield, Clock, Repeat, FileCode, CheckCircle2 } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Repeat className="h-6 w-6 text-[#3a8fff]" />,
      title: 'Smart Syncing',
      desc: 'Automatic folder syncing and conflict resolution across your drives.'
    },
    {
      icon: <Clock className="h-6 w-6 text-[#3a8fff]" />,
      title: 'Scheduled Transfers',
      desc: 'Set it and forget it with flexible, AI-optimized schedules.'
    },
    {
      icon: <Shield className="h-6 w-6 text-[#3a8fff]" />,
      title: 'Security First',
      desc: 'End-to-end encryption, OAuth 2.0, GDPR compliant operations.'
    },
    {
      icon: <FileCode className="h-6 w-6 text-[#3a8fff]" />,
      title: 'Intelligent Mapping',
      desc: 'Understands your folder structures to map destinations accurately.'
    },
  ];

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-[#22335b]">Why DriveDrop</h2>
          <p className="mt-2 text-slate-600">Faster, safer, and smarter than manual transfers.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <div className="h-10 w-10 rounded-md bg-blue-50 grid place-content-center mb-3">
                {f.icon}
              </div>
              <h3 className="font-semibold text-slate-800">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>

        <div id="security" className="mt-14 rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-xl font-semibold text-slate-800">Security & Compliance</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {['SOC 2', 'ISO 27001', 'AES-256', 'TLS 1.3', 'GDPR', 'OAuth 2.0'].map((item) => (
              <li key={item} className="flex items-center gap-2 text-slate-600"><CheckCircle2 className="h-5 w-5 text-[#31d158]" /> {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
