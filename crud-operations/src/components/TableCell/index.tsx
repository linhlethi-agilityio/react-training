import { ReactNode, memo } from 'react';
import { Td, TableCellProps as ChakraTableCellProps } from '@chakra-ui/react';

interface TableCellProps extends ChakraTableCellProps {
  children: ReactNode;
}

const TableCell = ({ children, ...rest }: TableCellProps) => (
  <Td fontSize="text.sm" lineHeight="sm" color="default" {...rest}>
    {children}
  </Td>
);

export default memo(TableCell);
