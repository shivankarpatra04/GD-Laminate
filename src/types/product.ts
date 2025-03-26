export interface ProductVariant {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description?: string;
  image: string;
  finish?: string;
  thickness?: string;
  variants?: ProductVariant[];
}
  