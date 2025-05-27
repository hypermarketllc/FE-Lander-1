import React from 'react';

function ThankYouPage() {
  return (
    <>
      <div className="mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200 max-w-[calc(100%-1rem)] sm:max-w-xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Thank You
        </h2>
        <p className="text-gray-800 mb-8 text-xl sm:text-2xl leading-relaxed">
          Please call the number below to speak with a licensed insurance agent and to receive your quote.
        </p>
        <a
          href="tel:+19095494334"
          className="inline-block w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-6 px-6 rounded-xl text-2xl sm:text-3xl transition-colors duration-200 touch-manipulation shadow-md"
        >
          Call: (909) 549-4334
        </a>
      </div>

      <div className="mt-8 sm:mt-10 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-1">
        <p className="leading-relaxed">
          Disclaimer: This is an advertisement for life insurance. Not all plans are available in all states. Callers will be directed to a licensed insurance agent who can provide more information about Final Expense Life Insurance plans offered by one or several insurance carrier(s) each having an A.M. Best rating of  A+ or higher. Guaranteed issue whole life insurance is generally available to individuals between the ages of 45 and 85 (age qualification varies by plan and carrier).  You will receive only the benefit amount in the policy issued.  In order for the policy premiums and benefits to remain in effect, premiums must be paid in full and on time.   Premiums may depend upon the coverage amount selected, your individual qualifications and may vary by carrier and state. Plans may have a graded death benefit for an initial period of time. Benefits are paid to the named beneficiary(ies) and can be used for any purpose.
        </p>
      </div>
    </>
  );
}

export default ThankYouPage;
