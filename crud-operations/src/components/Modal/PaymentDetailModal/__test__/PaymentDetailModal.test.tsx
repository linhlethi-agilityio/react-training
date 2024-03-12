import { render } from '@test-utils';
import '@testing-library/jest-dom';

// Components
import PaymentDetailModal from '..';

const mockProps = {
  isOpen: true,
  onClose: jest.fn(),
  previewData: null,
};

describe('PaymentDetailModal component', () => {
  test('should match snapshot for PaymentDetailModal', () => {
    const { container } = render(<PaymentDetailModal {...mockProps} />);

    expect(container).toMatchSnapshot();
  });
});
