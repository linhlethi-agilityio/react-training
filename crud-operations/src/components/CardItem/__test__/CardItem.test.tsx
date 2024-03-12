import { render } from '@test-utils';
import '@testing-library/jest-dom';

// Icons
import { SquareIcon } from '@icons';

// Components
import CardItem from '..';

const mockProps = {
  cardColor: 'background.cardPayment',
  name: 'Payments',
  icon: <SquareIcon />,
  count: 3,
};

describe('CardItem component', () => {
  test('should match snapshot for CardItem', () => {
    const { container } = render(<CardItem {...mockProps} />);

    expect(container).toMatchSnapshot();
  });
});
