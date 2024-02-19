import { useAuth } from '@hooks/useAuth';
import { StyledHeader } from '@layouts/Header';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

const StyledHeaderWithRouter = () => {
  return (
    <BrowserRouter>
      <StyledHeader />
    </BrowserRouter>
  );
};

jest.mock('@hooks/useAuth');

const handleLogout = jest.fn();
const handleLogin = jest.fn();
const mockedUseAuth = useAuth as jest.MockedFunction<typeof useAuth>;

describe('testing Header component', () => {
  it('matches snapshot', () => {
    mockedUseAuth.mockReturnValue({
      data: {
        id: 1,
        user: {
          id: 1,
          email: 'email',
          password: 'password',
        },
        accessToken: 'accessToken',
      },
      isLoading: false,
      logout: handleLogout,
      error: null,
      login: handleLogin,
    });

    const { asFragment } = render(<StyledHeaderWithRouter />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('should call logout one time when click logout button', () => {
    const { getByText } = render(<StyledHeaderWithRouter />);
    const button = getByText('logout') as HTMLButtonElement;
    fireEvent.click(button);
    expect(handleLogout).toBeCalledTimes(1);
  });

  test('should be render button login when not have userLogin', () => {
    mockedUseAuth.mockReturnValue({
      data: null,
      isLoading: false,
      logout: handleLogout,
      error: null,
      login: handleLogin,
    });

    const { getByText } = render(<StyledHeaderWithRouter />);
    const button = getByText('login') as HTMLButtonElement;
    expect(button).toBeTruthy();
  });

  test('should be render LoadingSpinner when loading is true', () => {
    mockedUseAuth.mockReturnValue({
      data: {
        id: 1,
        user: {
          id: 1,
          email: 'email',
          password: 'password',
        },
        accessToken: 'accessToken',
      },
      isLoading: true,
      logout: handleLogout,
      error: null,
      login: handleLogin,
    });

    const { asFragment } = render(<StyledHeaderWithRouter />);

    expect(asFragment()).toMatchSnapshot();
  });
});
