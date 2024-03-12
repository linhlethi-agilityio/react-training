import { render } from '@test-utils';
import '@testing-library/jest-dom';

// Components
import SearchInput from '..';

const mockProps = {
  placeholder: 'search...',
  onChange: jest.fn(),
  value: '',
};

describe('SearchInput component', () => {
  test('should match snapshot for SearchInput', () => {
    const { container } = render(<SearchInput {...mockProps} />);

    expect(container).toMatchSnapshot();
  });
});
