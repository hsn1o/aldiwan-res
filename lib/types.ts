// lib/types.ts
export interface ProductType {
  name: string;
  price: string;
}

export interface Product {
  id: string;
  name: string;
  desc: string;
  /** قد يكون للمنتج سعر أساسي أو يعتمد على الأنواع فقط */
  price?: string;
  imageUrl?: string;
  badges?: string[];
  /** أحجام/خيارات مثل صغير/كبير أو "وجبة/بدون وجبة" */
  types?: ProductType[];
}

export interface Category {
  id: string;
  name: string;
}

export interface Menu {
  categories: Category[];
  products: Record<string, Product[]>;
}
