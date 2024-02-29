import { useState } from 'react';
import { Button, Flex } from '@chakra-ui/react';

// Components
import { SearchInput } from '@components';

// Icons
import { BellIcon, CaretIcon } from '@icons';

const Header = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <Flex justifyContent="space-between" alignItems="center" padding="12px">
      <Button variant="ghost">
        <CaretIcon />
      </Button>
      <Flex gap="27px" alignItems="center">
        <SearchInput placeholder="Search..." onChange={handleOnChange} value={searchValue} />
        <Button variant="ghost">
          <BellIcon />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
