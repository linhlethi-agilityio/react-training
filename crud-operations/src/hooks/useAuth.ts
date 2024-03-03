import { useState } from 'react';

// Constants
import { API_ENDPOINTS, ENVS } from '@constants';

// Interface, types
import { User } from '@types';

// Utils
import { createJWT, decryptPassword, getRequest, verifyJWT } from '@utils';

// Services
import { getItemLocalStorage, setItemLocalStorage, removeItemLocalStorage } from '@services';

interface ErrorResponse {
  message: string;
}

interface Me {
  email: string;
  createdAt: number;
  jwt: string;
}

const verifyEmailAndPassword = async (emailInput: string, passwordInput: string) => {
  const users: User[] | null = await getRequest(`${ENVS.VITE_API_ENDPOINT}${API_ENDPOINTS.USERS}`);

  const user = users?.find(({ email, password }) => {
    const isValidPassword = decryptPassword(password) === passwordInput;
    const isValidEmail = email === emailInput;

    return isValidEmail && isValidPassword;
  });

  if (user) {
    const userData = { email: user.email, createdAt: user.createdAt };
    const jwt = await createJWT(userData, ENVS.VITE_SECRET_KEY);

    return {
      ...userData,
      jwt,
    } as Me;
  }
};

export const getCurrentUser = async () => {
  const jwtToken = getItemLocalStorage('token');

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

        setItemLocalStorage('token', jwt);

        return authResponse;
      }
    } catch (error) {
      setErrorMessage((error as ErrorResponse).message);
    }
  };

  const logout = () => {
    removeItemLocalStorage('token');
  };

  const getCurrentUser = async () => {
    const jwtToken = getItemLocalStorage('token');

    try {
      return await verifyJWT(jwtToken, ENVS.VITE_SECRET_KEY);
    } catch (error) {
      return null;
    }
  };

  return {
    me,
    errorMessage,
    loginWithEmailPassword,
    logout,
    getCurrentUser,
  };
};
