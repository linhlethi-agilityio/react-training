import styled from 'styled-components';
import logo from '@image/logo-header.webp';
import { StyledSearchInput } from '@components/SearchInput';
import { StyledNavigation } from '@components/Navigation';
import { IHeaderProps } from './types';
import { NAVIGATION_ITEM } from '@constants/baseConfig';
import { ChangeEvent, memo, useState } from 'react';
import { IInputProps } from '@components/Input/types';
import { Link } from 'react-router-dom';
import StyledText from '@components/Text';
import { UserIcon } from '@components/Icons';
import { PAGE_ROUTES } from '@constants/routers';
import { StyledLink } from '@components/Link';

const Header = (props: IHeaderProps) => {
  const { className } = props;

  const [searchValue, setSearchValue] = useState('');
  const [locationValue, setLocationValue] = useState('');

  const onChangeLocation = (e: ChangeEvent<HTMLInputElement>) => {
    setLocationValue(e.target.value);
  };

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const locationInputConfig: IInputProps = {
    name: 'location',
    placeholder: 'Location',
    inputWidth: '80px',
    variant: 'primary',
  };

  const searchInputConfig: IInputProps = {
    name: 'search',
    placeholder: 'Search for Doctors, hospital & others....',
    inputWidth: '261px',
    variant: 'primary',
  };

  return (
    <header className={className}>
      <StyledLogo to="/">
        <StyledText as="h1">SwasthU</StyledText>
        <img src={logo} alt="logo" />
      </StyledLogo>
      <StyledSearchInput
        searchText={searchValue}
        location={locationValue}
        locationInputConfig={locationInputConfig}
        searchInputConfig={searchInputConfig}
        onChangeLocation={onChangeLocation}
        onChangeSearch={onChangeSearch}
      />
      <StyledNavigation items={NAVIGATION_ITEM} />
      <StyledLink to={`${PAGE_ROUTES.USERS}/1`}>
        <UserIcon />
      </StyledLink>
    </header>
  );
};

const StyledHeader = styled(Header)<IHeaderProps>`
  height: 100px;
  padding-left: 70px;
  padding-right: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.25);
`;

const StyledLogo = memo(
  styled(Link)`
    text-decoration: none;

    h1 {
      color: #ffffff;
    }

    img {
      position: absolute;
      z-index: 0;
      top: 13px;
    }
  `,
  () => true,
);

export default memo(StyledHeader);
