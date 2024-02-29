import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Theme config
import { theme } from './themes';

//Components
import { BaseLayout } from '@components';

// Constants
import { ROUTERS } from '@constants';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path={ROUTERS.DASHBOARD} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
