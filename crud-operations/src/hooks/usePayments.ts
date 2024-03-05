import useSWR from 'swr';

// Constants
import { API_ENDPOINTS, ENVS } from '@constants';

// Services
import { get } from '@services';

// Types
import { Payment } from '@types';

export const usePayments = () => {
  const paymentsEndPoint = `${ENVS.VITE_API_ENDPOINT}${API_ENDPOINTS.PAYMENTS}`;

  const { data, error } = useSWR<Payment[]>(paymentsEndPoint, get);

  return {
    payments: data,
    isLoading: !data && !error,
  };
};
