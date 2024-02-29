import { Box, Flex, Text } from '@chakra-ui/react';
import { ReactNode, memo } from 'react';

export interface SideBarItemProps {
  isFocused?: boolean;
  icon: ReactNode;
  onNavigate?: (route: string) => void;
  router?: string;
  label: string;
}

const SideBarItem = ({ icon, onNavigate, label, router, isFocused }: SideBarItemProps) => {
  const handleNavigate = (): void => {
    onNavigate && router && onNavigate(router);
  };

  return (
    <Flex
      paddingY="12px"
      marginTop="16px"
      cursor="pointer"
      {...(isFocused && {
        backgroundColor: 'primary',
        borderRadius: 'xs',
      })}
      position="relative"
      onClick={handleNavigate}
    >
      <Box position="absolute" left="41px">
        {icon}
      </Box>
      <Text paddingLeft="75px">{label}</Text>
    </Flex>
  );
};

export default memo(SideBarItem);
