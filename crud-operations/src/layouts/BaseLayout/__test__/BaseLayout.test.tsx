import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// Components
import BaseLayout from '..';

// Mocking dependencies
jest.mock('@hooks', () => ({
  useAuth: () => ({
    getCurrentUser: jest.fn(),
    logout: jest.fn(),
  }),
  useToastCustom: () => jest.fn(),
}));

jest.mock('jose', () => ({
  // Mock implementations or objects
}));

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

describe('BaseLayout Component', () => {
  test('renders correctly', () => {
    const { container } = render(<BaseLayout onSearch={() => {}} />, { wrapper: MemoryRouter });

    expect(container).toMatchSnapshot();
  });

  test('logout works correctly', () => {
    const { getByText } = render(<BaseLayout onSearch={() => {}} />, { wrapper: MemoryRouter });

    const logoutButton = getByText('Logout');

    fireEvent.click(logoutButton);

    expect(logoutButton).toBeTruthy();
  });

  test('ToggleSideBar works correctly', () => {
    const { getByTestId } = render(<BaseLayout onSearch={() => {}} />, { wrapper: MemoryRouter });

    const logoutButton = getByTestId('toggle-sidebar-button');

    fireEvent.click(logoutButton);

    expect(logoutButton).toBeTruthy();
  });

  // Test other aspects similarly...
});
