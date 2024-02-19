import { ReactNode } from 'react';

export interface IListProps {
  children: ReactNode;
  orderable?: boolean;
  className?: string;
}
