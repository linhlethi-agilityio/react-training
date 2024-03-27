// Constants
import { REGEX_PATTERN } from '@constants';

export const clearPhoneNumberFormat = (value: string): string =>
  value.replace(REGEX_PATTERN.NOT_NUMBER, '').substring(0, 10);

export const formatPhoneNumber = (value: string): string => {
  if (!value) {
    return value;
  }

  const clearedValue = clearPhoneNumberFormat(value);

  const phoneNumberLength = clearedValue.length;

  if (phoneNumberLength < 4) {
    return clearedValue;
  }

  return clearedValue.replace(/(\d{3})(\d{3})(\d)/, '$1-$2-$3');
};
