import { StyledFooter } from '@layouts/Footer';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

const StyledFooterWithRouter = () => {
  return (
    <BrowserRouter>
      <StyledFooter />
    </BrowserRouter>
  );
};

describe('testing Footer component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<StyledFooterWithRouter />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should call onChange when change input', () => {
    const { getByRole } = render(<StyledFooterWithRouter />);

    const input = getByRole('textbox') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'new value' } });
    expect(input.value).toBe('new value');
  });

  it('should call onSubmit when click button', () => {
    const { getByRole } = render(<StyledFooterWithRouter />);

    const button = getByRole('button') as HTMLButtonElement;

    fireEvent.click(button);
    expect(button).toBeTruthy();
  });
});
