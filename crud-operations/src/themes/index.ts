import { extendTheme } from '@chakra-ui/react';

// Colors
import { colors } from './colors';

// Components styles
import { Text, Button, Heading, Input } from './components';
import { fontSizes } from './fontSizes';
import { fontWeights } from './fontWeights';
import { radius } from './radius';
import { fonts } from './fonts';

export const theme = extendTheme({
  colors,
  fontSizes,
  fontWeights,
  radii: radius,
  fonts,
  components: {
    Text,
    Button,
    Heading,
    Input,
  },
  styles: {
    global: {
      'html, body': {
        fontFamily: 'body',
      },
    },
  },
});
