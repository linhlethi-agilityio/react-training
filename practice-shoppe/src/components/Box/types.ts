import { TUnitValue } from '@type/unitValue';
import { HTMLAttributes, ReactNode } from 'react';
import { TStyleUnit } from '@helper/transformNumber';

export interface IBoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  mTop?: TUnitValue;
  mLeft?: TUnitValue;
  mRight?: TUnitValue;
  mBottom?: TUnitValue;
  pTop?: TUnitValue;
  pLeft?: TUnitValue;
  pRight?: TUnitValue;
  pBottom?: TUnitValue;
  maxWidth?: TUnitValue;
  unitBox?: TStyleUnit;
}
