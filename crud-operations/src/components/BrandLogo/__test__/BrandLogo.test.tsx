// Libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Box } from '@chakra-ui/react';

// Components
// import BrandLogo from '..';

// const mockProps = {
//   onClick: jest.fn(),
// };

describe('BrandLogo component', () => {
  test.skip('should match snapshot for BrandLogo', () => {
    const { container } = render(<Box>abc</Box>);

    expect(container).toMatchSnapshot();
  });
});
