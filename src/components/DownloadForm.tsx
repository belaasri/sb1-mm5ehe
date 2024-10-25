import React, { useState } from 'react';
import { Download, Loader } from 'lucide-react';
import toast from 'react-hot-toast';

export const DownloadForm = () => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username) {
      toast.error('Please enter an Instagram username');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`https://instagram243.p.rapidapi.com/userposts/${username}/12/`, {
        headers: {
          'x-rapidapi-host': 'instagram243.p.rapidapi.com',
          'x-rapidapi-key': 'd1c53133acmsh2e7c470c0bfbb2ep1a074cjsne9dd522da151'
        }
      });
      
      const data = await response.json();
      if (data.error) {
        toast.error('Failed to fetch stories. Please check the username.');
      } else {
        // Handle successful response
        toast.success('Stories fetched successfully!');
        // Implement download functionality here
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 space-y-4">
      <div className="relative">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Instagram username"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader className="w-5 h-5 animate-spin" />
            <span>Processing...</span>
          </>
        ) : (
          <>
            <Download className="w-5 h-5" />
            <span>Download Stories</span>
          </>
        )}
      </button>
    </form>
  );
};