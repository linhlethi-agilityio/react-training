import { IUser } from '@type/user';
import { ReactNode } from 'react';

export interface IUserContext {
  state: IUserState;
  actions: {
    setLoading: (loading: boolean) => void;
    postLoginRequestSuccess: (token: string, user: IUser) => void;
    setErrorMessage: (message: string) => void;
    logout: () => void;
    onChangeInput: (value: Partial<IUser>) => void;
  };
}

export interface IContextProviderProps {
  children: ReactNode;
}

export interface IUserState {
  userInput: Partial<IUser>;
  user: null | IUser;
  token: null | string;
  loading: boolean;
  errorMessage: null | string;
}
