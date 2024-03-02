import { REGEX_PATTERN } from '@constants';

export const isValidEmail = (value: string) => REGEX_PATTERN.EMAIL.test(value);
