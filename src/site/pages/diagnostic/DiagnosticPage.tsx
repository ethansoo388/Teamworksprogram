import { useState, useEffect } from 'react';

export function DiagnosticPage() {
  const [clickLog, setClickLog] = useState<string[]>([]);
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      setClickLog(prev => [...prev, `Hash changed to: ${window.location.hash} at ${new Date().toLocaleTimeString()}`]);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const testLinks = [
    { href: '#/index.html', label: 'Home' },
    { href: '#/aboutus.html', label: 'About Us' },
    { href: '#/contactus.html', label: 'Contact Us' },
    { href: '#/teamworks/index.html', label: 'TeamWorks' },
    { href: '#/teamworks/creating-super-teams.html', label: 'Creating Super Teams' },
  ];

  const handleTestClick = (href: string) => {
    setClickLog(prev => [...prev, `Link clicked: ${href} at ${new Date().toLocaleTimeString()}`]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Navigation Diagnostic Page</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Current State</h2>
          <div className="space-y-2">
            <p><strong>Current Hash:</strong> <code className="bg-gray-100 px-2 py-1 rounded">{currentHash || '(empty)'}</code></p>
            <p><strong>Full URL:</strong> <code className="bg-gray-100 px-2 py-1 rounded">{window.location.href}</code></p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Test Links</h2>
          <div className="space-y-2">
            {testLinks.map(link => (
              <div key={link.href} className="flex items-center gap-4">
                <a
                  href={link.href}
                  onClick={() => handleTestClick(link.href)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  {link.label}
                </a>
                <code className="text-sm text-gray-600">{link.href}</code>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Click Log</h2>
          {clickLog.length === 0 ? (
            <p className="text-gray-500">No clicks yet. Try clicking a link above.</p>
          ) : (
            <div className="space-y-1">
              {clickLog.map((log, index) => (
                <div key={index} className="text-sm font-mono bg-gray-50 p-2 rounded">
                  {log}
                </div>
              ))}
            </div>
          )}
          {clickLog.length > 0 && (
            <button
              onClick={() => setClickLog([])}
              className="mt-4 text-sm text-red-600 hover:text-red-700"
            >
              Clear Log
            </button>
          )}
        </div>

        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2 text-yellow-900">Troubleshooting Steps</h2>
          <ol className="list-decimal list-inside space-y-2 text-yellow-900">
            <li>Open the browser console (F12 or Cmd+Option+I)</li>
            <li>Click any link above</li>
            <li>Check if you see console logs from DevRouter</li>
            <li>Check if the "Current Hash" updates</li>
            <li>Check if entries appear in the "Click Log"</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
