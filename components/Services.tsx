
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">How We Solve Your CRM Challenges</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We don't just sell licenses. We design powerful systems that grow your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group p-8 rounded-3xl border border-gray-100 hover:border-oho-yellow hover:bg-yellow-50/30 transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className={`fas ${service.icon} text-2xl text-yellow-600`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 line-clamp-2">
                {service.description}
              </p>
              <ul className="space-y-2 mb-8">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <i className="fas fa-check text-yellow-500 mr-2"></i>
                    {detail}
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                className="text-sm font-bold text-gray-900 flex items-center hover:text-yellow-600"
              >
                Learn More <i className="fas fa-chevron-right ml-2 text-[10px]"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
