import { API_BASE_URL, API_PATH } from '@constants/api';
import { IProduct } from '@type/product';
import { IApiResponse, get } from '@services/APIRequest';
import useSWR from 'swr';

const useProducts = (params: Record<string, string>) => {
  const urlParams = new URLSearchParams(params);

  const { data, isLoading, error } = useSWR<IApiResponse<IProduct[]>>(
    `${API_BASE_URL}/${API_PATH.PRODUCTS}?${urlParams}`,
    get,
  );

  return { data, isLoading, error };
};

export { useProducts };
