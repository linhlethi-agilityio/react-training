import { API_BASE_URL, API_PATH } from '@constants/api';
import { get, post, remove, update } from './APIRequest';
import { ICartProduct, ICartProductInput } from '@type/product';

export const getProductFromCart = async (): Promise<ICartProduct[]> => {
  const result = await get<ICartProduct[]>(`${API_BASE_URL}/${API_PATH.CART}?_expand=product`);

  return result.body;
};

export const removeProductCart = async (id: number): Promise<void> => {
  remove(`${API_BASE_URL}/${API_PATH.CART}/${id}`);
};

export const updateProductCart = async (id: number, data: { quantity: number }) => {
  const result = await update<ICartProductInput>(`${API_BASE_URL}/${API_PATH.CART}/${id}`, data);

  return result.body;
};

export const addProductToCart = async (data: Partial<ICartProductInput>) => {
  const result = await post<ICartProductInput>(`${API_BASE_URL}/${API_PATH.CART}`, data);

  return result.body;
};
