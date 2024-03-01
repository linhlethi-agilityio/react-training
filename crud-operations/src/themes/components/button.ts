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
    outline: {
      backgroundColor: 'transparent',
      borderColor: 'primary',
      color: 'primary',
    },
    ghost: {
      textTransform: 'capital',

      _hover: {
        backgroundColor: 'transparent',
      },
    },
  },

  defaultProps: {
    variant: 'solid',
  },
});
