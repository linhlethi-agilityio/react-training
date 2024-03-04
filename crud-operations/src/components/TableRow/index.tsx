import { Tr } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface TableRowProps {
  children: ReactNode;
  handleClickRow?: () => void;
}

const TableRow = ({ children, handleClickRow }: TableRowProps) => {
  return (
    <Tr onClick={handleClickRow} bg="white" borderTopWidth="10px" borderColor="background.table">
      {children}
    </Tr>
  );
};

export default TableRow;
