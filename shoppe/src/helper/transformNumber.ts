export type TWidthValue = 'full' | 'half';

export type TStyleUnit = 'px' | 'rem' | '%' | 'em';

export const transformToStyleValue = (value?: number | TWidthValue, unit?: TStyleUnit) => {
  if (typeof value === 'undefined' || null) {
    return null;
  }

  if (value === 'full') {
    return '100%';
  }

  if (value === 'half') {
    return '50%';
  }

  const defaultUnit = 'px';

  return `${value}${unit || defaultUnit}`;
};
