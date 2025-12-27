
import React from 'react';
import { INDUSTRIES } from '../constants';
import { Link } from 'react-router-dom';

const Industries: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-slate-900 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-oho-yellow rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 bg-oho-yellow/10 border border-oho-yellow/20 rounded-full mb-6">
            <span className="text-oho-yellow font-bold text-sm tracking-widest uppercase">Expertise by Industry</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
            Specialized <span className="text-oho-yellow">Solutions</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            Generic CRM setups fail because they don't understand your unique market dynamics. 
            We implement industry-specific logic using the full power of the Zoho ecosystem.
          </p>
        </div>
      </section>

      {/* Industry Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 -mt-12 pb-32">
        <div className="grid lg:grid-cols-2 gap-10">
          {INDUSTRIES.map((industry) => (
            <div 
              key={industry.id} 
              className="bg-white rounded-[40px] shadow-2xl border border-white/50 overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-yellow-500/10 hover:-translate-y-2"
            >
              {/* Card Top: Banner & Icon */}
              <div className="h-48 relative overflow-">
                <img 
                  src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3`} 
                  alt={industry.name} 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
                <div className="absolute bottom-0 left-10 translate-y-1/2">
                  <div className="w-20 h-20 bg-oho-yellow rounded-3xl shadow-xl flex items-center justify-center text-black">
                    <i className={`fas ${industry.icon} text-4xl`}></i>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="pt-16 px-10 pb-10 flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-3xl font-black text-gray-900 tracking-tight">{industry.name}</h2>
                </div>
                
                <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
                  {industry.description}
                </p>

                <div className="grid md:grid-cols-2 gap-10">
                  {/* The Problem Column */}
                  <div>
                    <h4 className="flex items-center text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
                      <span className="w-8 h-px bg-slate-200 mr-3"></span>
                      Core Challenges
                    </h4>
                    <ul className="space-y-4">
                      {industry.challenges.map((c, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <span className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center mr-3 mt-1 shrink-0">
                            <i className="fas fa-times text-[10px] text-red-500"></i>
                          </span>
                          <span className="font-semibold text-sm">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* The Solution Column */}
                  <div>
                    <h4 className="flex items-center text-xs font-black uppercase tracking-[0.2em] text-oho-yellow mb-6">
                      <span className="w-8 h-px bg-oho-yellow/30 mr-3"></span>
                      The Zoho Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.zohoStack.map((tool, i) => (
                        <span 
                          key={i} 
                          className="px-4 py-2 bg-slate-900 text-white text-[11px] font-bold rounded-lg flex items-center hover:bg-oho-yellow hover:text-black transition-colors"
                        >
                          <i className="fas fa-cube mr-2 text-[8px] text-oho-yellow"></i>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Action */}
              <div className="px-10 pb-10 pt-4">
                <Link 
                  to="/contact" 
                  className="w-full inline-flex items-center justify-center px-8 py-5 bg-oho-yellow text-black font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-black hover:text-white transition-all duration-300 shadow-lg shadow-yellow-500/20 group-hover:shadow-black/20"
                >
                  Configure My {industry.name} Solution
                  <i className="fas fa-arrow-right ml-3 text-xs"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Context */}
        <div className="mt-24 text-center">
          <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-6">Don't see your industry?</p>
          <h3 className="text-3xl font-black text-slate-900 mb-10">We build custom solutions for complex workflows.</h3>
          <Link 
            to="/contact" 
            className="text-oho-yellow font-black border-b-4 border-oho-yellow pb-2 hover:text-slate-900 hover:border-slate-900 transition-all text-xl"
          >
            Request a custom architect session
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Industries;
