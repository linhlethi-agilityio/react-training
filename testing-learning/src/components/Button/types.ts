import { BaseVariant } from '@type/variant';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export type Variant = BaseVariant | 'outline';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant;
  children: ReactNode;
}
