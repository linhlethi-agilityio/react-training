import { ResponseError } from '@helper/ResponseError';

export interface IApiResponse<T> {
  body: T;
  headers: Headers;
  status?: number;
}

const get = async <T>(url: string | URL): Promise<IApiResponse<T>> => {
  const response = await fetch(url);

  const responseBody = await response.json();

  if (!response.ok) {
    throw new ResponseError('error during request', {
      body: responseBody,
      status: response.status,
    });
  }

  const responseData = { body: responseBody, headers: response.headers };

  return responseData;
};

const post = async <T>(url: string, data: Partial<T>): Promise<IApiResponse<T>> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new ResponseError('error during request', {
      body: responseBody,
      status: response.status,
    });
  }

  const responseData = {
    status: response.status,
    body: responseBody,
    headers: response.headers,
  };

  return responseData;
};

const remove = async (url: string): Promise<void> => {
  const response = await fetch(url, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new ResponseError('error during request', {
      body: '',
      status: response.status,
    });
  }
};

const update = async <T>(url: string, data: Partial<T>): Promise<IApiResponse<T>> => {
  const response = await fetch(url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new ResponseError('error during request', {
      body: responseBody,
      status: response.status,
    });
  }

  const responseData = { body: responseBody, headers: response.headers };

  return responseData;
};

export { get, post, remove, update };
