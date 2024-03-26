import { memo, useCallback, useState } from 'react';
import { Button, Flex, Icon } from '@chakra-ui/react';

// Components
import { SearchInput, BellIcon, CaretIcon } from '@components';

interface HeaderProps {
  isClosedSideBar?: boolean;
  onToggleSideBar?: () => void;
  onSearch: (keyword: string) => void;
}

const Header = ({ isClosedSideBar = false, onToggleSideBar, onSearch }: HeaderProps) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const textInputted = e.target.value;

      setSearchValue(textInputted);
      onSearch(textInputted);
    },
    [onSearch],
  );

  return (
    <Flex justifyContent="space-between" alignItems="center" padding={3}>
      <Button aria-label="toggle-sidebar" data-testid="toggle-sidebar-button" variant="ghost" onClick={onToggleSideBar}>
        <Icon
          as={CaretIcon}
          boxSize={18}
          transform={isClosedSideBar ? 'rotate(180deg)' : 'rotate(0deg)'}
          transition="1s"
        />
      </Button>
      <Flex gap={27} alignItems="center">
        <SearchInput placeholder="Search..." onChange={handleOnChange} value={searchValue} />
        <Button aria-label="notification" variant="ghost">
          <BellIcon />
        </Button>
      </Flex>
    </Flex>
  );
};

export default memo(Header);
