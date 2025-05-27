import React, { useEffect, useRef } from 'react';
import { useRingbaNumber } from '../hooks/useRingbaNumber';

function ThankYouPage() {
  const { phoneNumber, getClickToCallUrl, trackCall, isRingbaLoaded } = useRingbaNumber();
  const phoneRef = useRef<HTMLAnchorElement>(null);

  // Let Ringba handle DOM replacement as backup
  useEffect(() => {
    if (window.ringba && phoneRef.current) {
      // Add a class that Ringba can target for replacement
      phoneRef.current.classList.add('ringba-number');
      
      // Trigger Ringba to process this element
      try {
        window.ringba.processOutstandingRequests();
      } catch (error) {
        console.log('Error processing Ringba requests:', error);
      }
    }
  }, [isRingbaLoaded]);

  const handleCallClick = () => {
    // Track the call in Ringba
    trackCall();
    
    // Optional: Add Facebook Pixel tracking for call clicks
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Contact');
    }
  };

  return (
    <>
      <div className="mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200 max-w-[calc(100%-1rem)] sm:max-w-xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Thank You
        </h2>
        <p className="text-gray-800 mb-8 text-xl sm:text-2xl leading-relaxed">
          Please call the number below to speak with a licensed insurance agent and to receive your quote.
        </p>
        
        {/* Show loading state while Ringba loads */}
        {!isRingbaLoaded && (
          <div className="text-center mb-4">
            <div className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
            <span className="ml-2 text-sm text-gray-600">Loading phone number...</span>
          </div>
        )}
        
        <a
          ref={phoneRef}
          href={getClickToCallUrl()}
          onClick={handleCallClick}
          className="inline-block w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-6 px-6 rounded-xl text-2xl sm:text-3xl transition-colors duration-200 touch-manipulation shadow-md ringba-number"
          data-ringba-number="true"
        >
          Call: {phoneNumber}
        </a>
        
        {/* Alternative click-to-call button for better mobile experience */}
        <div className="mt-4 text-center">
          <button
            onClick={() => {
              handleCallClick();
              window.location.href = getClickToCallUrl();
            }}
            className="text-blue-600 hover:text-blue-800 underline text-lg"
          >
            Tap to Call Now
          </button>
        </div>
        
        {/* Debug info - remove in production */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-4 p-2 bg-gray-100 text-xs">
            <p>Debug: Current number: {phoneNumber}</p>
            <p>Ringba loaded: {isRingbaLoaded.toString()}</p>
            <p>Known numbers: {JSON.stringify(window.ringba_known_numbers || {})}</p>
          </div>
        )}
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