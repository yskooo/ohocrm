
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-24">
      <section className="bg-slate-900 py-24 text-center">
        <h1 className="text-5xl font-black text-white mb-6">Terms & Conditions</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Please read these terms and conditions carefully before using Our Services.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="prose prose-slate max-w-none space-y-8 text-gray-600 leading-relaxed">
          
          <h2 className="text-3xl font-black text-slate-900">Interpretation and Definitions</h2>
          
          <h3 className="text-xl font-bold text-slate-800">Interpretation</h3>
          <p>
            The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          </p>

          <h3 className="text-xl font-bold text-slate-800">Definitions</h3>
          <p>For the purposes of these Terms and Conditions:</p>
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
            <li><strong>Country</strong> refers to: Victoria, Australia</li>
            <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to IT Solutions Solved.</li>
            <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
            <li><strong>Service</strong> refers to the Website.</li>
            <li><strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</li>
            <li><strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</li>
            <li><strong>Website</strong> refers to IT Solutions Solved, accessible from https://www.itsolutionssolved.com.au</li>
            <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
          </ul>

          <h2 className="text-3xl font-black text-slate-900 pt-8 border-t border-slate-100">Acknowledgment</h2>
          <p>
            These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
          </p>
          <p>
            Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
          </p>
          <p>
            By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
          </p>
          <p>
            You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
          </p>

          <h2 className="text-3xl font-black text-slate-900 pt-8 border-t border-slate-100">Links to Other Websites</h2>
          <p>
            Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company. 
            The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services.
          </p>

          <h2 className="text-3xl font-black text-slate-900 pt-8 border-t border-slate-100">Termination</h2>
          <p>
            We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions. Upon termination, Your right to use the Service will cease immediately.
          </p>

          <h2 className="text-3xl font-black text-slate-900 pt-8 border-t border-slate-100">Limitation of Liability</h2>
          <p>
            Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.
          </p>
          <p>
            To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy).
          </p>

          <h2 className="text-3xl font-black text-slate-900 pt-8 border-t border-slate-100">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
          <p>
            The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates, expressly disclaims all warranties.
          </p>

          <h2 className="text-3xl font-black text-slate-900 pt-8 border-t border-slate-100">Governing Law</h2>
          <p>
            The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
          </p>

          <h2 className="text-3xl font-black text-slate-900 pt-8 border-t border-slate-100">Disputes Resolution</h2>
          <p>
            If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
          </p>

          <h2 className="text-3xl font-black text-slate-900 pt-8 border-t border-slate-100">Changes to These Terms and Conditions</h2>
          <p>
            We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect.
          </p>

          <h2 className="text-3xl font-black text-slate-900 pt-8 border-t border-slate-100">Contact Us</h2>
          <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
          <ul className="list-disc pl-6 font-bold text-slate-900">
            <li>By email: support@itsolutionssolved.com.au</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
