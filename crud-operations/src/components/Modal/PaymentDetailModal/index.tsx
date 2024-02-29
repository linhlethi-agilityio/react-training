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
  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title="Payment Detail">
      <Box paddingX="40px" paddingBottom="40px">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading size="small">Name:</Heading>
          <Text size="small">{name}</Text>
        </Flex>
        <Flex justifyContent="space-between" marginTop="10px" alignItems="center">
          <Heading size="small">Payment Schedule:</Heading>
          <Text size="small">{paymentSchedule}</Text>
        </Flex>
        <Flex justifyContent="space-between" marginTop="10px" alignItems="center">
          <Heading size="small">Bill Number:</Heading>
          <Text size="small">INR {billNumber}</Text>
        </Flex>
        <Flex justifyContent="space-between" marginTop="10px" alignItems="center">
          <Heading size="small">Amount Paid:</Heading>
          <Text size="small">INR {amountPaid}</Text>
        </Flex>
        <Flex justifyContent="space-between" marginTop="10px" alignItems="center">
          <Heading size="small">Balance amount:</Heading>
          <Text size="small">INR {balanceAmount}</Text>
        </Flex>
        <Flex justifyContent="space-between" marginTop="10px" alignItems="center">
          <Heading size="small">Date:</Heading>
          <Text size="small">{date}</Text>
        </Flex>
      </Box>
    </CustomModal>
  );
};

export default memo(PaymentDetailModal);
