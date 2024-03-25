import { render } from '@test-utils';
import '@testing-library/jest-dom';

// Components
import CardItem from '..';
import { SquareIcon } from '@components';

const mockProps = {
  cardColor: 'background.cardPayment',
  name: 'Payments',
  bgGradient: '',
  color: '#ff0000',
  icon: <SquareIcon />,
  count: 3,
};

describe('CardItem component', () => {
  test('should match snapshot for CardItem', () => {
    const { container } = render(<CardItem {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  test('render INR when have prop isMoney', () => {
    const { getByText } = render(<CardItem isMoney {...mockProps} />);

    expect(getByText('INR')).toBeInTheDocument();
  });

  test('render default value when do not pass props optional', () => {
    const { container } = render(<CardItem name="payment" icon={<SquareIcon />} count={3} />);

    expect(container).toMatchSnapshot();
  });
});
