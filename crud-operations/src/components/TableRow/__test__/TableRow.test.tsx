import { render, fireEvent } from '@testing-library/react';
import { Table, Tbody, Td } from '@chakra-ui/react';

// Components
import TableRow from '..';

describe('TableRow', () => {
  test('should match snapshot for TableRow', () => {
    const handleClickRow = jest.fn();

    const { container } = render(
      <Table>
        <Tbody>
          <TableRow handleClickRow={handleClickRow}>
            <Td>inches</Td>
          </TableRow>
        </Tbody>
      </Table>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders children and handles click event', () => {
    // Mock handleClickRow function
    const handleClickRow = jest.fn();

    // Render TableRow with mock props
    const { getByRole } = render(
      <Table>
        <Tbody>
          <TableRow handleClickRow={handleClickRow}>
            <Td>inches</Td>
          </TableRow>
        </Tbody>
      </Table>,
    );

    // Get the rendered TableRow component
    const tableRow = getByRole('row');

    // Assert that TableRow renders children correctly
    expect(tableRow).toBeInTheDocument();
    expect(tableRow).toHaveTextContent('inches');

    // Simulate a click event on the TableRow
    fireEvent.click(tableRow);

    // Assert that handleClickRow is called when TableRow is clicked
    expect(handleClickRow).toHaveBeenCalled();
  });
});
