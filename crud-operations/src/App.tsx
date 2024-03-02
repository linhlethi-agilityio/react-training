import { useMemo } from 'react';
import { Box, ChakraProvider, Text } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// Theme config
import { theme } from './themes';

// Constants
import { ROUTERS, SIDEBAR_NAVIGATION } from '@constants';

// Pages
import { LoginPage } from '@pages';

// Components
import { BaseLayout } from '@components';

const TestPage = ({ pageName }: { pageName: string }) => (
  <Box>
    <Text>Hello world! {pageName} page</Text>
  </Box>
);

const isAuthenticated = false;

const App = () => {
  const defaultRoute = useMemo(() => (isAuthenticated ? '/' : '/login'), []);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {isAuthenticated ? (
            <>
              <Route element={<BaseLayout />}>
                {SIDEBAR_NAVIGATION.map(({ router, label }) => (
                  <Route key={router} path={router} element={<TestPage pageName={label} />} />
                ))}
              </Route>
            </>
          ) : (
            <>
              <Route path={ROUTERS.LOGIN} element={<LoginPage />} />
            </>
          )}

          {/* Navigation when access wrong route */}
          <Route path="*" element={<Navigate to={defaultRoute} />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
