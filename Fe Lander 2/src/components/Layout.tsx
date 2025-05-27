import React, { ReactNode } from 'react';
import { Shield, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-[#2B4B8C] text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Shield className="h-6 w-6 mr-2" />
            <h1 className="text-lg font-bold">American Coverage Center</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6 sm:py-8 flex flex-col items-center">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/contact-us" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
          <div className="text-center mt-4 text-sm">
            &copy; {new Date().getFullYear()} American Coverage Center. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
