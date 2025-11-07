import { useEffect, useMemo, useRef, useState } from 'react';
import { Cloud, FolderInput, FolderOutput, Play, RefreshCw, Pause, CheckCircle2 } from 'lucide-react';

const DRIVES = [
  { id: 'gdrive', name: 'Google Drive' },
  { id: 'dropbox', name: 'Dropbox' },
  { id: 'onedrive', name: 'OneDrive' },
];

export default function Demo() {
  const [source, setSource] = useState('gdrive');
  const [dest, setDest] = useState('dropbox');
  const [files, setFiles] = useState([
    { id: 1, name: 'Report Q4.pdf', size: '1.2 MB' },
    { id: 2, name: 'Design.sketch', size: '34.1 MB' },
    { id: 3, name: 'Team-Photo.jpg', size: '2.8 MB' },
  ]);
  const [inProgress, setInProgress] = useState(false);
  const [progress, setProgress] = useState({});

  useEffect(() => {
    let timer;
    if (inProgress) {
      timer = setInterval(() => {
        setProgress((p) => {
          const updated = { ...p };
          files.forEach((f) => {
            if ((updated[f.id] ?? 0) < 100) {
              updated[f.id] = Math.min(100, (updated[f.id] ?? 0) + Math.random() * 15);
            }
          });
          return updated;
        });
      }, 600);
    }
    return () => clearInterval(timer);
  }, [inProgress, files]);

  const allDone = useMemo(() => files.every((f) => (progress[f.id] ?? 0) >= 100), [files, progress]);

  return (
    <section id="demo" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-[#22335b]">Interactive Demo</h2>
          <p className="mt-2 text-slate-600">Select a source and destination, then watch DriDro transfer sample files with smart suggestions.</p>
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6">
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700">Source</label>
                <select value={source} onChange={(e) => setSource(e.target.value)} className="mt-1 w-full rounded-md border-slate-300 focus:ring-[#3a8fff] focus:border-[#3a8fff]">
                  {DRIVES.map((d) => (
                    <option key={d.id} value={d.id}>{d.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Destination</label>
                <select value={dest} onChange={(e) => setDest(e.target.value)} className="mt-1 w-full rounded-md border-slate-300 focus:ring-[#3a8fff] focus:border-[#3a8fff]">
                  {DRIVES.map((d) => (
                    <option key={d.id} value={d.id}>{d.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-end">
                <button onClick={() => setInProgress((v) => !v)} className={`inline-flex items-center justify-center w-full rounded-md px-4 py-2 font-semibold text-white ${inProgress ? 'bg-orange-500' : 'bg-[#31d158]'} hover:opacity-90`}>
                  {inProgress ? <><Pause className="h-4 w-4 mr-2" /> Pause</> : <><Play className="h-4 w-4 mr-2" /> Start</>}
                </button>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {files.map((f) => (
                <div key={f.id} className="rounded-lg border border-slate-200 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Cloud className="h-5 w-5 text-[#3a8fff]" />
                      <div>
                        <p className="font-medium text-slate-800">{f.name}</p>
                        <p className="text-xs text-slate-500">{f.size}</p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500">{Math.floor(progress[f.id] ?? 0)}%</p>
                  </div>
                  <div className="mt-3 h-2 w-full rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-[#3a8fff] transition-all" style={{ width: `${Math.floor(progress[f.id] ?? 0)}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {allDone && (
              <div className="mt-6 rounded-lg bg-green-50 border border-green-200 p-4 text-green-800 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" /> All files transferred securely. Great job, DriDro!
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-800">AI Suggestions</h3>
            <ul className="mt-3 list-disc list-inside text-sm text-slate-600 space-y-2">
              <li>Schedule nightly sync between Documents and Workspaces.</li>
              <li>Detected duplicates in Photos/2023; enable de-duplication.</li>
              <li>Map Design to Dropbox/Projects for faster access.</li>
            </ul>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-medium text-[#3a8fff] ring-1 ring-[#3a8fff] hover:bg-blue-50"><RefreshCw className="h-4 w-4 mr-2" /> Simulate</button>
              <button className="inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-medium text-[#3a8fff] ring-1 ring-[#3a8fff] hover:bg-blue-50"><FolderOutput className="h-4 w-4 mr-2" /> Export Plan</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
