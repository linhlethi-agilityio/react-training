import { memo } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

// Components
import { CustomModal } from '@components';

// Types
import { Payment } from '@types';

interface PaymentDetailModalProps {
  isOpen: boolean;
  previewData: Payment | null;
  onClose: () => void;
}

const PaymentDetailModal = ({ isOpen, previewData, onClose }: PaymentDetailModalProps) => {
  const { name, paymentSchedule, billNumber, amountPaid, balanceAmount, date } = previewData || {};

  const PaymentDetailArray = [
    {
      name: 'Name',
      value: name,
    },
    {
      name: 'Payment Schedule',
      value: paymentSchedule,
    },
    {
      name: 'Bill Number',
      value: `INR ${billNumber}`,
    },
    {
      name: 'Amount Paid',
      value: `INR ${amountPaid}`,
    },
    {
      name: 'Balance amount',
      value: `INR ${balanceAmount}`,
    },
    {
      name: 'Date',
      value: date,
    },
  ];

  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title="Payment Detail">
      <Box paddingX={10} paddingBottom={10}>
        {PaymentDetailArray.map((item) => {
          const { name, value } = item;

          return (
            <Flex justifyContent="space-between" marginTop={2.5} alignItems="center" key={`payment-item-${name}`}>
              <Heading size="xs">{name}:</Heading>
              <Text size="small">{value}</Text>
            </Flex>
          );
        })}
      </Box>
    </CustomModal>
  );
};

export default memo(PaymentDetailModal);
