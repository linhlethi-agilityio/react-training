import { RenderResult, render } from '@testing-library/react';
import { IProduct } from '@type/product';
import { StyledProductCard } from '@pages/Homepage/ProductCard';

describe('testing ProductCard component', () => {
  let wrapper: RenderResult;

  const mockData: IProduct = {
    id: '1',
    name: 'Lira Earrings',
    imageSrc: 'https://via.placeholder.com/300x300.png?text=ProductCard%20Image',
    price: 300,
  };

  beforeEach(() => {
    wrapper = render(<StyledProductCard data={mockData} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = wrapper;

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render ProductCard correctly', () => {
    const { getByText } = wrapper;

    const price = getByText('$ 300');
    const name = getByText('Lira Earrings');

    expect(price).toBeTruthy();
    expect(name).toBeTruthy();
  });
});
