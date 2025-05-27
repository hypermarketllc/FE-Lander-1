import { useState, useEffect } from 'react';

declare global {
  interface Window {
    ringba?: {
      processOutstandingRequests: () => void;
      addTags: (tags: any) => void;
      release: () => void;
      setBulkNumbersCallback: (callback: (numbers: any) => void) => void;
      SetupNumberReplacement: (config: any) => void;
      replacer: any;
    };
    ringba_known_numbers?: Array<{
      int: string;  // International format like '+18334681279'
      loc: string;  // Local formatted like '(833) 468-1279'
      jstag: string;
      replaceWithInt: any;
      replaceWithLoc: any;
      replaceLeftToRight: any;
    }>;
  }
}

export const useRingbaNumber = (fallbackNumber: string = '(909) 549-4334') => {
  const [phoneNumber, setPhoneNumber] = useState(fallbackNumber);
  const [isRingbaLoaded, setIsRingbaLoaded] = useState(false);

  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 50;

    const checkRingbaLoaded = () => {
      attempts++;
      
      if (window.ringba && typeof window.ringba.SetupNumberReplacement === 'function') {
        console.log('Ringba loaded, setting up number replacement...');
        setIsRingbaLoaded(true);
        
        // Method 1: Check if numbers are already available
        if (window.ringba_known_numbers) {
          const numbers = window.ringba_known_numbers;
          console.log('Available Ringba numbers:', numbers);
          
          if (Array.isArray(numbers) && numbers.length > 0) {
            const numberObj = numbers[0];
            console.log('First number object:', numberObj);
            
            // Ringba provides numbers in this format:
            // { int: '+18334681279', loc: '(833) 468-1279', jstag: '...', ... }
            if (numberObj && typeof numberObj === 'object') {
              // Use the 'loc' property for formatted local number, fallback to 'int'
              const extractedNumber = numberObj.loc || numberObj.int;
              console.log('Extracted number from Ringba object:', extractedNumber);
              
              if (extractedNumber && typeof extractedNumber === 'string') {
                // Use the number as-is if it's already formatted, otherwise format it
                const finalNumber = extractedNumber.includes('(') ? extractedNumber : formatPhoneNumber(extractedNumber);
                setPhoneNumber(finalNumber);
                console.log('Using Ringba number:', finalNumber);
                return;
              }
            }
          }
        }
        
        // Method 2: Setup number replacement and callback
        try {
          window.ringba.setBulkNumbersCallback((numbers: any) => {
            console.log('Ringba bulk callback received:', numbers);
            if (numbers) {
              let firstNumber: string | null = null;
              
              if (Array.isArray(numbers) && numbers.length > 0) {
                const numberObj = numbers[0];
                if (numberObj && typeof numberObj === 'object') {
                  // Use the 'loc' property for formatted local number, fallback to 'int'
                  firstNumber = numberObj.loc || numberObj.int;
                }
              } else if (typeof numbers === 'object') {
                firstNumber = Object.values(numbers)[0] as string;
              }
              
              if (firstNumber && typeof firstNumber === 'string') {
                // Use the number as-is if it's already formatted, otherwise format it
                const finalNumber = firstNumber.includes('(') ? firstNumber : formatPhoneNumber(firstNumber);
                setPhoneNumber(finalNumber);
                console.log('Updated to Ringba number:', finalNumber);
              }
            }
          });
          
          window.ringba.SetupNumberReplacement({
            replace_all: true,
            format: 'US'
          });
          
          window.ringba.processOutstandingRequests();
          
        } catch (error) {
          console.error('Error setting up Ringba:', error);
        }
        
      } else if (attempts < maxAttempts) {
        setTimeout(checkRingbaLoaded, 100);
      } else {
        console.warn('Ringba object not ready after maximum attempts');
        setIsRingbaLoaded(true);
      }
    };

    checkRingbaLoaded();
  }, []);

  const formatPhoneNumber = (number: string): string => {
    const cleaned = number.replace(/\D/g, '');
    
    if (cleaned.length === 10) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    } else if (cleaned.length === 11 && cleaned.startsWith('1')) {
      return `(${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
    }
    
    return number;
  };

  const getRawNumber = (): string => {
    return phoneNumber.replace(/\D/g, '');
  };

  const getClickToCallUrl = (): string => {
    const rawNumber = getRawNumber();
    return `tel:+1${rawNumber}`;
  };

  const trackCall = () => {
    console.log('Attempting to track call...');
    
    if (window.ringba) {
      try {
        window.ringba.addTags({
          event: 'call_clicked',
          number: getRawNumber(),
          timestamp: new Date().toISOString()
        });
        console.log('Call tracked via addTags method');
      } catch (error) {
        console.error('Error tracking call:', error);
      }
    } else {
      console.warn('No Ringba object available for tracking');
    }
  };

  return {
    phoneNumber,
    isRingbaLoaded,
    getRawNumber,
    getClickToCallUrl,
    trackCall
  };
};