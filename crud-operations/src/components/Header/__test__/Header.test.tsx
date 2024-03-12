import { render } from '@test-utils';
import '@testing-library/jest-dom';

// Components
import Header from '..';

const mockProps = {
  isClosedSideBar: false,
  onToggleSideBar: jest.fn(),
  onSearch: jest.fn(),
};

describe('Header component', () => {
  test('should match snapshot for Header', () => {
    const { container } = render(<Header {...mockProps} />);

    expect(container).toMatchSnapshot();
  });
});
