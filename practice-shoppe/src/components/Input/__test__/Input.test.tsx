import StyledInput from '@components/Input';
import { render } from '@testing-library/react';

describe('testing Input component', () => {
  it('testing secondary variant props', () => {
    const { asFragment } = render(<StyledInput variant="secondary" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('testing primary variant props', () => {
    const { asFragment } = render(<StyledInput variant="primary" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should have defaultProps variant', () => {
    const { asFragment } = render(<StyledInput />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('testing border-bottom with color error props', () => {
    const { asFragment } = render(<StyledInput error={true} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
