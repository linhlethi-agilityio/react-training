import { render } from '@test-utils';
import '@testing-library/jest-dom';
import { MemoryRouter, useLocation } from 'react-router-dom';

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
  SIDEBAR_NAVIGATION: [
    {
      label: 'Home',
      router: '/',
    },
    {
      label: 'Course',
      router: '/course',
    },
  ],
}));

describe('Navigation component', () => {
  test('should match snapshot for Navigation', () => {
    const { container } = render(<Navigation {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  it.skip('renders navigation items correctly', () => {
    (useLocation as jest.Mock).mockReturnValue({ location: { pathname: '/' } });

    const { getByText } = render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    );

    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Course')).toBeInTheDocument();
  });
});
