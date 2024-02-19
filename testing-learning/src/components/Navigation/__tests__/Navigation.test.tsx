import { RenderResult, render } from '@testing-library/react';
import { NAVIGATION_ITEM } from '@constants/baseConfig';
import { StyledNavigation } from '..';
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
  let wrapper: RenderResult;

  beforeAll(() => {
    wrapper = render(<StyledNavigationWithRouter items={NAVIGATION_ITEM} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = wrapper;

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render link correctly', () => {
    const { getAllByRole } = wrapper;

    const links = getAllByRole('link');

    expect(links.length === NAVIGATION_ITEM.length).toEqual(true);

    NAVIGATION_ITEM.forEach((navItem, index) => {
      const link = links[index] as HTMLAnchorElement;

      expect(link.innerText).toBe(navItem.name);
      expect(link.href).toBe(navItem.path);
    });
  });
});
