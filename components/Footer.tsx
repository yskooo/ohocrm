
import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img src={LOGO_URL} alt="OHO Logo" className="w-8 h-8 filter brightness-0 invert" />
              <span className="font-bold text-2xl tracking-tight">OHO CRM</span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Authorized Zoho Partner helping Australian businesses automate, optimize, and scale through expert CRM implementation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-oho-yellow hover:text-black transition-all">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-oho-yellow hover:text-black transition-all">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-oho-yellow">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/services" className="hover:text-white transition-colors">CRM Implementation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Custom Automation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">System Integrations</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Support & Training</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-oho-yellow">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/why-oho" className="hover:text-white transition-colors">Why OHO</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/why-oho" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-oho-yellow">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt mt-1"></i>
                <span>P.O Box 1093 Windsor VIC 3181, Sydney, NSW, Australia</span>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-envelope mt-1"></i>
                <span>care@ohocrmsoftware.com.au</span>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-phone-alt mt-1"></i>
                <span>+61 480 018 157</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:row justify-between items-center space-y-4 md:space-y-0 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} OHO CRM Software. Not a subsidiary of Zoho Corporation.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
