import React from 'react';
import { ServiceItem, ServiceCategory } from '../types';
import { SALON_PHONE } from '../constants';
import { MessageCircle } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const message = `Hi, I'm interested in booking the ${service.name} (${service.price}).`;
  const whatsappLink = `https://wa.me/${SALON_PHONE}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-white group overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 rounded-lg flex flex-col h-full">
      <div className="relative overflow-hidden h-56">
        <img 
          src={service.image} 
          alt={service.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-sm font-bold text-salon-black rounded-full shadow-sm">
          {service.price}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-2">
          {service.category}
        </span>
        <h3 className="font-serif text-xl font-bold text-salon-black mb-2">
          {service.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
          {service.description}
        </p>
        
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full bg-salon-black text-white py-3 px-4 rounded-sm uppercase text-xs font-bold tracking-widest hover:bg-gold-500 transition-colors"
        >
          <MessageCircle size={16} />
          Book on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;