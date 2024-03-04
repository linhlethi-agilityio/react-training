import { useCallback, useState } from 'react';

// Constants
import { API_ENDPOINTS, ENVS, LOCAL_STORAGE_KEY } from '@constants';

// Interface, types
import { User } from '@types';

// Utils
import { createJWT, decryptPassword, verifyJWT } from '@utils';

// Services
import { getItemLocalStorage, setItemLocalStorage, removeItemLocalStorage, get } from '@services';

interface ErrorResponse {
  message: string;
}

interface Me {
  email: string;
  createdAt: number;
  rule: string;
  name: string;
  jwt: string;
}

const verifyEmailAndPassword = async (emailInput: string, passwordInput: string) => {
  const users: User[] | null = await get(`${ENVS.VITE_API_ENDPOINT}${API_ENDPOINTS.USERS}`);

  const user = users?.find(({ email, password }) => {
    const isValidPassword = decryptPassword(password) === passwordInput;
    const isValidEmail = email === emailInput;

    return isValidEmail && isValidPassword;
  });

  if (user) {
    const userData = { email: user.email, createdAt: user.createdAt, name: user.name, rule: user.rule };
    const jwt = await createJWT(userData, ENVS.VITE_SECRET_KEY);

    return {
      ...userData,
      jwt,
    } as Me;
  }
};

/**
 * @deprecated Moved to useAuth, please don't use it
 */
export const getCurrentUser = async () => {
  const jwtToken = getItemLocalStorage(LOCAL_STORAGE_KEY.TOKEN);

  try {
    return await verifyJWT(jwtToken, ENVS.VITE_SECRET_KEY);
  } catch (error) {
    return null;
  }
};

export const useAuth = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [me, setMe] = useState<Me | null>(null);

  const loginWithEmailPassword = async (email: string, password: string) => {
    try {
      const authResponse = await verifyEmailAndPassword(email, password);

      if (authResponse) {
        const { jwt } = authResponse;

        // Update the current user into state
        setMe(authResponse);

        // Reset error message if any
        setErrorMessage('');

        // Save token into local storage
        setItemLocalStorage(LOCAL_STORAGE_KEY.TOKEN, jwt);

        return authResponse;
      }
    } catch (error) {
      setErrorMessage((error as ErrorResponse).message);
    }
  };

  const logout = () => {
    removeItemLocalStorage(LOCAL_STORAGE_KEY.TOKEN);
  };

  const getCurrentUser = useCallback(async () => {
    const jwtToken = getItemLocalStorage(LOCAL_STORAGE_KEY.TOKEN);

    try {
      return await verifyJWT(jwtToken, ENVS.VITE_SECRET_KEY);
    } catch (error) {
      return null;
    }
  }, []);

  return {
    me,
    errorMessage,
    loginWithEmailPassword,
    logout,
    getCurrentUser,
  };
};
