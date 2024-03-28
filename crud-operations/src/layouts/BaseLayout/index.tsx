import { memo, useCallback, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';

// Constants
import { ERROR_MESSAGES, LOCAL_STORAGE_KEY, ROUTERS } from '@constants';

// Hooks
import { useAuth, useToastCustom } from '@hooks';

// Utils
import { isFutureTime } from '@utils';

// Services
import { removeItemLocalStorage } from '@services';

// Components
import SideBar from '../SideBar';
import { Header } from '@components';

enum SideBarState {
  Open = 'open',
  Closed = 'closed',
}

interface BaseLayoutProps {
  onSearch: (keyword: string) => void;
}

const BaseLayout = ({ onSearch }: BaseLayoutProps) => {
  const [sideBarState, setSideBarState] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToastCustom();
  const { logout, getCurrentUser } = useAuth();

  useEffect(() => {
    const handleValidate = async () => {
      const user = await getCurrentUser();

      if (user) {
        if (!isFutureTime(user.exp)) {
          removeItemLocalStorage(LOCAL_STORAGE_KEY.TOKEN);

          toast({
            title: ERROR_MESSAGES.LOGIN_FAILED,
            description: ERROR_MESSAGES.INVALID_ACCESS_TOKEN,
            status: 'error',
          });

          return navigate(ROUTERS.LOGIN);
        }
      } else {
        return navigate(ROUTERS.LOGIN);
      }
    };

    handleValidate();
  }, [getCurrentUser, navigate, toast]);

  useEffect(() => {
    const getSideBarState = localStorage.getItem('sidebar');

    if (getSideBarState && sideBarState !== getSideBarState) {
      setSideBarState(getSideBarState);
    }
  }, [sideBarState]);

  const handleLogout = useCallback(() => {
    logout();

    navigate(ROUTERS.LOGIN);
  }, [logout, navigate]);

  const handleToggleSideBar = useCallback(() => {
    setSideBarState((prev) => {
      const nextState = prev === SideBarState.Open ? SideBarState.Closed : SideBarState.Open;

      localStorage.setItem('sidebar', nextState);

      return nextState;
    });
  }, []);

  return (
    <Flex height="100vh">
      <SideBar isClosed={sideBarState === SideBarState.Closed} onLogout={handleLogout} onNavigate={navigate} />
      <Box width="auto" flex={1}>
        {/* Header */}
        <Header
          isClosedSideBar={sideBarState === SideBarState.Closed}
          {...(location.pathname !== ROUTERS.DASHBOARD && { onSearch: onSearch })}
          onToggleSideBar={handleToggleSideBar}
        />

        {/* Content of page will render here */}
        <Box overflowY="auto" height="calc(100vh - 64px)" px={30} pb={30} bgColor="background.table">
          <Outlet />
        </Box>
      </Box>
    </Flex>
  );
};

export default memo(BaseLayout);
