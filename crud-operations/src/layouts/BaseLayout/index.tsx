import { useCallback, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';

// Constants
import { ROUTERS } from '@constants';

// Hooks
import { useAuth } from '@hooks';

// Components
import SideBar from '../SideBar';
import { Header } from '@components';

enum SideBarState {
  Open = 'open',
  Closed = 'closed',
}

const BaseLayout = () => {
  const navigate = useNavigate();
  const [sideBarState, setSideBarState] = useState('');
  const { logout, getCurrentUser } = useAuth();

  useEffect(() => {
    const getSideBarState = localStorage.getItem('sidebar');

    if (getSideBarState && sideBarState !== getSideBarState) {
      setSideBarState(getSideBarState);
    }
  }, []);

  useEffect(() => {
    const handleGetCurrentUser = async () => {
      const user = await getCurrentUser();

      navigate(user ? ROUTERS.DASHBOARD : ROUTERS.LOGIN);
    };

    handleGetCurrentUser();
  }, []);

  const handleLogout = useCallback(() => {
    logout();
    navigate('/login');
  }, []);

  const handleOnSearch = useCallback((keyword: string) => {
    console.log(`TODO: Handle search with: ${keyword}`);
  }, []);

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
          onSearch={handleOnSearch}
          onToggleSideBar={handleToggleSideBar}
        />

        {/* Content of page will render here */}
        <Box overflowY="auto" height="calc(100vh - 64px)" px={30} pb={30}>
          <Outlet />
        </Box>
      </Box>
    </Flex>
  );
};

export default BaseLayout;
