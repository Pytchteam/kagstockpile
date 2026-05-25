export type Category = 
  | 'Blocks' 
  | 'Cement' 
  | 'Sand' 
  | 'Gravel' 
  | 'Steel' 
  | 'Wires' 
  | 'Lumber' 
  | 'Ply' 
  | 'Paint' 
  | 'Doors' 
  | 'General Hardware';

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  price: number;
  unit: string;
  image: string;
  inStock: boolean;
}

export interface Bundle {
  id: string;
  name: string;
  description: string;
  image: string;
  items: { productId: string; quantity: number }[];
  basePrice: number;
}

export interface QuoteRequest {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  deliveryAddress: string;
  parish: string;
  projectType: string;
  items: { productId: string; quantity: number }[];
  status: 'New' | 'Contacted' | 'Quoted' | 'Won' | 'Lost';
  createdAt: string;
}

export interface DeliveryEstimate {
  parish: string;
  baseRate: number;
  estimatedDays: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
}
