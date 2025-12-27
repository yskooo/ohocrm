
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
          <div className="inline-block px-4 py-1.5 bg-oho-yellow/10 border border-oho-yellow/20 rounded-full mb-6 text-oho-yellow font-bold text-sm tracking-widest uppercase">
            Industry Intelligence
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
            Specialized <span className="text-oho-yellow">Solutions</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            Generic CRM setups fail because they don't understand your unique market dynamics. 
            We implement industry-specific logic using the full power of the Zoho ecosystem to solve real-world bottlenecks.
          </p>
        </div>
      </section>

      {/* Industry Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 pb-32">
        <div className="grid lg:grid-cols-2 gap-12">
          {INDUSTRIES.map((industry) => (
            <div 
              key={industry.id} 
              className="bg-white rounded-[48px] shadow-2xl border border-white overflow-hidden flex flex-col group transition-all duration-700 hover:shadow-yellow-500/15 hover:-translate-y-3 relative"
            >
              {/* Premium Icon Overlay - Toppest Layer */}
              <div className="absolute left-8 top-8 z-40">
                <div className="w-20 h-20 bg-oho-yellow rounded-3xl shadow-[0_20px_50px_rgba(255,210,0,0.3)] 
                                flex items-center justify-center text-black border-4 border-white
                                transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <i className={`fas ${industry.icon} text-3xl`} />
                </div>
              </div>

              {/* Card Top: Visual Banner */}
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426`} 
                  alt={industry.name}
                  className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 
                             transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white z-10" />
              </div>

              {/* Card Body */}
              <div className="pt-8 px-10 pb-10 flex-grow relative z-20">
                <div className="flex items-center space-x-3 mb-6">
                   <h2 className="text-4xl font-black text-gray-900 tracking-tight">{industry.name}</h2>
                   <div className="h-px flex-grow bg-slate-100"></div>
                </div>
                
                <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium max-w-lg">
                  {industry.description}
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                  {/* The Problem Column */}
                  <div>
                    <h4 className="flex items-center text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
                      <span className="w-6 h-1 bg-red-400 mr-3 rounded-full"></span>
                      Pain Points Solved
                    </h4>
                    <ul className="space-y-4">
                      {industry.challenges.map((c, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <span className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center mr-3 mt-1 shrink-0">
                            <i className="fas fa-times text-[10px] text-red-500"></i>
                          </span>
                          <span className="font-bold text-sm">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* The Solution Column */}
                  <div>
                    <h4 className="flex items-center text-xs font-black uppercase tracking-[0.2em] text-oho-yellow mb-6">
                      <span className="w-6 h-1 bg-oho-yellow mr-3 rounded-full"></span>
                      Integrated Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.zohoStack.map((tool, i) => (
                        <span 
                          key={i} 
                          className="px-4 py-2 bg-slate-50 border border-slate-100 text-slate-700 text-[12px] font-bold rounded-xl flex items-center hover:bg-oho-yellow hover:text-black hover:border-oho-yellow transition-all duration-300 shadow-sm"
                        >
                          <i className="fas fa-check-circle mr-2 text-oho-yellow"></i>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Action */}
              <div className="px-10 pb-12 pt-4">
                <Link 
                  to="/contact" 
                  className="w-full inline-flex items-center justify-center px-8 py-5 bg-black text-white font-black text-sm uppercase tracking-widest rounded-3xl hover:bg-oho-yellow hover:text-black transition-all duration-300 shadow-xl group-hover:shadow-yellow-500/20"
                >
                  Configure My {industry.name} Stack
                  <i className="fas fa-arrow-right ml-3 text-xs"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solution Callout */}
        <div className="mt-32 p-16 bg-white rounded-[60px] border border-slate-100 shadow-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
          <div className="relative z-10">
            <span className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-4 block">Unique Business Requirements?</span>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 max-w-3xl mx-auto leading-tight">
              We architect custom Zoho ecosystems for <span className="text-oho-yellow">complex workflows</span>.
            </h3>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-12 py-5 bg-oho-yellow text-black font-black rounded-2xl hover:bg-black hover:text-white transition-all transform hover:scale-105 shadow-xl shadow-yellow-500/20"
            >
              Request a Custom Architect Session
              <i className="fas fa-chevron-right ml-4"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
