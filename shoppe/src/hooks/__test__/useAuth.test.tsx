import { useAuth } from '@hooks/useAuth';
import { renderHook, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import { MockResponseInit } from 'jest-fetch-mock';
import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

const userInput = {
  email: 'name@gmail.com',
  password: '123456',
};

describe('testing useAuth', () => {
  test('should be return data when use Login success', async () => {
    fetchMock.mockResponse((_request): Promise<MockResponseInit> => {
      return new Promise((resolve) =>
        resolve({
          body: JSON.stringify(userInput),
        }),
      );
    });

    const { result } = renderHook(() => useAuth());

    expect(result.current.isLoading).toEqual(true);
    result.current.login(userInput);

    await waitFor(() => {
      expect(result.current.data).toEqual(userInput);
      expect(result.current.isLoading).toEqual(false);
    });
  });

  test('should be return error when use Logout success', async () => {
    const { result } = renderHook(() => useAuth());

    result.current.logout();

    await waitFor(() => {
      expect(result.current.data).toEqual(null);
      expect(result.current.isLoading).toEqual(false);
    });
  });
});
