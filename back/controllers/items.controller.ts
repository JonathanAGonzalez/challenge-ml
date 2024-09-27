import { Request, Response } from 'express';

import {
  CategoryValue,
  SearchResponse,
} from '../interfaces/response-search.interface';
import { ProductsResponse } from '../interfaces/product-interface';
import { getItemsServices } from '../services/get-items.service';
import { parsePrice } from '../utils/format-price.utils';
import { getItemService } from '../services/get-item.service';
import { getItemBreadcrumb } from '../services/get-item-breadcrams.service';

interface ItemSearchRequest extends Request {
  query: {
    search: string;
  };
  params: {
    id: string;
  };
}

const getItems = async (req: ItemSearchRequest, res: Response) => {
  const { search } = req.query;
  if (!search) {
    res.status(400).json({ message: 'Search query is required' });
    return;
  }

  try {
    const response: SearchResponse = await getItemsServices(search, 4);
    const categoriesResult = await Promise.all(
      response.results.map(
        async (item) => await getItemBreadcrumb(item.category_id || '')
      )
    );
    const breadcrumb = [...new Set(categoriesResult.flat())].join(' > ');

    const formattedData: ProductsResponse = (() => {
      const { available_filters, results } = response;

      const states = available_filters.find((filter) => filter.id === 'state');

      const categoryFilter = available_filters.find(
        (filter) => filter.id === 'category'
      );
      let categories: string[] = [];

      if (categoryFilter) {
        categories = categoryFilter.values
          .map((category: CategoryValue) => category.name)
          .filter((name): name is string => Boolean(name));
      }

      const items = results.map((item) => ({
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id || '',
          ...parsePrice(Number(item.price)),
        },
        picture: item.thumbnail || '',
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        states: states ? states.values[0].name : null,
      }));

      return {
        author: {
          name: 'Jona',
          lastname: 'González',
        },
        categories,
        breadcrumb,
        items,
      };
    })();

    res.status(200).json(formattedData);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error. Please try again later.' });
  }
};

const getItem = async (req: ItemSearchRequest, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ message: 'Item id is required' });
    return;
  }

  try {
    const response = await getItemService(id);
    const breadcrumb = await getItemBreadcrumb(response.item.category_id).catch(
      (err) => console.log(err)
    );

    res.status(200).json({ ...response, breadcrumb: breadcrumb.join(' > ') });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error. Please try again later.' });
  }
};

export { getItems, getItem };
