import { useProducts } from '@hooks/useProducts';
import { renderHook, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import { MockResponseInit } from 'jest-fetch-mock';
import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

const mockProducts = [
  {
    id: '1',
    name: 'product1',
  },
  {
    id: '2',
    name: 'product2',
  },
];

describe('testing useProducts', () => {
  test('should be return data when get products success', async () => {
    fetchMock.mockResponse((_request): Promise<MockResponseInit> => {
      return new Promise((resolve) =>
        resolve({
          body: JSON.stringify(mockProducts),
        }),
      );
    });

    const { result } = renderHook(() => useProducts({ _page: '1', _limit: '2' }));

    expect(result.current.isLoading).toEqual(true);

    await waitFor(() => {
      expect(result.current.data?.body).toEqual(mockProducts);
      expect(result.current.isLoading).toEqual(false);
    });
  });
});
