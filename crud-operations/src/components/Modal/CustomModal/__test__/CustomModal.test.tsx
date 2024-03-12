import { render } from '@test-utils';
import '@testing-library/jest-dom';
import { Box } from '@chakra-ui/react';

// Components
import CustomModal from '..';

const mockProps = {
  isOpen: true,
  onClose: jest.fn(),
  title: 'Student Detail',
  children: (
    <Box>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quasi veritatis id aperiam delectus iste
      aliquid fugit sint ea ex? Aliquid totam blanditiis quae quia repellat eos unde consequuntur laborum!
    </Box>
  ),
};

describe('CustomModal component', () => {
  test('should match snapshot for CustomModal', () => {
    const { container } = render(<CustomModal {...mockProps} />);

    expect(container).toMatchSnapshot();
  });
});
