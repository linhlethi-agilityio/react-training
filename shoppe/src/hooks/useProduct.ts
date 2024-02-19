import { API_BASE_URL, API_PATH } from '@constants/api';
import { IProduct } from '@type/product';
import { IApiResponse, get } from '@services/APIRequest';
import useSWR from 'swr';

const useProduct = (id: string) => {
  const { data, error, isLoading } = useSWR<IApiResponse<IProduct>>(
    `${API_BASE_URL}/${API_PATH.PRODUCTS}/${id}`,
    get,
  );

  return { data, error, isLoading };
};

export { useProduct };
