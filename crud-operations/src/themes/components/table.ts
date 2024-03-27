import { tableAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(tableAnatomy.keys);

const customStriped = definePartsStyle((props) => {
  const { colorMode } = props;

  // Set the color scheme to "white"
  const colorScheme = '#ffff';

  return {
    tbody: {
      tr: {
        '&:nth-of-type(odd)': {
          td: {
            background: colorMode === 'light' ? `${colorScheme}` : '#F8F8F8',
          },
        },
      },
    },
  };
});

// Define your custom table theme with the 'striped' variant using your custom striped style
export const Table = defineMultiStyleConfig({
  // Assign the 'striped' variant to your custom striped style
  variants: { striped: customStriped },
});
