import { memo } from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

// Components
import { CustomModal } from '@components';

interface ConfirmModalProps {
  isOpen: boolean;
  description: string;
  buttonLabel: string;
  title: string;
  onConfirm?: () => void;
  onCancel: () => void;
}

const ConfirmModal = ({ isOpen, title, description, buttonLabel, onCancel, onConfirm }: ConfirmModalProps) => (
  <CustomModal isOpen={isOpen} onClose={onCancel} title={title}>
    <Box paddingBottom={30}>
      <Text textAlign="center">{description}</Text>
      <Flex textAlign="center" gap={5} justifyContent="space-between" marginTop={5}>
        <Button aria-label="button-label" onClick={onConfirm} flex={1}>
          {buttonLabel}
        </Button>
        <Button aria-label="button-center" onClick={onCancel} variant="outline" flex={1}>
          CanCel
        </Button>
      </Flex>
    </Box>
  </CustomModal>
);

export default memo(ConfirmModal);
