import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';

// Components
import SideBar from '../SideBar';
import { Header } from '@components';

const BaseLayout = () => {
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    // TODO: Handle later
  }, []);

  return (
    <Flex>
      <SideBar onLogout={handleLogout} onNavigate={navigate} />
      <Box width="auto" flex={1}>
        <Header />
      </Box>
    </Flex>
  );
};

export default BaseLayout;
