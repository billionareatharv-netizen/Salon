import React from 'react';
import { Award, Heart, Sparkles } from 'lucide-react';
import { SALON_NAME } from '../constants';

const About: React.FC = () => {
  const stylists = [
    { name: 'Sarah Jenkins', role: 'Senior Stylist', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=300&q=80' },
    { name: 'David Ross', role: 'Color Specialist', image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=300&q=80' },
    { name: 'Maria Garcia', role: 'Bridal Expert', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80' },
    { name: 'James Wilson', role: 'Barber Specialist', image: 'https://images.unsplash.com/photo-1508835277982-1c1b0e205603?auto=format&fit=crop&w=300&q=80' }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-salon-light py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-salon-black mb-4">About Us</h1>
          <p className="text-gray-500">The story behind {SALON_NAME}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="font-serif text-3xl font-bold text-salon-black">Redefining Beauty Standards</h2>
              <p className="text-gray-500 leading-relaxed">
                Founded in 2014, {SALON_NAME} began with a simple vision: to provide high-end beauty and grooming services in a relaxing, hygienic environment. 
                Over the years, we have grown into one of the city's most trusted salons, known for our skilled team and customer-centric approach.
              </p>
              <p className="text-gray-500 leading-relaxed">
                We believe that self-care is not a luxury, but a necessity. Whether you need a quick trim, a relaxing facial, or a complete bridal makeover, 
                our team is here to ensure you leave feeling confident and refreshed.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=800&q=80" 
                alt="Salon Team" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-salon-light p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-gold-500">
                <Award size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Unmatched Quality</h3>
              <p className="text-gray-500 text-sm">We use only premium, dermatologically tested products from world-renowned brands.</p>
            </div>
            <div className="bg-salon-light p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-gold-500">
                <Heart size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Comfort First</h3>
              <p className="text-gray-500 text-sm">Our ambiance is designed to help you relax, unwind, and disconnect from the outside world.</p>
            </div>
            <div className="bg-salon-light p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-gold-500">
                <Sparkles size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">Modern Style</h3>
              <p className="text-gray-500 text-sm">Our stylists stay updated with the latest global trends to give you a modern, chic look.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-salon-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-12">Meet Our Specialists</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stylists.map((stylist, i) => (
              <div key={i} className="group">
                <div className="overflow-hidden rounded-full aspect-square mb-4 border-2 border-transparent group-hover:border-gold-500 transition-all mx-auto w-32 md:w-40">
                   <img src={stylist.image} alt={stylist.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="font-bold text-lg">{stylist.name}</h3>
                <p className="text-gray-400 text-sm uppercase tracking-wider">{stylist.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;