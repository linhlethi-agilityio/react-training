import { TUnitValue } from '@type/unitValue';
import { BaseVariant } from '@type/variant';
import { HTMLAttributes, ReactNode } from 'react';
import { TStyleUnit } from 'src/helper/transformNumber';

export type TextHTMLTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'figcaption';

export type TextAlignVariant = 'center' | 'left' | 'right';

export type ColorVariant = BaseVariant | 'tertiary' | 'error';

export interface ITextProps extends HTMLAttributes<HTMLElement> {
  display?: string;
  children: ReactNode;
  color?: ColorVariant;
  fontSize?: TUnitValue;
  lineHeight?: TUnitValue;
  fontWeight?: number;
  pLeft?: TUnitValue;
  pRight?: TUnitValue;
  pTop?: TUnitValue;
  pBottom?: TUnitValue;
  mLeft?: TUnitValue;
  mRight?: TUnitValue;
  mTop?: TUnitValue;
  mBottom?: TUnitValue;
  textAlign?: TextAlignVariant;
  maxWidth?: TUnitValue;
  as?: TextHTMLTag;
  textTransform?: string;
  unitText?: TStyleUnit;
}
