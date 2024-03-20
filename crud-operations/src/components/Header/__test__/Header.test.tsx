import { fireEvent, render } from '@test-utils';
import '@testing-library/jest-dom';

// Components
import Header from '..';

const mockOnSearch = jest.fn();
const mockOnToggleSideBar = jest.fn();

const mockProps = {
  isClosedSideBar: false,
  onToggleSideBar: mockOnToggleSideBar,
  onSearch: mockOnSearch,
};

describe('Header component', () => {
  test('should match snapshot for Header', () => {
    const { container } = render(<Header {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  test('calls onToggleSideBar when toggle sidebar button is clicked', () => {
    const { getByTestId } = render(
      <Header isClosedSideBar onToggleSideBar={mockOnToggleSideBar} onSearch={mockOnSearch} />,
    );

    const toggleSidebarButton = getByTestId('toggle-sidebar-button');
    fireEvent.click(toggleSidebarButton);

    expect(mockOnToggleSideBar).toHaveBeenCalled();
  });

  test('call handleOnchange when user change searchInput', () => {
    const { getByPlaceholderText } = render(<Header {...mockProps} />);

    const searchInput = getByPlaceholderText('Search...');
    fireEvent.change(searchInput, { target: { value: 'test keyword' } });

    expect(mockOnSearch).toHaveBeenCalled();
  });
});
