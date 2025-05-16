import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';

function BankCheckPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 w-full max-w-md mx-4">
          <h1 className="text-3xl font-bold text-center mb-6">One More Question</h1>
          <p className="text-gray-600 text-center text-xl mb-8">Do you have an active checking account?</p>
          <div className="space-y-6">
            <button
              onClick={() => navigate('/final')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-6 rounded-lg text-xl transition-colors"
            >
              Yes, I have an active checking account
            </button>
            <button
              onClick={() => navigate('/disqualified')}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-5 px-6 rounded-lg text-xl transition-colors"
            >
              No, I don't have an active checking account
            </button>
          </div>
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

export default BankCheckPage;