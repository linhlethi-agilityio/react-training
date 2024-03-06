import { ReactNode } from 'react';
import { Tr, TableRowProps as ChakraTableRowProps } from '@chakra-ui/react';

interface TableRowProps extends ChakraTableRowProps {
  children: ReactNode;
  handleClickRow?: () => void;
}

const TableRow = ({ children, handleClickRow }: TableRowProps) => (
  <Tr onClick={handleClickRow} borderTopWidth={10} borderColor="background.table">
    {children}
  </Tr>
);

export default TableRow;
