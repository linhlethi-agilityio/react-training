export const ERROR_MESSAGES = {
  FIELD_REQUIRED: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  MIN_PASSWORD_LENGTH: (length: number) => `Please enter at least ${length} characters`,

  INVALID_ACCESS_TOKEN: 'The login token is invalid, please login again',
  USER_NOT_FOUND: 'Login is invalid! Please re-check email and password',
  LOGIN_FAILED: 'Login failed!',
};
