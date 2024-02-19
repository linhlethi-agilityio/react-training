import { StyledLoadingSpinner } from '@components/LoadingSpinner';
import { render } from '@testing-library/react';

describe('testing LoadingSpinner component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<StyledLoadingSpinner />);

    expect(asFragment()).toMatchSnapshot();
  });
});
