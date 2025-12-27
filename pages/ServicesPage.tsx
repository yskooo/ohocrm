
import React from 'react';
import { SERVICES } from '../constants';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-slate-900 py-24 text-center">
        <h1 className="text-5xl font-black text-white mb-6">Our Expertise</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          We don't just 'install' Zoho. We architect the digital backbone of your business.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 space-y-32">
        {SERVICES.map((s, idx) => (
          <div key={s.id} className={`flex flex-col md:flex-row items-center gap-16 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex-1">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-oho-yellow/20 text-oho-yellow mb-6">
                <i className={`fas ${s.icon} text-3xl`}></i>
              </div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">{s.title}</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {s.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {s.details.map((detail, i) => (
                  <div key={i} className="flex items-center p-4 bg-slate-50 rounded-xl">
                    <i className="fas fa-check-circle text-oho-yellow mr-3"></i>
                    <span className="font-semibold text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full h-[400px] bg-slate-100 rounded-[40px] overflow-hidden relative">
               <img 
                  src={`https://picsum.photos/seed/${s.id}/800/600`} 
                  className="w-full h-full object-cover" 
                  alt={s.title}
                />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Looking for something specific?</h2>
          <p className="text-gray-600 mb-10">We also specialize in Zoho Books, Inventory, Projects, and custom Creator apps.</p>
          <a href="#/contact" className="font-bold text-oho-yellow border-2 border-oho-yellow px-8 py-4 rounded-full hover:bg-oho-yellow hover:text-black transition-all">
            Inquire About Custom Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
