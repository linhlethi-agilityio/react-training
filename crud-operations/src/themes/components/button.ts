import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: 'normal',
    borderRadius: 'xs',
    textTransform: 'uppercase',
  },

  variants: {
    solid: {
      backgroundColor: 'primary',
      color: 'while',
      fontSize: 'base',
      lineHeight: 'sm',

      _hover: {
        backgroundColor: 'button.primary',
      },

      _active: {
        backgroundColor: 'button.primary',
      },
    },
  },

  defaultProps: {
    variant: 'solid',
  },
});
