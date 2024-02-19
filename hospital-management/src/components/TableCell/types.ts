import { IData } from '@type/data';
import { ITableColumn } from '../CustomTable/types';

export interface ITableCellProps<T extends IData> {
  item: T;
  columnConfig: ITableColumn<T>;
}
