import { useState } from 'react';
import { Box, ChakraProvider, Text } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Theme config
import { theme } from './themes';

// Constants
import { ROUTERS, SIDEBAR_NAVIGATION } from '@constants';

// Pages
import { LoginPage } from '@pages';

// Components
import { BaseLayout } from '@components';

const PlaceholderPage = ({ pageName }: { pageName: string }) => (
  <Box>
    <Text>Hello world! {pageName} page</Text>
  </Box>
);

const App = () => {
  const [search, setSearch] = useState<string>('');

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<BaseLayout onSearch={setSearch} />}>
            {SIDEBAR_NAVIGATION.map(({ router, label, element: Element }) => (
              <Route
                key={router}
                path={router}
                element={Element ? <Element keyword={search} /> : <PlaceholderPage pageName={label} />}
              />
            ))}
          </Route>
          <Route path={ROUTERS.LOGIN} element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
