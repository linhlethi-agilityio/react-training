import { render } from '@testing-library/react';

// Components
import DashboardPage from '..';

// Mocking dependencies
jest.mock('@hooks', () => ({
  usePayments: () => jest.fn(),
  useStudents: () => jest.fn(),
}));

jest.mock('jose', () => ({}));

jest.mock('@components', () => ({
  CardItem: () => <div />,
}));

jest.mock('@constants', () => ({
  ENVS: {
    VITE_API_ENDPOINT: 'import.meta.env.VITE_API_ENDPOINT',
    VITE_SECRET_KEY: 'import.meta.env.VITE_SECRET_KEY',
  },
}));

describe('DashboardPage Component', () => {
  test('renders correctly', () => {
    const { container } = render(<DashboardPage />);

    expect(container).toMatchSnapshot();
  });

  // Test other aspects similarly...
});
