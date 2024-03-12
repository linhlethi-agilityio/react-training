import { render } from '@test-utils';
import '@testing-library/jest-dom';

// Components
import LogoutButton from '..';

const mockProps = {
  text: 'Logout',
  isShorter: false,
  onLogout: jest.fn(),
};

describe('LogoutButton component', () => {
  test('should match snapshot for LogoutButton', () => {
    const { container } = render(<LogoutButton {...mockProps} />);

    expect(container).toMatchSnapshot();
  });
});
