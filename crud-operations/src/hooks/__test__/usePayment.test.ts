import { renderHook } from '@testing-library/react-hooks';
import useSWR from 'swr';
import { usePayments } from '..'; // Adjust the import path as necessary
import { Payment } from '@types';
import { get } from '@services';

// Mock the SWR hook
jest.mock('swr');

// Mock the API_ENDPOINTS and ENVS constants
jest.mock('@constants', () => ({
  API_ENDPOINTS: {
    PAYMENTS: '/payments',
  },
  ENVS: {
    VITE_API_ENDPOINT: 'import.meta.env.VITE_API_ENDPOINT',
    VITE_SECRET_KEY: 'import.meta.env.VITE_SECRET_KEY',
  },
}));

jest.mock('@services', () => {
  const originalModule = jest.requireActual('@services');
  return {
    ...originalModule,
    get: jest.fn(),
  };
});

jest.mock('jose', () => ({}));

// Define sample payment data for testing
const mockPayments: Payment[] = [
  {
    id: '1',
    name: 'name 1',
    paymentSchedule: 'paymentSchedule',
    billNumber: 23432432,
    amountPaid: 5497325,
    balanceAmount: 3534536,
    date: '',
  },
];

describe('usePayments', () => {
  it('should return payments and loading status correctly', async () => {
    // Mock the return value of useSWR
    (useSWR as jest.Mock).mockReturnValueOnce({
      data: mockPayments,
      error: undefined,
    });

    // Mock the return value of the get function
    (get as jest.Mock).mockResolvedValueOnce(mockPayments);

    // Render the hook
    const { result } = renderHook(() => usePayments());

    // Check if payments and loading status are returned correctly
    expect(result.current.payments).toEqual(mockPayments);
    expect(result.current.isLoading).toBe(false);
  });

  it('should handle error state correctly', async () => {
    // Mock the return value of useSWR with an error
    (useSWR as jest.Mock).mockReturnValueOnce({
      data: undefined,
      error: new Error('Failed to fetch payments'),
    });

    // Render the hook
    const { result } = renderHook(() => usePayments());

    // Check if error state is handled correctly
    expect(result.current.payments).toBeUndefined();
    expect(result.current.isLoading).toBe(false);
  });
});
