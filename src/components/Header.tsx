import React from 'react';
import { Instagram } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-pink-600 py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-3">
          <Instagram className="w-8 h-8 text-white" />
          <h1 className="text-3xl font-bold text-white">Instagram Story Downloader</h1>
        </div>
        <p className="text-center text-white mt-2">Download Instagram Stories, Highlights and Videos easily</p>
      </div>
    </header>
  );
};