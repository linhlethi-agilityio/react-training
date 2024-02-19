import { StyledTableCell } from '@components/TableCell';
import { StyledTableHeader } from '@components/TableHeader';
import { StyledTableHeaderCell } from '@components/TableHeaderCell';
import { StyledTableRow } from '@components/TableRow';
import { ReactNode } from 'react';
import { ITableProps, TTableAccessor } from './types';

const Table = <T extends { id: string }>(props: ITableProps<T>) => {
  const { columns, data } = props;

  const renderCell = (item: T, accessor: TTableAccessor<T>): ReactNode => {
    if (typeof accessor === 'string') {
      return item[accessor] as ReactNode;
    }

    if (typeof accessor === 'function') {
      return accessor(item);
    }
  };

  return (
    <table>
      <thead>
        <StyledTableHeader>
          {columns.map((columnConfig) => (
            <StyledTableHeaderCell
              key={columnConfig.id}
              cellWidth={columnConfig.width}
              cellTextAlign={columnConfig.textAlign}
            >
              {columnConfig.header}
            </StyledTableHeaderCell>
          ))}
        </StyledTableHeader>
      </thead>
      <tbody>
        {data.map((item) => (
          <StyledTableRow key={item.id}>
            {columns.map((columnConfig) => (
              <StyledTableCell
                key={`${item.id}-${columnConfig.id}`}
                cellWidth={columnConfig.width}
                cellTextAlign={columnConfig.textAlign}
              >
                {renderCell(item, columnConfig.accessor)}
              </StyledTableCell>
            ))}
          </StyledTableRow>
        ))}
      </tbody>
    </table>
  );
};

export { Table };
