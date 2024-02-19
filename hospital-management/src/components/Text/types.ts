import { HTMLAttributes, ReactNode } from 'react';

export type Variant = 'primary' | 'secondary';

export type TextHTMLTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'figcaption';

export interface ITextProps extends HTMLAttributes<HTMLElement> {
  display?: string;
  children: ReactNode;
  color?: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
  pLeft?: string;
  pRight?: string;
  pTop?: string;
  pBottom?: string;
  mLeft?: string;
  mRight?: string;
  mTop?: string;
  mBottom?: string;
  fontFamily?: string;
  textAlign?: string;
  maxWidth?: string;
  as?: TextHTMLTag;
  textTransform?: string;
}
