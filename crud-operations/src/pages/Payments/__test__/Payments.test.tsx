import { fireEvent, render, waitFor } from '@testing-library/react';

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

// Import SortType enum if needed
enum SortType {
  Ascending = 'ascending',
  Descending = 'descending',
}

// Mocking useState hook
const mockUseState = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: (initialState: any) => [initialState, mockUseState],
}));

describe('PaymentPage Component', () => {
  test('renders correctly', () => {
    const { container } = render(<PaymentPage keyword="" />);

    expect(container).toMatchSnapshot();
  });

  test.skip('call handleSort func when click icon button sort', () => {
    // Mocking useState to return different values on each call
    const setState = jest.fn();
    mockUseState.mockImplementation(() => ['', setState]); // Initial state
    mockUseState.mockImplementationOnce(() => ['', setState]); // Initial state
    mockUseState.mockImplementationOnce(() => [SortType.Ascending, setState]); // Ascending sort state
    mockUseState.mockImplementationOnce(() => [SortType.Descending, setState]); // Descending sort state

    const { getByTestId } = render(<PaymentPage keyword="" />);

    const sortButton = getByTestId('sort-button');
    fireEvent.click(sortButton);

    expect(setState).toHaveBeenCalledWith(SortType.Ascending); // Initial click sets sortType to Ascending

    fireEvent.click(sortButton); // Simulate second click
    expect(setState).toHaveBeenCalledWith(SortType.Descending); // Second click sets sortType to Descending

    fireEvent.click(sortButton); // Simulate third click
    expect(setState).toHaveBeenCalledWith(''); // Third click sets sortType to ''
  });

  test('call handleOpenPaymentDetailModal func when click icon button payment-detail-button-icon', () => {
    const { getByTestId, getByText } = render(<PaymentPage keyword="" />);

    const sortButton = getByTestId('payment-detail-button-icon');
    fireEvent.click(sortButton);

    waitFor(() => {
      expect(getByText('Payment Detail')).toBeInTheDocument();
    });
  });
});
