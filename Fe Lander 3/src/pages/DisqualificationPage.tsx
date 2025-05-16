import React from 'react';
import { Heart, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function DisqualificationPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 w-full max-w-md mx-4 text-center">
          <XCircle className="w-20 h-20 text-red-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-6">We're Sorry</h1>
          <p className="text-gray-600 text-xl mb-8">
            Unfortunately, you don't qualify for this specific coverage at this time. However, we may have other options available for you.
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
      
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-3">
            <Heart className="h-6 w-6 text-blue-600 mr-2" />
            <span className="font-semibold text-lg">American Coverage Center</span>
          </div>
          <p className="text-gray-400 text-base">
            © {new Date().getFullYear()} American Coverage Center. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default DisqualificationPage;