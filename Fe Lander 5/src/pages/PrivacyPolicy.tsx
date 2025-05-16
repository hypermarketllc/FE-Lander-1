import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="max-w-4xl mx-auto px-4 flex items-center">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-white hover:text-blue-200 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span>Back to Home</span>
          </button>
          <h1 className="text-xl font-bold ml-4">Privacy Policy</h1>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-lg max-w-none">
          <h1>Privacy Policy</h1>
          <p>Last Updated: April 19, 2025</p>
          
          <p>
            American Coverage Center ("we," "our," or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, and disclose information about you 
            when you use our website and services.
          </p>
          
          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              <strong>Personal Information:</strong> When you use our services, we may collect 
              personal information such as your name, email address, phone number, postal address, 
              date of birth, and other information you provide to us.
            </li>
            <li>
              <strong>Usage Information:</strong> We collect information about how you use our website, 
              including your IP address, browser type, referring/exit pages, operating system, date/time 
              stamps, and clickstream data.
            </li>
            <li>
              <strong>Device Information:</strong> We collect information about the device you use to 
              access our website, including hardware model, operating system and version, unique device 
              identifiers, and mobile network information.
            </li>
          </ul>
          
          <h2>How We Use Your Information</h2>
          <p>We may use the information we collect for various purposes, including to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process and complete transactions</li>
            <li>Send you technical notices, updates, security alerts, and support messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Communicate with you about products, services, offers, and events</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            <li>Personalize and improve your experience</li>
          </ul>
          
          <h2>Sharing of Information</h2>
          <p>We may share your information in the following circumstances:</p>
          <ul>
            <li>
              <strong>With Service Providers:</strong> We may share your information with third-party 
              vendors, consultants, and other service providers who need access to such information 
              to carry out work on our behalf.
            </li>
            <li>
              <strong>For Legal Reasons:</strong> We may disclose your information if we believe it is 
              necessary to comply with applicable laws, regulations, legal processes, or governmental 
              requests.
            </li>
            <li>
              <strong>In Connection with a Transfer of Assets:</strong> If we are involved in a merger, 
              acquisition, financing, or sale of business assets, your information may be transferred 
              as part of that transaction.
            </li>
          </ul>
          
          <h2>Your Choices</h2>
          <p>
            You have several choices regarding the use of your information:
          </p>
          <ul>
            <li>
              <strong>Account Information:</strong> You may update, correct, or delete your account 
              information at any time by contacting us.
            </li>
            <li>
              <strong>Cookies:</strong> Most web browsers are set to accept cookies by default. If you 
              prefer, you can usually choose to set your browser to remove or reject browser cookies.
            </li>
            <li>
              <strong>Promotional Communications:</strong> You may opt out of receiving promotional 
              communications from us by following the instructions in those communications.
            </li>
          </ul>
          
          <h2>Data Security</h2>
          <p>
            We take reasonable measures to help protect your personal information from loss, theft, 
            misuse, unauthorized access, disclosure, alteration, and destruction.
          </p>
          
          <h2>Changes to this Privacy Policy</h2>
          <p>
            We may change this Privacy Policy from time to time. If we make changes, we will notify 
            you by revising the date at the top of the policy and, in some cases, we may provide you 
            with additional notice.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            American Coverage Center<br />
            Email: privacy@americancoveragecenter.com<br />
            Phone: (800) 555-1234
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-base">
            © {new Date().getFullYear()} American Coverage Center. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;