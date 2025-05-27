import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate('/age-selection');
  };

  const handleNoClick = () => {
    navigate('/disqualified');
  };

  return (
    <>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight">
        A Final Expense Life Insurance Policy with up to $40,000 coverage to help pay for funeral and other expenses?
      </h1>

      <div className="mt-6 sm:mt-8">
        <img
          src="./image.jpg"
          alt="Happy elderly couple enjoying time together"
          className="mx-auto rounded-lg shadow-lg w-full max-w-lg sm:max-w-2xl"
          loading="lazy"
        />
      </div>

      <div className="mt-8 sm:mt-10 mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200 max-w-[calc(100%-1rem)] sm:max-w-xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
          Confirm Your Interest in Wanting to Protect Your Loved Ones Financially
        </h2>
        
        <div className="space-y-4 sm:space-y-5">
          <button
            onClick={handleYesClick}
            className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold py-5 px-6 rounded-xl text-xl sm:text-2xl transition-colors duration-200 touch-manipulation shadow-md"
          >
            Yes, I Do
          </button>

          <button
            onClick={handleNoClick}
            className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold py-5 px-6 rounded-xl text-xl sm:text-2xl transition-colors duration-200 touch-manipulation shadow-md"
          >
            No, I Don't Care
          </button>
        </div>
      </div>

      <div className="mt-8 sm:mt-10 text-base text-gray-600 max-w-3xl mx-auto space-y-6 sm:space-y-8 px-1">
        <p className="text-lg">Final Expense Insurance Policies may be available for up to $40,000 in coverage, depending on your eligibility.</p>
        <p className="text-sm sm:text-base leading-relaxed">
          Disclaimer: This is an advertisement for life insurance. Not all plans are available in all states. Callers will be directed to a licensed insurance agent who can provide more information about Final Expense Life Insurance plans offered by one or several insurance carrier(s) each having an A.M. Best rating of  A+ or higher. Guaranteed issue whole life insurance is generally available to individuals between the ages of 45 and 85 (age qualification varies by plan and carrier).  You will receive only the benefit amount in the policy issued.  In order for the policy premiums and benefits to remain in effect, premiums must be paid in full and on time.   Premiums may depend upon the coverage amount selected, your individual qualifications and may vary by carrier and state. Plans may have a graded death benefit for an initial period of time. Benefits are paid to the named beneficiary(ies) and can be used for any purpose.
        </p>
      </div>
    </>
  );
}

export default LandingPage;
