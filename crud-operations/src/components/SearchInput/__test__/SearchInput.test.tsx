import { fireEvent, render } from '@test-utils';
import '@testing-library/jest-dom';

// Components
import SearchInput from '..';

const mockOnChange = jest.fn();

const mockProps = {
  onChange: mockOnChange,
  value: '',
};

describe('SearchInput component', () => {
  test('should match snapshot for SearchInput', () => {
    const { container } = render(<SearchInput {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  test('call onChange func when change input', () => {
    const { getByPlaceholderText } = render(<SearchInput placeholder="search..." {...mockProps} />);

    const inputElement = getByPlaceholderText('search...');

    fireEvent.change(inputElement, { target: { value: 'Test input' } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object));
  });
});
