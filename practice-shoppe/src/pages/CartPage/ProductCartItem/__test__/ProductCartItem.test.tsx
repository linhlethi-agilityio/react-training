import { StyledProductCartItem } from '@pages/CartPage/ProductCartItem';
import { MAX_QUANTITY, MIN_QUANTITY } from '@constants/baseConfig';
import { RenderResult, fireEvent, render } from '@testing-library/react';
import { ICartProduct } from '@type/product';

describe('testing ProductCartItem component', () => {
  let wrapper: RenderResult;

  const handleIncrease = jest.fn();
  const handleDecrease = jest.fn();
  const handleRemoveProduct = jest.fn();

  const mockData: ICartProduct = {
    id: 1,
    quantity: 1,
    userId: 1,
    product: {
      id: '1',
      imageSrc: 'https://via.placeholder.com/300x300.png?text=ProductCard%20Image',
      name: 'Lira Earrings',
      price: 200,
    },
  };

  beforeEach(() => {
    wrapper = render(
      <StyledProductCartItem
        data={mockData}
        minQuantity={MIN_QUANTITY}
        maxQuantity={MAX_QUANTITY}
        quantity={5}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
        handleRemoveProduct={handleRemoveProduct}
      />,
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = wrapper;

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render ProductCartItem correctly', () => {
    const { getByText } = wrapper;

    const price = getByText('$ 200');
    const name = getByText('Lira Earrings');

    expect(price).toBeTruthy();
    expect(name).toBeTruthy();
  });

  test('should call handleRemoveProduct one time when click button removeProduct', () => {
    const { getAllByRole } = wrapper;

    const button = getAllByRole('button') as HTMLButtonElement[];

    fireEvent.click(button[button.length - 1]);
    expect(handleRemoveProduct).toBeCalledTimes(1);
  });

  test('should call handleIncrease one time when click button increase', () => {
    const { getByText } = wrapper;

    const button = getByText('+') as HTMLButtonElement;
    fireEvent.click(button);
    expect(handleIncrease).toBeCalledTimes(1);
  });

  test('should call handleDecrease one time when click button decrease', () => {
    const { getByText } = wrapper;

    const button = getByText('-') as HTMLButtonElement;
    fireEvent.click(button);
    expect(handleDecrease).toBeCalledTimes(1);
  });
});
