import React from 'react';
import { useNavigate } from 'react-router-dom';

function TermsAndConditions() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button 
        onClick={() => navigate(-1)}
        className="mb-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Back
      </button>
      
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
        <p>YOU ACKNOWLEDGE AND AGREE THAT THE SITE, THE SERVICES, AND ALL CONTENT ARE PROVIDED "AS IS," "AS AVAILABLE", WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, ANY WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.</p>
      </div>
    </div>
  );
}

export default TermsAndConditions;
