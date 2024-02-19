import { get, post, remove, update } from '@services/APIRequest';
import fetchMock from 'jest-fetch-mock';
import { MockResponseInit } from 'jest-fetch-mock';
import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

const body = [
  {
    id: '1',
    name: 'product1',
  },
  {
    id: '2',
    name: 'product2',
  },
];

const mockData = {
  id: '3',
  name: 'product3',
};

describe('testing ApiRequest', () => {
  beforeEach(() => {
    fetchMock.mockResponse((_request): Promise<MockResponseInit> => {
      return new Promise((resolve) =>
        resolve({
          body: JSON.stringify([
            {
              id: '1',
              name: 'product1',
            },
            {
              id: '2',
              name: 'product2',
            },
          ]),
        }),
      );
    });
  });

  it('ensure get request return all data', async () => {
    const response = await get('/products');

    expect(response.body).toStrictEqual(body);
  });

  it('ensure get request throw error when status code is 404', async () => {
    fetchMock.mockResponse((_request): Promise<MockResponseInit> => {
      return new Promise((resolve) =>
        resolve({
          body: JSON.stringify([]),
          status: 404,
        }),
      );
    });

    expect(get('/products')).rejects.toThrow();
  });

  it('ensure post request return response', async () => {
    fetchMock.mockResponse((_request): Promise<MockResponseInit> => {
      return new Promise((resolve) =>
        resolve({
          body: JSON.stringify(mockData),
        }),
      );
    });

    const response = await post('/products', mockData);

    expect(response.body).toEqual(mockData);
  });

  it('ensure post request throw error when status code is 404', async () => {
    fetchMock.mockResponse((_request): Promise<MockResponseInit> => {
      return new Promise((resolve) =>
        resolve({
          body: JSON.stringify([]),
          status: 404,
        }),
      );
    });

    expect(post('/products', mockData)).rejects.toThrow();
  });

  it('ensure update request return response', async () => {
    fetchMock.mockResponse((_request): Promise<MockResponseInit> => {
      return new Promise((resolve) =>
        resolve({
          body: JSON.stringify(mockData),
        }),
      );
    });

    const response = await update('/products/1', mockData);

    expect(response.body).toEqual(mockData);
  });

  it('ensure update request throw error when status code is 404', async () => {
    fetchMock.mockResponse((_request): Promise<MockResponseInit> => {
      return new Promise((resolve) =>
        resolve({
          body: JSON.stringify([]),
          status: 404,
        }),
      );
    });

    expect(update('/products/1', mockData)).rejects.toThrow();
  });

  it('ensure remove request throw error when status code is 404', async () => {
    fetchMock.mockResponse((_request): Promise<MockResponseInit> => {
      return new Promise((resolve) =>
        resolve({
          body: JSON.stringify({}),
          status: 404,
        }),
      );
    });

    expect(remove('/products/1')).rejects.toThrow();
  });
});
