import styled from 'styled-components';
import { ISearchInputProps } from './types';
import { LocationIcon, SearchIcon } from '@components/Icons';
import { StyledInput } from '@components/Input';
import { FormEvent, memo, useCallback } from 'react';

const SearchInput = memo(
  function SearchInput(props: ISearchInputProps): React.ReactElement {
    const {
      className,
      onChangeLocation,
      onChangeSearch,
      onSearch,
      searchText,
      location,
      locationInputConfig,
      searchInputConfig,
    } = props;

    const handleSubmit = useCallback(
      (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch?.();
      },
      [onSearch],
    );

    return (
      <form className={className} onSubmit={handleSubmit}>
        <StyledLocation>
          <LocationIcon size={11} />
          <StyledInput
            {...locationInputConfig}
            variant="primary"
            onChange={onChangeLocation}
            value={location}
          />
        </StyledLocation>
        <StyledSearch>
          <button type="submit">
            <SearchIcon size={16} />
          </button>
          <StyledInput
            {...searchInputConfig}
            variant="primary"
            onChange={onChangeSearch}
            value={searchText}
          />
        </StyledSearch>
      </form>
    );
  },
  (prev, next) => prev.location === next.location && prev.searchText === next.searchText,
);

const StyledSearchInput = styled(SearchInput)<ISearchInputProps>`
  display: flex;
  background-color: #fcfcfc;

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;

const StyledLocation = styled.div`
  border: 1px solid #4c84c3;
  display: flex;
  border-right: none;
  border-radius: 10px 0px 0px 10px;
  padding: 10px 39px 10px 11px;
`;

const StyledSearch = styled.div`
  border: 1px solid #4c84c3;
  display: flex;
  border-radius: 0px 10px 10px 0px;
  padding: 10px 122px 10px 17px;
`;

export { StyledSearchInput };
