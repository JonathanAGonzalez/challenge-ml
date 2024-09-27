import axios from 'axios';
import { parsePrice } from '../utils/format-price.utils';

export const getItemService = async (id: string) => {
  const BASE_URL = `${process.env.API_URL}/items/${id}`;

  const [itemResponse, itemDescriptionResponse] = await Promise.all([
    axios.get(BASE_URL),
    axios.get(`${BASE_URL}/description`),
  ]);

  const { data: itemData } = itemResponse;
  const { data: descriptionData } = itemDescriptionResponse;

  return {
    author: {
      name: 'Jona',
      lastname: 'González',
    },
    item: {
      id: itemData.id,
      title: itemData.title,
      price: {
        currency: itemData.currency_id,
        ...parsePrice(Number(itemData.price)),
      },
      picture: itemData.pictures[0].url,
      condition: itemData.condition,
      free_shipping: itemData.shipping.free_shipping,
      sold_quantity: itemData.sold_quantity,
      description: descriptionData.plain_text,
      category_id: itemData.category_id,
    },
  };
};
