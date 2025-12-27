
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

const LeadQualifyBot: React.FC = () => {
  const [businessSize, setBusinessSize] = useState('');
  const [challenge, setChallenge] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [assessment, setAssessment] = useState<string | null>(null);

  const getAssessment = async () => {
    if (!businessSize || !challenge) return;
    setIsLoading(true);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are a Zoho CRM consultant expert. Analyze this business:
        Size: ${businessSize}
        Main Challenge: ${challenge}
        Provide a 2-paragraph professional recommendation on why Zoho CRM, implemented by OHO CRM Experts, would solve their problem. 
        Focus on automation, scaling, and the benefit of having a consultant do it for them.
        Keep it encouraging and professional.`,
      });
      setAssessment(response.text);
    } catch (error) {
      console.error(error);
      setAssessment("It looks like you could definitely benefit from Zoho CRM. Let's discuss your specific needs in a free consultation!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-slate-900 text-white rounded-3xl mx-4 sm:mx-8 lg:mx-auto max-w-7xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-oho-yellow opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="relative z-10 px-8 lg:px-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-extrabold mb-6">Are you CRM-Ready?</h2>
          <p className="text-slate-400 text-lg mb-8">
            Tell our AI Expert about your business, and get an instant recommendation on how OHO can help you scale using Zoho.
          </p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wide text-oho-yellow">Business Size</label>
              <select 
                className="w-full bg-slate-800 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-oho-yellow"
                value={businessSize}
                onChange={(e) => setBusinessSize(e.target.value)}
              >
                <option value="">Select size...</option>
                <option value="1-5 employees">Solo / Small Team (1-5)</option>
                <option value="6-20 employees">Growing SME (6-20)</option>
                <option value="21-100 employees">Large Enterprise (21-100)</option>
                <option value="100+ employees">Corporate (100+)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wide text-oho-yellow">Main Challenge</label>
              <textarea 
                className="w-full bg-slate-800 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-oho-yellow"
                rows={3}
                placeholder="e.g., losing leads in my inbox, manual data entry, no visibility into sales pipeline..."
                value={challenge}
                onChange={(e) => setChallenge(e.target.value)}
              />
            </div>
            <button
              onClick={getAssessment}
              disabled={isLoading || !businessSize || !challenge}
              className="w-full bg-oho-yellow text-black font-bold py-4 rounded-xl hover:shadow-2xl transition-all disabled:opacity-50"
            >
              {isLoading ? 'Consulting Experts...' : 'Get Instant Assessment'}
            </button>
          </div>
        </div>

        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 min-h-[300px] flex flex-col justify-center">
          {assessment ? (
            <div className="animate-fade-in">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-oho-yellow flex items-center justify-center text-black font-bold">AI</div>
                <span className="font-bold text-oho-yellow uppercase tracking-widest text-sm">Expert Assessment</span>
              </div>
              <p className="text-slate-300 leading-relaxed italic mb-6">"{assessment}"</p>
              <button 
                onClick={() => window.location.hash = '#/contact'}
                className="text-oho-yellow font-bold underline hover:text-white transition-colors"
              >
                Confirm this with a real consultant →
              </button>
            </div>
          ) : (
            <div className="text-center text-slate-500">
              <i className="fas fa-robot text-5xl mb-4 block"></i>
              <p>Your custom CRM strategy will appear here.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadQualifyBot;
