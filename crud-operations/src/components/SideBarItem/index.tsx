import { Flex, Text } from '@chakra-ui/react';
import { ReactNode, memo } from 'react';

interface SideBarItemProps {
  isFocused?: boolean;
  iconFocused: ReactNode;
  icon: ReactNode;
  onNavigate?: (route: string) => void;
  router?: string;
  label: string;
}

const SideBarItem = ({ icon, onNavigate, label, router, isFocused, iconFocused }: SideBarItemProps) => {
  const handleNavigate = (): void => {
    onNavigate && router && onNavigate(router);
  };

  return (
    <Flex
      gap="15px"
      paddingY="12px"
      justifyContent="center"
      {...(isFocused && {
        backgroundColor: 'primary',
        borderRadius: 'xs',
      })}
      onClick={handleNavigate}
    >
      {isFocused ? iconFocused : icon}
      <Text fontWeight={isFocused ? 'bold' : 'normal'}>{label}</Text>
    </Flex>
  );
};

export default memo(SideBarItem);
