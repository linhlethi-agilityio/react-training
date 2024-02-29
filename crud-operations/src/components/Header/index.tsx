import { useState } from 'react';
import { Button, Flex } from '@chakra-ui/react';

// Components
import { SearchInput } from '@components';

// Icons
import { Bell, Caret } from '@icons';

const Header = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <Flex justifyContent="space-between" alignItems="center" padding="12px">
      <Button
        variant="ghost"
        _hover={{
          bgColor: 'transparent',
        }}
      >
        <Caret />
      </Button>
      <Flex gap="27px" alignItems="center">
        <SearchInput placeholder="Search..." onChange={handleOnChange} value={searchValue} />
        <Button
          variant="ghost"
          _hover={{
            bgColor: 'transparent',
          }}
        >
          <Bell />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
