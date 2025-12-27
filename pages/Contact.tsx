
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <h1 className="text-5xl font-black text-gray-900 mb-8">Ready to Scale Your Business?</h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Book a free discovery call with our Australian Zoho experts. We’ll analyze your current workflow and show you how automation can drive your growth.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center text-oho-yellow shrink-0">
                  <i className="fas fa-calendar-check text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Free Discovery Call</h3>
                  <p className="text-gray-500">A 30-minute deep dive into your business challenges.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center text-oho-yellow shrink-0">
                  <i className="fas fa-shield-alt text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Zero Pressure</h3>
                  <p className="text-gray-500">We provide advice first. If we're a fit, we'll suggest a plan.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center text-oho-yellow shrink-0">
                  <i className="fas fa-bolt text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Fast Results</h3>
                  <p className="text-gray-500">Most implementations are live in 4-6 weeks.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[40px] shadow-xl border border-gray-100">
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <i className="fas fa-check text-4xl"></i>
                </div>
                <h2 className="text-3xl font-bold mb-4">Request Received!</h2>
                <p className="text-gray-600">Our senior consultant will be in touch within 24 hours to schedule your call.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-oho-yellow font-bold underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                    <input type="text" required className="w-full bg-gray-50 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-oho-yellow transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                    <input type="text" required className="w-full bg-gray-50 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-oho-yellow transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Business Email</label>
                  <input type="email" required className="w-full bg-gray-50 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-oho-yellow transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Current CRM</label>
                  <select required className="w-full bg-gray-50 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-oho-yellow transition-all">
                    <option value="">Select...</option>
                    <option value="none">None / Spreadsheets</option>
                    <option value="zoho">Zoho (Needs optimization)</option>
                    <option value="hubspot">HubSpot</option>
                    <option value="salesforce">Salesforce</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Main Challenge</label>
                  <textarea rows={4} required className="w-full bg-gray-50 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-oho-yellow transition-all" placeholder="What's the biggest bottleneck in your sales process right now?"></textarea>
                </div>
                <button type="submit" className="w-full bg-oho-yellow text-black font-black text-lg py-5 rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                  Request Free Consultation
                </button>
                <p className="text-center text-xs text-gray-400 mt-4">
                  By submitting, you agree to our privacy policy. We'll only use your info to discuss your CRM needs.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
