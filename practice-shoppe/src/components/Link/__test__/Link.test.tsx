import { StyledLink, StyledNavigationLink } from '@components/Link';
import { render } from '@testing-library/react';
import { ILinkProps } from '../types';
import { BrowserRouter } from 'react-router-dom';

const StyledLinkWithRouter = (props: ILinkProps) => {
  return (
    <BrowserRouter>
      <StyledLink {...props} />
    </BrowserRouter>
  );
};

const StyledNavigationLinkWithRouter = (props: ILinkProps) => {
  return (
    <BrowserRouter>
      <StyledNavigationLink {...props} />
    </BrowserRouter>
  );
};

describe('testing Link component', () => {
  it('Link component matches snapshot', () => {
    const { asFragment } = render(<StyledLinkWithRouter to="/">link</StyledLinkWithRouter>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('NavigationLink component matches snapshot', () => {
    const { asFragment } = render(
      <StyledNavigationLinkWithRouter to="/">link</StyledNavigationLinkWithRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render disabled props', () => {
    const { asFragment } = render(
      <StyledLinkWithRouter disabled={true} to="/">
        link
      </StyledLinkWithRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render link correctly', () => {
    const { getByRole } = render(<StyledLinkWithRouter to="/">link</StyledLinkWithRouter>);

    const link = getByRole('link') as HTMLLinkElement;

    expect(link).toBeTruthy();
    expect(link.href).toBe('http://localhost/');
    expect(link.innerHTML).toBe('link');
  });
});
