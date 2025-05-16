import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#2B4B8C] text-white py-3">
        <div className="max-w-3xl mx-auto px-4">
          <Link to="/" className="text-white hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        
        <div className="prose max-w-none">
          <p>
            This Privacy Policy describes how we collect, use, and share information about you when you use our landing page. 
            By using our landing page, you agree to the terms of this Privacy Policy.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Information We Collect</h2>
          <p>We may collect the following information about you:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Personal Information:</strong> We may collect personal information that you voluntarily provide to us, 
              such as your name, email address, and phone number.
            </li>
            <li>
              <strong>Usage Information:</strong> We may collect information about your use of the landing page, 
              such as your IP address, browser type, and pages visited.
            </li>
            <li>
              <strong>Cookies:</strong> We may use cookies and similar technologies to collect information about your use of the landing page 
              and to personalize your experience. Cookies are small text files that are placed on your device when you visit a website.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">How We Use Your Information</h2>
          <p>We may use your information for the following purposes:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>To provide and improve our landing page:</strong> We may use your information to provide and improve our services 
              and to personalize your experience.
            </li>
            <li>
              <strong>To communicate with you:</strong> We may use your information to communicate with you about our services 
              and to respond to your inquiries.
            </li>
            <li>
              <strong>To comply with legal obligations:</strong> We may use your information to comply with applicable laws and regulations.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">How We Share Your Information</h2>
          <p>We may share your information with the following parties:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Service Providers:</strong> We may share your information with third-party service providers 
              that assist us in providing our services.
            </li>
            <li>
              <strong>Business Transfers:</strong> We may share your information in connection with a merger, acquisition, 
              or sale of all or a portion of our business.
            </li>
            <li>
              <strong>Legal Obligations:</strong> We may share your information to comply with applicable laws and regulations.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">Your Choices</h2>
          <p>
            You may choose to opt-out of receiving marketing communications from us by following the unsubscribe instructions included in our emails.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Cookies</h2>
          <p>
            You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. 
            However, if you disable or refuse cookies, some parts of the landing page may be inaccessible or not function properly.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Data Security</h2>
          <p>
            We take reasonable measures to protect your information from unauthorized access, use, and disclosure. 
            However, no transmission of information over the internet is completely secure, and we cannot guarantee the security of your information.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Changes to this Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The updated Privacy Policy will be posted on our landing page with a new effective date. 
            Your continued use of the landing page following any changes to this Privacy Policy constitutes your acceptance of such changes.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our practices, please <Link to="/contact-us" className="text-blue-600 hover:underline">contact us</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;