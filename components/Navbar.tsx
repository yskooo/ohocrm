
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LOGO_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Why OHO', path: '/why-oho' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              {!logoError ? (
                <img 
                  src={LOGO_URL} 
                  alt="OHO Logo" 
                  className="w-10 h-10 object-contain" 
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="w-10 h-10 bg-oho-yellow rounded-xl flex items-center justify-center font-black text-black">O</div>
              )}
              <div className="flex flex-col text-gray-800">
                <span className="font-black text-xl tracking-tight leading-none uppercase">OHO CRM</span>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-60">Consulting</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-black uppercase tracking-widest transition-colors duration-200 ${
                  isActive(link.path) ? 'text-black border-b-2 border-oho-yellow' : 'text-gray-500 hover:text-oho-yellow'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="https://schedulenow.itssolved.com.au/#/6266000002028004"
              className="bg-black text-white px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-oho-yellow hover:text-white hover:shadow-xl transition-all duration-300"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-black focus:outline-none"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-bold ${
                  isActive(link.path) ? 'bg-oho-yellow text-black' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-black text-white px-3 py-4 rounded-xl font-black uppercase tracking-widest"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
