import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Variant } from '@data-types/variant';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant;
  children: ReactNode;
}
