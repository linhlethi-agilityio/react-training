import { useToast } from '@chakra-ui/react';

export const useToastCustom = () =>
  useToast({
    duration: 5000,
    isClosable: true,
    position: 'bottom-right',
  });
