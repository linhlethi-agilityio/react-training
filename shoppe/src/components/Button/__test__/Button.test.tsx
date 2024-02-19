import { StyledButton } from '@components/Button';
import { fireEvent, render } from '@testing-library/react';

describe('testing Button component', () => {
  const onClick = jest.fn();

  it('testing secondary variant props', () => {
    const { asFragment } = render(<StyledButton variant="secondary">Button</StyledButton>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('testing primary variant props', () => {
    const { asFragment } = render(<StyledButton variant="primary">Button</StyledButton>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('testing outline variant props', () => {
    const { asFragment } = render(<StyledButton variant="outline">Button</StyledButton>);

    expect(asFragment()).toMatchSnapshot();
  });

  test('should render button correctly', () => {
    const { getByRole } = render(<StyledButton variant="outline">Button</StyledButton>);
    const button = getByRole('button', { name: /button/i });
    expect(button).toBeTruthy();
  });

  test('should call onClick one time when click button', () => {
    const { getByRole } = render(
      <StyledButton variant="outline" onClick={onClick}>
        Button
      </StyledButton>,
    );
    const button = getByRole('button', { name: /button/i });
    fireEvent.click(button);
    expect(onClick).toBeCalledTimes(1);
  });
});
