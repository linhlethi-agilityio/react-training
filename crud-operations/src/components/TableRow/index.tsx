import { Tr, TableRowProps as ChakraTableRowProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface TableRowProps extends ChakraTableRowProps {
  children: ReactNode;
  handleClickRow?: () => void;
}

const TableRow = ({ children, handleClickRow }: TableRowProps) => {
  return (
    <Tr onClick={handleClickRow} borderTopWidth={10} borderColor="background.table">
      {children}
    </Tr>
  );
};

export default TableRow;
