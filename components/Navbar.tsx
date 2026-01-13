import React, { useState, useEffect } from 'react';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { Menu, X, Scissors } from 'lucide-react';
import { NAV_LINKS, SALON_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <RouterNavLink to="/" className="flex items-center gap-2 group">
            <div className="bg-salon-black text-white p-2 rounded-full group-hover:bg-gold-500 transition-colors">
              <Scissors size={20} />
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight text-salon-black">
              {SALON_NAME}
            </span>
          </RouterNavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <RouterNavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide uppercase hover:text-gold-600 transition-colors ${
                    isActive ? 'text-gold-600 border-b-2 border-gold-500 pb-1' : 'text-salon-dark'
                  }`
                }
              >
                {link.label}
              </RouterNavLink>
            ))}
            <a 
              href="/#book" // Internal anchor for visual effect or link to contact
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = "#/contact";
              }}
              className="bg-salon-black text-white px-5 py-2 text-sm font-medium uppercase tracking-wide hover:bg-gold-500 transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-salon-dark hover:text-gold-600 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out transform origin-top ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-8 space-y-4 flex flex-col items-center">
          {NAV_LINKS.map((link) => (
            <RouterNavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-medium uppercase tracking-wide w-full text-center ${
                  isActive ? 'text-gold-600 bg-gray-50' : 'text-salon-dark hover:text-gold-600 hover:bg-gray-50'
                }`
              }
            >
              {link.label}
            </RouterNavLink>
          ))}
          <RouterNavLink 
            to="/contact"
            className="mt-4 w-full bg-gold-500 text-white px-5 py-3 text-center text-base font-medium uppercase tracking-wide hover:bg-gold-600"
          >
            Book Appointment
          </RouterNavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;