import { render } from '@testing-library/react';
import { NAVIGATION_ITEM } from '@constants/baseConfig';
import { StyledNavigation } from '@components/Navigation';
import { INavProps } from '../types';
import { BrowserRouter } from 'react-router-dom';

const StyledNavigationWithRouter = (props: INavProps) => {
  return (
    <BrowserRouter>
      <StyledNavigation {...props} />
    </BrowserRouter>
  );
};

describe('testing Navigation component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<StyledNavigationWithRouter items={NAVIGATION_ITEM} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render link correctly', () => {
    const { getAllByRole } = render(<StyledNavigationWithRouter items={NAVIGATION_ITEM} />);

    const links = getAllByRole('link');

    expect(links.length === NAVIGATION_ITEM.length).toEqual(true);

    NAVIGATION_ITEM.forEach((navItem, index) => {
      const link = links[index] as HTMLAnchorElement;

      expect(link.innerHTML).toBe(navItem.name);
      expect(link.href).toBe(`http://localhost${navItem.path}`);
    });
  });
});
