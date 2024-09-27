interface Author {
  name: string;
  lastname: string;
}

interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

interface ProductDetail extends Product {
  sold_quantity: number;
  description: string;
}

export interface ProductDetailData {
  author: Author;
  item: ProductDetail;
  breadcrumb?: string;
}

export interface Product {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  states?: string;
}

export interface ProductData {
  author: Author;
  categories: string[];
  items: Product[];
  breadcrumb?: string;
}
