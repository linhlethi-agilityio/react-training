import { ReactNode } from 'react';
import { Td } from '@chakra-ui/react';

interface TableCellProps {
  children: ReactNode;
}

const TableCell = ({ children }: TableCellProps) => {
  return (
    <Td fontSize="text.sm" lineHeight="sm" color="default">
      {children}
    </Td>
  );
};

export default TableCell;
