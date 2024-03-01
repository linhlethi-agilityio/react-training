import { useCallback, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';

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

  useEffect(() => {
    const getSideBarState = localStorage.getItem('sidebar');

    if (getSideBarState && sideBarState !== getSideBarState) {
      setSideBarState(getSideBarState);
    }
  }, []);

  const handleLogout = useCallback(() => {
    console.log('TODO: Handle logout');
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
      <SideBar
        isClosed={sideBarState === SideBarState.Closed}
        onLogout={handleLogout}
        onNavigate={navigate}
        onToggle={handleToggleSideBar}
      />
      <Box width="auto" flex={1}>
        {/* Header */}
        <Header isClosedSideBar={sideBarState === SideBarState.Closed} onSearch={handleOnSearch} onToggleSideBar={handleToggleSideBar} />

        {/* Content of page will render here */}
        <Box overflowY="auto" height="calc(100vh - 64px)" px={30} pb={30} >
          <Outlet />
        </Box>
      </Box>
    </Flex>
  );
};

export default BaseLayout;
