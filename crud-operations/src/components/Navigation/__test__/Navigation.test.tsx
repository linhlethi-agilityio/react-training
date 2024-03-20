import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import Navigation from '..';

jest.mock('jose', () => ({}));

jest.mock('@constants', () => ({
  ENVS: {
    VITE_API_ENDPOINT: 'import.meta.env.VITE_API_ENDPOINT',
    VITE_SECRET_KEY: 'import.meta.env.VITE_SECRET_KEY',
  },
  SIDEBAR_NAVIGATION: [
    {
      label: 'Home',
      router: '/',
    },
    {
      label: 'Course',
      router: '/course',
    },
  ],
}));

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  useLocation: () =>
    jest.fn(() => ({
      pathname: '/',
    })),
}));

describe('Navigation component', () => {
  test('should match snapshot for Navigation', () => {
    const { container } = render(<Navigation isShorter />);

    expect(container).toMatchSnapshot();
  });

  test('renders navigation items correctly', () => {
    const { getByText } = render(<Navigation />);

    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Course')).toBeInTheDocument();
  });

  test('navigate router when click navigation item', () => {
    const { getByTestId } = render(<Navigation />);

    fireEvent.click(getByTestId('sidebar-item-Course'));

    expect(mockNavigate).toHaveBeenCalled();
  });
});
