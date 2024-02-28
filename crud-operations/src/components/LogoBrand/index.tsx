import { memo } from 'react';
import { Heading, Link } from '@chakra-ui/react';

// Constants
import { ROUTERS } from '@constants';

interface LogoBrandProps {
  size?: 'extraSmall' | 'large';
  onNavigate: (path: string) => void;
}

const LogoBrand = ({ size = 'extraSmall', onNavigate }: LogoBrandProps) => {
  const handleNavigate = () => {
    onNavigate(ROUTERS.DASHBOARD);
  };

  return (
    <Link
      aria-label="Brand"
      _hover={{
        textDecoration: 'none',
      }}
      onClick={handleNavigate}
    >
      <Heading
        size={size}
        paddingLeft="12px"
        textTransform="uppercase"
        borderLeftWidth="4px"
        borderLeftColor="border.secondary"
      >
        crud operations
      </Heading>
    </Link>
  );
};

export default memo(LogoBrand);
