import { ReactNode } from 'react';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const CustomModal = ({ isOpen, onClose, children, title }: CustomModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} isCentered>
    <ModalOverlay />
    <ModalContent opacity={0.6}>
      <ModalHeader textAlign="center">{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>{children}</ModalBody>
    </ModalContent>
  </Modal>
);

export default CustomModal;
