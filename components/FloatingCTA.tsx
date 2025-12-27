
import React from 'react';
import { Link } from 'react-router-dom';

const FloatingCTA: React.FC = () => {
  return (
    <div className="relative z-30 -mb-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#FFD200] to-[#F59E0B] rounded-[40px] md:rounded-[60px] p-8 md:p-16 shadow-[0_20px_60px_rgba(245,158,11,0.25)] relative overflow-hidden group">
        {/* Soft Ambient Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-white/30 transition-all duration-700"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
          <div className="max-w-xl">
            <div className="inline-flex items-center space-x-2 text-black font-black text-xs uppercase tracking-[0.4em] mb-6 opacity-80">
              <span className="w-10 h-px bg-black"></span>
              <span>Direct Path to Growth</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6 leading-[1.1] tracking-tight">
              Ready to turn your Zoho <br /> 
              into a <span className="bg-black/5 px-2 rounded-lg">Sales Machine?</span>
            </h2>
            <p className="text-xl text-black/80 font-medium leading-relaxed">
              Join 100+ Australian businesses that have already scaled their operations with our certified implementation experts.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full sm:w-80">
            <Link
              to="/contact"
              className="w-full px-12 py-5 bg-black text-white font-black rounded-full hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300 shadow-xl text-center flex items-center justify-center space-x-3"
            >
              <span>Book Expert Consultation</span>
              <i className="fas fa-calendar-check text-sm"></i>
            </Link>
            <a
              href="https://www.zoho.com/au/crm/signup.html"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-12 py-5 bg-white/90 backdrop-blur-sm text-black font-black rounded-full border border-black/5 hover:bg-white hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center space-x-3 shadow-sm"
            >
              <span>Create Free Account</span>
              <i className="fas fa-plus-circle text-[#F59E0B]"></i>
            </a>
            <div className="flex flex-col items-center mt-2 space-y-1">
              <p className="text-[10px] text-black/60 font-black uppercase tracking-[0.2em]">
                <i className="fas fa-check-circle mr-1"></i> No Credit Card Required
              </p>
              <p className="text-[9px] text-black/40 font-bold uppercase tracking-widest">
                Authorized Partner Support Included
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
