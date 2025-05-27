import React from 'react';
import { useNavigate } from 'react-router-dom';

function AgeSelectionPage() {
  const navigate = useNavigate();

  const handleAgeSelect = (ageRange: string) => {
    if (ageRange === 'under-45') {
      navigate('/disqualified-age');
    } else {
      navigate('/gender-selection');
    }
  };

  return (
    <>
      <div className="mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200 max-w-[calc(100%-1rem)] sm:max-w-xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-10">
          What is your age?
        </h2>
        
        <div className="space-y-4 sm:space-y-5">
          <button
            onClick={() => handleAgeSelect('under-45')}
            className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold py-5 px-6 rounded-xl text-xl sm:text-2xl transition-colors duration-200 touch-manipulation shadow-md"
          >
            Under 45
          </button>

          <button
            onClick={() => handleAgeSelect('45-85')}
            className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold py-5 px-6 rounded-xl text-xl sm:text-2xl transition-colors duration-200 touch-manipulation shadow-md"
          >
            45-85
          </button>

          <button
            onClick={() => handleAgeSelect('over-85')}
            className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold py-5 px-6 rounded-xl text-xl sm:text-2xl transition-colors duration-200 touch-manipulation shadow-md"
          >
            86 or older
          </button>
        </div>
      </div>

      <div className="mt-8 sm:mt-10 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-1">
        <p className="leading-relaxed">
          Disclaimer: This is an advertisement for life insurance. Not all plans are available in all states. Callers will be directed to a licensed insurance agent who can provide more information about Final Expense Life Insurance plans offered by one or several insurance carrier(s) each having an A.M. Best rating of  A+ or higher. Guaranteed issue whole life insurance is generally available to individuals between the ages of 45 and 85 (age qualification varies by plan and carrier).  You will receive only the benefit amount in the policy issued.  In order for the policy premiums and benefits to remain in effect, premiums must be paid in full and on time.   Premiums may depend upon the coverage amount selected, your individual qualifications and may vary by carrier and state. Plans may have a graded death benefit for an initial period of time. Benefits are paid to the named beneficiary(ies) and can be used for any purpose.
        </p>
      </div>
    </>
  );
}

export default AgeSelectionPage;
