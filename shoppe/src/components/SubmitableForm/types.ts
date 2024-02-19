import { IIconProps } from '@components/Icons/types';
import { BaseVariant } from '@type/variant';
import { ChangeEvent, FunctionComponent, MemoExoticComponent } from 'react';
import { TWidthValue } from '@helper/transformNumber';

export interface IFormControlProps {
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
  IconComponent?: MemoExoticComponent<FunctionComponent<IIconProps>>;
  placeholderInput: string;
  formWidth?: number | TWidthValue;
  inputVariant?: BaseVariant;
  iconSize?: number;
  value: string;
}
