import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Shield, Phone } from 'lucide-react';

type Message = {
  id: number;
  text: string;
  isBot: boolean;
};

type Step = {
  question: string;
  options: string[];
};

const STEPS: Step[] = [
  {
    question: "Are you over age 55?",
    options: ["Yes", "No"]
  },
  {
    question: "Are you a US Citizen?",
    options: ["Yes", "No"]
  },
  {
    question: "Do you have any major health conditions?",
    options: ["Yes", "No"]
  }
];

const DISQUALIFICATION_MESSAGES = {
  age: "I apologize, but this program is only available to individuals who are 55 or older. Thank you for your interest.",
  citizenship: "I apologize, but this program is only available to US Citizens. Thank you for your interest.",
  health: "I apologize, but due to your health conditions, we are unable to proceed with enrollment at this time. Thank you for your interest."
};

const COMPLETION_MESSAGES = [
  "Great News! 🤗",
  "We have secured your spot with an agent to confirm your Final Expense Package available to you.",
  "Call in now and secure it to have your name added on the list to receive this tax-free benefit and Final Expense for 2025."
];

const Home: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isQualified, setIsQualified] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds
  const [showOptions, setShowOptions] = useState(false);
  const messageIdCounter = useRef(0);
  const hasInitialized = useRef(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timer = setTimeout(scrollToBottom, 100);
    return () => clearTimeout(timer);
  }, [messages, showOptions]);

  const addMessage = useCallback((text: string, isBot: boolean) => {
    setMessages(prev => [...prev, { 
      id: messageIdCounter.current++, 
      text, 
      isBot 
    }]);
    setShowOptions(false);
  }, []);

  const simulateTyping = useCallback((text: string, callback?: () => void) => {
    setIsTyping(true);
    setShowOptions(false);
    
    const typingTimeout = setTimeout(() => {
      addMessage(text, true);
      setIsTyping(false);
      
      if (callback) {
        const optionsTimeout = setTimeout(() => {
          callback();
          setShowOptions(true);
          scrollToBottom();
        }, 500);
        return () => clearTimeout(optionsTimeout);
      }
    }, 1000);
    
    return () => clearTimeout(typingTimeout);
  }, [addMessage]);

  useEffect(() => {
    if (!hasInitialized.current) {
      hasInitialized.current = true;
      setTimeout(() => {
        addMessage("Hi, I'm Nicole from the American Coverage Center.", true);
        setTimeout(() => {
          simulateTyping("We just need to verify are you over age 55 in order to enroll in the program.", () => {
            simulateTyping(STEPS[0].question, () => {
              setCurrentStep(0);
            });
          });
        }, 1000);
      }, 500);
    }
  }, [addMessage, simulateTyping]);

  useEffect(() => {
    if (isComplete && isQualified && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isComplete, isQualified, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOptionClick = (option: string) => {
    setShowOptions(false);
    addMessage(option, false);

    // Check for disqualification conditions
    if (currentStep === 0 && option === "No") {
      simulateTyping(DISQUALIFICATION_MESSAGES.age);
      setIsComplete(true);
      return;
    }

    if (currentStep === 1 && option === "No") {
      simulateTyping(DISQUALIFICATION_MESSAGES.citizenship);
      setIsComplete(true);
      return;
    }

    if (currentStep === 2 && option === "Yes") {
      simulateTyping(DISQUALIFICATION_MESSAGES.health);
      setIsComplete(true);
      return;
    }

    if (currentStep < STEPS.length - 1) {
      setTimeout(() => {
        simulateTyping(STEPS[currentStep + 1].question, () => {
          setCurrentStep(prev => prev + 1);
        });
      }, 500);
    } else if (!isComplete) {
      // Send completion messages in sequence
      let delay = 500;
      COMPLETION_MESSAGES.forEach((message, index) => {
        setTimeout(() => {
          simulateTyping(message, index === COMPLETION_MESSAGES.length - 1 ? () => {
            setIsComplete(true);
            setIsQualified(true);
          } : undefined);
        }, delay);
        delay += 1500;
      });
    }
  };

  return (
    <div>
      {/* Warning Banner - Reduced padding */}
      <div className="bg-white py-2 sm:py-3 text-center px-3 sm:px-4">
        <p className="text-red-600 font-medium text-sm sm:text-base">Warning:</p>
        <p className="text-[#2B4B8C] font-semibold text-base sm:text-lg">Enrollment closes on {getTomorrowDate()} at midnight.</p>
        <p className="text-gray-800 mt-0.5 sm:mt-1 text-sm sm:text-base">Americans over age 55 are receiving a tax-free Eternity benefit for 2025.</p>
      </div>

      {/* Agent Info - Reduced padding and size */}
      <div className="max-w-3xl mx-auto px-3 sm:px-4 py-2 sm:py-3 flex items-center space-x-3">
        <img
          src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=100&h=100"
          alt="Agent"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
        />
        <div>
          <h2 className="font-semibold text-gray-900 text-base sm:text-lg">Nicole Simmons</h2>
          <p className="text-xs sm:text-sm text-gray-600">License ID: 4831291547614</p>
        </div>
      </div>

      {/* Chat Container - Adjusted for above fold */}
      <div className="max-w-3xl mx-auto px-3 sm:px-4 pb-6 sm:pb-8">
        <div className="bg-gray-100 rounded-lg p-3 sm:p-4">
          <div 
            ref={chatContainerRef}
            className="space-y-3 sm:space-y-4 mb-4 max-h-[400px] overflow-y-auto"
          >
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                {message.isBot && (
                  <img
                    src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=40&h=40"
                    alt="Agent"
                    className="w-8 h-8 rounded-full mr-2 sm:mr-3"
                  />
                )}
                <div
                  className={`rounded-lg px-4 py-2.5 sm:px-5 sm:py-3 max-w-[85%] text-base sm:text-lg leading-relaxed ${
                    message.isBot
                      ? 'bg-white text-gray-900'
                      : 'bg-[#2B4B8C] text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <img
                  src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=40&h=40"
                  alt="Agent"
                  className="w-8 h-8 rounded-full mr-2 sm:mr-3"
                />
                <div className="bg-white rounded-lg px-4 py-2.5 sm:px-5 sm:py-3">
                  <span className="animate-pulse text-xl">...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Options - Optimized for above fold */}
          {!isComplete && currentStep >= 0 && currentStep < STEPS.length && showOptions && !isTyping && (
            <div className="space-y-3">
              {STEPS[currentStep].options.map((option, index) => (
                <button
                  key={`option-${currentStep}-${index}`}
                  onClick={() => handleOptionClick(option)}
                  className="w-full py-3.5 sm:py-4 px-6 bg-[#2B4B8C] text-white rounded-lg hover:bg-[#1a3b7c] transition-colors text-lg sm:text-xl font-medium active:bg-[#153266] touch-manipulation"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
          
          {/* Call Button - Optimized for mobile */}
          {isComplete && isQualified && (
            <div className="mt-4">
              <a
                href="tel:9095494334"
                className="w-full py-4 sm:py-5 px-6 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white rounded-lg flex items-center justify-center space-x-3 text-xl sm:text-2xl font-semibold transition-colors touch-manipulation"
              >
                <Phone className="h-6 w-6 sm:h-7 sm:w-7" />
                <span>Call Now (909) 549-4334</span>
              </a>
              <p className="text-center mt-3 text-base sm:text-lg text-gray-600 font-medium">
                We have secured your spot in line for the next {formatTime(timeLeft)}, Call a Licensed Agent now
              </p>
              <p className="text-center mt-3 text-sm sm:text-base text-gray-500 px-3 sm:px-4 leading-relaxed">
                Your satisfaction is important to us. We may call you back as a courtesy if the call is disconnected or in order to ensure you receive the best possible experience even if you have previously registered your phone number on the Do Not Call Registry.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;