import { ReactNode } from 'react';
import { Table as BaseTable, Tbody, Th, Thead, Tr } from '@chakra-ui/react';

// Components
import { TableCell, TableRow } from '@components';

export type TTableAccessor<T> = ((item: T, inputProps?: object) => ReactNode) | keyof T;

export interface TableColumnType<T> {
  fieldName?: string;
  accessor: TTableAccessor<T>;
  header?: string;
}

interface CustomTableProps<T> {
  columns: TableColumnType<T>[];
  isStriped?: boolean;
  data: T[];
}

const Table = <T,>({ columns, data, isStriped = false }: CustomTableProps<T>) => {
  const headerRow = (
    <Tr>
      {columns.map((columnConfig, index) => {
        const { header } = columnConfig;

        return (
          <Th
            key={`${header}${index}`}
            borderBottomWidth={0}
            textTransform="unset"
            color="tableHeader"
            fontWeight="semiBold"
            lineHeight="xs"
            py={21}
          >
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
    <BaseTable {...(isStriped && { variant: 'striped', colorScheme: 'telegram' })}>
      <Thead>{headerRow}</Thead>
      <Tbody>
        {data.map((item, index) => (
          <TableRow key={`table-row-${index}`}>
            {columns.map((columnConfig, indexColumn) => {
              return (
                <TableCell bg={!isStriped ? 'white' : 'background.table'} key={`table-cell-${indexColumn}`}>
                  {renderCell(item, columnConfig.accessor)}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </Tbody>
    </BaseTable>
  );
};

export default Table;
