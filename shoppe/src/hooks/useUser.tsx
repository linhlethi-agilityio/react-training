import { get } from 'src/services/APIRequest';
import useSWR from 'swr';

export const useUser = () => {
  const { data, error } = useSWR(['http://localhost:3000/user', { refreshInterval: 0 }], get);

  return {
    data: data,
    error: error,
  };
};
