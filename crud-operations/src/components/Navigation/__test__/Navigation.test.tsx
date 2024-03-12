import { render } from '@test-utils';
import '@testing-library/jest-dom';

// Components
import Navigation from '..';

const mockProps = {
  isShorter: false,
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
  useLocation: () => jest.fn(),
}));

// Mock the constants module
jest.mock('@constants', () => ({
  SIDEBAR_NAVIGATION: [],
}));

describe.skip('Navigation component', () => {
  test('should match snapshot for Navigation', () => {
    const { container } = render(<Navigation {...mockProps} />);

    expect(container).toMatchSnapshot();
  });
});
