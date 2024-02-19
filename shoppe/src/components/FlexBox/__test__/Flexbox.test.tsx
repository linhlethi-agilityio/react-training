import { RenderResult, render } from '@testing-library/react';
import { StyledFlexBox } from '@components/FlexBox';
describe('testing Flexbox component', () => {
  let wrapper: RenderResult;
  beforeEach(() => {
    wrapper = render(<StyledFlexBox />);
  });
  it('matches snapshot', () => {
    const { asFragment } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
});
