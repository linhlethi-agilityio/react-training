import { render } from '@test-utils';
import '@testing-library/jest-dom';

// Icons
import { PaymentIcon } from '@icons';

// Components
import SideBarItem from '..';

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
