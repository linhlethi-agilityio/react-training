import { defineStyleConfig } from '@chakra-ui/react';

export const Heading = defineStyleConfig({
  baseStyle: {
    color: 'default',
    fontWeight: 'bolder',
  },

  sizes: {
    small: {
      fontSize: 'text.xs',
      lineHeight: 'md',
    },

    medium: {
      fontSize: 'heading.md',
      lineHeight: 'lg',
    },

    large: {
      fontSize: 'heading.lg',
      lineHeight: 'xxl',
    },
  },

  defaultProps: {
    size: 'medium',
  },
});
