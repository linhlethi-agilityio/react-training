import { useEffect } from 'react';
import { NavigateFunction } from 'react-router-dom';

// Constants
import { ERROR_MESSAGES, ROUTERS } from '@constants';

// Hooks
import { useAuth } from './useAuth';
import { CreateToastFnReturn } from '@chakra-ui/react';
import { isFutureTime } from '@utils';

export const useValidateIdentity = async (navigate: NavigateFunction, toast: CreateToastFnReturn) => {
  const { getCurrentUser } = useAuth();

  useEffect(() => {
    const handleGetCurrentUser = async () => {
      const user = await getCurrentUser();
      toast.closeAll();

      if (user) {
        if (!isFutureTime(user.exp)) {
          toast({
            title: ERROR_MESSAGES.LOGIN_FAILED,
            description: ERROR_MESSAGES.INVALID_ACCESS_TOKEN,
            status: 'error',
          });

          return navigate(ROUTERS.LOGIN);
        }

        return navigate(ROUTERS.DASHBOARD);
      }

      return navigate(ROUTERS.LOGIN);
    };

    handleGetCurrentUser();
  }, []);
};
