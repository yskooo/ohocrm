
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-24">
      <section className="bg-slate-900 py-24 text-center">
        <h1 className="text-5xl font-black text-white mb-6">Terms of Service</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          The terms and conditions for our consulting and software services.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="prose prose-slate max-w-none">
          <h2 className="text-3xl font-black text-slate-900 mb-6">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            By accessing this website or engaging OHO CRM Software for consulting services, you agree to be bound by these Terms of Service and all applicable laws and regulations in Australia.
          </p>

          <h2 className="text-3xl font-black text-slate-900 mb-6">2. Scope of Services</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            OHO CRM Software provides Zoho implementation, customization, automation, and training services. We act as an independent consultant and Authorized Zoho Partner. The software itself is provided by Zoho Corp, and usage of the software is subject to Zoho's own terms and conditions.
          </p>

          <h2 className="text-3xl font-black text-slate-900 mb-6">3. Professional Advice</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Recommendations provided during consultations are based on our expertise and the information provided by the client. While we strive for the best outcomes, business success depends on various factors beyond our control.
          </p>

          <h2 className="text-3xl font-black text-slate-900 mb-6">4. Client Responsibilities</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Clients are responsible for providing accurate business information, timely feedback, and maintaining the security of their Zoho account credentials.
          </p>

          <h2 className="text-3xl font-black text-slate-900 mb-6">5. Limitation of Liability</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            OHO CRM Software shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use the software or services provided, to the maximum extent permitted by Australian Consumer Law.
          </p>

          <h2 className="text-3xl font-black text-slate-900 mb-6">6. Governing Law</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            These terms are governed by and construed in accordance with the laws of Australia. Any disputes arising from these terms shall be resolved in the courts of Victoria or New South Wales.
          </p>

          <h2 className="text-3xl font-black text-slate-900 mb-6">7. Modifications</h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to modify these terms at any time. Your continued use of the website or our services following any changes constitutes acceptance of the new terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
