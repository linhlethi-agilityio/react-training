import { IUserState } from '@contexts/UserContext/types';
import { IUser } from '@data-types/user';

export enum USER_ACTIONS {
  REQUEST_USER = 'REQUEST_USER',
  REQUEST_USER_SUCCESS = 'REQUEST_USER_SUCCESS',
  REQUEST_USER_FAIL = 'REQUEST_USER_FAIL',
  EDIT_USER_PROFILE = 'EDIT_USER_PROFILE',
  ONCHANGE_USER_PROFILE = 'ONCHANGE_USER_PROFILE',
}

interface RequestUser {
  type: USER_ACTIONS.REQUEST_USER;
}

interface RequestUserSuccess {
  type: USER_ACTIONS.REQUEST_USER_SUCCESS;
  user: IUser;
}

interface RequestUserFail {
  type: USER_ACTIONS.REQUEST_USER_FAIL;
  errorMessage: string;
}

interface EditUserProfile {
  type: USER_ACTIONS.EDIT_USER_PROFILE;
  user: IUser;
}

interface OnchangeUserProfile {
  type: USER_ACTIONS.ONCHANGE_USER_PROFILE;
  editInfo: IUser;
}

export type UserAction =
  | RequestUser
  | RequestUserFail
  | RequestUserSuccess
  | EditUserProfile
  | OnchangeUserProfile;

const userReducer = (state: IUserState, action: UserAction): IUserState => {
  switch (action.type) {
    case USER_ACTIONS.REQUEST_USER:
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case USER_ACTIONS.REQUEST_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case USER_ACTIONS.REQUEST_USER_FAIL:
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    case USER_ACTIONS.ONCHANGE_USER_PROFILE:
      return {
        ...state,
      };
    case USER_ACTIONS.EDIT_USER_PROFILE:
      return {
        ...state,
        user: action.user,
      };

    default:
      return {
        ...state,
      };
  }
};

export { userReducer };
