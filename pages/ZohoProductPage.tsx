
import React from 'react';
import { Link } from 'react-router-dom';

interface ZohoProductPageProps {
  type: 'ecosystem' | 'crm' | 'forms' | 'partner';
}

const ZohoProductPage: React.FC<ZohoProductPageProps> = ({ type }) => {
  const contentMap = {
    ecosystem: {
      title: 'The Zoho Ecosystem',
      subtitle: '45+ Apps. One Integrated Operating System.',
      desc: 'Zoho One provides everything you need to run your business in the cloud. We help you choose the right apps and stitch them together seamlessly.',
      icon: 'fa-layer-group',
      benefits: ['Unified Data', 'Reduced Software Costs', 'Cross-App Automation']
    },
    crm: {
      title: 'Zoho CRM Experts',
      subtitle: 'Modern Sales Automation for High-Growth Teams.',
      desc: 'Convert more leads and close deals faster. Our CRM implementation focuses on pipeline visibility and workflow automation.',
      icon: 'fa-users-viewfinder',
      benefits: ['Pipeline Management', 'AI-Driven Predictions', 'Mobile Sales Tools']
    },
    forms: {
      title: 'Zoho Forms Solutions',
      subtitle: 'Smart Lead Capture & Data Collection.',
      desc: 'Collect data efficiently and feed it directly into your CRM. We design smart forms that trigger automated business processes.',
      icon: 'fa-wpforms',
      benefits: ['Responsive Design', 'Direct CRM Integration', 'Conditional Logic']
    },
    partner: {
      title: 'Authorized Partner Australia',
      subtitle: 'Local Expertise. Global Standards.',
      desc: 'Based in Australia, we understand the local market. As an authorized Zoho Partner, we provide the high-level consulting you need to scale.',
      icon: 'fa-handshake',
      benefits: ['AU Based Support', 'Verified Expertise', 'Priority Partner Channel']
    }
  };

  const content = contentMap[type];

  return (
    <div className="bg-white min-h-screen">
      <section className="pt-32 pb-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-oho-yellow/5 rounded-l-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-oho-yellow/10 border border-oho-yellow/20 px-4 py-2 rounded-full mb-8 text-oho-yellow font-bold text-xs uppercase tracking-widest">
            <i className="fas fa-star"></i> Zoho Excellence
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tighter">
            {content.title}
          </h1>
          <p className="text-2xl text-slate-400 max-w-3xl leading-relaxed font-medium">
            {content.subtitle}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-video bg-slate-100 rounded-[50px] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src={`https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200`} 
                  className="w-full h-full object-cover" 
                  alt={content.title}
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-oho-yellow rounded-[40px] shadow-2xl flex items-center justify-center text-black">
                <i className={`fas ${content.icon} text-5xl`}></i>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-8 leading-tight">Expert Implementation & Support</h2>
              <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium">
                {content.desc}
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {content.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center space-x-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="w-10 h-10 bg-oho-yellow rounded-xl flex items-center justify-center text-black shrink-0">
                      <i className="fas fa-check text-sm"></i>
                    </div>
                    <span className="font-bold text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  to="/contact" 
                  className="px-10 py-5 bg-black text-white font-black rounded-full hover:bg-oho-yellow hover:text-black transition-all shadow-xl text-center"
                >
                  Talk to a Consultant
                </Link>
                <a 
                  href="https://www.zoho.com/au/crm/signup.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-oho-yellow text-black font-black rounded-full hover:shadow-2xl transition-all text-center"
                >
                  Create Free Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Funnel */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-black text-slate-900 mb-8">Why OHO for {content.title}?</h3>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              As an Australian Zoho Partner, we don't just understand the software—we understand the local business environment, compliance, and growth challenges. We ensure your {content.title} setup is optimized for the AU market.
            </p>
            <div className="inline-block p-1 bg-white rounded-full shadow-lg">
               <div className="flex items-center space-x-6 px-8 py-4">
                  <div className="flex -space-x-3">
                     {[1,2,3].map(i => (
                       <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"></div>
                     ))}
                  </div>
                  <span className="font-bold text-slate-800 text-sm">Join 100+ businesses scaling with OHO</span>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default ZohoProductPage;
