import {
  formatDate,
  clearErrorOnChange,
  acronymText,
  encryptPassword,
  decryptPassword,
  isValidEmail,
  addHoursFromCurrent,
  createJWT,
  isFutureTime,
  verifyJWT,
} from '..';
import { FieldErrors } from 'react-hook-form';
import { TextEncoder } from 'util';

jest.mock('jose', () => ({
  jwtVerify: jest.fn().mockReturnValue({ payload: { sub: 'user123', role: 'admin' } }),
  SignJWT: jest.fn().mockImplementation(() => ({
    setProtectedHeader: jest.fn().mockReturnThis(),
    setIssuedAt: jest.fn().mockReturnThis(),
    setExpirationTime: jest.fn().mockReturnThis(),
    sign: jest.fn().mockResolvedValue('mocked_jwt_token'), // Mock the return value of sign
  })),
}));

global.TextEncoder = TextEncoder;

jest.mock('@constants', () => ({
  ENVS: {
    VITE_API_ENDPOINT: 'import.meta.env.VITE_API_ENDPOINT',
    VITE_SECRET_KEY: 'import.meta.env.VITE_SECRET_KEY',
  },
  REGEX_PATTERN: {
    EMAIL:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
}));

describe('formatDate', () => {
  test('formats date in default format', () => {
    // Mock timestamp for 1st January 2022
    const timestamp = new Date('2022-01-01T00:00:00').getTime();
    const formattedDate = formatDate(timestamp);
    expect(formattedDate).toBe('31-Jan, 2021');
  });

  test('formats date in YYYY-MM-DD format', () => {
    // Mock timestamp for 1st January 2022
    const timestamp = new Date('2022-01-01T00:00:00').getTime();
    const formattedDate = formatDate(timestamp, true);
    expect(formattedDate).toBe('2021-01-01');
  });
});

describe('clearErrorOnChange', () => {
  const fieldName = 'email';

  test('clears error if field has error message', () => {
    // Mock error object with a message for the specified field
    const errors: FieldErrors = { [fieldName]: { message: 'Email is required' as any } };
    // Mock clearErrorFunc to track whether it's called
    const clearErrorFunc = jest.fn();

    clearErrorOnChange(fieldName, errors, clearErrorFunc);

    // Verify that clearErrorFunc is called with the field name
    expect(clearErrorFunc).toHaveBeenCalledWith(fieldName);
  });

  test("doesn't clear error if field doesn't have error message", () => {
    // Mock error object without a message for the specified field
    const errors = { [fieldName]: { message: undefined } };
    // Mock clearErrorFunc to track whether it's called
    const clearErrorFunc = jest.fn();

    clearErrorOnChange(fieldName, errors, clearErrorFunc);

    // Verify that clearErrorFunc is not called
    expect(clearErrorFunc).not.toHaveBeenCalled();
  });
});

describe('acronymText', () => {
  test('generates acronym from a given phrase', () => {
    const phrase = 'World Wide Web';
    const expectedAcronym = 'WWW';
    const acronym = acronymText(phrase);
    expect(acronym).toBe(expectedAcronym);
  });
});

describe('encryptPassword', () => {
  test('encrypts a password by increasing the ASCII code of each character by 1', () => {
    const password = 'password';
    const expectedEncryptedPassword = 'qbttxpse';
    const encryptedPassword = encryptPassword(password);
    expect(encryptedPassword).toBe(expectedEncryptedPassword);
  });
});

describe('decryptPassword', () => {
  test('decrypts an encrypted password by decreasing the ASCII code of each character by 1', () => {
    const encryptedPassword = 'qbttxpse';
    const expectedDecryptedPassword = 'password';
    const decryptedPassword = decryptPassword(encryptedPassword);
    expect(decryptedPassword).toBe(expectedDecryptedPassword);
  });
});

describe('isValidEmail', () => {
  jest.mock('@constants', () => ({}));
  test('returns true for a valid email address', () => {
    const validEmail = 'test@example.com';
    expect(isValidEmail(validEmail)).toBe(true);
  });

  test('returns false for an invalid email address', () => {
    const invalidEmail = 'invalid_email';
    expect(isValidEmail(invalidEmail)).toBe(false);
  });
});

describe('addHoursFromCurrent', () => {
  test('adds specified hours to the current date', () => {
    const hoursToAdd = 2;
    const currentDate = new Date();
    const expectedDate = new Date(currentDate.getTime() + hoursToAdd * 60 * 60 * 1000);
    const result = addHoursFromCurrent(hoursToAdd);
    expect(result).toEqual(expectedDate);
  });
});

describe('createJWT', () => {
  test('creates a JWT with the provided data and secret', async () => {
    const data = { sub: 'user123', role: 'admin' };
    const secret = 'secretKey';
    const jwt = await createJWT(data, secret);
    expect(typeof jwt).toBe('string');
  });
});

describe('isFutureTime', () => {
  test('returns true if timestamp is in the future', () => {
    const futureTimestamp = Date.now() + 1000 * 60 * 60; // 1 hour ahead
    expect(isFutureTime(futureTimestamp)).toBe(true);
  });

  test('returns false if timestamp is in the past', () => {
    const pastTimestamp = Date.now() - 1000 * 60 * 60; // 1 hour behind
    expect(isFutureTime(pastTimestamp)).toBe(false);
  });

  test('returns false if timestamp is undefined', () => {
    expect(isFutureTime(undefined)).toBe(false);
  });
});

describe('verifyJWT', () => {
  test('verifies a JWT using the provided token and secret', async () => {
    const token = 'some_jwt_token';
    const secret = 'secretKey';
    const payload = await verifyJWT(token, secret);
    expect(payload).toEqual({ sub: 'user123', role: 'admin' });
  });
});
