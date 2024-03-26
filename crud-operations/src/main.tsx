import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'public/styles/all.css';

// Main app component
import App from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
