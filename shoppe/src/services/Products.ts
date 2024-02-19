import { API_BASE_URL, API_PATH } from '@constants/api';
import { get } from './APIRequest';
import { IProduct } from '@type/product';

export const getProductById = async (id: string) => {
  const result = await get<IProduct>(`${API_BASE_URL}/${API_PATH.PRODUCTS}/${id}`);

  return result.body;
};

export const getProducts = async (params: URLSearchParams, searchValue?: string) => {
  const url = new URL(`${API_BASE_URL}/${API_PATH.PRODUCTS}?${params}`);

  if (searchValue) {
    url.searchParams.append('name', searchValue);
  }

  const result = await get<IProduct[]>(url);

  const resultData = {
    products: result.body,
    totalProducts: result.headers.get('x-total-count'),
  };

  return resultData;
};
