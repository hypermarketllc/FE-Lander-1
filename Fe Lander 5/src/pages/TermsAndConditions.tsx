import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#2B4B8C] text-white py-3">
        <div className="max-w-3xl mx-auto px-4">
          <Link to="/" className="text-white hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Services</h1>
        
        <div className="prose max-w-none">
          <p className="font-medium">
            Please read these terms and conditions of use carefully before using this website
          </p>

          <p className="mt-4">
            The terms of use detailed below (the "Terms of Use") govern your access to and use of the Site and the services 
            that we make available to you through the Site (the "Services"). By accessing or using the Site or any of the Services, 
            you hereby agree to these Terms of Use, and you warrant that you are at least 18 years of age. If you do not agree with 
            these Terms of Use, in whole or in part, please do not continue to use the Site or the Services.
          </p>

          <p className="mt-4">
            The Terms & Conditions policy is effective as of the last updated date specified above. We may change the Terms & Conditions 
            at any time. Please check this page periodically for changes as your continued use of the Site or Services after any such 
            change will constitute your acceptance of any modified terms.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">The Services</h2>
          <p>
            Most information provided through the Service is provided for general informational and educational purposes. 
            There is information provided at the point of sale for commercial purposes.
          </p>

          <p className="mt-4">
            The Services include incorporation of third-party insurance products, brokers, and carriers in the form of an advertisement, 
            insurance quote, online purchase, email, phone call, text message, or any other marketing medium. This serves as notice that 
            you may have third-parties contact you on our behalf.
          </p>

          <p className="mt-4">
            The Services also include formal quoting, brokering, and transacting of first-and-third-party insurance products. 
            We are a licensed insurance agency.
          </p>

          <p className="mt-4">
            Any quotes, or quote-ranges provided on the Site or over the phone are non-binding. The final insurance policy premium 
            for any policy is determined following application by the underwriting insurance company. Insurance products and their 
            availability may vary by state and your individual circumstances, and additional minimum coverage limits may be required 
            in your state. The third-party insurance products offered for sale through the Site are only available in the jurisdictions 
            in which we are properly licensed.
          </p>

          <p className="mt-4">
            At times, Services may require you to agree to additional terms and conditions, or enter into separate agreements with us 
            or applicable third-parties. Any third-party insurance products purchased by you through the Site are subject to the contract 
            terms of the applicable insurance carrier. In the event of a conflict between these Terms of Use and the terms of any insurance 
            policy terms, the terms of the insurance policy will control.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">User Conduct</h2>
          <p>
            You promise NOT to use this website for any of the following purposes or activities:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Conducting or supporting illegal activity of any type whatsoever;</li>
            <li>Transmitting or storing worms or viruses or any code of a destructive nature;</li>
            <li>Threatening, harassing, abusing, impersonating, injuring or intimidating others;</li>
            <li>Interfering with others' use of this Website, unless such interference is for the purpose of complying with another section of these Terms of Use;</li>
            <li>Delivering spam or collecting information to deliver spam, or sending unsolicited email advertisements;</li>
            <li>Decompiling, disassembling, reverse engineering or otherwise attempting to discover any source code contained in this Website;</li>
            <li>Disguising the origin of any content transmitted through this Website or manipulating your presence on the Website;</li>
            <li>Causing the launch of any automated system(s) that accesses this Website in a manner that sends more request messages to servers of the Website in a given period of time than a human can reasonably produce in the same period by using a conventional online web browser.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">Intellectual Property</h2>
          <p>
            The Site contains material, such as text, graphics, images, photos and other material provided by or on behalf of us, 
            and through your use of the Services you will be provided with additional information from us. These materials and information 
            are collectively referred to herein as the "Content." The Content is owned by us and/or our licensors and may be protected 
            under both United States and foreign copyright laws and treaties. The Content includes, but is not limited to, the trademarks, 
            service marks, and logos that are used and displayed on the Site, which are registered and unregistered trademarks or service 
            marks of ours or our licensors.
          </p>

          <p className="mt-4">
            You shall not, without our written permission in each instance: use any trademarks, service marks or logos in any manner; 
            copy or use the Content for any purpose; remove any copyright or other proprietary notices contained in the original Content 
            on any copy you make of the Content; sell, transfer, assign, license, sublicense, or modify the Content, or use the Content 
            for any public or commercial purpose; or use or post or publish the Content.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Unsolicited Information</h2>
          <p>
            We provide Services for inquires and peer-to-peer interaction, and you are solely responsible for your use of these Services. 
            By submitting any unsolicited information and materials, including comments, ideas, questions, and other similar communications, 
            ("Unsolicited Information") you agree to be bound by the following terms and conditions. We are entitled to use such communication 
            or material for any purpose whatsoever, commercial or otherwise, including, but not limited to, reproduction, disclosure, transmission, 
            publication, broadcast, and further posting, without any compensation to the provider of the Unsolicited Information. Further, we are 
            free to use any ideas, concepts, know-how, or techniques contained in any communication or material you send to the site for any purpose 
            whatsoever, commercial or otherwise, including, but not limited to, developing, manufacturing, and marketing products.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Collection and Use of Information</h2>
          <p>
            Your use of the Services transmits information, and possibly personally identifiable information. Any collection or use of personally 
            identifiable information collected from you via the Website is governed by our <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>, 
            which is hereby incorporated by reference in its entirety. It is important that you read and understand the terms of our Privacy Policy.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Disclaimer and Limitation of Liability</h2>
          <p className="uppercase font-medium">
            You acknowledge and agree that the site, the services, and all content are provided "as is," "as available", without warranty of any kind, 
            either express or implied, including, without limitation, any warranties of title, non-infringement, merchantability or fitness for a 
            particular purpose. We will not be liable for any damages to, or viruses that may infect, your computer equipment or other property on 
            account of your access to or use of the site, the services, or any content.
          </p>

          <p className="uppercase font-medium mt-4">
            Many insurance products quoted or sold through the site are third-party products and are not our products. We make no representations 
            or warranties with respect to such products, and we accept no liability in connection with such products. All such products are provided 
            to you pursuant to the terms and conditions of the insurance carrier providing such products.
          </p>

          <p className="uppercase font-medium mt-4">
            In no event shall we be liable for direct, special, indirect, punitive, exemplary, or consequential damages, including lost profits, 
            revenues or savings, even if we have been advised of the possibility of such damages in advance. Because some jurisdictions do not allow 
            the exclusion or limitation of liability for negligence, consequential, incidental or other damages, in such jurisdictions our liability 
            is limited to the greatest extent permitted by applicable law. Your sole and exclusive remedy for dissatisfaction with this site, any service, 
            or any content is to stop using the same.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">External Sites</h2>
          <p>
            The Site may contain links to third-party websites, including, without limitation, the websites of the insurance carriers offering the 
            third-party insurance products made available to you through the Services ("External Sites"). We have no control over the External Sites, 
            and we do not endorse and we are not responsible for the content of any linked External Sites. We are not responsible or liable for the 
            actions, products or content of the External Sites, as they are provided for your convenience and are to be accessed entirely at your own risk. 
            We do, however, seek to protect the integrity of our Website and welcome any feedback about external links, including information regarding a broken link.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Indemnification</h2>
          <p>
            You shall defend, indemnify, and hold us and our officers, directors, employees, successors, licensees, and assigns harmless from and against 
            any claims, actions, or demands, including, without limitation, reasonable legal and accounting fees, arising or resulting from: (i) your breach 
            of these Terms of Use; or (ii) your access to, use, or misuse of the Site, any Services or any Content.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Termination</h2>
          <p>
            We may terminate these Terms of Use and your access to all or any part of the Site or the Services at any time and for any reason without prior 
            notice or liability. We reserve the right to change, suspend, or discontinue all or any part of the Site or the Services sat any time without 
            prior notice or liability.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Miscellaneous</h2>
          <p>
            In the event that any portion of these Terms of Use is held to be invalid or unenforceable, then such portion shall be construed in accordance 
            with the applicable law as nearly as possible to reflect the original intentions of the parties, and the remainder of these Terms of Use shall 
            remain in full force and effect. This section, the section entitled Indemnification, and the sections entitled Disclaimer, Limitation of Liability 
            and Intellectual Property shall survive the termination of these Terms of Use. You may not assign these Terms of Use. No waiver shall be effective 
            unless in writing. Neither the course of conduct between parties nor trade practice shall act to modify any provision of these Terms of Use. 
            We control and operate the Website from our offices within the State of Washington, United States of America, and these Terms of Use shall be 
            governed by and construed in accordance with the laws of the State of Washington.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;