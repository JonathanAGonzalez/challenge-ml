import axios from 'axios';

import { ProductDetailData } from '../interfaces/items.interface';
import { apiConfig } from '../configs/server.config';

export const getProductDetailService = async (q: string) => {
  const items = await axios.get<ProductDetailData>(
    `${apiConfig.URL}/items/${q}`
  );

  return items.data;
};
