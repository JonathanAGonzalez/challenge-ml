export interface ProductItem {
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  id: string;
  title: string;
  picture: string;
  condition: string;
  free_shipping: boolean;
  description?: string;
  sold_quantity?: number;
  shipping?: any;
  thumbnail?: string;
  currency_id?: string;
  category_id?: string;
}

export interface ProductsResponse {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  items: ProductItem[];
  breadcrams?: string;
}
