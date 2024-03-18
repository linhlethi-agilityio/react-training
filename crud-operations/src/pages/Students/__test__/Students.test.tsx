import { render, fireEvent, waitFor } from '@testing-library/react';

import StudentsPage from '..';

// Mocking dependencies
jest.mock('@hooks', () => ({
  useToastCustom: jest.fn(),
  useStudents: () => ({
    students: [
      {
        enrollNumber: 54547,
        name: 'name 8',
        avatarUrl: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/956.jpg',
        phone: '7305477760',
        email: 'Carson31@gmail.com',
        dateOfAdmission: 950288400000,
        id: '0',
      },
    ],
    isLoading: false,
    deleteStudent: jest.fn(),
  }),
}));

jest.mock('jose', () => ({}));

jest.mock('@constants', () => ({
  ENVS: {
    VITE_API_ENDPOINT: 'import.meta.env.VITE_API_ENDPOINT',
    VITE_SECRET_KEY: 'import.meta.env.VITE_SECRET_KEY',
  },
  ERROR_MESSAGES: {
    FIELD_REQUIRED: 'This field is required',
    MIN_PASSWORD_LENGTH: jest.fn(),
  },
}));

describe('StudentsPage Component', () => {
  test('renders correctly', () => {
    const { container } = render(<StudentsPage keyword="" />);

    expect(container).toMatchSnapshot();
  });

  test('opens add student modal on button click', () => {
    const { getByText } = render(<StudentsPage keyword="" />);
    fireEvent.click(getByText('Add new student'));

    expect(getByText('Add Student')).toBeInTheDocument(); // Assuming there's a heading with text 'Add Student' in the modal
  });

  test.skip('call handleEditStudent func when on button click', () => {
    const handleEditStudent = jest.fn();

    const { getByTestId } = render(<StudentsPage keyword="" />);
    fireEvent.click(getByTestId('edit-button'));

    expect(handleEditStudent).toHaveBeenCalled(); // Assuming there's a heading with text 'Add Student' in the modal
  });

  test('opens confirm delete modal on delete button click', async () => {
    const { getByTestId, getByText } = render(<StudentsPage keyword="" />);

    fireEvent.click(getByTestId('delete-button'));

    await waitFor(() => {
      expect(getByText('Delete Student')).toBeInTheDocument(); // Assuming there's a heading with text 'Delete Student' in the modal
      expect(getByText('Are you sure you would like to delete student')).toBeInTheDocument();
    });
  });
});
