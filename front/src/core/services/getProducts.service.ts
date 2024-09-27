import axios from 'axios';
import { ProductData } from '../interfaces/items.interface';
import { apiConfig } from '../configs/server.config';

export const getProductsService = async (query: string) => {
  const items = await axios.get<ProductData>(
    `${apiConfig.URL}/items?search=${query}`
  );

  return items.data;
};
