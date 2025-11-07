import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import QuickStart from './components/QuickStart';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <Hero />
      <Demo />
      <Features />
      <QuickStart />

      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">© {new Date().getFullYear()} DriveDrop. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm text-slate-600">
              <a href="#" className="hover:text-slate-900">About</a>
              <a href="#" className="hover:text-slate-900">Privacy</a>
              <a href="#" className="hover:text-slate-900">Terms</a>
              <a href="#" className="hover:text-slate-900">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
