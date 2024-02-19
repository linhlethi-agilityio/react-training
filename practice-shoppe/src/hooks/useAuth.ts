import { API_BASE_URL, API_PATH } from '@constants/api';
import { IApiResponse, post } from '@services/APIRequest';
import { IUser, IUserLogin, TUserResponse } from '@type/user';
import useSWR, { useSWRConfig } from 'swr';
import {
  getItemLocalStorage,
  removeItemLocalStorage,
  setItemLocalStorage,
} from '@services/LocalStorage';

const useAuth = () => {
  const key = 'login';

  const { data, isLoading, error } = useSWR<TUserResponse>(key, getItemLocalStorage);
  const { mutate } = useSWRConfig();

  const getUserUrl = `${API_BASE_URL}/${API_PATH.LOGIN}`;

  const login = async (userInput: Partial<IUser>) => {
    const loginRequest = post<IUserLogin>(getUserUrl, userInput);

    mutate(key, loginRequest, {
      populateCache: (loginResponse: IApiResponse<IUserLogin>) => {
        setItemLocalStorage<IUserLogin>(key, loginResponse.body);

        return loginResponse.body;
      },
      revalidate: false,
    });
  };

  const logout = () => {
    mutate(key, null, {
      populateCache: () => {
        removeItemLocalStorage(key);

        return null;
      },
      revalidate: false,
    });
  };

  return { isLoading, error, data, login, logout };
};

export { useAuth };
