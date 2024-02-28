import { Tr } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface TableRowProps {
  children: ReactNode;
  handleClickRow?: () => void;
}

const TableRow = ({ children, handleClickRow }: TableRowProps) => {
  return <Tr onClick={handleClickRow}>{children}</Tr>;
};

export default TableRow;
