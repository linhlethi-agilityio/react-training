import { IUser } from '@data-types/user';

export interface IUserContext {
  state: IUserState;
  actions: {
    userRequestSuccess: (response: IUser) => void;
    editUserProfile: (response: IUser) => void;
    onChangeUserInfo: (response: IUser) => void;
  };
}

export interface IUserState {
  user: IUser | undefined;
  editInfo: IUser;
  loading: boolean;
  errorMessage: null | string;
}
