import { IUserState } from '@contexts/UserContext/types';
import { IUser } from '@type/user';

export enum USER_ACTIONS {
  SET_LOADING = ' SET_LOADING',
  POST_LOGIN_REQUEST_SUCCESS = 'POST_LOGIN_REQUEST_SUCCESS',
  SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE ',
  LOGOUT = 'LOGOUT',
  ON_CHANGE_INPUT = 'ON_CHANGE_INPUT',
}

interface setLoading {
  type: USER_ACTIONS.SET_LOADING;
  loading: boolean;
}

interface postLoginRequestSuccess {
  type: USER_ACTIONS.POST_LOGIN_REQUEST_SUCCESS;
  token: string;
  user: IUser;
}

interface setErrorMessage {
  type: USER_ACTIONS.SET_ERROR_MESSAGE;
  errorMessage: string;
}

interface logout {
  type: USER_ACTIONS.LOGOUT;
}

interface onChangeInput {
  type: USER_ACTIONS.ON_CHANGE_INPUT;
  userInput: Partial<IUser>;
}

export type UserAction =
  | setLoading
  | postLoginRequestSuccess
  | setErrorMessage
  | logout
  | onChangeInput;

const userReducer = (state: IUserState, action: UserAction) => {
  switch (action.type) {
    case USER_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.loading,
        errorMessage: null,
      };
    case USER_ACTIONS.SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.errorMessage,
        loading: false,
      };
    case USER_ACTIONS.POST_LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        token: action.token,
        user: action.user,
        loading: false,
        userInput: {
          email: '',
          password: '',
        },
      };
    case USER_ACTIONS.LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
        user: null,
        loading: false,
      };
    case USER_ACTIONS.ON_CHANGE_INPUT:
      return {
        ...state,
        userInput: {
          ...state.userInput,
          ...action.userInput,
        },
      };

    default:
      return {
        ...state,
      };
  }
};

export { userReducer };
