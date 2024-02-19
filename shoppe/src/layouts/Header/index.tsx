import { memo, useCallback, useContext } from 'react';
import styled from 'styled-components';
import StyledText from '@components/Text';
import { StyledLink } from '@components/Link';
import { IHeaderProps } from './types';
import { ShoppingCartIcon } from '@components/Icons';
import { UserContext } from '@contexts/UserContext';
import { StyledButton } from '@components/Button';
import { useNavigate } from 'react-router-dom';
import { StyledLoadingSpinner } from '@components/LoadingSpinner';
import { StyledFlexBox } from '@components/FlexBox';

const logo = new URL('/images/logo.webp', import.meta.url).href;

const Header = (props: IHeaderProps) => {
  const { className } = props;
  const { actions, state } = useContext(UserContext);

  const { loading } = state;
  const navigate = useNavigate();

  const renderButtonElement = useCallback(() => {
    const userLogin = localStorage.getItem('login');

    if (userLogin) {
      return (
        <StyledFlexBox gap={20}>
          <StyledLink to="/cart">
            <ShoppingCartIcon size={21} />
          </StyledLink>
          <StyledButton onClick={handleLogout} dis>
            logout
          </StyledButton>
          {loading && <StyledLoadingSpinner />}
        </StyledFlexBox>
      );
    } else
      return (
        <StyledLink to="/login">
          <StyledButton>login</StyledButton>
        </StyledLink>
      );
  }, [loading]);

  const handleLogout = useCallback(() => {
    actions.logout();
    localStorage.removeItem('login');
    navigate('/login');
  }, []);

  return (
    <header className={className}>
      <StyledLogo to="/">
        <StyledText as="h1">Shoppe</StyledText>
        <img src={logo} alt="logo" />
      </StyledLogo>
      {renderButtonElement()}
    </header>
  );
};

const StyledLogo = memo(
  styled(StyledLink)`
    text-decoration: none;

    h1 {
      color: #ffffff;
    }

    img {
      position: absolute;
      z-index: 0;
      top: 60px;
    }
  `,
);

const StyledHeader = memo(styled(Header)`
  display: flex;
  justify-content: space-between;
  max-width: 1248px;
  padding-bottom: 10px;
  padding-right: 59px;
  padding-top: 66px;
  border-bottom: 1px solid #d8d8d8;
  margin: 0 auto;

  button {
    border: none;
    background: none;
  }
`);

export { StyledHeader };
