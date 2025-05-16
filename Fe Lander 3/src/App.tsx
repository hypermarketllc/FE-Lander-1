import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AgeCheckPage from './pages/AgeCheckPage';
import BankCheckPage from './pages/BankCheckPage';
import FinalPage from './pages/FinalPage';
import DisqualificationPage from './pages/DisqualificationPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/age-check" element={<AgeCheckPage />} />
      <Route path="/bank-check" element={<BankCheckPage />} />
      <Route path="/final" element={<FinalPage />} />
      <Route path="/disqualified" element={<DisqualificationPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
}

export default App;