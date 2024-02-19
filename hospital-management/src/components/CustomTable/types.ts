import { IData } from '@type/data';
import { ReactNode } from 'react';

export type TTableAccessor<T extends IData> =
  | ((item: T, inputProps?: object) => ReactNode)
  | keyof T;

export interface ITableColumn<T extends IData> {
  id: string;
  accessor: TTableAccessor<T>;
  header: string;
  mWidth?: string;
  width?: string;
}

export interface ICustomTableProps<T extends IData> {
  columns: ITableColumn<T>[];
  data: T[];
}
