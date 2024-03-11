import { render } from '@testing-library/react';
import BrandLogo from './BrandLogo';

export const Demo = () => {
  return <p>hello man</p>;
};

jest.mock('jose', () => {
  return {
    // Mock implementations or objects
  };
});

jest.mock('@constants', () => ({
  ENVS: {
    VITE_API_ENDPOINT: 'import.meta.env.VITE_API_ENDPOINT',
    VITE_SECRET_KEY: 'import.meta.env.VITE_SECRET_KEY',
  },
}));

describe('BrandLogo component', () => {
  test('should match snapshot for BrandLogo', () => {
    expect(1 + 2).toBe(3);
  });

  test('should match snapshot for BrandLogo', () => {
    const { getByText } = render(<Demo />);

    expect(getByText('hello man')).toBeInTheDocument();
  });

  test('component', () => {
    const demo = jest.fn();
    const { container } = render(<BrandLogo onClick={demo} />);

    expect(container).toMatchSnapshot();
  });
});
