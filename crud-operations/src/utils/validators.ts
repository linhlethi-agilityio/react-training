import { ERROR_MESSAGES } from '@constants';

export const isRequired = (value: string | null | undefined): boolean => !!value;

export const validateRequired = (value?: string): string | true => isRequired(value) || ERROR_MESSAGES.FIELD_REQUIRED;

export const isValidFormat = (value = '', pattern: RegExp): boolean => pattern.test(value);
