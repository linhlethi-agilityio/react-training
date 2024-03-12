import { render } from '@test-utils';
import '@testing-library/jest-dom';

// Components
import StudentDetailModal from '..';

jest.mock('@hooks', () => ({
  useStudents: jest.fn(() => ({
    createStudent: jest.fn(),
    updateStudent: jest.fn(),
  })),
  useToastCustom: jest.fn(),
}));

jest.mock('@constants/messages', () => ({
  ERROR_MESSAGES: {
    FIELD_REQUIRED: 'Mocked field required message',
  },
}));

const mockProps = {
  isOpen: true,
  onClose: jest.fn(),
  previewData: null,
};

describe.skip('StudentDetailModal component', () => {
  test('should match snapshot for StudentDetailModal', () => {
    const { container } = render(<StudentDetailModal {...mockProps} />);

    expect(container).toMatchSnapshot();
  });
});
