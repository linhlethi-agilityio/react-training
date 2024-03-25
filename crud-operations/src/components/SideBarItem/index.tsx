import { ReactNode, memo } from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';

export interface SideBarItemProps {
  isFocused?: boolean;
  icon: ReactNode;
  label: string | false;
  onClick?: () => void;
}

const SideBarItem = ({ icon, label, isFocused = false, onClick }: SideBarItemProps) => (
  <HStack
    data-testid={`sidebar-item-${label}`}
    spacing={15}
    pl={label ? 41 : 0}
    py={label ? 3 : 2}
    onClick={onClick}
    w="100%"
    transition="1s"
    cursor="pointer"
    _hover={{
      textDecoration: 'none',
    }}
    {...(isFocused && {
      backgroundColor: 'primary',
      borderRadius: 'xs',
    })}
  >
    <Box
      boxSize={4}
      {...(!label && {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      })}
    >
      {icon}
    </Box>
    {label && <Text>{label}</Text>}
  </HStack>
);

export default memo(SideBarItem);
