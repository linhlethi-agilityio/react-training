import { memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { VStack, Icon } from '@chakra-ui/react';

// Constants
import { SIDEBAR_NAVIGATION } from '@constants';

// Components
import { SideBarItem } from '@components';

interface NavigationProps {
  isShorter?: boolean;
}

const Navigation = ({ isShorter = false }: NavigationProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <VStack
      spacing={isShorter ? 4 : 18}
      justifyContent="flex-start"
      alignItems="flex-start"
      w={isShorter ? '100%' : 193}
      transition="1s"
    >
      {SIDEBAR_NAVIGATION.map(({ label, icon, router }) => {
        const isFocused = router === location.pathname;

        return (
          <SideBarItem
            key={label}
            isFocused={isFocused}
            icon={<Icon as={icon} />}
            label={!isShorter && label}
            onClick={() => navigate(router)}
          />
        );
      })}
    </VStack>
  );
};

export default memo(Navigation);
