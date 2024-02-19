import { get } from 'src/services/APIRequest';
import useSWR from 'swr';

export const useProducts = () => {
  const { data, error } = useSWR('http://localhost:3000/products', get);

  return {
    data: data,
    error: error,
  };
};
