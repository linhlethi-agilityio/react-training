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

export const formatMoney = (amount: number): string => {
  // Convert the integer to a string and reverse it
  const reversedAmountStr = String(amount).split('').reverse().join('');

  // Split the reversed string into groups of three characters
  const groups = reversedAmountStr.match(/\d{1,3}/g);

  // Check if groups is null, and if so, return the original amount
  if (!groups) {
    return String(amount);
  }

  // Join the groups with commas and reverse the resulting string
  const formattedAmount = groups.join(',').split('').reverse().join('');

  return formattedAmount;
};
