import ReactDOM from 'react-dom/client';
import '@styles/all.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { AppProvider } from '@contexts/AppContext';
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>,
);
