import { RenderResult, render } from '@testing-library/react';
import { StyledBox } from '@components/Box';

describe('testing Box component', () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<StyledBox>Box</StyledBox>);
  });

  it('matches snapshot', () => {
    const { asFragment } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  });
});
