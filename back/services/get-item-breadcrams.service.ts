import axios from 'axios';

export const getItemBreadcrumb = async (id: string) => {
  const result = await axios.get(`${process.env.API_URL}/categories/${id}`);
  return result.data.path_from_root.map((category: any) => category.name);
};
