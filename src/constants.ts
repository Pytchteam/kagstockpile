import { Category, Product, DeliveryEstimate } from './types';

export const CATEGORIES: Category[] = [
  'Blocks', 'Cement', 'Sand', 'Gravel', 'Steel', 'Wires', 'Lumber', 'Ply', 'Paint', 'Doors', 'General Hardware'
];

export const PRODUCTS: Product[] = [
  {
    id: 'b1',
    name: '6" Standard Concrete Block',
    category: 'Blocks',
    description: 'High-strength standard weight concrete hollow block for load-bearing walls.',
    price: 185,
    unit: 'Each',
    image: 'https://images.unsplash.com/photo-1590060153074-ce467972ba2b?auto=format&fit=crop&q=80&w=400',
    inStock: true
  },
  {
    id: 'c1',
    name: 'Carib Cement Plus (42.5kg)',
    category: 'Cement',
    description: 'Premium quality Portland cement for high-strength concrete and masonry.',
    price: 1450,
    unit: 'Bag',
    image: 'https://static.wixstatic.com/media/3dc9c0_25bc461cd93145a8a5746d5a44186245~mv2.jpg',
    inStock: true
  },
  {
    id: 's1',
    name: 'Washed River Sand',
    category: 'Sand',
    description: 'Clean, course washed river sand for masonry and rendering.',
    price: 3500,
    unit: 'Cubic Yard',
    image: 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?auto=format&fit=crop&q=80&w=400',
    inStock: true
  },
  {
    id: 'g1',
    name: '3/4" Crushed Gravel',
    category: 'Gravel',
    description: 'Hard limestone crushed gravel for concrete mixing.',
    price: 4200,
    unit: 'Cubic Yard',
    image: 'https://static.wixstatic.com/media/3dc9c0_5c25fb86627c44f0bb57b929d34ca86f~mv2.jpg',
    inStock: true
  },
  {
    id: 'st1',
    name: '1/2" Steel Rebar (20ft)',
    category: 'Steel',
    description: 'Deformed high-tensile steel reinforcing bars for foundation and columns.',
    price: 2200,
    unit: 'Length',
    image: 'https://static.wixstatic.com/media/3dc9c0_c011ff38c6d84ffe974f91d53cc181f5~mv2.jpeg',
    inStock: true
  }
];

export const PARISHES: DeliveryEstimate[] = [
  { parish: 'St. Ann', baseRate: 2500, estimatedDays: '1-2 Days' },
  { parish: 'St. James', baseRate: 8500, estimatedDays: '3-4 Days' },
  { parish: 'Kingston', baseRate: 12000, estimatedDays: '2-3 Days' },
  { parish: 'Trelawny', baseRate: 5500, estimatedDays: '2-3 Days' },
  { parish: 'Manchester', baseRate: 10500, estimatedDays: '3-5 Days' },
  { parish: 'St. Elizabeth', baseRate: 15000, estimatedDays: '4-7 Days' },
];
