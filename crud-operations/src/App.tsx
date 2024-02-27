import { Input, ChakraProvider, Button } from '@chakra-ui/react';

// Theme config
import { theme } from './themes';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Input placeholder="Enter your email" />
      <Button>texr</Button>
    </ChakraProvider>
  );
};

export default App;
