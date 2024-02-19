import { render } from '@testing-library/react';
import StyledText from '@components/Text';

describe('testing Text component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<StyledText>text</StyledText>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be render secondary color', () => {
    const { asFragment } = render(<StyledText color="secondary">text</StyledText>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be render tertiary color', () => {
    const { asFragment } = render(<StyledText color="tertiary">text</StyledText>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be render error color', () => {
    const { asFragment } = render(<StyledText color="error">text</StyledText>);
    expect(asFragment()).toMatchSnapshot();
  });
});
