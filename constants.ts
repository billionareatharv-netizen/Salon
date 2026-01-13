import { ServiceCategory, ServiceItem, GalleryImage } from './types';

// Business Details
export const SALON_NAME = "Glow & Style Salon";
export const SALON_PHONE = "919876543210"; // Dummy international format
export const SALON_DISPLAY_PHONE = "+91 98765 43210";
export const SALON_ADDRESS = "123, Fashion Avenue, High Street, City Center";
export const SALON_EMAIL = "hello@glowandstyle.com";
export const WHATSAPP_MESSAGE_PREFILL = "Hi, I would like to book an appointment.";

// Navigation
export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

// Services Data
export const SERVICES: ServiceItem[] = [
  // Hair
  {
    id: 'h1',
    name: 'Advanced Haircut & Styling',
    description: 'Includes wash, conditioning, advanced cut, and blow-dry styling.',
    price: '$25',
    category: ServiceCategory.HAIR,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h2',
    name: 'Keratin Hair Spa',
    description: 'Deep conditioning treatment to restore moisture and shine.',
    price: '$45',
    category: ServiceCategory.HAIR,
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h3',
    name: 'Global Hair Coloring',
    description: 'Ammonia-free premium hair coloring for a fresh new look.',
    price: '$80+',
    category: ServiceCategory.HAIR,
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80'
  },
  // Beauty
  {
    id: 'b1',
    name: 'Gold Radiance Facial',
    description: 'Brightening facial using premium gold-infused products.',
    price: '$50',
    category: ServiceCategory.BEAUTY,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'b2',
    name: 'Classic Manicure & Pedicure',
    description: 'Complete nail care with massage and polish application.',
    price: '$35',
    category: ServiceCategory.BEAUTY,
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80'
  },
  // Grooming
  {
    id: 'g1',
    name: 'Beard Sculpting & Trim',
    description: 'Professional beard shaping with hot towel treatment.',
    price: '$15',
    category: ServiceCategory.GROOMING,
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g2',
    name: 'De-Tan Treatment',
    description: 'Effective removal of tan for face and neck.',
    price: '$20',
    category: ServiceCategory.GROOMING,
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80'
  },
  // Bridal
  {
    id: 'br1',
    name: 'Bridal Makeup Package',
    description: 'Complete bridal look including hair, makeup, and draping.',
    price: '$250+',
    category: ServiceCategory.BRIDAL,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'br2',
    name: 'Party Glam Makeup',
    description: 'Stunning evening makeup for guests and bridesmaids.',
    price: '$75',
    category: ServiceCategory.BRIDAL,
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80'
  }
];

// Gallery Data
export const GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=800&q=80', caption: 'Luxury Interior', category: 'interior' },
  { id: '2', url: 'https://images.unsplash.com/photo-1521590832169-dca1f55b191c?auto=format&fit=crop&w=800&q=80', caption: 'Creative Cut', category: 'work' },
  { id: '3', url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80', caption: 'Bridal Glow', category: 'work' },
  { id: '4', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80', caption: 'Waiting Area', category: 'interior' },
  { id: '5', url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80', caption: 'Nail Art', category: 'work' },
  { id: '6', url: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80', caption: 'Color Transformation', category: 'work' },
];