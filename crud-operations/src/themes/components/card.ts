import { defineStyleConfig } from '@chakra-ui/react';

export const Card = defineStyleConfig({
  baseStyle: {
    container: {
      borderRadius: 'sm',
      boxShadow: 'none',
    },
  },
  sizes: {
    xl: {
      container: {
        maxW: 475,
      },
    },
  },
});
