import { render } from '@test-utils';
import '@testing-library/jest-dom';

// Components
import ConfirmModal from '..';

const mockProps = {
  isOpen: true,
  description: 'Are you sure you would like to delete student',
  title: 'Delete Student',
  buttonLabel: 'Submit',
  onConfirm: jest.fn(),
  onCancel: jest.fn(),
};

describe('ConfirmModal component', () => {
  test('should match snapshot for ConfirmModal', () => {
    const { container } = render(<ConfirmModal {...mockProps} />);

    expect(container).toMatchSnapshot();
  });
});
