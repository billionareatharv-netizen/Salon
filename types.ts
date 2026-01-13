export enum ServiceCategory {
  HAIR = 'Hair Services',
  BEAUTY = 'Beauty Services',
  GROOMING = 'Grooming',
  BRIDAL = 'Bridal & Party',
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: ServiceCategory;
  image: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  category: 'interior' | 'work';
}

export interface NavLink {
  label: string;
  path: string;
}