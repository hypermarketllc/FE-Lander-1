import React from 'react';
import { Shield, Phone, Heart, DollarSign, CheckCircle } from 'lucide-react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ContactUs from './pages/ContactUs';

function HomePage() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Condensed */}
      <div
        className="relative bg-cover bg-center h-[400px]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("./hero-background.jpg")'
        }}
      >
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl text-white">
            <h1 className="text-2xl sm:text-4xl font-bold mb-3">Final Expense Insurance Coverage</h1>
            <p className="text-base sm:text-lg mb-6">Get coverage up to $35,000 with affordable monthly payments.</p>
            <div className="flex flex-col gap-3">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-base font-semibold transition-colors">
                Get Your Free Quote
              </button>
              <a href="tel:8881234567" className="flex items-center justify-center bg-white text-gray-800 px-6 py-3 rounded-lg text-base font-semibold hover:bg-gray-100 transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                (888) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits - Condensed */}
      <div className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
              <Shield className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="text-lg font-bold">No Medical Exam</h3>
                <p className="text-sm text-gray-600">Ages 50-85 guaranteed</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
              <Heart className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="text-lg font-bold">Peace of Mind</h3>
                <p className="text-sm text-gray-600">Protect your family</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
              <DollarSign className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="text-lg font-bold">Affordable</h3>
                <p className="text-sm text-gray-600">From $20/month</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features - Condensed */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Key Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Coverage never expires",
                "Direct beneficiary payment",
                "No health questions",
                "Locked-in rates",
                "Immediate accident coverage",
                "Money-back guarantee"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-sm text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA - Condensed */}
      <div className="bg-green-600 py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto">
            Get Your Free Quote
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <button
              onClick={() => navigate('/privacy-policy')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => navigate('/terms-and-conditions')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => navigate('/contact-us')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact Us
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Final Expense Coverage. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
}

export default App;