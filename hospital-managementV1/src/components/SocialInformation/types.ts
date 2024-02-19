import { IIconProps } from '@components/Icons/types';
import { FC } from 'react';

export interface ISocialItem {
  hrefLink: string;
  color?: string;
  size: number;
  IconComponent?: FC<IIconProps>;
}

export interface ISocialInfomationProps {
  className?: string;
  data: {
    [key: string]: ISocialItem;
  };
  gap?: string;
}
