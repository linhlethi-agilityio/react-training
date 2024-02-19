import { StyledNumberInput } from '@components/NumberInput';
import { MAX_QUANTITY, MIN_QUANTITY } from '@constants/baseConfig';
import { RenderResult, fireEvent, render } from '@testing-library/react';

describe('testing NumberInput component', () => {
  let wrapper: RenderResult;

  const handleIncrease = jest.fn();
  const handleDecrease = jest.fn();

  beforeEach(() => {
    wrapper = render(
      <StyledNumberInput
        min={MIN_QUANTITY}
        max={MAX_QUANTITY}
        value={5}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
      />,
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = wrapper;

    expect(asFragment()).toMatchSnapshot();
  });

  test('should call handleDecrease one time when click button decrease', () => {
    const { getByText } = wrapper;

    const button = getByText('-') as HTMLButtonElement;
    fireEvent.click(button);
    expect(handleDecrease).toBeCalledTimes(1);
  });

  test('should call handleIncrease one time when click button increase', () => {
    const { getByText } = wrapper;

    const button = getByText('+') as HTMLButtonElement;
    fireEvent.click(button);
    expect(handleIncrease).toBeCalledTimes(1);
  });
});
