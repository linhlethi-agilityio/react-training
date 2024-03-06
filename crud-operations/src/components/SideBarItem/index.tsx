import { ReactNode, memo } from 'react';
import { Box, HStack, Link, Text } from '@chakra-ui/react';

export interface SideBarItemProps {
  isFocused?: boolean;
  icon: ReactNode;
  label: string | false;
  onClick?: () => void;
}

const SideBarItem = ({ icon, label, isFocused, onClick }: SideBarItemProps) => (
  <HStack
    spacing={15}
    pl={label ? 41 : 0}
    py={label ? 3 : 2}
    onClick={onClick}
    w="100%"
    as={Link}
    transition="1s"
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
