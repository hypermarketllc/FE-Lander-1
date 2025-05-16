import React, { useState } from 'react';
import { Shield, XCircle, Globe2, X } from 'lucide-react';

// Content for both languages
const content = {
  en: {
    title: "A Final Expense Life Insurance Policy with up to $40,000 coverage to help pay for funeral and other expenses?",
    headerTitle: "American Coverage Center",
    confirmInterest: "Confirm Your Interest in Wanting to Protect Your Loved Ones Financially",
    yesButton: "Yes, I Do",
    noButton: "No, I Don't Care",
    coverageInfo: "Final Expense Insurance Policies may be available for up to $40,000 in coverage, depending on your eligibility.",
    ageQuestion: "What is your age?",
    under45: "Under 45",
    age4585: "45-85",
    over85: "86 or older",
    genderQuestion: "Are You Male or Female?",
    male: "Male",
    female: "Female",
    thankYou: "Thank You",
    callPrompt: "Please call the number below to speak with a licensed insurance agent and to receive your quote.",
    callButton: "Call: (909) 549-4334",
    notInterested: "Not Interested in Coverage",
    notInterestedText: "We understand that now may not be the right time for you to explore life insurance coverage. If you change your mind, we're here to help protect your loved ones' financial future.",
    returnHome: "Return to Home",
    ageRequirement: "Age Requirement Not Met",
    ageRequirementText: "We apologize, but this coverage is only available for individuals aged 45 and above. Please check back when you meet the age requirement.",
    disclaimer: "Disclaimer: This is an advertisement for life insurance. Not all plans are available in all states. Callers will be directed to a licensed insurance agent who can provide more information about Final Expense Life Insurance plans offered by one or several insurance carrier(s) each having an A.M. Best rating of  A+ or higher. Guaranteed issue whole life insurance is generally available to individuals between the ages of 45 and 85 (age qualification varies by plan and carrier).  You will receive only the benefit amount in the policy issued.  In order for the policy premiums and benefits to remain in effect, premiums must be paid in full and on time.   Premiums may depend upon the coverage amount selected, your individual qualifications and may vary by carrier and state. Plans may have a graded death benefit for an initial period of time. Benefits are paid to the named beneficiary(ies) and can be used for any purpose."
  },
  es: {
    title: "¿Una Póliza de Seguro de Vida de Gastos Finales con cobertura de hasta $40,000 para ayudar a pagar el funeral y otros gastos?",
    headerTitle: "Centro de Cobertura Americano",
    confirmInterest: "Confirme Su Interés en Proteger Financieramente a Sus Seres Queridos",
    yesButton: "Sí, Me Interesa",
    noButton: "No Me Interesa",
    coverageInfo: "Las Pólizas de Seguro de Gastos Finales pueden estar disponibles con cobertura de hasta $40,000, dependiendo de su elegibilidad.",
    ageQuestion: "¿Cuál es su edad?",
    under45: "Menor de 45",
    age4585: "45-85",
    over85: "86 o mayor",
    genderQuestion: "¿Es Usted Hombre o Mujer?",
    male: "Hombre",
    female: "Mujer",
    thankYou: "Gracias",
    callPrompt: "Por favor llame al número a continuación para hablar con un agente de seguros con licencia y recibir su cotización.",
    callButton: "Llamar: (909) 549-4334",
    notInterested: "No Interesado en Cobertura",
    notInterestedText: "Entendemos que ahora puede no ser el momento adecuado para explorar la cobertura de seguro de vida. Si cambia de opinión, estamos aquí para ayudar a proteger el futuro financiero de sus seres queridos.",
    returnHome: "Volver al Inicio",
    ageRequirement: "No Cumple con el Requisito de Edad",
    ageRequirementText: "Lo sentimos, pero esta cobertura solo está disponible para personas mayores de 45 años. Por favor, vuelva cuando cumpla con el requisito de edad.",
    disclaimer: "Aviso Legal: Esto es un anuncio de seguro de vida. No todos los planes están disponibles en todos los estados. Las llamadas serán dirigidas a un agente de seguros con licencia que puede proporcionar más información sobre los planes de Seguro de Vida de Gastos Finales ofrecidos por una o varias compañías de seguros, cada una con una calificación A.M. Best de A+ o superior. El seguro de vida completo con emisión garantizada generalmente está disponible para personas entre 45 y 85 años (la calificación por edad varía según el plan y la aseguradora). Recibirá solo el monto del beneficio en la póliza emitida. Para que las primas y los beneficios de la póliza permanezcan vigentes, las primas deben pagarse en su totalidad y a tiempo. Las primas pueden depender del monto de cobertura seleccionado, sus calificaciones individuales y pueden variar según la aseguradora y el estado. Los planes pueden tener un beneficio por muerte gradual durante un período inicial. Los beneficios se pagan a los beneficiarios designados y pueden usarse para cualquier propósito."
  }
};

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [language, setLanguage] = useState('en');
  const t = content[language as keyof typeof content];

  const handleYesClick = () => {
    setCurrentPage('age-selection');
  };

  const handleNoClick = () => {
    setCurrentPage('disqualified');
  };

  const handleAgeSelect = (ageRange: string) => {
    if (ageRange === 'under-45') {
      setCurrentPage('disqualified-age');
    } else {
      setCurrentPage('gender-selection');
    }
  };

  const handleGenderSelect = (gender: string) => {
    setCurrentPage('thank-you');
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  const LandingPage = () => (
    <>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight">
        {t.title}
      </h1>

      <div className="mt-6 sm:mt-8">
        <img
          src="./image.jpg"
          alt={language === 'en' ? "Happy elderly couple enjoying time together" : "Pareja de ancianos feliz disfrutando tiempo juntos"}
          className="mx-auto rounded-lg shadow-lg w-full max-w-lg sm:max-w-2xl"
          loading="lazy"
        />
      </div>

      <div className="mt-8 sm:mt-10 mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200 max-w-[calc(100%-1rem)] sm:max-w-xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
          {t.confirmInterest}
        </h2>
        
        <div className="space-y-4 sm:space-y-5">
          <button
            onClick={handleYesClick}
            className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold py-5 px-6 rounded-xl text-xl sm:text-2xl transition-colors duration-200 touch-manipulation shadow-md"
          >
            {t.yesButton}
          </button>

          <button
            onClick={handleNoClick}
            className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold py-5 px-6 rounded-xl text-xl sm:text-2xl transition-colors duration-200 touch-manipulation shadow-md"
          >
            {t.noButton}
          </button>
        </div>
      </div>

      <div className="mt-8 sm:mt-10 text-base text-gray-600 max-w-3xl mx-auto space-y-6 sm:space-y-8 px-1">
        <p className="text-lg">{t.coverageInfo}</p>
        <p className="text-sm sm:text-base leading-relaxed">{t.disclaimer}</p>
      </div>
    </>
  );

  const AgeSelectionPage = () => (
    <>
      <div className="mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200 max-w-[calc(100%-1rem)] sm:max-w-xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-10">
          {t.ageQuestion}
        </h2>
        
        <div className="space-y-4 sm:space-y-5">
          <button
            onClick={() => handleAgeSelect('under-45')}
            className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold py-5 px-6 rounded-xl text-xl sm:text-2xl transition-colors duration-200 touch-manipulation shadow-md"
          >
            {t.under45}
          </button>

          <button
            onClick={() => handleAgeSelect('45-85')}
            className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold py-5 px-6 rounded-xl text-xl sm:text-2xl transition-colors duration-200 touch-manipulation shadow-md"
          >
            {t.age4585}
          </button>

          <button
            onClick={() => handleAgeSelect('over-85')}
            className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold py-5 px-6 rounded-xl text-xl sm:text-2xl transition-colors duration-200 touch-manipulation shadow-md"
          >
            {t.over85}
          </button>
        </div>
      </div>

      <div className="mt-8 sm:mt-10 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-1">
        <p className="leading-relaxed">{t.disclaimer}</p>
      </div>
    </>
  );

  const GenderSelectionPage = () => (
    <>
      <div className="mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200 max-w-[calc(100%-1rem)] sm:max-w-xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-10">
          {t.genderQuestion}
        </h2>
        
        <div className="space-y-4 sm:space-y-5">
          <button
            onClick={() => handleGenderSelect('male')}
            className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold py-5 px-6 rounded-xl text-xl sm:text-2xl transition-colors duration-200 touch-manipulation shadow-md"
          >
            {t.male}
          </button>

          <button
            onClick={() => handleGenderSelect('female')}
            className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold py-5 px-6 rounded-xl text-xl sm:text-2xl transition-colors duration-200 touch-manipulation shadow-md"
          >
            {t.female}
          </button>
        </div>
      </div>

      <div className="mt-8 sm:mt-10 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-1">
        <p className="leading-relaxed">{t.disclaimer}</p>
      </div>
    </>
  );

  const ThankYouPage = () => (
    <>
      <div className="mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200 max-w-[calc(100%-1rem)] sm:max-w-xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          {t.thankYou}
        </h2>
        <p className="text-gray-800 mb-8 text-xl sm:text-2xl leading-relaxed">
          {t.callPrompt}
        </p>
        <a
          href="tel:+19095494334"
          className="inline-block w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-6 px-6 rounded-xl text-2xl sm:text-3xl transition-colors duration-200 touch-manipulation shadow-md"
        >
          {t.callButton}
        </a>
      </div>

      <div className="mt-8 sm:mt-10 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-1">
        <p className="leading-relaxed">{t.disclaimer}</p>
      </div>
    </>
  );

  const DisqualificationPage = () => (
    <div className="mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200 max-w-[calc(100%-1rem)] sm:max-w-xl text-center">
      <XCircle className="w-20 h-20 sm:w-24 sm:h-24 text-red-600 mx-auto mb-6" />
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        {t.notInterested}
      </h2>
      <p className="text-gray-800 mb-8 text-xl sm:text-2xl leading-relaxed">
        {t.notInterestedText}
      </p>
      <button
        onClick={() => setCurrentPage('landing')}
        className="bg-gray-600 hover:bg-gray-700 active:bg-gray-800 text-white font-bold py-5 px-8 rounded-xl text-xl sm:text-2xl transition-colors duration-200 touch-manipulation shadow-md"
      >
        {t.returnHome}
      </button>
    </div>
  );

  const DisqualificationAgePage = () => (
    <div className="mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-gray-200 max-w-[calc(100%-1rem)] sm:max-w-xl text-center">
      <XCircle className="w-20 h-20 sm:w-24 sm:h-24 text-red-600 mx-auto mb-6" />
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        {t.ageRequirement}
      </h2>
      <p className="text-gray-800 mb-8 text-xl sm:text-2xl leading-relaxed">
        {t.ageRequirementText}
      </p>
      <button
        onClick={() => setCurrentPage('landing')}
        className="bg-gray-600 hover:bg-gray-700 active:bg-gray-800 text-white font-bold py-5 px-8 rounded-xl text-xl sm:text-2xl transition-colors duration-200 touch-manipulation shadow-md"
      >
        {t.returnHome}
      </button>
    </div>
  );

  // State for modals
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  // Footer content translations
  const footerContent = {
    en: {
      privacyPolicy: "Privacy Policy",
      termsConditions: "Terms & Conditions",
      contactUs: "Contact Us",
      contactFormTitle: "Contact Us",
      contactFormName: "Your Name",
      contactFormEmail: "Your Email",
      contactFormMessage: "Message",
      contactFormSubmit: "Submit",
      contactFormSuccess: "Thank you for your message. We'll get back to you soon.",
      close: "Close"
    },
    es: {
      privacyPolicy: "Política de Privacidad",
      termsConditions: "Términos y Condiciones",
      contactUs: "Contáctenos",
      contactFormTitle: "Contáctenos",
      contactFormName: "Su Nombre",
      contactFormEmail: "Su Correo Electrónico",
      contactFormMessage: "Mensaje",
      contactFormSubmit: "Enviar",
      contactFormSuccess: "Gracias por su mensaje. Nos pondremos en contacto pronto.",
      close: "Cerrar"
    }
  };

  const ft = footerContent[language as keyof typeof footerContent];

  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    // For now, we'll just simulate a successful submission
    setContactSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setContactName('');
      setContactEmail('');
      setContactMessage('');
      setContactSubmitted(false);
      setShowContactForm(false);
    }, 3000);
  };

  // Modal component
  const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode }) => {
    if (!isOpen) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    );
  };

  // Privacy Policy Content
  const PrivacyPolicyContent = () => (
    <div className="prose max-w-none text-left">
      <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
      <p>This Privacy Policy describes how we collect, use, and share information about you when you use our landing page. By using our landing page, you agree to the terms of this Privacy Policy.</p>
      
      <h3 className="text-xl font-bold mt-6 mb-3">Information We Collect</h3>
      <p>We may collect the following information about you:</p>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Personal Information:</strong> We may collect personal information that you voluntarily provide to us, such as your name, email address, and phone number.</li>
        <li><strong>Usage Information:</strong> We may collect information about your use of the landing page, such as your IP address, browser type, and pages visited.</li>
        <li><strong>Cookies:</strong> We may use cookies and similar technologies to collect information about your use of the landing page and to personalize your experience. Cookies are small text files that are placed on your device when you visit a website.</li>
      </ul>
      
      <h3 className="text-xl font-bold mt-6 mb-3">How We Use Your Information</h3>
      <p>We may use your information for the following purposes:</p>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>To provide and improve our landing page:</strong> We may use your information to provide and improve our services and to personalize your experience.</li>
        <li><strong>To communicate with you:</strong> We may use your information to communicate with you about our services and to respond to your inquiries.</li>
        <li><strong>To comply with legal obligations:</strong> We may use your information to comply with applicable laws and regulations.</li>
      </ul>
      
      <h3 className="text-xl font-bold mt-6 mb-3">How We Share Your Information</h3>
      <p>We may share your information with the following parties:</p>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Service Providers:</strong> We may share your information with third-party service providers that assist us in providing our services.</li>
        <li><strong>Business Transfers:</strong> We may share your information in connection with a merger, acquisition, or sale of all or a portion of our business.</li>
        <li><strong>Legal Obligations:</strong> We may share your information to comply with applicable laws and regulations.</li>
      </ul>
      
      <h3 className="text-xl font-bold mt-6 mb-3">Your Choices</h3>
      <p>You may choose to opt-out of receiving marketing communications from us by following the unsubscribe instructions included in our emails.</p>
      
      <h3 className="text-xl font-bold mt-6 mb-3">Cookies</h3>
      <p>You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. However, if you disable or refuse cookies, some parts of the landing page may be inaccessible or not function properly.</p>
      
      <h3 className="text-xl font-bold mt-6 mb-3">Data Security</h3>
      <p>We take reasonable measures to protect your information from unauthorized access, use, and disclosure. However, no transmission of information over the internet is completely secure, and we cannot guarantee the security of your information.</p>
      
      <h3 className="text-xl font-bold mt-6 mb-3">Changes to this Privacy Policy</h3>
      <p>We may update this Privacy Policy from time to time. The updated Privacy Policy will be posted on our landing page with a new effective date. Your continued use of the landing page following any changes to this Privacy Policy constitutes your acceptance of such changes.</p>
      
      <h3 className="text-xl font-bold mt-6 mb-3">Contact Us</h3>
      <p>If you have any questions or concerns about this Privacy Policy or our practices, please contact us.</p>
    </div>
  );

  // Terms and Conditions Content
  const TermsContent = () => (
    <div className="prose max-w-none text-left">
      <h2 className="text-2xl font-bold mb-4">Terms of Services</h2>
      <p>Please read these terms and conditions of use carefully before using this website</p>
      
      <p className="mt-4">The terms of use detailed below (the "Terms of Use") govern your access to and use of the Site and the services that we make available to you through the Site (the "Services"). By accessing or using the Site or any of the Services, you hereby agree to these Terms of Use, and you warrant that you are at least 18 years of age. If you do not agree with these Terms of Use, in whole or in part, please do not continue to use the Site or the Services.</p>
      
      <p className="mt-4">The Terms & Conditions policy is effective as of the last updated date specified above. We may change the Terms & Conditions at any time. Please check this page periodically for changes as your continued use of the Site or Services after any such change will constitute your acceptance of any modified terms.</p>
      
      <h3 className="text-xl font-bold mt-6 mb-3">The services</h3>
      <p>Most information provided through the Service is provided for general informational and educational purposes. There is information provided at the point of sale for commercial purposes.</p>
      
      <p className="mt-4">The Services include incorporation of third-party insurance products, brokers, and carriers in the form of an advertisement, insurance quote, online purchase, email, phone call, text message, or any other marketing medium. This serves as notice that you may have third-parties contact you on our behalf.</p>
      
      <p className="mt-4">The Services also include formal quoting, brokering, and transacting of first-and-third-party insurance products. We are a licensed insurance agency.</p>
      
      <p className="mt-4">Any quotes, or quote-ranges provided on the Site or over the phone are non-binding. The final insurance policy premium for any policy is determined following application by the underwriting insurance company. Insurance products and their availability may vary by state and your individual circumstances, and additional minimum coverage limits may be required in your state. The third-party insurance products offered for sale through the Site are only available in the jurisdictions in which we are properly licensed.</p>
      
      <p className="mt-4">At times, Services may require you to agree to additional terms and conditions, or enter into separate agreements with us or applicable third-parties. Any third-party insurance products purchased by you through the Site are subject to the contract terms of the applicable insurance carrier. In the event of a conflict between these Terms of Use and the terms of any insurance policy terms, the terms of the insurance policy will control.</p>
      
      <h3 className="text-xl font-bold mt-6 mb-3">User conduct</h3>
      <p>You promise NOT to use this website for any of the following purposes or activities: Conducting or supporting illegal activity of any type whatsoever; transmitting or storing worms or viruses or any code of a destructive nature; threatening, harassing, abusing, impersonating, injuring or intimidating others; interfering with others' use of this Website, unless such interference is for the purpose of complying with another section of these Terms of Use; delivering spam or collecting information to deliver spam, or sending unsolicited email advertisements; decompiling, disassembling, reverse engineering or otherwise attempting to discover any source code contained in this Website; disguising the origin of any content transmitted through this Website or manipulating your presence on the Website; and/or causing the launch of any automated system(s) that accesses this Website in a manner that sends more request messages to servers of the Website in a given period of time than a human can reasonably produce in the same period by using a conventional online web browser.</p>
      
      <h3 className="text-xl font-bold mt-6 mb-3">Intellectual property</h3>
      <p>The Site contains material, such as text, graphics, images, photos and other material provided by or on behalf of us, and through your use of the Services you will be provided with additional information from us. These materials and information are collectively referred to herein as the "Content." The Content is owned by us and/or our licensors and may be protected under both United States and foreign copyright laws and treaties. The Content includes, but is not limited to, the trademarks, service marks, and logos that are used and displayed on the Site, which are registered and unregistered trademarks or service marks of ours or our licensors.</p>
      
      <p className="mt-4">You shall not, without our written permission in each instance: use any trademarks, service marks or logos in any manner; copy or use the Content for any purpose; remove any copyright or other proprietary notices contained in the original Content on any copy you make of the Content; sell, transfer, assign, license, sublicense, or modify the Content, or use the Content for any public or commercial purpose; or use or post or publish the Content.</p>
      
      <h3 className="text-xl font-bold mt-6 mb-3">Unsolicited information</h3>
      <p>We provide Services for inquires and peer-to-peer interaction, and you are solely responsible for your use of these Services. By submitting any unsolicited information and materials, including comments, ideas, questions, and other similar communications, ("Unsolicited Information") you agree to be bound by the following terms and conditions. We are entitled to use such communication or material for any purpose whatsoever, commercial or otherwise, including, but not limited to, reproduction, disclosure, transmission, publication, broadcast, and further posting, without any compensation to the provider of the Unsolicited Information. Further, we are free to use any ideas, concepts, know-how, or techniques contained in any communication or material you send to the site for any purpose whatsoever, commercial or otherwise, including, but not limited to, developing, manufacturing, and marketing products.</p>
      
      <h3 className="text-xl font-bold mt-6 mb-3">Collection and use of information</h3>
      <p>Your use of the Services transmits information, and possibly personally identifiable information. Any collection or use of personally identifiable information collected from you via the Website is governed by our Privacy Policy, which is hereby incorporated by reference in its entirety. It is important that you read and understand the terms of our Privacy Policy.</p>
      
      <h3 className="text-xl font-bold mt-6 mb-3">Disclaimer and limitation of liability</h3>
      <p>YOU ACKNOWLEDGE AND AGREE THAT THE SITE, THE SERVICES, AND ALL CONTENT ARE PROVIDED "AS IS," "AS AVAILABLE", WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, ANY WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. WE WILL NOT BE LIABLE FOR ANY DAMAGES TO, OR VIRUSES THAT MAY INFECT, YOUR COMPUTER EQUIPMENT OR OTHER PROPERTY ON ACCOUNT OF YOUR ACCESS TO OR USE OF THE SITE, THE SERVICES, OR ANY CONTENT.</p>
      
      <p className="mt-4">MANY INSURANCE PRODUCTS QUOTED OR SOLD THROUGH THE SITE ARE THIRD-PARTY PRODUCTS AND ARE NOT OUR PRODUCTS. WE MAKE NO REPRESENTATIONS OR WARRANTIES WITH RESPECT TO SUCH PRODUCTS, AND WE ACCEPT NO LIABILITY IN CONNECTION WITH SUCH PRODUCTS. ALL SUCH PRODUCTS ARE PROVIDED TO YOU PURSUANT TO THE TERMS AND CONDITIONS OF THE INSURANCE CARRIER PROVIDING SUCH PRODUCTS.</p>
      
      <p className="mt-4">IN NO EVENT SHALL WE BE LIABLE FOR DIRECT, SPECIAL, INDIRECT, PUNITIVE, EXEMPLARY, OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, REVENUES OR SAVINGS, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES IN ADVANCE. BECAUSE SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR NEGLIGENCE, CONSEQUENTIAL, INCIDENTAL OR OTHER DAMAGES, IN SUCH JURISDICTIONS OUR LIABILITY IS LIMITED TO THE GREATEST EXTENT PERMITTED BY APPLICABLE LAW. YOUR SOLE AND EXCLUSIVE REMEDY FOR DISSATISFACTION WITH THIS SITE, ANY SERVICE, OR ANY CONTENT IS TO STOP USING THE SAME.</p>
      
      <h3 className="text-xl font-bold mt-6 mb-3">External sites</h3>
      <p>The Site may contain links to third-party websites, including, without limitation, the websites of the insurance carriers offering the third-party insurance products made available to you through the Services ("External Sites"). We have no control over the External Sites, and we do not endorse and we are not responsible for the content of any linked External Sites. We are not responsible or liable for the actions, products or content of the External Sites, as they are provided for your convenience and are to be accessed entirely at your own risk. We do, however, seek to protect the integrity of our Website and welcome any feedback about external links, including information regarding a broken link. The Site may include interactive social media features (such as the Facebook "Like" button and Widgets, such as the "Share This" button) or other interactive mini-programs that run on our Website and connect to External Sites (collectively the "Features"). The Features may collect your IP address, which page you are visiting on our Website and may set a cookie to enable the Features to function properly. The Features are either hosted by a third party or hosted directly on our Website. Your interactions with the Features are governed by the privacy policy of the External Site providing them. Before using any External Site, please refer to the terms of use and privacy policies of the External Sites for more information.</p>
      
      <h3 className="text-xl font-bold mt-6 mb-3">Indemnification</h3>
      <p>You shall defend, indemnify, and hold us and our officers, directors, employees, successors, licensees, and assigns harmless from and against any claims, actions, or demands, including, without limitation, reasonable legal and accounting fees, arising or resulting from: (i) your breach of these Terms of Use; or (ii) your access to, use, or misuse of the Site, any Services or any Content.</p>
      
      <h3 className="text-xl font-bold mt-6 mb-3">Termination</h3>
      <p>We may terminate these Terms of Use and your access to all or any part of the Site or the Services at any time and for any reason without prior notice or liability. We reserve the right to change, suspend, or discontinue all or any part of the Site or the Services sat any time without prior notice or liability.</p>
      
      <h3 className="text-xl font-bold mt-6 mb-3">Miscellaneous</h3>
      <p>In the event that any portion of these Terms of Use is held to be invalid or unenforceable, then such portion shall be construed in accordance with the applicable law as nearly as possible to reflect the original intentions of the parties, and the remainder of these Terms of Use shall remain in full force and effect. This section, the section entitled Indemnification, and the sections entitled Disclaimer, Limitation of Liability and Intellectual Property shall survive the termination of these Terms of Use. You may not assign these Terms of Use. No waiver shall be effective unless in writing. Neither the course of conduct between parties nor trade practice shall act to modify any provision of these Terms of Use. We control and operate the Website from our offices within the State of Washington, United States of America, and these Terms of Use shall be governed by and construed in accordance with the laws of the State of Washington. You are solely responsible for compliance with all applicable laws and regulations that may govern your access and use of the Website. Except for proceedings commenced by us to protect our intellectual property or confidential information which may be brought in any court of competent jurisdiction, the parties mutually agree that any and all disputes arising hereunder shall be resolved exclusively by state or federal courts located in King County, Washington. These Terms of Use contain the entire agreement of the parties concerning the subject matter hereof and supersede all existing agreements and all other oral, written or other communication between the parties concerning its subject matter.</p>
    </div>
  );

  // Contact Form Component
  const ContactForm = () => (
    <div>
      {contactSubmitted ? (
        <div className="text-center py-8">
          <p className="text-xl text-green-600">{ft.contactFormSuccess}</p>
        </div>
      ) : (
        <form onSubmit={handleContactSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{ft.contactFormName}</label>
            <input
              type="text"
              id="name"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{ft.contactFormEmail}</label>
            <input
              type="email"
              id="email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{ft.contactFormMessage}</label>
            <textarea
              id="message"
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors duration-200"
            >
              {ft.contactFormSubmit}
            </button>
          </div>
        </form>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-blue-700" />
              <span className="text-sm sm:text-base font-bold text-gray-900">{t.headerTitle}</span>
            </div>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-800 font-semibold px-4 py-2 rounded-lg transition-colors duration-200 touch-manipulation"
              aria-label={language === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
            >
              <Globe2 className="w-5 h-5" />
              <span className="text-lg">{language === 'en' ? 'Español' : 'English'}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6 sm:py-10 text-center flex-grow">
        {currentPage === 'landing' && <LandingPage />}
        {currentPage === 'age-selection' && <AgeSelectionPage />}
        {currentPage === 'gender-selection' && <GenderSelectionPage />}
        {currentPage === 'thank-you' && <ThankYouPage />}
        {currentPage === 'disqualified' && <DisqualificationPage />}
        {currentPage === 'disqualified-age' && <DisqualificationAgePage />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <button
              onClick={() => setShowPrivacyPolicy(true)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {ft.privacyPolicy}
            </button>
            <button
              onClick={() => setShowTerms(true)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {ft.termsConditions}
            </button>
            <button
              onClick={() => setShowContactForm(true)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {ft.contactUs}
            </button>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} {t.headerTitle}. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Modals */}
      <Modal
        isOpen={showPrivacyPolicy}
        onClose={() => setShowPrivacyPolicy(false)}
        title={ft.privacyPolicy}
      >
        <PrivacyPolicyContent />
      </Modal>

      <Modal
        isOpen={showTerms}
        onClose={() => setShowTerms(false)}
        title={ft.termsConditions}
      >
        <TermsContent />
      </Modal>

      <Modal
        isOpen={showContactForm}
        onClose={() => setShowContactForm(false)}
        title={ft.contactFormTitle}
      >
        <ContactForm />
      </Modal>
    </div>
  );
}

export default App;