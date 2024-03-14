import { renderHook } from '@testing-library/react-hooks';
import { useToast } from '@chakra-ui/react';
import { useToastCustom } from '..'; // Adjust the import path as necessary

// Mock useToast from Chakra UI
jest.mock('@chakra-ui/react', () => ({
  useToast: jest.fn(),
}));

jest.mock('jose', () => ({}));

jest.mock('@constants', () => ({
  ENVS: {
    VITE_API_ENDPOINT: 'import.meta.env.VITE_API_ENDPOINT',
    VITE_SECRET_KEY: 'import.meta.env.VITE_SECRET_KEY',
  },
}));

describe('useToastCustom', () => {
  beforeEach(() => {
    // Clear any previous mock calls
    (useToast as jest.Mock).mockClear();
  });

  it('should return customized toast configuration', () => {
    // Mock the useToast function to return a mocked toast function
    (useToast as jest.Mock).mockReturnValue(jest.fn());

    // Render the hook
    renderHook(() => useToastCustom());

    // Verify that useToast is called with the expected toast configuration
    expect(useToast).toHaveBeenCalledWith({
      duration: 5000,
      isClosable: true,
      position: 'bottom-right',
    });
  });
});
