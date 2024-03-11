import { render } from '@test-utils';
import BrandLogo from './BrandLogo';

export const Demo = () => {
  return <p>hello man</p>;
};

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
