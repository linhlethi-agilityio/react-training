import { act, renderHook } from '@testing-library/react-hooks';
import { useAuth } from '..';

jest.mock('jose', () => ({
  jwtVerify: jest.fn().mockReturnValue({ payload: { sub: 'user123', role: 'admin' } }),
  SignJWT: jest.fn().mockImplementation(() => ({
    setProtectedHeader: jest.fn().mockReturnThis(),
    setIssuedAt: jest.fn().mockReturnThis(),
    setExpirationTime: jest.fn().mockReturnThis(),
    sign: jest.fn().mockResolvedValue('mocked_jwt_token'), // Mock the return value of sign
  })),
}));

jest.mock('@constants', () => ({
  ENVS: {
    VITE_API_ENDPOINT: 'import.meta.env.VITE_API_ENDPOINT',
    VITE_SECRET_KEY: 'import.meta.env.VITE_SECRET_KEY',
  },
  LOCAL_STORAGE_KEY: {
    TOKEN: 'token',
  },
}));

describe('useAuth', () => {
  beforeEach(() => {
    // Clear local storage before each test
    localStorage.clear();
  });

  it.skip('should login successfully with valid credentials', async () => {
    const { result } = renderHook(() => useAuth());

    await act(async () => {
      await result.current.loginWithEmailPassword('admin@gmail.com', 'Admin@1234');
    });

    expect(result.current.me).toBeTruthy(); // Check if user is logged in
    expect(localStorage.getItem('token')).toBeTruthy(); // Check if token is stored in local storage
  });

  it('should set error message on login failure', async () => {
    const { result } = renderHook(() => useAuth());

    await act(async () => {
      await result.current.loginWithEmailPassword('invalid@email.com', 'invalidPassword');
    });

    expect(result.current.errorMessage).toBeTruthy(); // Check if error message is set
  });

  it('should logout successfully', () => {
    const { result } = renderHook(() => useAuth());

    act(() => {
      result.current.logout();
    });

    expect(result.current.me).toBeNull(); // Check if user is logged out
    expect(localStorage.getItem('token')).toBeNull(); // Check if token is removed from local storage
  });
});
