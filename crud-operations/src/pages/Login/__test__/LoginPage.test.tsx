import { render, fireEvent } from '@testing-library/react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import LoginPage from '..';

// Mocking dependencies
jest.mock('@hooks', () => ({
  useToastCustom: jest.fn(),
  useAuth: () => ({
    getCurrentUser: jest.fn(),
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
}));

describe('LoginPage Component', () => {
  test('renders correctly', () => {
    const { container } = render(
      <ChakraProvider theme={customTheme}>
        <LoginPage />
      </ChakraProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  test.skip('calls login function with correct credentials on submit', async () => {
    const handleLogin = jest.fn();

    const { getByLabelText, getByRole } = render(
      <ChakraProvider theme={customTheme}>
        <LoginPage />
      </ChakraProvider>,
    );

    // Fill in email and password fields
    fireEvent.change(getByLabelText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByLabelText('Password'), { target: { value: 'Abcd@123' } });

    // Click the sign in button
    fireEvent.click(getByRole('button'));

    // Assert that login function is called
    expect(handleLogin).toHaveBeenCalled();
  });
});
