import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { SERVICES } from '../constants';
import { ServiceCategory } from '../types';

const Services: React.FC = () => {
  // Group services by category
  const categories = Object.values(ServiceCategory);
  
  const getServicesByCategory = (cat: ServiceCategory) => {
    return SERVICES.filter(s => s.category === cat);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-salon-black text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-400">Comprehensive care for hair, skin, and body.</p>
        </div>
      </section>

      {/* Service Categories */}
      <div className="bg-white min-h-screen">
        {categories.map((category, index) => (
          <section key={category} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-salon-light'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-4 mb-10">
                <h2 className="font-serif text-3xl font-bold text-salon-black">{category}</h2>
                <div className="h-[1px] bg-gray-300 flex-grow"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getServicesByCategory(category).map(service => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
      
      {/* Bottom CTA */}
      <section className="bg-gold-500 py-12 text-center text-white">
         <div className="max-w-3xl mx-auto px-4">
           <h3 className="font-serif text-2xl font-bold mb-2">Can't find what you're looking for?</h3>
           <p className="mb-6">Contact us directly to discuss custom packages.</p>
           <a 
             href="/contact"
             className="inline-block bg-white text-gold-600 px-8 py-3 font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors"
            >
             Contact Us
           </a>
         </div>
      </section>
    </div>
  );
};

export default Services;