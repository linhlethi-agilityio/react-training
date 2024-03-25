import { render } from '@test-utils';
import '@testing-library/jest-dom';

// Components
import SideBarItem from '..';
import { PaymentIcon } from '@components';

const mockProps = {
  isFocused: false,
  icon: <PaymentIcon />,
  onClick: jest.fn(),
  label: 'Payment',
};

describe('SideBarItem component', () => {
  test('should match snapshot for SideBarItem', () => {
    const { container } = render(<SideBarItem {...mockProps} />);

    expect(container).toMatchSnapshot();
  });
});
