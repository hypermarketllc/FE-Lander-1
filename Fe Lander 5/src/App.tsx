import React, { useState, useEffect } from 'react';
import { Shield, ArrowRight, Timer, Star, Check, Search } from 'lucide-react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ContactUs from './pages/ContactUs';

type Step = 'start' | 'age' | 'beneficiary' | 'coverage' | 'loading' | 'qualified';

type Selection = {
  age: string | null;
  beneficiary: string | null;
  coverage: string | null;
};

function StartScreen({ onNext }: { onNext: () => void }) {
  return (
    <div className="text-center animate-fadeIn">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
        Protect Your Family's Future with Affordable Final Expense Coverage!
      </h1>
      <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
        Get Pre-Qualified & Speak To A Dedicated Agent In Just 30 Seconds!
      </p>
      <button
        onClick={onNext}
        className="w-full py-3 sm:py-4 bg-[#003087] text-white rounded-lg font-semibold text-base sm:text-lg flex items-center justify-center hover:bg-blue-900 transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Get Started! <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
}

interface OptionScreenProps {
  selected: string | null;
  onSelect: (value: string) => void;
  onNext: () => void;
}

function AgeScreen({ selected, onSelect, onNext }: OptionScreenProps) {
  const options = ['Below 50 Years Old', '50 - 89 Years Old', 'Over 90 Years Old'];

  return (
    <div className="animate-fadeIn">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">What age range do you fall in?</h2>
      <div className="space-y-3">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => {
              onSelect(option);
              setTimeout(onNext, 300);
            }}
            className={`w-full p-3 sm:p-4 text-left rounded-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              selected === option
                ? 'border-2 border-[#003087] bg-blue-50'
                : 'border-2 border-gray-200 hover:border-[#003087] hover:bg-blue-50'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm sm:text-base">{option}</span>
              <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                selected === option ? 'border-[#003087] bg-white' : 'border-gray-300'
              }`}>
                <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#003087] transition-all duration-300 ${
                  selected === option ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`} />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function BeneficiaryScreen({ selected, onSelect, onNext }: OptionScreenProps) {
  const options = ['Child/Children', 'Grand Children', 'Spouse', 'Other'];

  return (
    <div className="animate-fadeIn">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-3 sm:mb-4">Who Will Be Your Beneficiary?</h2>
      <p className="text-center text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Please choose an option</p>
      <div className="space-y-3">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => {
              onSelect(option);
              setTimeout(onNext, 300);
            }}
            className={`w-full p-3 sm:p-4 text-left rounded-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              selected === option
                ? 'border-2 border-[#003087] bg-blue-50'
                : 'border-2 border-gray-200 hover:border-[#003087] hover:bg-blue-50'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm sm:text-base">{option}</span>
              <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                selected === option ? 'border-[#003087] bg-white' : 'border-gray-300'
              }`}>
                <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#003087] transition-all duration-300 ${
                  selected === option ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`} />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function CoverageScreen({ selected, onSelect, onNext }: OptionScreenProps) {
  const options = ['$10,000', '$15,000', '$20,000', '$25,000', '$30,000 Or More'];

  return (
    <div className="animate-fadeIn">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-3 sm:mb-4">
        How Much Coverage Would You Like To Qualify For?
      </h2>
      <p className="text-center text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Select The Amount Of Coverage</p>
      <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
        {options.slice(0, 4).map((amount) => (
          <button
            key={amount}
            onClick={() => {
              onSelect(amount);
              setTimeout(onNext, 300);
            }}
            className={`p-3 sm:p-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              selected === amount
                ? 'border-2 border-[#003087] bg-blue-50'
                : 'border-2 border-gray-200 hover:border-[#003087] hover:bg-blue-50'
            }`}
          >
            <div className="flex flex-col items-center justify-between space-y-2">
              <span className="font-medium text-sm sm:text-base">{amount}</span>
              <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                selected === amount ? 'border-[#003087] bg-white' : 'border-gray-300'
              }`}>
                <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#003087] transition-all duration-300 ${
                  selected === amount ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`} />
              </div>
            </div>
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          onSelect(options[4]);
          setTimeout(onNext, 300);
        }}
        className={`w-full p-3 sm:p-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          selected === options[4]
            ? 'border-2 border-[#003087] bg-blue-50'
            : 'border-2 border-gray-200 hover:border-[#003087] hover:bg-blue-50'
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="font-medium text-sm sm:text-base">{options[4]}</span>
          <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
            selected === options[4] ? 'border-[#003087] bg-white' : 'border-gray-300'
          }`}>
            <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#003087] transition-all duration-300 ${
              selected === options[4] ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`} />
          </div>
        </div>
      </button>
    </div>
  );
}

function LoadingScreen({ onNext }: { onNext: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNext();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div className="text-center animate-fadeIn">
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-8">
          <div className="absolute inset-0 border-4 border-blue-100 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-[#003087] rounded-full border-t-transparent animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Search className="w-10 h-10 sm:w-12 sm:h-12 text-[#003087]" />
          </div>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
          Finding The Best Coverage Plans
        </h2>
        <div className="flex flex-col gap-2 items-center text-sm sm:text-base text-gray-600">
          <p>Analyzing your information...</p>
          <p>Searching carrier networks...</p>
          <p>Comparing available plans...</p>
        </div>
      </div>
    </div>
  );
}

function QualifiedScreen() {
  return (
    <div className="text-center animate-fadeIn">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
        Congratulations
        <br />
        You Are Pre-Qualified!
      </h2>
      
      <div className="flex items-center justify-between mb-8 sm:mb-12 px-2 sm:px-4">
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#003087] rounded-full flex items-center justify-center mb-1 sm:mb-2">
            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <div className="text-xs sm:text-sm text-[#003087]">Inquiry received</div>
        </div>

        <div className="flex-1 mx-1 sm:mx-2 relative">
          <div className="h-0.5 sm:h-1 bg-[#003087]"></div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#003087] rounded-full flex items-center justify-center mb-1 sm:mb-2">
            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <div className="text-xs sm:text-sm text-[#003087]">Pre-Qualification</div>
        </div>

        <div className="flex-1 mx-1 sm:mx-2 relative">
          <div className="h-0.5 sm:h-1 bg-[#003087]"></div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#003087] rounded-full flex items-center justify-center mb-1 sm:mb-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
          </div>
          <div className="text-xs sm:text-sm text-[#003087]">Speak To Agent</div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 animate-pulse">
        <div className="flex items-center justify-center text-[#003087] mb-2">
          <Timer className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
          <span className="font-semibold text-sm sm:text-base">Your licensed agent is waiting!</span>
        </div>
        <p className="text-xs sm:text-sm text-[#003087]">
          Please call us within the next 5 minutes before your pre-qualification expires!
        </p>
      </div>

      <a
        href="tel:+1234567890"
        className="ringba-number w-full px-6 sm:px-8 py-3 sm:py-4 bg-[#003087] text-white rounded-lg font-semibold text-base sm:text-lg flex items-center justify-center hover:bg-blue-900 transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Get Connected To An Agent <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
      </a>

      <p className="text-sm sm:text-base text-gray-600 mt-6 sm:mt-8">
        We're looking forward to making sure you and your family are protected.
      </p>
    </div>
  );
}

function MainApp() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>('start');
  const [progress, setProgress] = useState(0);
  const [selections, setSelections] = useState<Selection>({
    age: null,
    beneficiary: null,
    coverage: null,
  });

  const handleNext = (step: Step) => {
    setCurrentStep(step);
    switch (step) {
      case 'age':
        setProgress(25);
        break;
      case 'beneficiary':
        setProgress(50);
        break;
      case 'coverage':
        setProgress(75);
        break;
      case 'loading':
        setProgress(90);
        break;
      case 'qualified':
        setProgress(100);
        break;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'start':
        return <StartScreen onNext={() => handleNext('age')} />;
      case 'age':
        return (
          <AgeScreen
            selected={selections.age}
            onSelect={(age) => setSelections({ ...selections, age })}
            onNext={() => handleNext('beneficiary')}
          />
        );
      case 'beneficiary':
        return (
          <BeneficiaryScreen
            selected={selections.beneficiary}
            onSelect={(beneficiary) => setSelections({ ...selections, beneficiary })}
            onNext={() => handleNext('coverage')}
          />
        );
      case 'coverage':
        return (
          <CoverageScreen
            selected={selections.coverage}
            onSelect={(coverage) => setSelections({ ...selections, coverage })}
            onNext={() => handleNext('loading')}
          />
        );
      case 'loading':
        return <LoadingScreen onNext={() => handleNext('qualified')} />;
      case 'qualified':
        return <QualifiedScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Logo Header */}
      <div className="w-full bg-white border-b py-2 sm:py-4 px-4 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-center">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 bg-[#003087] rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              <div className="absolute -bottom-0.5 w-full flex justify-center">
                <div className="bg-red-600 h-0.5 w-4 sm:w-5"></div>
              </div>
            </div>
            <div className="ml-2 text-sm sm:text-base font-bold text-[#003087]">AMERICAN COVERAGE CENTER</div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      {currentStep !== 'start' && (
        <div className="w-full h-1.5 sm:h-2 fixed top-[2.75rem] sm:top-[4.5rem] left-0 right-0 z-40 bg-gray-100">
          <div className="max-w-md mx-auto flex space-x-1">
            <div className={`h-1.5 sm:h-2 flex-1 transition-all duration-300 ease-in-out ${progress >= 25 ? 'bg-[#003087]' : 'bg-gray-200'}`} />
            <div className={`h-1.5 sm:h-2 flex-1 transition-all duration-300 ease-in-out ${progress >= 50 ? 'bg-[#003087]' : 'bg-gray-200'}`} />
            <div className={`h-1.5 sm:h-2 flex-1 transition-all duration-300 ease-in-out ${progress >= 75 ? 'bg-[#003087]' : 'bg-gray-200'}`} />
            <div className={`h-1.5 sm:h-2 flex-1 transition-all duration-300 ease-in-out ${progress >= 100 ? 'bg-[#003087]' : 'bg-gray-200'}`} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-grow max-w-md mx-auto px-3 sm:px-4 pt-16 sm:pt-24 pb-6 sm:pb-8">
        <div className="transition-opacity duration-300 ease-in-out">
          {renderStep()}
        </div>
      </div>

      {/* Trust Indicators Footer */}
      <div className="w-full bg-white border-t border-gray-200 py-3">
        <div className="max-w-md mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 sm:gap-2">
              <img src="./rating-fox.png" alt="Rating Fox" className="h-6 sm:h-8" />
              <div className="flex">
                {[1,2,3,4,5].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="font-bold text-black text-sm sm:text-base">review4u</span>
              <div className="flex">
                {[1,2,3,4,5].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
          <div className="text-[10px] sm:text-xs text-gray-500 mt-2 text-center">
            By clicking SUBMIT you agree to receive recurring automated promotional and personalized marketing text messages from MedLife American Coverage Center. Consent is not a condition of purchase. Msg & data rates may apply.
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-3">
            <button
              onClick={() => navigate('/privacy-policy')}
              className="text-[10px] sm:text-xs text-gray-500 hover:text-gray-700 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => navigate('/terms-and-conditions')}
              className="text-[10px] sm:text-xs text-gray-500 hover:text-gray-700 transition-colors"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => navigate('/contact-us')}
              className="text-[10px] sm:text-xs text-gray-500 hover:text-gray-700 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainApp />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
}

export default App;