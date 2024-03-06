import { memo } from 'react';
import { Input, InputProps, InputGroup, InputRightElement } from '@chakra-ui/react';

// Components
import { SearchIcon } from '@icons';

interface SearchInputProps extends InputProps {
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const SearchInput = ({ placeholder = 'Start typing...', onChange, value, ...rest }: SearchInputProps) => {
  return (
    <InputGroup maxW={212}>
      <Input
        borderRadius="sm"
        focusBorderColor="transparent"
        _placeholder={{
          color: 'text.placeholder',
        }}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        {...rest}
      />
      <InputRightElement style={{ cursor: 'pointer' }}>
        <SearchIcon />
      </InputRightElement>
    </InputGroup>
  );
};

export default memo(SearchInput);
