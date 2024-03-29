import { defineStyleConfig } from '@chakra-ui/react';

export const Heading = defineStyleConfig({
  baseStyle: {
    color: 'default',
    fontWeight: 'bold',
  },

  sizes: {
    sm: {
      fontSize: 17,
    },
    md: {
      fontSize: 'heading.md',
      lineHeight: 'lg',
    },
    extraSmall: {
      fontSize: 'heading.sm',
      lineHeight: 'lg',
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
