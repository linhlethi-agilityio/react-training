import { ReactNode } from 'react';
import { Table as BaseTable, Tbody, Th, Thead, Tr } from '@chakra-ui/react';

// Components
import { TableCell, TableRow } from '@components';

export type TTableAccessor<T> = ((item: T, inputProps?: object) => ReactNode) | keyof T;

export interface ITableColumn<T> {
  id: string;
  fieldName: string;
  accessor: TTableAccessor<T>;
  header: string;
}

interface ICustomTableProps<T> {
  columns: ITableColumn<T>[];
  data: T[];
}

const Table = <T,>({ columns, data }: ICustomTableProps<T>) => {
  const headerRow = (
    <Tr>
      {columns.map((columnConfig) => {
        const { id, header } = columnConfig;

        return (
          <Th key={`header-${id}`} textTransform="unset" color="tableHeader" fontWeight="semiBold" lineHeight="xs">
            {header}
          </Th>
        );
      })}
    </Tr>
  );

  const renderCell = (item: T, accessor: TTableAccessor<T>): ReactNode => {
    if (typeof accessor === 'string') {
      return item[accessor] as ReactNode;
    }

    if (typeof accessor === 'function') {
      return accessor(item);
    }
  };

  return (
    <BaseTable>
      <Thead>{headerRow}</Thead>
      <Tbody>
        {data.map((item, index) => (
          <TableRow key={`table-row-${index}`}>
            {columns.map((columnConfig) => (
              <TableCell key={`table-cell-${index}-${columnConfig.id}`}>
                {renderCell(item, columnConfig.accessor)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </Tbody>
    </BaseTable>
  );
};

export default Table;