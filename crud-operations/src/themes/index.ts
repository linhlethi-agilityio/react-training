import { extendTheme } from '@chakra-ui/react';

// Colors
import { colors } from './colors';

// Components styles
import { Text, Button, Heading, Input, Card, Link, Table } from './components';
import { fontSizes, fontWeights, radius, fonts, lineHeights } from './typography';

export const theme = extendTheme({
  colors,
  fontSizes,
  fontWeights,
  radii: radius,
  fonts,
  lineHeights,
  components: {
    Text,
    Button,
    Heading,
    Input,
    Card,
    Link,
    Table,
    Box: {
      baseStyle: {
        marginTop: 0,
      },
    },
  },
});
