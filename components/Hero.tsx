
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-32">
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/50 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-yellow-100 px-4 py-1.5 rounded-full mb-8">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
          </span>
          <span className="text-sm font-bold text-yellow-800 uppercase tracking-wider">Authorized Zoho Partner Australia</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
          Zoho CRM Experts Helping <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-500">Businesses Scale Smarter</span>
        </h1>

        <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10 leading-relaxed">
          We implement, customize, and optimize Zoho CRM to streamline your sales, automate operations, and drive real growth. Stop struggling with software—start scaling with systems.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-10 py-4 bg-oho-yellow text-black font-bold text-lg rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Book a Free Zoho Consultation</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto px-10 py-4 bg-white border-2 border-gray-200 text-gray-900 font-bold text-lg rounded-full hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
          >
            Explore Services
          </Link>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-4xl mx-auto">
          {[
            { label: 'Implementation', icon: 'fa-check-circle' },
            { label: 'Automation', icon: 'fa-bolt' },
            { label: 'Expert Support', icon: 'fa-headset' },
            { label: 'Custom Apps', icon: 'fa-code' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-yellow-100 text-yellow-600 flex items-center justify-center mb-3">
                <i className={`fas ${item.icon} text-xl`}></i>
              </div>
              <span className="text-sm font-bold text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
