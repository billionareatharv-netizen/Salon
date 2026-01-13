import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, ShieldCheck, Clock, Scissors, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import { SERVICES, SALON_PHONE, WHATSAPP_MESSAGE_PREFILL } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const featuredServices = SERVICES.slice(0, 3); // Just show top 3
  const whatsappLink = `https://wa.me/${SALON_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE_PREFILL)}`;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6 animate-fade-in-up">
          <span className="text-gold-400 font-bold tracking-[0.2em] uppercase text-sm md:text-base">
            Welcome to Glow & Style
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Premium Hair, Beauty & <br className="hidden md:block"/> Grooming Services
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Experience the ultimate luxury in hair care and beauty treatments. 
            Professional stylists, premium products, and a relaxing atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 font-bold transition-all duration-200 text-sm tracking-wide uppercase bg-gold-500 text-white hover:bg-gold-600 shadow-lg"
            >
              Book Appointment
            </a>
            <Button 
              variant="outline" 
              className="!border-white !text-white hover:!bg-white hover:!text-salon-black"
              onClick={() => navigate('/services')}
            >
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Scissors className="w-8 h-8 text-gold-500" />, title: "Expert Stylists", desc: "5+ years of experience per stylist" },
              { icon: <Star className="w-8 h-8 text-gold-500" />, title: "Premium Products", desc: "Top-tier international brands" },
              { icon: <ShieldCheck className="w-8 h-8 text-gold-500" />, title: "Hygienic Space", desc: "Sterilized tools & clean environment" },
              { icon: <Clock className="w-8 h-8 text-gold-500" />, title: "Affordable Pricing", desc: "Luxury services at great value" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg hover:shadow-lg transition-shadow">
                <div className="mb-4 bg-salon-light p-4 rounded-full">{item.icon}</div>
                <h3 className="font-serif text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-salon-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-salon-black mb-4">Featured Services</h2>
            <div className="h-1 w-20 bg-gold-500 mx-auto"></div>
            <p className="mt-4 text-gray-500">Discover our most popular treatments</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" onClick={() => navigate('/services')}>
              View All Services <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us / About Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold-100 rounded-full z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80" 
                alt="Salon Interior" 
                className="relative z-10 rounded-lg shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl rounded-lg z-20 hidden md:block">
                <p className="font-serif text-4xl font-bold text-gold-500">10+</p>
                <p className="text-sm font-bold uppercase tracking-wider text-gray-400">Years Experience</p>
              </div>
            </div>
            
            <div>
              <span className="text-gold-600 font-bold uppercase tracking-widest text-sm">Why Choose Us</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-salon-black mt-2 mb-6">
                Your Beauty is Our Passion
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                We are not just a salon; we are a community of artists dedicated to bringing out the best version of you. 
                Located in the heart of the city, we offer a tranquil escape from the daily grind.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Trusted local salon with 1000+ happy clients",
                  "Modern techniques for hair and skin care",
                  "Friendly, professional, and certified staff",
                  "Personalized consultation before every service"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-salon-dark">{item}</span>
                  </li>
                ))}
              </ul>

              <Button onClick={() => navigate('/about')}>More About Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-salon-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">Ready to Transform Your Look?</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Book your appointment today and get 10% off on your first visit.
          </p>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 font-bold transition-all duration-200 text-sm tracking-wide uppercase bg-white text-salon-black hover:bg-gold-500 hover:text-white"
          >
            Book via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;