import { HTMLAttributes, ReactNode } from 'react';

export interface IBoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  mTop?: string;
  mLeft?: string;
  mRight?: string;
  mBottom?: string;
  pTop?: string;
  pLeft?: string;
  pRight?: string;
  pBottom?: string;
  maxWidth?: string;
}
