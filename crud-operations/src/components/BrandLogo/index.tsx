import { memo } from 'react';
import { Heading, Link } from '@chakra-ui/react';

// Constants
import { BRAND_NAME } from '@constants';

// Utils
import { acronymText } from '@utils';

interface BrandLogoProps {
  size?: 'sm' | 'lg';
  isAcronym?: boolean;
  onClick: () => void;
}

const BrandLogo = ({ size = 'sm', isAcronym, onClick }: BrandLogoProps) => (
  <Link
    as="button"
    w="fit-content"
    _hover={{
      textDecoration: 'none',
    }}
    data-testid="brand-logo"
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
