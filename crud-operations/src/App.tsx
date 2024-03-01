import { Box, ChakraProvider, Text } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Theme config
import { theme } from './themes';

// Constants
import { SIDEBAR_NAVIGATION } from '@constants';

// Components
import { BaseLayout } from '@components';

const TestPage = ({ pageName }: { pageName: string }) => (
  <Box>
    <Text>Hello world! {pageName} page</Text>
  </Box>
);

const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          {SIDEBAR_NAVIGATION.map(({ router, label }) => (
            <Route key={router} path={router} element={<TestPage pageName={label} />} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);

export default App;
