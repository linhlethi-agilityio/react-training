export interface IApiResponse<T> {
  body: T;
  headers: Headers;
  status?: number;
}

const get = async <T>(url: string | URL): Promise<IApiResponse<T>> => {
  try {
    const response = await fetch(url);

    const responseBody = await response.json();

    const responseData = { body: responseBody, headers: response.headers };

    return responseData;
  } catch (error) {
    throw new Error(`error: ${error}`);
  }
};

const post = async <T>(url: string, data: Partial<T>): Promise<IApiResponse<T>> => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const responseBody = await response.json();

    const responseData = {
      status: response.status,
      body: responseBody,
      headers: response.headers,
    };

    return responseData;
  } catch (error) {
    throw new Error(`error: ${error}`);
  }
};

const remove = async (url: string): Promise<void> => {
  try {
    await fetch(url, {
      method: 'DELETE',
    });
  } catch (error) {
    throw new Error(`error: ${error}`);
  }
};

const update = async <T>(url: string, data: Partial<T>): Promise<IApiResponse<T>> => {
  try {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const responseBody = await response.json();

    const responseData = { body: responseBody, headers: response.headers };

    return responseData;
  } catch (error) {
    throw new Error(`error: ${error}`);
  }
};

export { get, post, remove, update };
