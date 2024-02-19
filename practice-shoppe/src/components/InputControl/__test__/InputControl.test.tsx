import { RenderResult, fireEvent, render } from '@testing-library/react';
import { StyledInputControl } from '..';

describe('testing InputControl component', () => {
  let wrapper: RenderResult;

  const onChange = jest.fn();

  beforeEach(() => {
    wrapper = render(
      <StyledInputControl label="Name" value="value" name="name" id="name" onChange={onChange} />,
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = wrapper;

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render InputControl correctly', () => {
    const { getByLabelText } = wrapper;

    const input = getByLabelText('Name:') as HTMLInputElement;

    expect(input.value).toBe('value');
    expect(input.name).toBe('name');
  });

  test('should call onChange when change input', () => {
    const { getByLabelText } = wrapper;

    const input = getByLabelText('Name:') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'new value' } });
    expect(onChange).toHaveBeenCalled();
  });
});
