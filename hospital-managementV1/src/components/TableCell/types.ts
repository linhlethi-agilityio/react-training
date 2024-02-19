import { ReactNode } from 'react';

export interface ITableCellProps {
  cellWidth?: string;
  cellTextAlign?: string;
  className?: string;
  children: ReactNode;
}
