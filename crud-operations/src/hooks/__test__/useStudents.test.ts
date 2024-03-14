import { renderHook } from '@testing-library/react-hooks';
import useSWR from 'swr';
import { useStudents } from '..'; // Adjust the import path as necessary
import { Student } from '@types';
import { post, put, remove } from '@services';

// Mock the SWR hook
jest.mock('swr');

jest.mock('@services', () => {
  const originalModule = jest.requireActual('@services');
  return {
    ...originalModule,
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    remove: jest.fn(),
  };
});

// Mock the API_ENDPOINTS and ENVS constants
jest.mock('@constants', () => ({
  API_ENDPOINTS: {
    PAYMENTS: '/payments',
  },
  ENVS: {
    VITE_API_ENDPOINT: 'import.meta.env.VITE_API_ENDPOINT',
    VITE_SECRET_KEY: 'import.meta.env.VITE_SECRET_KEY',
  },
}));

jest.mock('jose', () => ({}));

// Define sample student data for testing
const mockStudents: Student[] = [
  {
    enrollNumber: '54547',
    name: 'name 8',
    avatarUrl: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/956.jpg',
    phone: '7305477760',
    email: 'Carson31@gmail.com',
    dateOfAdmission: 950288400000,
    id: '0',
  },
];

describe('useStudents', () => {
  beforeEach(() => {
    // Clear any previous mocks
    jest.clearAllMocks();
  });

  it('should return students and loading status correctly', async () => {
    // Mock the return value of useSWR
    (useSWR as jest.Mock).mockReturnValueOnce({
      data: mockStudents,
      error: undefined,
      isValidating: false,
      mutate: jest.fn(),
    });

    // Render the hook
    const { result } = renderHook(() => useStudents());

    // Check if students and loading status are returned correctly
    expect(result.current.students).toEqual(mockStudents);
    expect(result.current.isLoading).toBe(false);
  });

  it.skip('should create a new student', async () => {
    // Mock the return value of useSWR
    (useSWR as jest.Mock).mockReturnValueOnce({
      data: mockStudents,
      error: undefined,
      isValidating: false,
      mutate: jest.fn(),
    });

    // Define the expected student data
    const newStudentData = {
      enrollNumber: '54547',
      name: 'create name 8',
      avatarUrl: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/956.jpg',
      phone: '7305477760',
      email: 'Carson31@gmail.com',
      dateOfAdmission: 950288400000,
      id: '1',
    };

    // Mock the post function to resolve with the new student data
    (post as jest.Mock).mockResolvedValueOnce(newStudentData);

    // Render the hook
    const { result } = renderHook(() => useStudents());

    // Call createStudent with the new student data
    await result.current.createStudent(newStudentData);

    // Check if mutateStudents is called with the updated students list including the new student
    expect(result.current.students).toEqual([...mockStudents, newStudentData]);
  });

  it.skip('should update an existing student', async () => {
    // Mock the return value of useSWR
    (useSWR as jest.Mock).mockReturnValueOnce({
      data: mockStudents,
      error: undefined,
      isValidating: false,
      mutate: jest.fn(),
    });

    // Mock the put function to resolve with an updated student
    (put as jest.Mock).mockResolvedValueOnce({
      enrollNumber: '54547',
      name: 'update name 8',
      avatarUrl: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/956.jpg',
      phone: '7305477760',
      email: 'Carson31@gmail.com',
      dateOfAdmission: 950288400000,
      id: '0',
    });

    // Render the hook
    const { result } = renderHook(() => useStudents());

    // Call updateStudent
    await result.current.updateStudent({
      enrollNumber: '54547',
      name: 'update name 8',
      avatarUrl: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/956.jpg',
      phone: '7305477760',
      email: 'Carson31@gmail.com',
      dateOfAdmission: 950288400000,
      id: '0',
    });

    // Check if mutateStudents is called with the updated students list
    expect(result.current.students).toEqual([
      {
        enrollNumber: '54547',
        name: 'update name 8',
        avatarUrl: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/956.jpg',
        phone: '7305477760',
        email: 'Carson31@gmail.com',
        dateOfAdmission: 950288400000,
        id: '0',
      },
    ]);
  });

  it('should delete an existing student', async () => {
    // Mock the return value of useSWR
    (useSWR as jest.Mock).mockReturnValueOnce({
      data: mockStudents,
      error: undefined,
      isValidating: false,
      mutate: jest.fn(),
    });

    // Mock the remove function
    (remove as jest.Mock).mockResolvedValueOnce(null);

    // Render the hook
    const { result } = renderHook(() => useStudents());

    // Call deleteStudent
    await result.current.deleteStudent('1');

    // Check if mutateStudents is called with the updated students list (without the deleted student)
    expect(result.current.students).toEqual([
      {
        enrollNumber: '54547',
        name: 'name 8',
        avatarUrl: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/956.jpg',
        phone: '7305477760',
        email: 'Carson31@gmail.com',
        dateOfAdmission: 950288400000,
        id: '0',
      },
    ]);
  });
});
