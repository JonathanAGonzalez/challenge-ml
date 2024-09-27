export const pathName = {
  home: '/',
  items: '/items',
  'item-detail': '/items/',
  'not-found': '/404',
};

export const GET_HOME_ROUTE = () => pathName.home;
export const GET_ITEMS_ROUTE = (value: string) =>
  `${pathName.items}?q=${value}`;
export const GET_ITEM_DETAIL_ROUTE = (id: string) =>
  `${pathName['item-detail']}/${id}`;
