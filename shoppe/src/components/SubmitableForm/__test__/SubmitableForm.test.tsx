import { RenderResult, fireEvent, render } from '@testing-library/react';
import { StyledSubmitableForm } from '@components/SubmitableForm';
import { BackArrowIcon } from '@components/Icons';

describe('testing SubmitableForm component', () => {
  let wrapper: RenderResult;

  const onChange = jest.fn();
  const onSubmit = jest.fn();

  beforeEach(() => {
    wrapper = render(
      <StyledSubmitableForm
        placeholderInput="Email"
        inputVariant="secondary"
        value="value"
        onChange={onChange}
        onSubmit={onSubmit}
        IconComponent={BackArrowIcon}
      />,
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = wrapper;

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render SubmitableForm correctly', () => {
    const { getByRole } = wrapper;

    const input = getByRole('textbox') as HTMLInputElement;
    const button = getByRole('button') as HTMLButtonElement;

    expect(input.value).toBe('value');
    expect(button).toBeTruthy();
  });

  it('should call onChange when change input', () => {
    const { getByRole } = wrapper;

    const input = getByRole('textbox') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'new value' } });
    expect(onChange).toHaveBeenCalled();
  });

  it('should call onSubmit when click button', () => {
    const { getByRole } = wrapper;

    const button = getByRole('button') as HTMLButtonElement;

    fireEvent.click(button);
    expect(onSubmit).toBeCalledTimes(1);
  });
});
