import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { ZoomIn } from 'lucide-react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'interior' | 'work'>('all');

  const filteredImages = filter === 'all' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <div className="pt-20">
      <section className="bg-salon-light py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-salon-black mb-4">Gallery</h1>
          <p className="text-gray-500">A glimpse into our world of style.</p>
        </div>
      </section>

      <section className="py-12 bg-white min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex justify-center gap-4 mb-12">
            {[
              { label: 'All', value: 'all' },
              { label: 'Salon Interior', value: 'interior' },
              { label: 'Our Work', value: 'work' }
            ].map(btn => (
              <button
                key={btn.value}
                onClick={() => setFilter(btn.value as any)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${
                  filter === btn.value 
                    ? 'bg-salon-black text-white shadow-lg' 
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-salon-black hover:text-salon-black'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((img) => (
              <div key={img.id} className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 cursor-pointer">
                <img 
                  src={img.url} 
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-serif text-xl font-bold mb-2">{img.caption}</p>
                    <span className="inline-flex items-center text-gold-400 text-sm uppercase tracking-wider font-bold">
                      <ZoomIn size={16} className="mr-2" /> View
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;