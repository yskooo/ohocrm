
import React from 'react';
import { INDUSTRIES } from '../constants';

const Industries: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="max-w-3xl mb-20">
          <h1 className="text-6xl font-black text-gray-900 mb-8">Specialized Solutions</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Generic CRM setups fail because they don't understand your unique market dynamics. Our industry experts speak your language.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {INDUSTRIES.map((industry) => (
            <div key={industry.id} className="bg-white rounded-[40px] p-12 shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mb-8">
                  <i className={`fas ${industry.icon} text-3xl`}></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{industry.name}</h2>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                  {industry.description}
                </p>
                
                <h4 className="font-bold text-sm uppercase tracking-widest text-slate-400 mb-6">Common Challenges Solved</h4>
                <div className="space-y-4 mb-12">
                  {industry.challenges.map((c, i) => (
                    <div key={i} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-500 mt-0.5 shrink-0 mr-4">
                        <i className="fas fa-times text-xs"></i>
                      </div>
                      <span className="text-gray-700 font-medium">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a href="#/contact" className="inline-block text-center bg-gray-900 text-white font-bold py-4 rounded-2xl hover:bg-black transition-all">
                Learn About {industry.name} Setup
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
