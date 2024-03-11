/* eslint-disable react-refresh/only-export-components */
import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

jest.mock('jose', () => ({
  // Mock implementations or objects
}));

jest.mock('@constants', () => ({
  ENVS: {
    VITE_API_ENDPOINT: 'import.meta.env.VITE_API_ENDPOINT',
    VITE_SECRET_KEY: 'import.meta.env.VITE_SECRET_KEY',
  },
}));

const createTestProps = () => {
  // Additional setup for test props if needed
};

const customRender = (ui: ReactElement, options?: RenderOptions) => render(ui, { ...options });

export * from '@testing-library/react';

export { customRender as render, createTestProps };
