import { memo } from 'react';

// Types
import { ITableRowProps } from './types';

// Styles
import { useStyles } from './styles';

const TableRow = (props: ITableRowProps) => {
  const { children } = props;

  const { classes } = useStyles();

  return <tr className={classes.row}>{children}</tr>;
};

export const MemoizedTableRow = memo(TableRow);
