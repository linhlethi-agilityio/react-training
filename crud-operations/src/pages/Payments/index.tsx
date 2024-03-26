import { useCallback, useState } from 'react';
import { Box, Button, Flex, Heading, Icon, Spinner, Text, useDisclosure } from '@chakra-ui/react';

// Constants
import { ASCENDING, DESCENDING } from '@constants';

// Types
import { Payment } from '@types';
import { TableColumnType } from 'src/components/Table';

// Hooks
import { usePayments } from '@hooks';

// Utils
import { formatDate } from '@utils';

// Components
import { PaymentDetailModal, Table, EyeIcon, SortIcon } from '@components';

interface PaymentsPageProps {
  keyword: string;
}

const PaymentPage = ({ keyword }: PaymentsPageProps) => {
  const [previewData, setPreviewData] = useState<Payment | null>(null);
  const [sortType, setSortType] = useState<string>('');

  const { payments = [], isLoading } = usePayments();
  const { isOpen: isOpenPaymentDetail, onOpen: onOpenPaymentDetail, onClose: onClosePaymentDetail } = useDisclosure();

  /**
   * Func sort payments
   */
  const handleSort = useCallback(() => {
    if (!sortType) {
      return setSortType(ASCENDING);
    }

    if (sortType) {
      if (sortType === DESCENDING) {
        return setSortType('');
      }

      setSortType(sortType === ASCENDING ? DESCENDING : ASCENDING);
    }
  }, [sortType]);

  const formattedPayments: Payment[] | undefined = payments
    ?.map((payment) => ({
      ...payment,
      date: formatDate(+payment.date),
    }))
    .reverse()
    .filter((payment) => JSON.stringify(Object.values(payment)).toLowerCase().includes(keyword.toLowerCase()))
    .sort((prev, next) => {
      if (sortType) {
        return sortType === ASCENDING ? prev.name.localeCompare(next.name) : next.name.localeCompare(prev.name);
      }

      return 1;
    });

  const paymentColumns: TableColumnType<Payment>[] = [
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
      accessor: (value: Payment) => `INR ${value.amountPaid}`,
    },
    {
      header: 'Balance amount',
      accessor: (value: Payment) => `INR ${value.balanceAmount}`,
    },
    {
      header: 'Date',
      accessor: 'date',
    },
    {
      accessor: (data: Payment) => (
        <Button
          aria-label="payment-detail-button"
          data-testid="payment-detail-button-icon"
          variant="ghost"
          onClick={() => handleOpenPaymentDetailModal(data.id)}
        >
          <Icon as={EyeIcon} />
        </Button>
      ),
    },
  ];

  const handleOpenPaymentDetailModal = (selectedId: string) => {
    const currentPayment = formattedPayments?.find(({ id }) => id === selectedId);

    onOpenPaymentDetail();

    if (currentPayment) {
      setPreviewData(currentPayment);
    }
  };

  return (
    <>
      <Box mt={5}>
        <Flex justifyContent="space-between" alignItems="center" borderBottomWidth={1} pb={3}>
          <Heading size="md">Payment Details</Heading>
          <Button aria-label="sort" data-testid="sort-button" variant="ghost" onClick={handleSort}>
            <SortIcon isUp={sortType === ASCENDING} isDown={sortType === DESCENDING} />
          </Button>
        </Flex>
        <Box>
          {isLoading ? (
            <Box textAlign="center" mt={10}>
              <Spinner size="lg" />
            </Box>
          ) : formattedPayments?.length ? (
            <Table isStriped columns={paymentColumns} data={formattedPayments || []} />
          ) : (
            <Text textAlign="center" mt={20} fontSize="md">
              No record not found!
            </Text>
          )}
        </Box>
      </Box>
      {isOpenPaymentDetail && (
        <PaymentDetailModal previewData={previewData} isOpen={isOpenPaymentDetail} onClose={onClosePaymentDetail} />
      )}
    </>
  );
};

export default PaymentPage;
