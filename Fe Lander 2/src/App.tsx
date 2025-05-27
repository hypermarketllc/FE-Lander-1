import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import AgeSelectionPage from './pages/AgeSelectionPage';
import GenderSelectionPage from './pages/GenderSelectionPage';
import ThankYouPage from './pages/ThankYouPage';
import DisqualificationPage from './pages/DisqualificationPage';
import DisqualificationAgePage from './pages/DisqualificationAgePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><LandingPage /></Layout>} />
      <Route path="/age-selection" element={<Layout><AgeSelectionPage /></Layout>} />
      <Route path="/gender-selection" element={<Layout><GenderSelectionPage /></Layout>} />
      <Route path="/thank-you" element={<Layout><ThankYouPage /></Layout>} />
      <Route path="/disqualified" element={<Layout><DisqualificationPage /></Layout>} />
      <Route path="/disqualified-age" element={<Layout><DisqualificationAgePage /></Layout>} />
      <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
      <Route path="/terms-and-conditions" element={<Layout><TermsAndConditions /></Layout>} />
      <Route path="/contact-us" element={<Layout><ContactUs /></Layout>} />
    </Routes>
  );
}

export default App;
