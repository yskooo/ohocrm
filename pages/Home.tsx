
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import LeadQualifyBot from '../components/LeadQualifyBot';
import { INDUSTRIES, TESTIMONIALS, PARTNER_BADGE_URL } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const zohoNodes = [
    { title: 'Zoho One', path: '/zoho', desc: 'The Operating System for Business', icon: 'fa-layer-group' },
    { title: 'Zoho CRM', path: '/zoho/zoho-crm', desc: 'Modern Sales Automation', icon: 'fa-users-viewfinder' },
    { title: 'Zoho Forms', path: '/zoho/zoho-forms', desc: 'Advanced Lead Capture', icon: 'fa-wpforms' },
    { title: 'Zoho Partner Australia', path: '/zoho/zoho-partner-australia', desc: 'Local Implementation Experts', icon: 'fa-handshake' },
  ];

  return (
    <div className="bg-white">
      <Hero />
      
      {/* Trust Bar - High Contrast with Image Badge */}
      <div className="py-10 bg-gray-100 overflow-hidden relative">
        <div className="absolute inset-0 bg-oho-yellow/5"></div>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-24 relative z-10 text-center md:text-left">
          <div className="flex items-center group cursor-default h-16">
             <img 
               src={PARTNER_BADGE_URL} 
               alt="Zoho Authorized Partner" 
               className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
               onError={(e) => {
                 // Fallback if the PNG is missing
                 (e.target as HTMLImageElement).style.display = 'none';
                 const parent = (e.target as HTMLElement).parentElement;
                 if (parent) {
                   const fallback = document.createElement('div');
                   fallback.innerHTML = '<span class="text-oho-yellow font-black text-xl tracking-tighter">ZOHO AUTHORIZED PARTNER</span>';
                   parent.appendChild(fallback);
                 }
               }}
             />
          </div>
          <div className="h-10 w-px bg-slate-800 hidden lg:block"></div>
          <div className="text-black text-[10px] md:text-xs tracking-[0.3em] flex flex-wrap justify-center gap-6 md:gap-12">
             <span className="hover:text-oho-yellow transition-colors cursor-default uppercase">Sydney</span>
             <span className="hover:text-oho-yellow transition-colors cursor-default uppercase">Melbourne</span>
             <span className="hover:text-oho-yellow transition-colors cursor-default uppercase">Brisbane</span>
             <span className="hover:text-oho-yellow transition-colors cursor-default uppercase">Perth</span>
          </div>
        </div>
      </div>

      {/* Intro to Services - Strategy Focus */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 text-oho-yellow font-black text-xs uppercase tracking-[0.4em] mb-6">
                <span className="w-10 h-px bg-oho-yellow"></span>
                <span>The OHO Methodology</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
                We Streamline Business Process that Drive<br />
                <span className="text-yellow-600">Scalable Results.</span>
              </h2>
              <p className="text-xl text-gray-500 mb-12 leading-relaxed font-medium">
                Software is just a tool. Without the right business logic, it's just an expense. OHO CRM Experts bridge the gap between powerful Zoho features and your unique business goals.
              </p>
              <div className="grid gap-6 mb-12">
                <div className="flex items-center space-x-5 p-6 bg-slate-50 rounded-[32px] border border-slate-100 group hover:border-oho-yellow transition-all">
                   <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-oho-yellow shadow-sm group-hover:bg-oho-yellow group-hover:text-black transition-colors"><i className="fas fa-chart-line text-xl"></i></div>
                   <div>
                      <h4 className="font-black text-slate-900">40% Growth in Conversion</h4>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Average client result post-optimization</p>
                   </div>
                </div>
                <div className="flex items-center space-x-5 p-6 bg-slate-50 rounded-[32px] border border-slate-100 group hover:border-oho-yellow transition-all">
                   <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-oho-yellow shadow-sm group-hover:bg-oho-yellow group-hover:text-black transition-colors"><i className="fas fa-clock text-xl"></i></div>
                   <div>
                      <h4 className="font-black text-slate-900">10+ Hours Saved Weekly</h4>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Through custom workflow automation</p>
                   </div>
                </div>
              </div>
              <Link to="/services" className="inline-flex items-center font-black text-black border-b-4 border-oho-yellow pb-2 hover:border-black transition-all group">
                Explore Full Service Suite <i className="fas fa-arrow-right ml-4 group-hover:translate-x-2 transition-transform"></i>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
               {zohoNodes.map((node) => (
                 <Link 
                   key={node.title} 
                   to={node.path} 
                   className="p-10 bg-white border border-slate-100 rounded-[50px] hover:bg-oho-yellow transition-all group flex flex-col justify-center items-center text-center shadow-xl hover:shadow-yellow-500/20 hover:-translate-y-4"
                 >
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white transition-all">
                       <i className={`fas ${node.icon} text-3xl text-slate-400 group-hover:text-black`}></i>
                    </div>
                    <h3 className="font-black text-slate-900 text-xl mb-3">{node.title}</h3>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] leading-tight group-hover:text-black/60">{node.desc}</p>
                 </Link>
               ))}
            </div>
          </div>
        </div>
      </section>

      <Services />

      <LeadQualifyBot />

      {/* Industries Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
            <div className="max-w-2xl">
              <span className="text-oho-yellow font-black text-xs uppercase tracking-[0.4em] mb-4 block">Industry Verticals</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-none">Specialized Logic for <br />Your Market.</h2>
              <p className="text-xl text-gray-500 font-medium">
                Generic CRM setups fail because they don't understand your unique challenges. We build for your reality.
              </p>
            </div>
            <Link to="/industries" className="mt-8 md:mt-0 font-black text-black bg-oho-yellow px-12 py-5 rounded-full hover:bg-black hover:text-white transition-all shadow-xl shadow-yellow-500/10">
              View All Industries
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {INDUSTRIES.map((industry) => (
              <div key={industry.id} className="relative group overflow-hidden rounded-[50px] h-[400px] bg-slate-200 shadow-2xl transition-all">
                <img 
                  src={`https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800`} 
                  alt={industry.name} 
                  className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="w-16 h-16 bg-oho-yellow rounded-3xl flex items-center justify-center text-black mb-6 transform -rotate-12 group-hover:rotate-0 transition-all duration-500">
                    <i className={`fas ${industry.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tight leading-none">{industry.name}</h3>
                  <p className="text-oho-yellow text-xs mt-4 font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">Explore Workflow <i className="fas fa-chevron-right ml-2"></i></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-none">Trusted from <br />Sydney to Perth.</h2>
            <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">Proven results from authorized experts who live and breathe the Australian business landscape.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-50 p-16 rounded-[60px] border border-slate-100 relative group hover:border-oho-yellow/50 transition-colors shadow-sm">
                <div className="absolute top-10 right-16 text-oho-yellow/20 text-[160px] font-black pointer-events-none">“</div>
                <div className="flex mb-10">
                  {[...Array(t.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-oho-yellow text-xl mr-2"></i>
                  ))}
                </div>
                <p className="text-2xl text-slate-700 font-medium italic mb-12 leading-relaxed relative z-10">"{t.text}"</p>
                <div className="flex items-center pt-10 border-t border-slate-200">
                  <div className="w-16 h-16 rounded-[24px] bg-slate-900 flex items-center justify-center text-oho-yellow font-black text-2xl mr-6 shadow-2xl group-hover:rotate-6 transition-transform">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-2xl tracking-tight">{t.name}</h4>
                    <p className="text-xs text-slate-400 font-black uppercase tracking-[0.3em] mt-1">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacing for Floating CTA */}
      <div className="h-24 md:h-32"></div>
    </div>
  );
};

export default Home;
