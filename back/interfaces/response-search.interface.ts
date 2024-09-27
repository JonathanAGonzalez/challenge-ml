import { ProductItem } from './product-interface';

export type SearchResponse = {
  results: ProductItem[];
  available_filters: Filter[];
};

export type CategoryValue = {
  id?: string;
  name?: string;
  results?: number;
};

export type Filter = {
  id: string;
  name: string;
  type: string;
  values: CategoryValue[];
};
