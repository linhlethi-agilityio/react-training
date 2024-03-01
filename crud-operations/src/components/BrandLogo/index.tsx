import { memo } from 'react';
import { Heading, Link } from '@chakra-ui/react';

// Utils
import { acronymText } from '@utils';

interface BrandLogoProps {
  size?: 'md' | 'lg';
  isAcronym?: boolean;
  onClick: () => void;
}

// TODO: Move this into constant, such as Brand Name
const brandName = 'crud operations';

const BrandLogo = ({ size = 'md', isAcronym, onClick }: BrandLogoProps) => (
  <Link
    _hover={{
      textDecoration: 'none',
    }}
    onClick={onClick}
  >
    <Heading
      size={size}
      paddingLeft="12px"
      textTransform="uppercase"
      borderLeftWidth="4px"
      borderLeftColor="border.secondary"
    >
      {isAcronym ? acronymText(brandName) : brandName}
    </Heading>
  </Link>
);

export default memo(BrandLogo);
