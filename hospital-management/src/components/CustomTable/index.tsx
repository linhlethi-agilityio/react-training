import { typedMemo } from '@hocs';
import { Table } from '@mantine/core';
import { ICustomTableProps, ITableColumn } from './types';
import { IData } from '@type/data';
import { MemoizedTableRow } from '@components/TableRow';
import { MemoizedTableCell } from '@components/TableCell';
import { useStyles } from './styles';

const CustomTable = <T extends IData>(props: ICustomTableProps<T>) => {
  const { columns, data } = props;
  const { classes } = useStyles();

  const headerRow = (
    <tr className={classes.header}>
      {columns.map((columnConfig) => (
        <th
          style={{ minWidth: columnConfig.mWidth, width: columnConfig.width }}
          key={`header-${columnConfig.id}`}
        >
          {columnConfig.header}
        </th>
      ))}
    </tr>
  );

  const rows = () => {
    return data.map((rowData: T) => {
      return (
        <MemoizedTableRow key={`table-row-${rowData.id}`}>
          {columns.map((columnConfig: ITableColumn<T>) => {
            return <MemoizedTableCell<T> item={rowData} columnConfig={columnConfig} />;
          })}
        </MemoizedTableRow>
      );
    });
  };

  return (
    <Table withBorder={true} withColumnBorders={true}>
      <thead>{headerRow}</thead>
      <tbody>{rows()}</tbody>
    </Table>
  );
};

export const MemoizedCustomTable = typedMemo(CustomTable);
