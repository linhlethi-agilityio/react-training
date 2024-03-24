import { render, fireEvent, act, waitFor } from '@testing-library/react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import * as router from 'react-router-dom';

// Hooks
import * as hooks from '@hooks';

import LoginPage from '..';

// Mocking dependencies
jest.mock('@hooks', () => ({
  useToastCustom: jest.fn(),
  useAuth: () => ({
    getCurrentUser: jest.fn(() => ({ email: 'admin@gmail.com' })),
    loginWithEmailPassword: jest.fn(),
  }),
}));

jest.mock('jose', () => ({}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));

const customTheme = {
  ...theme,
  colors: {
    primary: '#FEAF00', // Custom colors here
  },
};

jest.mock('@constants', () => ({
  ENVS: {
    VITE_API_ENDPOINT: 'import.meta.env.VITE_API_ENDPOINT',
    VITE_SECRET_KEY: 'import.meta.env.VITE_SECRET_KEY',
  },
  ERROR_MESSAGES: {
    FIELD_REQUIRED: 'This field is required',
    MIN_PASSWORD_LENGTH: jest.fn(),
  },
  REGEX_PATTERN: {
    EMAIL:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  ROUTERS: {
    DASHBOARD: '/',
  },
  BRAND_NAME: 'crud operations',
}));

const mockLoginWithEmailPassword = jest.fn();
const mockLogout = jest.fn();
const mockGetCurrentUser = jest.fn();
const navigate = jest.fn();
jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);

describe('LoginPage Component', () => {
  test('renders correctly', () => {
    const { container, getByTestId } = render(
      <ChakraProvider theme={customTheme}>
        <LoginPage />
      </ChakraProvider>,
    );

    const linkElement = getByTestId('brand-logo');

    fireEvent.click(linkElement);

    expect(linkElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('calls login function with correct credentials on submit', async () => {
    jest.spyOn(hooks, 'useAuth').mockReturnValue({
      me: null,
      errorMessage: '',
      loginWithEmailPassword: mockLoginWithEmailPassword,
      logout: mockLogout,
      getCurrentUser: mockGetCurrentUser,
    });

    const mockReturnValue = {
      email: 'admin@gmail.com',
      password: 'Admin@1234',
    };

    const { getByLabelText, getByRole } = render(
      <ChakraProvider theme={customTheme}>
        <LoginPage />
      </ChakraProvider>,
    );

    // Click the sign in button
    act(async () => {
      // Fill in email and password fields
      fireEvent.change(getByLabelText('Email'), { target: { value: 'admin@gmail.com' } });
      fireEvent.change(getByLabelText('Password'), { target: { value: 'Admin@123' } });

      mockLoginWithEmailPassword.mockResolvedValue(mockReturnValue);

      const button = getByRole('button', { name: 'sign-in' });

      fireEvent.click(button);
    });

    waitFor(() => {
      expect(mockLoginWithEmailPassword).toHaveBeenCalled();
    });
  });
});
