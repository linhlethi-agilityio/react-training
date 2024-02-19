import { BaseVariant } from '@type/variant';
import { InputHTMLAttributes } from 'react';
import { TStyleUnit, TWidthValue } from '@helper/transformNumber';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputWidth?: number | TWidthValue;
  unitInput?: TStyleUnit;
  error?: boolean;
  variant: BaseVariant;
}
