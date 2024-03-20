import { fireEvent, render } from '@testing-library/react';

// Components
import SideBar from '..';

// Mocking dependencies
jest.mock('@hooks', () => ({
  useAuth: () => ({
    getCurrentUser: jest.fn(),
    logout: jest.fn(),
  }),
  useToastCustom: () => jest.fn(),
}));

jest.mock('jose', () => ({}));

jest.mock('@constants', () => ({
  ENVS: {
    VITE_API_ENDPOINT: 'import.meta.env.VITE_API_ENDPOINT',
    VITE_SECRET_KEY: 'import.meta.env.VITE_SECRET_KEY',
  },
  ROUTERS: {
    LOGIN: '/login',
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
  BRAND_NAME: 'crud operations',
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
  useLocation: () => jest.fn(),
}));

const mockOnNavigate = jest.fn();

const props = {
  onLogout: jest.fn(),
  onNavigate: mockOnNavigate,
};

describe('SideBar Component', () => {
  test('renders correctly', () => {
    const { container } = render(<SideBar {...props} />);

    expect(container).toMatchSnapshot();
  });

  test('renders correctly with isClosed', () => {
    const { container } = render(<SideBar isClosed onLogout={jest.fn()} onNavigate={jest.fn()} />);

    expect(container).toMatchSnapshot();
  });

  test('call onNavigate func when click brand logo', () => {
    const { getByTestId } = render(<SideBar {...props} />);

    fireEvent.click(getByTestId('brand-logo'));

    expect(mockOnNavigate).toHaveBeenCalled();
  });
});
