import { useProduct } from '@hooks/useProduct';
import { renderHook, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import { MockResponseInit } from 'jest-fetch-mock';
import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

const mockProduct = {
  id: '1',
  name: 'product1',
};

describe('testing useProduct', () => {
  test('should be return data when get product success', async () => {
    fetchMock.mockResponse((_request): Promise<MockResponseInit> => {
      return new Promise((resolve) =>
        resolve({
          body: JSON.stringify(mockProduct),
        }),
      );
    });

    const { result } = renderHook(() => useProduct('1'));

    expect(result.current.isLoading).toEqual(true);

    await waitFor(() => {
      expect(result.current.data?.body).toEqual(mockProduct);
      expect(result.current.isLoading).toEqual(false);
    });
  });
});
