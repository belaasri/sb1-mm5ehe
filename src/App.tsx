import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/Header';
import { DownloadForm } from './components/DownloadForm';
import { Instructions } from './components/Instructions';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-center" />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <DownloadForm />
        <Instructions />
      </main>
      <footer className="text-center py-6 text-gray-600">
        <p>© 2024 Instagram Story Downloader. Use responsibly.</p>
      </footer>
    </div>
  );
}

export default App;