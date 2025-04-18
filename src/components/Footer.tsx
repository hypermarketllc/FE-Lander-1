import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2B4B8C] text-white py-6">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">USA Senior Support</h3>
            <p className="text-sm opacity-90">Final Expense for Americans over age 55</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link to="/privacy-policy" className="text-white hover:underline text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="text-white hover:underline text-sm">
              Terms & Conditions
            </Link>
            <Link to="/contact-us" className="text-white hover:underline text-sm">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="mt-6 text-center text-xs opacity-80">
          <p>&copy; {new Date().getFullYear()} USA Senior Support. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;