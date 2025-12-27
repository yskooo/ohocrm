
import React from 'react';

const WhyOHO: React.FC = () => {
  const steps = [
    { title: 'Discovery', desc: 'We audit your current tech stack and document your real business workflows.' },
    { title: 'Architect', desc: 'We design a custom Zoho environment that mirrors your ideal sales process.' },
    { title: 'Implementation', desc: 'Our experts build, automate, and integrate your CRM with precision.' },
    { title: 'Training', desc: 'We train your team until they are Zoho power users.' },
    { title: 'Growth', desc: 'Ongoing support to optimize your system as your business scales.' },
  ];

  return (
    <div className="bg-white">
      <section className="py-24 bg-oho-yellow">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-black text-black mb-8">Not Just Consultants.<br />Your Partners in Growth.</h1>
          <p className="text-xl text-black/80 max-w-2xl mx-auto font-medium">
            Founded with a simple mission: to make Zoho CRM the most powerful employee in your business. We handle the technical heavy lifting so you can focus on selling.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 items-center mb-32">
            <div className="col-span-2">
              <h2 className="text-4xl font-extrabold mb-8">Australian Expertise, Global Standards</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Based in Sydney, we understand the Australian business landscape. From Xero integrations to local compliance, we ensure your CRM works for you, not against you.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                As an Authorized Zoho Partner, we have direct access to Zoho's developer network, ensuring your implementation uses the latest features and best practices.
              </p>
            </div>
            <div className="bg-slate-50 p-12 rounded-[40px] border border-gray-100 text-center">
              <div className="text-6xl font-black text-oho-yellow mb-4">100+</div>
              <div className="font-bold text-gray-900 text-lg">Implementations</div>
            </div>
          </div>

          <h2 className="text-4xl font-extrabold text-center mb-16">The OHO Way</h2>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-slate-100 -translate-y-1/2 z-0"></div>
            <div className="grid md:grid-cols-5 gap-8 relative z-10">
              {steps.map((step, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
                  <div className="w-12 h-12 bg-oho-yellow text-black font-black rounded-full flex items-center justify-center mx-auto mb-6 text-xl">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-xl mb-4">{step.title}</h3>
                  <p className="text-gray-500 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <i className="fas fa-quote-left text-oho-yellow text-6xl mb-8 opacity-30"></i>
          <h2 className="text-3xl font-bold mb-8 italic text-gray-800">
            "Software is just a tool. A tool is only as good as the hands that hold it. We provide the expert hands your business needs to build something great."
          </h2>
          <div className="font-bold text-xl text-gray-900">The OHO Leadership Team</div>
        </div>
      </section>
    </div>
  );
};

export default WhyOHO;
