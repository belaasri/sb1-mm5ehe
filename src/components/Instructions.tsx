import React from 'react';
import { HelpCircle, Smartphone, Download } from 'lucide-react';

export const Instructions = () => {
  return (
    <div className="max-w-4xl mx-auto mt-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">How to Download Instagram Stories</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-2 mb-4">
            <HelpCircle className="w-6 h-6 text-purple-600" />
            <h3 className="font-semibold">Step 1</h3>
          </div>
          <p className="text-gray-600">Enter the Instagram username of the account whose stories you want to download</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-2 mb-4">
            <Smartphone className="w-6 h-6 text-purple-600" />
            <h3 className="font-semibold">Step 2</h3>
          </div>
          <p className="text-gray-600">Click the download button and wait for the stories to be fetched</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-2 mb-4">
            <Download className="w-6 h-6 text-purple-600" />
            <h3 className="font-semibold">Step 3</h3>
          </div>
          <p className="text-gray-600">Select the stories you want to save and download them to your device</p>
        </div>
      </div>
    </div>
  );
};