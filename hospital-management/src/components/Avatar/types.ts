import { HTMLAttributes } from 'react';

export type Size = 'xs' | 'sm' | 'md' | 'lg';

export interface IAvatarProps extends HTMLAttributes<HTMLImageElement> {
  size: Size;
}
