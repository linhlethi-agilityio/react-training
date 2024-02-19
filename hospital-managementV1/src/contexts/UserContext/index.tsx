import { IContextProviderProps } from '@contexts/AppContext/types';
import { IUser } from '@data-types/user';
import { userReducer, USER_ACTIONS } from '@reducers/UserReducer';
import { createContext, useReducer } from 'react';
import { IUserContext, IUserState } from './types';

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const initialEditInfo = {
  name: '',
  email: '',
  phone: '',
  location: '',
};

export const initialState: IUserState = {
  user: undefined,
  editInfo: initialEditInfo,
  loading: false,
  errorMessage: null,
};

export const UserProvider = (props: IContextProviderProps) => {
  const { children } = props;

  const [state, dispatch] = useReducer(userReducer, initialState);

  const userRequestSuccess = (response: IUser) => {
    dispatch({ type: USER_ACTIONS.REQUEST_USER_SUCCESS, user: response });
  };

  const onChangeUserInfo = (response: IUser) => {
    dispatch({ type: USER_ACTIONS.ONCHANGE_USER_PROFILE, editInfo: response });
  };

  const editUserProfile = (response: IUser) => {
    dispatch({ type: USER_ACTIONS.EDIT_USER_PROFILE, user: response });
  };

  return (
    <UserContext.Provider
      value={{ state, actions: { userRequestSuccess, editUserProfile, onChangeUserInfo } }}
    >
      {children}
    </UserContext.Provider>
  );
};
