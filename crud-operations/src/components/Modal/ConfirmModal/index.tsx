import { memo } from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

// Components
import { CustomModal } from '@components';

interface ConfirmModalProps {
  isOpen: boolean;
  description: string;
  buttonLabel: string;
  onConfirm?: () => void;
  onCancel: () => void;
  title: string;
}

const ConfirmModal = ({ isOpen, onCancel, title, onConfirm, description, buttonLabel }: ConfirmModalProps) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onCancel} title={title}>
      <Box paddingBottom="30px">
        <Text textAlign="center">{description}</Text>
        <Flex textAlign="center" gap="20px" justifyContent="space-between" marginTop="30px">
          <Button onClick={onConfirm} flex={1}>
            {buttonLabel}
          </Button>
          <Button onClick={onCancel} variant="outline" flex={1}>
            CanCel
          </Button>
        </Flex>
      </Box>
    </CustomModal>
  );
};

export default memo(ConfirmModal);
