import { ReactNode } from 'react';

export interface ICardProps {
  className?: string;
  linkHref: string;
  children: ReactNode;
  border?: boolean;
  borderColor?: string;
}
