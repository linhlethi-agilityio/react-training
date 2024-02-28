import { defineStyleConfig } from '@chakra-ui/react';

export const Text = defineStyleConfig({
  baseStyle: {
    color: 'dark',
    fontWeight: 'normal',
  },

  variants: {
    bold: {
      fontWeight: 'bold',
      color: 'default',
    },

    error: {
      color: 'error',
    },
  },

  sizes: {
    small: {
      fontSize: 'text.sm',
      lineHeight: 'sm',
    },
    large: {
      fontSize: 'text.lg',
      lineHeight: 'xl',
    },
  },

  defaultProps: {
    size: 'small',
  },
});
