
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import LeadQualifyBot from '../components/LeadQualifyBot';
import { INDUSTRIES, TESTIMONIALS } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      
      {/* Trust Bar */}
      <div className="py-12 bg-slate-50 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          <img 
            src="./zoho-authorized-partner.png" 
            alt="zoho authorized partner" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <span className="text-2xl font-black text-slate-900">ZOHO PARTNER</span>
          <span className="text-xl font-black text-slate-900 font-bold">SYDNEY • MELBOURNE • BRISBANE</span>
          <span className="text-2xl font-black text-slate-900 italic">AUTOMATION EXPERTS</span>
        </div>
      </div>

      <Services />

      <LeadQualifyBot />

      {/* Industries Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-xl">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Tailored Solutions for Your Industry</h2>
              <p className="text-lg text-gray-600">
                We don't believe in one-size-fits-all. Every industry has unique challenges, and we have the Zoho solutions to match.
              </p>
            </div>
            <Link to="/industries" className="mt-6 md:mt-0 font-bold text-yellow-600 flex items-center">
              View All Industries <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {INDUSTRIES.map((industry) => (
              <div key={industry.id} className="relative group overflow-hidden rounded-3xl h-64 bg-slate-100">
                <img 
                  src={`https://picsum.photos/seed/${industry.id}/600/400`} 
                  alt={industry.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="w-10 h-10 bg-oho-yellow rounded-xl flex items-center justify-center text-black mb-3">
                    <i className={`fas ${industry.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Trusted by Australian Businesses</h2>
            <p className="text-xl text-gray-600">See what happens when expert implementation meets business goals.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-oho-yellow"></i>
                  ))}
                </div>
                <p className="text-xl text-gray-700 italic mb-8">"{t.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 font-bold mr-4">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-oho-yellow">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8">Ready to Automate Your Success?</h2>
          <p className="text-xl font-medium text-black/80 mb-10 max-w-2xl mx-auto">
            Stop letting manual tasks hold your team back. Book your free 30-minute consultation with our Zoho experts today.
          </p>
          <Link
            to="/contact"
            className="inline-block px-12 py-5 bg-black text-white font-bold text-lg rounded-full hover:shadow-2xl transition-all"
          >
            Start Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
