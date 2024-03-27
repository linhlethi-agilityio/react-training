import { act, fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import StudentDetailModal from '..';

const mockCreateStudent = jest.fn();
const mockUpdateStudent = jest.fn();
const mockOnClose = jest.fn();

jest.mock('@hooks', () => ({
  useStudents: jest.fn(() => ({
    createStudent: mockCreateStudent,
    updateStudent: mockUpdateStudent,
  })),
  useToastCustom: () => jest.fn(),
}));

jest.mock('jose', () => ({}));

jest.mock('@constants', () => ({
  ERROR_MESSAGES: {
    FIELD_REQUIRED: 'Mocked field required message',
  },
  REGEX_PATTERN: {
    EMAIL:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    NUMBER: /^[0-9]{10}$/,
    NAME: /^[a-zA-Z ]{1,40}$/,
  },
}));

const mockProps = {
  isOpen: true,
  onClose: mockOnClose,
  previewData: null,
};

const student = {
  id: '123',
  name: 'joun',
  email: 'admin@gmail.com',
  phone: '6565654656',
  enrollNumber: '456565656',
  dateOfAdmission: '2024-05-05',
};

describe('StudentDetailModal component', () => {
  test('should match snapshot for StudentDetailModal', () => {
    const { container } = render(<StudentDetailModal {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  test('create student', async () => {
    const { getByRole, getByTestId } = render(<StudentDetailModal {...mockProps} />);

    act(() => {
      fireEvent.change(getByTestId('name'), { target: { value: 'jonh' } });
      fireEvent.change(getByTestId('email'), { target: { value: 'test@gmail.com' } });
      fireEvent.change(getByTestId('phone'), { target: { value: '5765756756' } });
      fireEvent.change(getByTestId('dateOfAdmission'), { target: { value: '2024-03-21' } });

      const button = getByRole('button', { name: 'button-submit' });

      fireEvent.click(button);

      waitFor(() => {
        expect(mockCreateStudent).toHaveBeenCalled();
      });
    });
  });

  test('update student', async () => {
    const { getByRole, getByTestId } = render(<StudentDetailModal previewData={student} onClose={jest.fn()} isOpen />);

    act(() => {
      fireEvent.change(getByTestId('name'), { target: { value: 'jonh' } });
      fireEvent.change(getByTestId('email'), { target: { value: 'test@gmail.com' } });
      fireEvent.change(getByTestId('phone'), { target: { value: '5765756756' } });
      fireEvent.change(getByTestId('enrollNumber'), { target: { value: 5765756756 } });
      fireEvent.change(getByTestId('dateOfAdmission'), { target: { value: '2024-03-21' } });

      const button = getByRole('button', { name: 'button-submit' });

      fireEvent.click(button);

      waitFor(() => {
        expect(mockUpdateStudent).toHaveBeenCalled();
      });
    });
  });
});
