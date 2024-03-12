import { render } from '@test-utils';
import '@testing-library/jest-dom';

// Components
import BrandLogo from '..';

const mockProps = {
  onClick: jest.fn(),
};

describe('BrandLogo component', () => {
  test('should match snapshot for BrandLogo', () => {
    const { container } = render(<BrandLogo {...mockProps} />);

    expect(container).toMatchSnapshot();
  });
});
