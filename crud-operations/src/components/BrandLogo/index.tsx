import { memo } from 'react';
import { Heading, Link } from '@chakra-ui/react';

// Utils
import { acronymText } from '@utils';

// Constants
import { BRAND_NAME } from '@constants';

interface BrandLogoProps {
  size?: 'sm' | 'lg';
  isAcronym?: boolean;
  onClick: () => void;
}

const BrandLogo = ({ size = 'sm', isAcronym, onClick }: BrandLogoProps) => (
  <Link
    w="fit-content"
    _hover={{
      textDecoration: 'none',
    }}
    onClick={onClick}
  >
    <Heading
      size={size}
      paddingLeft={3}
      textTransform="uppercase"
      borderLeftWidth={4}
      borderLeftColor="border.secondary"
    >
      {isAcronym ? acronymText(BRAND_NAME) : BRAND_NAME}
    </Heading>
  </Link>
);

export default memo(BrandLogo);
