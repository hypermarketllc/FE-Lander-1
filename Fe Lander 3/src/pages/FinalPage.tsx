import React from 'react';
import { Phone, Heart } from 'lucide-react';

function FinalPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 w-full max-w-md mx-4 text-center">
          <h1 className="text-3xl font-bold mb-6">Great News!</h1>
          <p className="text-gray-600 text-xl mb-8">
            You pre-qualify for coverage! Speak with one of our licensed agents now to get your free quote.
          </p>
          <a
            href="tel:1-800-555-0123"
            className="ringba-number inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-8 rounded-lg text-xl transition-colors w-full"
          >
            <Phone className="mr-3 h-6 w-6" />
            Call Now: 1-800-555-0123
          </a>
          <p className="mt-6 text-lg text-gray-500">Our caring advisors are available 24/7</p>
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

export default FinalPage;