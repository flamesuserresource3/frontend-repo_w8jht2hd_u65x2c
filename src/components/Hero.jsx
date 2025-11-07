import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">AI-powered file transfers</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-[#22335b]">Move Files at the Speed of Thought</h1>
          <p className="mt-4 text-slate-600 text-lg">Your AI-powered bridge between Google Drive, Dropbox, and more. Let DriDro map, schedule, and move your files intelligently.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#quickstart" className="inline-flex items-center justify-center rounded-md bg-[#31d158] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90">Get Started – Connect Your Drives</a>
            <a href="#demo" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#3a8fff] ring-1 ring-[#3a8fff] hover:bg-blue-50">See Live Demo</a>
          </div>
        </div>
        <div className="relative h-[420px] lg:h-[520px]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl">
            <Spline scene="https://prod.spline.design/OG17yM2eUIs8MUmA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
