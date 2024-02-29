const apiRequest = async <T>(
  url: string,
  { method = 'GET', data, headers }: { method?: string; data?: Partial<T>; headers?: HeadersInit } = {},
): Promise<Response> => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return response;
    }

    const responseError = await response.json();
    throw responseError;
  } catch (error) {
    throw error as Error;
  }
};

const get = async <T>(url: string, headers?: HeadersInit): Promise<T> => {
  const response = await apiRequest(url, { headers });
  return response.json();
};

const patch = async <T extends Partial<T>>(url: string, data: T, headers?: HeadersInit): Promise<T> => {
  const response = await apiRequest(url, { method: 'PATCH', data, headers });
  return response.json();
};

const put = async <T, R>(url: string, data: Partial<T>, headers?: HeadersInit): Promise<R> => {
  const response = await apiRequest(url, { method: 'PUT', data, headers });
  return response.json();
};

const post = async <T, R>(url: string, data: Partial<T>, headers?: HeadersInit): Promise<R> => {
  const response = await apiRequest(url, { method: 'POST', data, headers });
  return response.json();
};

const remove = async (url: string, headers?: HeadersInit): Promise<Response> =>
  await apiRequest(url, { method: 'DELETE', headers });

export { get, patch, post, put, remove };
