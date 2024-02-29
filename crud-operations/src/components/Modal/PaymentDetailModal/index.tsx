import { memo } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

// Components
import { CustomModal } from '@components';

// Constants
import { PaymentType } from '@constants';

interface PaymentDetailModalProps extends PaymentType {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentDetailModal = ({
  isOpen,
  onClose,
  name,
  paymentSchedule,
  billNumber,
  amountPaid,
  balanceAmount,
  date,
}: PaymentDetailModalProps) => {
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
      <Box paddingX="40px" paddingBottom="40px">
        {PaymentDetailArray.map((item) => {
          const { name, value } = item;

          return (
            <Flex justifyContent="space-between" marginTop="10px" alignItems="center" key={`payment-item-${name}`}>
              <Heading size="small">{name}:</Heading>
              <Text size="small">{value}</Text>
            </Flex>
          );
        })}
      </Box>
    </CustomModal>
  );
};

export default memo(PaymentDetailModal);
