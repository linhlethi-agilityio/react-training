import { render } from '@testing-library/react';

import PaymentPage from '..';

// Mocking dependencies
jest.mock('@hooks', () => ({
  usePayments: () => ({
    payments: [
      {
        id: '1',
        name: 'John Doe',
        paymentSchedule: 'Monthly',
        billNumber: 12345,
        amountPaid: 124545223,
        balanceAmount: 1500,
        date: 1676134800000,
      },
    ],
    isLoading: false,
  }),
}));

jest.mock('jose', () => ({}));

jest.mock('@constants', () => ({
  ENVS: {
    VITE_API_ENDPOINT: 'import.meta.env.VITE_API_ENDPOINT',
    VITE_SECRET_KEY: 'import.meta.env.VITE_SECRET_KEY',
  },
}));

describe('PaymentPage Component', () => {
  test('renders correctly', () => {
    const { container } = render(<PaymentPage keyword="" />);

    expect(container).toMatchSnapshot();
  });
});
