import React from 'react';
import { XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function DisqualificationPage() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200 max-w-[calc(100%-1rem)] sm:max-w-xl text-center">
      <XCircle className="w-20 h-20 sm:w-24 sm:h-24 text-red-600 mx-auto mb-6" />
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Not Interested in Coverage
      </h2>
      <p className="text-gray-800 mb-8 text-xl sm:text-2xl leading-relaxed">
        We understand that now may not be the right time for you to explore life insurance coverage. 
        If you change your mind, we're here to help protect your loved ones' financial future.
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-gray-600 hover:bg-gray-700 active:bg-gray-800 text-white font-bold py-5 px-8 rounded-xl text-xl sm:text-2xl transition-colors duration-200 touch-manipulation shadow-md"
      >
        Return to Home
      </button>
    </div>
  );
}

export default DisqualificationPage;
