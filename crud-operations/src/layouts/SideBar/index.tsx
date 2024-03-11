import { memo, useEffect, useState } from 'react';
import { Avatar, Heading, Text, VStack } from '@chakra-ui/react';

// Constants
import { ROUTERS } from '@constants';

// Utils
import { acronymText } from '@utils';

// Hooks
import { useAuth } from '@hooks';

// Types
import { User } from '@types';

// Components
import { BrandLogo, Navigation, LogoutButton } from '@components';

interface SideBarProps {
  isClosed?: boolean;
  onNavigate: (path: string) => void;
  onLogout: () => void;
}

const SideBar = ({ isClosed, onNavigate, onLogout }: SideBarProps) => {
  const { getCurrentUser } = useAuth();
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const getMe = async () => {
      const userResponse = await getCurrentUser();

      setCurrentUser(userResponse as unknown as User);
    };

    getMe();
  }, [getCurrentUser]);

  return (
    <VStack w={isClosed ? 75 : 270} px={isClosed ? 2 : 5} py={18} bg="background.sidebar" transition="1s">
      <BrandLogo isAcronym={isClosed} onClick={() => onNavigate(ROUTERS.DASHBOARD)} />

      {/* User profile */}
      <VStack boxSize="100%" spacing={20}>
        <VStack mt={54} maxW={130} mx="auto" spacing={isClosed ? 2 : 5}>
          <Avatar boxSize={isClosed ? 45 : 128} borderWidth={1} borderStyle="solid" transition="1s" />
          <VStack textAlign="center" spacing={isClosed ? 0 : 2.5}>
            <Heading fontWeight="bold" fontSize={isClosed ? 'xs' : 'sm'} lineHeight="md">
              {isClosed ? acronymText(currentUser?.name || '') : currentUser?.name}
            </Heading>
            <Text color="primary" fontSize={isClosed ? 'xs' : 'sm'} textTransform="capitalize">
              {currentUser?.rule}
            </Text>
          </VStack>
        </VStack>

        <VStack w="full" justifyContent="space-between" h="full">
          {/* Menu */}
          <Navigation isShorter={isClosed} />

          {/* Logout button */}
          <LogoutButton isShorter={isClosed} onLogout={onLogout} />
        </VStack>
      </VStack>
    </VStack>
  );
};

export default memo(SideBar);
