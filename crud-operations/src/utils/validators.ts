import * as jose from 'jose';

// Constants
import { REGEX_PATTERN } from '@constants';

/**
 * Function to check if a given value is a valid email address.
 */
export const isValidEmail = (value: string) => REGEX_PATTERN.EMAIL.test(value);

export const isValidNumber = (value: string) => REGEX_PATTERN.NUMBER.test(value);

export const addHoursFromCurrent = (hours: number) => {
  const currentDate = new Date();

  currentDate.setHours(currentDate.getHours() + hours);

  return currentDate;
};

/**
 * Function to create a JSON Web Token (JWT) with the provided data and secret.
 */
export const createJWT = async (data: jose.JWTPayload, secret: string) => {
  const secretEncode = new TextEncoder().encode(secret);

  // Create JWT based on the data provided
  const jwt = await new jose.SignJWT(data)

    // The algorithm used: HS256
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt(new Date().getTime())

    // The JWT will expire after 2 hours
    .setExpirationTime(addHoursFromCurrent(2).getTime())
    .sign(secretEncode);

  return jwt;
};

export const isFutureTime = (timestamp: number | undefined) => {
  const currentTimestamp = Date.now();

  if (timestamp) {
    return timestamp > currentTimestamp;
  }

  return false;
};

/**
 * Utility function to verify a JSON Web Token (JWT) using the provided token and secret.
 */
export const verifyJWT = async (token: string, secretInput: string) => {
  const secret = new TextEncoder().encode(secretInput);
  const { payload } = await jose.jwtVerify(token, secret);

  return payload;
};
