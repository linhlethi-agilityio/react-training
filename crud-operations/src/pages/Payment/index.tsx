import { useCallback, useState } from 'react';
import { Box, Button, Flex, Heading, Icon } from '@chakra-ui/react';

// Icons
import { PenIcon, SortIcon } from '@icons';

// Components
import { Table } from '@components';
import { Payment } from '@types';
import { TableColumn } from '@components/Table';

enum SortType {
  Ascending = 'ascending',
  Descending = 'descending',
}

const PaymentPage = () => {
  const [sortType, setSortType] = useState<string>('');

  const handleOnSort = useCallback(() => {
    if (!sortType) {
      return setSortType(SortType.Ascending);
    }

    if (sortType) {
      if (sortType === SortType.Descending) {
        return setSortType('');
      }

      setSortType(sortType === SortType.Ascending ? SortType.Descending : SortType.Ascending);
    }
  }, [sortType]);

  const paymentColumns: TableColumn<Payment>[] = [
    {
      header: 'Name',
      accessor: 'name',
    },
    {
      header: 'Payment Schedule',
      accessor: 'paymentSchedule',
    },
    {
      header: 'Bill Number',
      accessor: 'billNumber',
    },
    {
      header: 'Amount Paid',
      accessor: 'amountPaid',
    },
    {
      header: 'Balance amount',
      accessor: 'balanceAmount',
    },
    {
      header: 'Date',
      accessor: 'date',
    },
    {
      accessor: () => (
        <Button variant="ghost">
          <Icon as={PenIcon} />
        </Button>
      ),
    },
  ];

  return (
    <Box mt={5}>
      <Flex justifyContent="space-between" alignItems="center" borderBottomWidth={1} pb={3}>
        <Heading size="md">Students List</Heading>
        <Button variant="ghost" onClick={handleOnSort}>
          <SortIcon isUp={sortType === SortType.Ascending} isDown={sortType === SortType.Descending} />
        </Button>
      </Flex>
      <Box>
        <Table columns={paymentColumns} data={[]} />
      </Box>
    </Box>
  );
};

export default PaymentPage;
