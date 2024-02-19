import { ReactNode } from 'react';

// Types
import { ITableCellProps } from './types';
import { IData } from '@type/data';
import { ITableColumn } from '../CustomTable/types';

// Hocs
import { typedMemo } from '@hocs';

const TableCell = <T extends IData>(props: ITableCellProps<T>) => {
  const { item, columnConfig } = props;

  const renderCell = (item: T, columnConfig: ITableColumn<T>): ReactNode => {
    const { accessor } = columnConfig;

    if (typeof accessor === 'string') {
      return item[accessor]?.toString();
    }

    if (typeof accessor === 'function') {
      return accessor(item);
    }
  };

  return <td>{renderCell(item, columnConfig)}</td>;
};

export const MemoizedTableCell = typedMemo(TableCell);
