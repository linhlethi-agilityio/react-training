import { ReactNode } from 'react';

export type TTableAccessor<T> = ((item: T) => ReactNode) | keyof T;

export interface ITableColumn<T> {
  id: string;
  width?: string;
  textAlign?: string;
  accessor: TTableAccessor<T>;
  header?: string;
}

export interface ITableProps<T> {
  className?: string;
  columns: ITableColumn<T>[];
  data: T[];
}
