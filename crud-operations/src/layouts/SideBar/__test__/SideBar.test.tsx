import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

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
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

const props = {
  onLogout: jest.fn(),
  onNavigate: jest.fn(),
  isClosed: false,
};

describe('SideBar Component', () => {
  test('renders correctly', () => {
    const { container } = render(<SideBar {...props} />, { wrapper: MemoryRouter });

    expect(container).toMatchSnapshot();
  });
});
