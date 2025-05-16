import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Shield } from 'lucide-react';
import Footer from './components/Footer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
        {/* Header - Reduced padding */}
        <header className="bg-[#2B4B8C] text-white py-2 sm:py-3 sticky top-0 z-10">
          <div className="max-w-3xl mx-auto px-3 sm:px-4 flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Shield className="h-5 w-5 sm:h-6 sm:w-6" />
              <div>
                <h1 className="text-base sm:text-lg font-semibold">USA Senior Support</h1>
                <p className="text-[10px] sm:text-xs opacity-90">Final Expense for Americans over age 55</p>
              </div>
            </div>
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-[#2B4B8C]" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
  );
}

export default App;