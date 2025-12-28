
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-24">
      <section className="bg-slate-900 py-24 text-center">
        <h1 className="text-5xl font-black text-white mb-6">Privacy Policy</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          How we handle and protect your business data.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="prose prose-slate max-w-none">
          <h2 className="text-3xl font-black text-slate-900 mb-6">1. Introduction</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            At OHO CRM Software, we respect your privacy and are committed to protecting your personal and business data. This policy outlines how we collect, use, and safeguard the information you provide to us through our website and consulting services.
          </p>

          <h2 className="text-3xl font-black text-slate-900 mb-6">2. Data We Collect</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
            <li>Contact details (Name, Email, Phone Number).</li>
            <li>Business information (Company name, Current CRM usage, Industry).</li>
            <li>Inquiry details regarding Zoho implementation and automation.</li>
            <li>Usage data (Cookies and analytics to improve our website experience).</li>
          </ul>

          <h2 className="text-3xl font-black text-slate-900 mb-6">3. How We Use Your Information</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We use your data solely to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
            <li>Provide professional Zoho consulting and implementation services.</li>
            <li>Respond to your inquiries and schedule consultations.</li>
            <li>Send relevant updates about Zoho products and our services.</li>
            <li>Improve our business processes and client support.</li>
          </ul>

          <h2 className="text-3xl font-black text-slate-900 mb-6">4. Data Security</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We implement industry-standard security measures to ensure your data is protected from unauthorized access, disclosure, or alteration. As an Authorized Zoho Partner, we adhere to strict confidentiality agreements.
          </p>

          <h2 className="text-3xl font-black text-slate-900 mb-6">5. Third-Party Disclosure</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We do not sell, trade, or otherwise transfer your data to outside parties, except as required to fulfill our service obligations (e.g., communicating with Zoho Corp on your behalf) or as required by Australian law.
          </p>

          <h2 className="text-3xl font-black text-slate-900 mb-6">6. Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions regarding this privacy policy, you may contact us at <span className="font-bold text-slate-900">care@ohocrmsoftware.com.au</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
