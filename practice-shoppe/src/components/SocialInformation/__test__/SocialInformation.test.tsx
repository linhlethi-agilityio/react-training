import { RenderResult, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { StyledSocialInformation } from '@components/SocialInformation';
import { ISocialInformationProps } from '../types';
import { SOCIAL_INFORMATION } from '@constants/baseConfig';

const StyledSocialInformationWithRouter = (props: ISocialInformationProps) => {
  return (
    <BrowserRouter>
      <StyledSocialInformation {...props} />
    </BrowserRouter>
  );
};

describe('testing SocialInformation component', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<StyledSocialInformationWithRouter data={SOCIAL_INFORMATION} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = wrapper;

    expect(asFragment()).toMatchSnapshot();
  });

  it('should be render icon linkedin first', () => {
    const { getAllByRole } = wrapper;

    const links = getAllByRole('link') as HTMLLinkElement[];

    expect(links[0].href === SOCIAL_INFORMATION.linkedin);
  });

  it('should be render icon facebook middle', () => {
    const { getAllByRole } = wrapper;
    const links = getAllByRole('link') as HTMLLinkElement[];

    expect(links[1].href === SOCIAL_INFORMATION.facebook).toBe(true);
  });

  it('should be render icon instagram middle', () => {
    const { getAllByRole } = wrapper;

    const links = getAllByRole('link') as HTMLLinkElement[];

    expect(links[2].href === SOCIAL_INFORMATION.instagram).toBe(true);
  });

  it('should be render icon twitter last', () => {
    const { getAllByRole } = wrapper;

    const links = getAllByRole('link') as HTMLLinkElement[];

    expect(links[3].href === SOCIAL_INFORMATION.twitter).toBe(true);
  });
});
