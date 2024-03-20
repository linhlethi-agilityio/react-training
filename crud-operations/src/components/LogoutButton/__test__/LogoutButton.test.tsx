import { fireEvent, render } from '@test-utils';
import '@testing-library/jest-dom';

// Components
import LogoutButton from '..';

const mockOnLogout = jest.fn();

describe('LogoutButton component', () => {
  test('should match snapshot for LogoutButton', () => {
    const { container } = render(<LogoutButton onLogout={jest.fn()} />);

    expect(container).toMatchSnapshot();
  });

  test('not render text when pass prop isShorter', () => {
    const { queryByText } = render(<LogoutButton isShorter onLogout={jest.fn()} />);

    expect(queryByText('Logout')).toBeNull();
  });

  test('call onLogout func when click logout button', () => {
    const { getByTestId } = render(<LogoutButton isShorter onLogout={mockOnLogout} />);

    fireEvent.click(getByTestId('logout-button'));

    expect(mockOnLogout).toHaveBeenCalled();
  });
});
