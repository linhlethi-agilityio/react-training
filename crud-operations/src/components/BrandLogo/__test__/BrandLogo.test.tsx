import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import BrandLogo from '..';

jest.mock('jose', () => ({}));

jest.mock('@constants', () => ({
  ENVS: {
    VITE_API_ENDPOINT: 'import.meta.env.VITE_API_ENDPOINT',
    VITE_SECRET_KEY: 'import.meta.env.VITE_SECRET_KEY',
  },
  BRAND_NAME: 'crud operations',
}));

const mockOnClick = jest.fn();

const mockProps = {
  onClick: mockOnClick,
};

describe('BrandLogo component', () => {
  test('should match snapshot for BrandLogo', () => {
    const { container } = render(<BrandLogo {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  test('call onClick func when click lick brand logo', () => {
    const { getByTestId } = render(<BrandLogo {...mockProps} />);

    fireEvent.click(getByTestId('brand-logo'));

    expect(mockOnClick).toHaveBeenCalled();
  });

  test('render acronym branch logo when have isAcronym prop', () => {
    const { getByText } = render(<BrandLogo size="lg" isAcronym {...mockProps} />);

    expect(getByText('co')).toBeInTheDocument();
  });
});
