import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { SALON_PHONE, WHATSAPP_MESSAGE_PREFILL } from '../constants';

const FloatingActions: React.FC = () => {
  const whatsappLink = `https://wa.me/${SALON_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE_PREFILL)}`;
  const callLink = `tel:+${SALON_PHONE}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
      {/* Call Button (visible on mobile mainly, but kept for desktop too) */}
      <a 
        href={callLink}
        className="w-14 h-14 bg-white text-salon-black rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-transform hover:scale-110 border border-gray-200"
        aria-label="Call Us"
      >
        <Phone size={24} />
      </a>
      
      {/* WhatsApp Button */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#20bd5a] transition-transform hover:scale-110 animate-bounce-slow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default FloatingActions;