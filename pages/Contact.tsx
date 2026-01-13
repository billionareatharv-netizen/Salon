import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react';
import { SALON_ADDRESS, SALON_DISPLAY_PHONE, SALON_EMAIL, SALON_PHONE } from '../constants';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const text = `*New Appointment Request*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${SALON_PHONE}?text=${encodeURIComponent(text)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-20">
      <section className="bg-salon-black text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-400">Book your appointment or visit us today.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h2 className="font-serif text-3xl font-bold text-salon-black mb-6">Get In Touch</h2>
                <p className="text-gray-500 leading-relaxed">
                  Have a question about our services? Want to book a consultation? 
                  Fill out the form or reach out to us directly. We are here to help you shine.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-salon-light p-3 rounded-full text-gold-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-salon-black">Visit Us</h3>
                    <p className="text-gray-500">{SALON_ADDRESS}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-salon-light p-3 rounded-full text-gold-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-salon-black">Call or WhatsApp</h3>
                    <p className="text-gray-500">{SALON_DISPLAY_PHONE}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-salon-light p-3 rounded-full text-gold-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-salon-black">Email</h3>
                    <p className="text-gray-500">{SALON_EMAIL}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-salon-light p-3 rounded-full text-gold-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-salon-black">Opening Hours</h3>
                    <p className="text-gray-500">Mon - Fri: 10am - 8pm</p>
                    <p className="text-gray-500">Sat - Sun: 9am - 9pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-salon-light p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-serif text-2xl font-bold text-salon-black mb-6">Book Appointment</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all"
                    placeholder="Your Full Name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all"
                    placeholder="Your Phone Number"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Preferred Service</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="Haircut & Styling">Haircut & Styling</option>
                    <option value="Facial Treatment">Facial Treatment</option>
                    <option value="Bridal Makeup">Bridal Makeup</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all resize-none"
                    placeholder="Preferred date/time or specific requests..."
                  />
                </div>

                <Button type="submit" fullWidth className="gap-2">
                  Send via WhatsApp <Send size={18} />
                </Button>
                <p className="text-xs text-gray-400 text-center mt-4">
                  Clicking submit will open WhatsApp with your details pre-filled.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed (Dummy) */}
      <section className="h-[400px] bg-gray-200 relative">
        {/* Placeholder for map functionality */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="text-center text-gray-400">
                <MapPin size={48} className="mx-auto mb-2 opacity-50"/>
                <p>Google Maps Embed would go here</p>
            </div>
        </div>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1328965839446!2d77.0270!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzM0LjIiTiA3N8KwMDEnMzcuMiJF!5e0!3m2!1sen!2sin!4v1632731000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            loading="lazy"
            className="absolute inset-0 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
            title="Salon Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;