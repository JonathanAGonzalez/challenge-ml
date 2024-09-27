import axios from 'axios';

import { SearchResponse } from '../interfaces/response-search.interface';

export const getItemsServices = async (
  query: string,
  limit?: number
): Promise<SearchResponse> => {
  const url = new URL(`${process.env.API_URL}/sites/MLA/search`);
  const params = new URLSearchParams({ q: query });

  if (limit) {
    params.append('limit', limit.toString());
  }

  url.search = params.toString();

  const response: { data: SearchResponse } = await axios.get(url.toString());
  return response.data;
};
