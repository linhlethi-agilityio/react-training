import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { defaultTheme } from './themes';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={defaultTheme}>
      <Notifications position="top-right" autoClose={5000} />
      <RouterProvider router={router} />
    </MantineProvider>
  );
};

export default App;
