import { TUnitValue } from '@type/unitValue';
import { TStyleUnit } from '@helper/transformNumber';

export type TJustifyContent = 'center' | 'space-between' | 'left' | 'right';

export interface IFlexBoxProps {
  gap?: TUnitValue;
  unitFlexBox?: TStyleUnit;
  justifyContent?: TJustifyContent;
  mTop?: TUnitValue;
  mLeft?: TUnitValue;
  mRight?: TUnitValue;
  mBottom?: TUnitValue;
}
