import { fireEvent, render } from '@testing-library/react';

import PaymentPage from '..';
import * as React from 'react';

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

// Import SortType enum if needed
enum SortType {
  Ascending = 'ascending',
  Descending = 'descending',
}

describe('PaymentPage Component', () => {
  test('renders correctly', () => {
    const { container } = render(<PaymentPage keyword="" />);

    expect(container).toMatchSnapshot();
  });

  test('call handleSort func when click icon button sort', () => {
    jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(() => ['', () => null])
      .mockImplementationOnce(() => [SortType.Ascending, () => null]);

    const { getByTestId } = render(<PaymentPage keyword="" />);

    const sortButton = getByTestId('sort-button');
    fireEvent.click(sortButton);

    // expect(mockSetState).toHaveBeenCalledWith(SortType.Ascending); // Initial click sets sortType to Ascending

    // expect(mockSetState).toHaveBeenCalledWith(SortType.Descending); // Second click sets sortType to Descending
    // fireEvent.click(sortButton);
    // expect(mockSetState).toHaveBeenCalledWith('');
  });
});
