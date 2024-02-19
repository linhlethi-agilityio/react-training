import { userReducer, USER_ACTIONS } from '@reducers/UserReducer';
import { IUser } from '@type/user';
import { createContext, useReducer } from 'react';
import { IContextProviderProps, IUserContext, IUserState } from './types';

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const initialState: IUserState = {
  userInput: {
    email: '',
    password: '',
  },
  loading: false,
  errorMessage: null,
  token: null,
  user: null,
};

export const UserProvider = (props: IContextProviderProps) => {
  const { children } = props;

  const [state, dispatch] = useReducer(userReducer, initialState);

  const setLoading = (loading: boolean) => {
    dispatch({ type: USER_ACTIONS.SET_LOADING, loading: loading });
  };

  const postLoginRequestSuccess = (token: string, user: IUser) => {
    dispatch({ type: USER_ACTIONS.POST_LOGIN_REQUEST_SUCCESS, token: token, user: user });
  };

  const setErrorMessage = (errorMessage: string) => {
    dispatch({ type: USER_ACTIONS.SET_ERROR_MESSAGE, errorMessage: errorMessage });
  };

  const logout = () => {
    dispatch({ type: USER_ACTIONS.LOGOUT });
  };

  const onChangeInput = (value: Partial<IUser>) => {
    dispatch({ type: USER_ACTIONS.ON_CHANGE_INPUT, userInput: value });
  };

  return (
    <UserContext.Provider
      value={{
        state,
        actions: {
          setLoading,
          postLoginRequestSuccess,
          onChangeInput,
          setErrorMessage,
          logout,
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
