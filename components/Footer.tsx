import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Scissors } from 'lucide-react';
import { SALON_NAME, SALON_ADDRESS, SALON_DISPLAY_PHONE, SALON_EMAIL, NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-salon-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="text-gold-500" size={24} />
              <span className="font-serif text-2xl font-bold">{SALON_NAME}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience the art of beauty at {SALON_NAME}. We combine modern techniques with premium products to bring out your best look.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-gold-500">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <NavLink to={link.path} className="text-gray-400 hover:text-white text-sm transition-colors uppercase tracking-wider">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-gold-500">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-gold-500" />
                <span>{SALON_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-gold-500" />
                <span>{SALON_DISPLAY_PHONE}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-gold-500" />
                <span>{SALON_EMAIL}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-gold-500">Opening Hours</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span>10:00 AM - 08:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>09:00 AM - 09:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 AM - 06:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {SALON_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;