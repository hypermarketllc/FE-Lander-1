import React from 'react';
import { Phone, Heart, Shield, Clock, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative h-[90vh] sm:h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("./image.jpg")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center px-4 py-6">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">Don't Let Your Family Bear The Burden</h1>
            <p className="text-xl sm:text-2xl md:text-3xl mb-8 leading-relaxed">Protect your loved ones from the unexpected with dignified final expense coverage</p>
            <button
              onClick={() => navigate('/age-check')}
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-colors"
            >
              Get Pre-Qualified Right Now
            </button>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">A Story That Could Change Your Family's Future</h2>
        
        <div className="prose prose-lg mx-auto">
          <div className="mb-8">
            <img
              src="./image.jpg"
              alt="Grandmother and grandson"
              className="w-full h-[250px] sm:h-[400px] object-cover rounded-lg shadow-lg mb-8"
            />
            
            <p className="text-gray-700 leading-relaxed mb-6 text-lg sm:text-xl">
              Michael had always dreamed of Harvard. His grandmother, Sarah, who raised him after losing his parents, 
              encouraged that dream every single day. She worked two jobs to ensure he could focus on his studies, 
              never missing a single one of his academic achievements.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 text-lg sm:text-xl">
              When Sarah suddenly passed away, Michael faced an impossible choice: use his savings for her funeral 
              expenses or keep them for his Harvard tuition. The $15,000 funeral costs would drain everything he had set aside.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 text-lg sm:text-xl">
              "She gave up everything for me," Michael shared, tears in his eyes. "How could I not give her the 
              dignified farewell she deserved?" He postponed his Harvard dreams to honor the woman who had sacrificed 
              everything for him.
            </p>

            <div className="bg-gray-100 p-6 sm:p-8 rounded-lg border-l-4 border-blue-600 mb-8">
              <p className="text-lg sm:text-xl font-semibold text-gray-900">
                Don't let your family face this heart-wrenching choice. Final expense insurance can protect your 
                loved ones from bearing this burden during their time of grief.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Why Choose Final Expense Coverage?</h2>
          
          <div className="grid grid-cols-1 gap-8">
            <div className="text-center p-6 sm:p-8 bg-white rounded-lg shadow-md">
              <Shield className="w-16 h-16 mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-semibold mb-3">Protection</h3>
              <p className="text-gray-600 text-lg">Guaranteed coverage to protect your family from financial burden</p>
            </div>
            
            <div className="text-center p-6 sm:p-8 bg-white rounded-lg shadow-md">
              <Clock className="w-16 h-16 mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-semibold mb-3">Quick Approval</h3>
              <p className="text-gray-600 text-lg">No lengthy medical exams required. Coverage in as little as 24 hours</p>
            </div>
            
            <div className="text-center p-6 sm:p-8 bg-white rounded-lg shadow-md">
              <DollarSign className="w-16 h-16 mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-semibold mb-3">Affordable</h3>
              <p className="text-gray-600 text-lg">Plans starting as low as $1 per day</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Protect Your Family Today</h2>
          <p className="text-xl sm:text-2xl mb-8">Don't wait until it's too late. Give your family the gift of security.</p>
          <button
            onClick={() => navigate('/age-check')}
            className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-xl transition-colors"
          >
            Get Pre-Qualified Right Now
          </button>
          <p className="mt-6 text-lg">Our caring advisors are available 24/7</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-6 w-6 text-blue-600 mr-2" />
            <span className="font-semibold text-xl">American Coverage Center</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <button
              onClick={() => navigate('/privacy-policy')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => navigate('/terms-and-conditions')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => navigate('/contact-us')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact Us
            </button>
          </div>
          
          <p className="text-gray-400 text-base">
            © {new Date().getFullYear()} American Coverage Center. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;