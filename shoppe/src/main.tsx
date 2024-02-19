import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import 'public/styles/all.css';
import { Login } from '@components/Login';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Login />
  </StrictMode>,
);
