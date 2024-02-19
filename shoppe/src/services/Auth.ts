import { API_BASE_URL, API_PATH } from '@constants/api';
import { IUser, IUserLogin } from '@type/user';
import { post } from './APIRequest';

export const login = async (userInput: Partial<IUser>) => {
  const result = await post<IUserLogin>(`${API_BASE_URL}/${API_PATH.LOGIN}`, userInput);

  return result;
};
