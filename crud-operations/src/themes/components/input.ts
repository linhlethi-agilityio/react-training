import { defineStyleConfig } from '@chakra-ui/react';

export const Input = defineStyleConfig({
  baseStyle: {
    field: {
      borderRadius: 'xs',
      placeholderTextColor: 'text.placeholder',
    },
  },

  variants: {
    outline: {
      field: {
        _hover: {
          borderColor: 'border.secondary',
        },

        _focus: {
          borderColor: 'border.secondary',
        },
      },
    },
  },

  defaultProps: {
    variant: 'outline',
  },
});
