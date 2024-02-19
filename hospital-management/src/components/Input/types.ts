import { Variant } from '@data-types/variant';
import { InputHTMLAttributes } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant: Variant;
  inputWidth?: string;
}
