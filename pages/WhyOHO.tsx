
import React from 'react';
import { Link } from 'react-router-dom';

const WhyOHO: React.FC = () => {
  const supportedApps = [
    { name: 'Zoho CRM', desc: 'Sales pipeline, automations & reporting', icon: 'fa-users-gear' },
    { name: 'Zoho Books', desc: 'Accounting, GST compliance & ATO-ready reports', icon: 'fa-book' },
    { name: 'Zoho Invoice', desc: 'Professional invoicing & payments', icon: 'fa-file-invoice-dollar' },
    { name: 'Zoho Social', desc: 'Manage all social media in one dashboard', icon: 'fa-share-nodes' },
    { name: 'Zoho Campaigns', desc: 'Email marketing made simple', icon: 'fa-envelope-open-text' },
    { name: 'Zoho Analytics', desc: 'Business intelligence & reporting', icon: 'fa-chart-pie' },
    { name: 'Zoho Recruit', desc: 'Talent acquisition & hiring tools', icon: 'fa-user-plus' },
    { name: 'Zoho Marketing Hub', desc: 'Grow smarter with AI-driven marketing', icon: 'fa-bullhorn' },
    { name: 'Zoho FSM', desc: 'Scheduling & mobile workforce tools', icon: 'fa-truck-fast' },
    { name: 'Zoho Creator', desc: 'Custom app development without coding', icon: 'fa-code' },
  ];

  const benefits = [
    { title: 'Certified Experts', text: 'Certified Zoho Consultants across Melbourne, Sydney, Perth, and Adelaide.' },
    { title: 'Bespoke Setup', text: 'Expert CRM customization, high-level automation, and staff training.' },
    { title: 'Ongoing Support', text: 'Continuity for Zoho integrations, API development, and custom functions.' },
    { title: 'License Guidance', text: 'Expert advice on Zoho One costs, inclusions, and admin optimization.' },
    { title: 'Local Context', text: 'Australian-based partner support with real-world business use cases.' },
  ];

  return (
    <div className="bg-white">
      {/* Premium Hero */}
      <section className="relative pt-32 pb-24 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 rounded-l-[100px] -z-10 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
          <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-8 font-bold text-sm tracking-widest uppercase">
            <i className="fas fa-award mr-2"></i> Authorized Zoho Partner
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1]">
            Not Just Consultants. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-500">Your Partners in Growth.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed mb-10">
            Founded with a simple mission: to make Zoho CRM the most powerful employee in your business. We handle the technical heavy lifting so you can focus on selling.
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start">
             <Link to="/contact" className="px-10 py-5 bg-oho-yellow text-black font-black rounded-full hover:shadow-2xl transition-all">Book Free Audit</Link>
             <div className="flex items-center space-x-2 text-slate-400 font-semibold">
                <i className="fas fa-star text-oho-yellow"></i>
                <span>Trusted by 100+ AU Businesses</span>
             </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Detailed Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-black text-slate-900 mb-10 leading-tight">
                Why Choose Us as Your <br />
                <span className="text-yellow-600">Zoho Consultant in Australia?</span>
              </h2>
              <div className="space-y-8">
                {benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start group">
                    <div className="w-10 h-10 rounded-xl bg-oho-yellow flex items-center justify-center shrink-0 mt-1 shadow-lg group-hover:scale-110 transition-transform">
                      <i className="fas fa-check text-black font-black"></i>
                    </div>
                    <div className="ml-6">
                      <h4 className="text-lg font-black text-slate-900 mb-1 uppercase tracking-wide">{b.title}</h4>
                      <p className="text-gray-500 font-medium">{b.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
               <div className="aspect-square bg-white rounded-[60px] shadow-2xl p-12 flex flex-col justify-center border border-gray-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-oho-yellow/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                  <div className="mb-8">
                     <span className="text-sm font-black text-oho-yellow uppercase tracking-[0.3em] mb-4 block">Our Reach</span>
                     <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Localized Support Across Australia</h3>
                     <div className="grid grid-cols-2 gap-4">
                        {['Melbourne', 'Sydney', 'Perth', 'Adelaide'].map(city => (
                          <div key={city} className="flex items-center p-4 bg-slate-50 rounded-2xl font-bold text-slate-700 hover:bg-oho-yellow/20 transition-colors border border-transparent hover:border-oho-yellow/30">
                            <i className="fas fa-location-dot text-oho-yellow mr-3 text-lg"></i> {city}
                          </div>
                        ))}
                     </div>
                  </div>
                  <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                     <div>
                        <div className="text-4xl font-black text-slate-900 tracking-tighter">100%</div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">AU Dedicated</div>
                     </div>
                     <div className="text-right">
                        <div className="text-4xl font-black text-slate-900 tracking-tighter">24/7</div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Support Portal</div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zoho Apps Support Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Zoho Apps We Support</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">From core CRM to custom apps, we master the entire stack so you don't have to.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {supportedApps.map((app, idx) => (
              <div key={idx} className="p-8 bg-white border border-slate-100 rounded-[32px] hover:shadow-2xl hover:border-oho-yellow transition-all group flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-oho-yellow group-hover:rotate-6 transition-all">
                  <i className={`fas ${app.icon} text-2xl text-slate-400 group-hover:text-black`}></i>
                </div>
                <h3 className="font-black text-slate-900 mb-3 text-lg">{app.name}</h3>
                <p className="text-[10px] text-gray-400 font-bold leading-relaxed uppercase tracking-wider">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive CRM Solutions */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-oho-yellow rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="text-oho-yellow font-black text-sm uppercase tracking-[0.4em] mb-4 block">Holistic Delivery</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Comprehensive CRM Solutions</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Explore tailored solutions designed to boost your sales and streamline your marketing efforts.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                title: 'Sales Automation', 
                desc: 'Enhance your sales processes with automation tools that track leads and close deals efficiently.',
                icon: 'fa-bolt-lightning',
                bullets: ['Lead Tracking', 'Deal Flow', 'Commission Tracking']
              },
              { 
                title: 'Marketing Management', 
                desc: 'Manage your campaigns effortlessly with segmentation, email marketing, and real-time analytics.',
                icon: 'fa-bullseye',
                bullets: ['Segmentation', 'AI Marketing Hub', 'Conversion Analytics']
              },
              { 
                title: 'Integration Solutions', 
                desc: 'Connect your favorite tools with OHO CRM for seamless data flow and enhanced productivity.',
                icon: 'fa-puzzle-piece',
                bullets: ['API Development', 'Webhook Flow', 'Custom Functions']
              },
            ].map((sol, idx) => (
              <div key={idx} className="bg-slate-800/50 p-12 rounded-[50px] border border-slate-700 hover:border-oho-yellow transition-all group">
                <div className="w-14 h-14 bg-slate-700 rounded-2xl flex items-center justify-center mb-10 text-oho-yellow shadow-lg group-hover:bg-oho-yellow group-hover:text-black transition-colors">
                  <i className={`fas ${sol.icon} text-2xl`}></i>
                </div>
                <h3 className="text-3xl font-black mb-6 tracking-tight">{sol.title}</h3>
                <p className="text-slate-400 mb-10 leading-relaxed font-medium">{sol.desc}</p>
                <div className="space-y-4 mb-10">
                  {sol.bullets.map(b => (
                    <div key={b} className="flex items-center text-sm font-bold text-slate-300">
                      <i className="fas fa-plus text-oho-yellow mr-3 text-[10px]"></i> {b}
                    </div>
                  ))}
                </div>
                <Link to="/services" className="inline-flex items-center text-oho-yellow font-black group-hover:translate-x-2 transition-transform uppercase tracking-widest text-xs">
                  See Full Scope <i className="fas fa-chevron-right ml-2"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Support Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Expert Training & Support</h2>
              <p className="text-lg text-gray-500 font-medium">We provide more than code; we provide knowledge transfer.</p>
            </div>
            <Link to="/contact" className="mt-8 md:mt-0 font-black text-black bg-oho-yellow px-10 py-5 rounded-2xl hover:bg-black hover:text-white transition-all shadow-xl shadow-yellow-500/20">Get Support Now</Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 bg-slate-50 rounded-[40px] flex items-start space-x-8 hover:shadow-xl transition-all border border-transparent hover:border-oho-yellow/30">
               <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-oho-yellow shrink-0">
                  <i className="fas fa-video text-2xl"></i>
               </div>
               <div>
                  <h4 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Zoho CRM Training Videos</h4>
                  <p className="text-gray-600 font-medium leading-relaxed">Comprehensive video courses and self-paced modules to master every feature of the CRM ecosystem.</p>
               </div>
            </div>
            <div className="p-10 bg-slate-50 rounded-[40px] flex items-start space-x-8 hover:shadow-xl transition-all border border-transparent hover:border-oho-yellow/30">
               <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-oho-yellow shrink-0">
                  <i className="fas fa-chalkboard-teacher text-2xl"></i>
               </div>
               <div>
                  <h4 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Hands-on Workshops</h4>
                  <p className="text-gray-600 font-medium leading-relaxed">Interactive sessions for Zoho Books, Invoice & Mail, ensuring your team hits the ground running.</p>
               </div>
            </div>
            <div className="p-10 bg-slate-50 rounded-[40px] flex items-start space-x-8 hover:shadow-xl transition-all border border-transparent hover:border-oho-yellow/30">
               <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-oho-yellow shrink-0">
                  <i className="fas fa-magnifying-glass-chart text-2xl"></i>
               </div>
               <div>
                  <h4 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Analytics Training</h4>
                  <p className="text-gray-600 font-medium leading-relaxed">Learn to build custom dashboards and extract business intelligence for data-driven decisions.</p>
               </div>
            </div>
            <div className="p-10 bg-slate-50 rounded-[40px] flex items-start space-x-8 hover:shadow-xl transition-all border border-transparent hover:border-oho-yellow/30">
               <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-oho-yellow shrink-0">
                  <i className="fas fa-headset text-2xl"></i>
               </div>
               <div>
                  <h4 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Live Expert Support</h4>
                  <p className="text-gray-600 font-medium leading-relaxed">Real-time access to consultants via Email, Zoho Contact Us, and direct Call options.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Quote */}
      <section className="py-32 bg-white text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-oho-yellow mb-10 opacity-20 transform -translate-y-4">
            <i className="fas fa-quote-left text-[120px]"></i>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-12 italic leading-tight tracking-tight">
            "Software is just a tool. A tool is only as good as the hands that hold it. We provide the expert hands your business needs to build something great."
          </h2>
          <div className="flex items-center justify-center space-x-6">
            <div className="h-px w-20 bg-oho-yellow"></div>
            <div className="font-black text-xl uppercase tracking-[0.3em] text-slate-400">The OHO Leadership Team</div>
            <div className="h-px w-20 bg-oho-yellow"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyOHO;
