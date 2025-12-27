
import React from 'react';
import { Link } from 'react-router-dom';
import { PARTNER_BADGE_URL } from '../constants';

interface ZohoProductPageProps {
  type: 'ecosystem' | 'crm' | 'forms' | 'partner';
}

// Added ProductContent interface to provide consistent typing for product metadata
interface ProductContent {
  title: string;
  tagline: string;
  desc: string;
  simpleExplanation: string;
  icon: string;
  features: { title: string; detail: string; }[];
  image: string;
  badge?: boolean;
}

const ZohoProductPage: React.FC<ZohoProductPageProps> = ({ type }) => {
  // Explicitly typing contentMap as Record to ensure all members share the ProductContent shape
  const contentMap: Record<ZohoProductPageProps['type'], ProductContent> = {
    ecosystem: {
      title: 'Zoho One',
      tagline: 'The Operating System for Business',
      desc: 'Zoho One is a revolutionary all-in-one suite that gives you 45+ integrated applications to run your entire business on a single platform.',
      simpleExplanation: 'Think of it as the "Swiss Army Knife" for business. Instead of paying for 10 different subscriptions (Email, CRM, Accounting, etc.), you get everything under one roof for one low monthly price.',
      icon: 'fa-layer-group',
      features: [
        { title: 'End-to-End Integration', detail: 'Sales, Marketing, Finance, and HR all talking to each other.' },
        { title: 'Centralized Admin', detail: 'Manage every user and every app from a single dashboard.' },
        { title: 'Cost Efficiency', detail: 'Replace expensive siloed tools with one comprehensive license.' }
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
    },
    crm: {
      title: 'Zoho CRM',
      tagline: 'Modern Sales Automation',
      desc: 'Zoho CRM empowers high-growth teams with a 360-degree view of their sales pipeline, leads, and customer interactions.',
      simpleExplanation: 'It is your digital sales assistant. It remembers every conversation, automates your follow-ups, and tells you which deals are most likely to close so you can focus on selling, not data entry.',
      icon: 'fa-users-viewfinder',
      features: [
        { title: 'Pipeline Management', detail: 'Visualise your deals and move them from "Lead" to "Closed" with ease.' },
        { title: 'Automated Workflows', detail: 'Let the system send emails and create tasks while you sleep.' },
        { title: 'Zia AI Insights', detail: 'Predictive sales intelligence that finds patterns in your data.' }
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200'
    },
    forms: {
      title: 'Zoho Forms',
      tagline: 'Advanced Lead Capture',
      desc: 'Zoho Forms is more than just a contact box. It is a powerful tool for gathering data and triggering business logic automatically.',
      simpleExplanation: 'Stop manual data entry. Create smart forms that ask the right questions, then automatically push that data into your CRM, send a PDF to the customer, and notify your sales team.',
      icon: 'fa-wpforms',
      features: [
        { title: 'Conditional Logic', detail: 'Show or hide fields based on how the user answers.' },
        { title: 'Seamless CRM Sync', detail: 'Every submission creates a Lead or Contact instantly.' },
        { title: 'Signature Collection', detail: 'Collect digital signatures directly within your forms.' }
      ],
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200'
    },
    partner: {
      title: 'Authorized Partner Australia',
      tagline: 'Verified Implementation Experts',
      desc: 'OHO CRM Software is a certified implementation specialist based in Australia, dedicated to helping local businesses scale.',
      simpleExplanation: 'We are your local "bridge" to Zoho. While Zoho provides the software, we provide the strategy, the setup, and the long-term support to ensure the software actually works for your business goals.',
      icon: 'fa-handshake',
      features: [
        { title: 'AU-Based Support', detail: 'No more waiting for overseas time zones. We are here when you work.' },
        { title: 'Certified Strategy', detail: 'We follow official Zoho best practices for every implementation.' },
        { title: 'Business Audit', detail: 'We look at your process first, and then build the software to match.' }
      ],
      badge: true,
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200'
    }
  };

  const content = contentMap[type];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-oho-yellow/5 rounded-l-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 bg-oho-yellow/10 border border-oho-yellow/20 px-4 py-2 rounded-full mb-8 text-oho-yellow font-black text-xs uppercase tracking-[0.4em]">
                <i className="fas fa-bolt"></i>
                <span>Core Ecosystem</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-none tracking-tighter">
                {content.title}
              </h1>
              <p className="text-2xl text-slate-400 leading-relaxed font-medium">
                {content.tagline}
              </p>
            </div>
            {/* The badge property is now safely accessed thanks to the ProductContent interface */}
            {content.badge && (
              <div className="shrink-0 bg-white/5 p-8 rounded-[40px] border border-white/10 backdrop-blur-md">
                <img src={PARTNER_BADGE_URL} alt="Zoho Authorized Partner" className="h-16 object-contain" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-16">
                <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">What is {content.title}?</h2>
                <p className="text-xl text-gray-500 mb-8 leading-relaxed">
                  {content.desc}
                </p>
                <div className="p-8 bg-slate-50 border-l-8 border-oho-yellow rounded-r-[32px]">
                   <p className="text-slate-800 font-bold italic text-lg leading-relaxed">
                     "{content.simpleExplanation}"
                   </p>
                </div>
              </div>

              <div className="space-y-10">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-widest border-b pb-4 border-slate-100">Core Benefits</h3>
                {content.features.map((f, i) => (
                  <div key={i} className="flex group">
                    <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-oho-yellow shrink-0 group-hover:bg-oho-yellow group-hover:text-black transition-all">
                      <i className={`fas fa-check text-xl`}></i>
                    </div>
                    <div className="ml-8">
                      <h4 className="text-xl font-black text-slate-900 mb-2">{f.title}</h4>
                      <p className="text-gray-500 font-medium">{f.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
               <div className="aspect-[4/5] bg-slate-100 rounded-[60px] overflow-hidden shadow-2xl relative group">
                  <img 
                    src={content.image} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    alt={content.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                  <div className="absolute top-10 right-10 w-24 h-24 bg-oho-yellow rounded-[32px] flex items-center justify-center text-black shadow-2xl animate-bounce-slow">
                     <i className={`fas ${content.icon} text-4xl`}></i>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
         <div className="max-w-5xl mx-auto px-4 text-center">
            <h3 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">Unlock the full potential of {content.title}</h3>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              Don't struggle with complex settings. Let our certified Australian experts handle the implementation while you focus on growing your revenue.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                to="/contact" 
                className="px-12 py-5 bg-black text-white font-black rounded-full hover:bg-oho-yellow hover:text-black transition-all shadow-xl shadow-black/10"
              >
                Book Free Consultation
              </Link>
              <a 
                href="https://www.zoho.com/au/crm/signup.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-12 py-5 bg-white border-2 border-slate-200 text-slate-900 font-black rounded-full hover:bg-slate-50 transition-all"
              >
                Try it for Free
              </a>
            </div>
         </div>
      </section>
    </div>
  );
};

export default ZohoProductPage;
