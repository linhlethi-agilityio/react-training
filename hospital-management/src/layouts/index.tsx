import { StyledFooter } from '@layouts/Footer';
import StyledHeader from '@layouts/Header';
import { ILayoutProps } from './types';

const Layout = (props: ILayoutProps) => {
  const { children } = props;

  return (
    <>
      <StyledHeader />
      {children}
      <StyledFooter />
    </>
  );
};

export { Layout };
