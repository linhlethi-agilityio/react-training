import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledProductCartItem } from '.';
import { ICartProduct } from '@type/product';
import { useState } from 'react';

export default {
  title: 'ProductCart',
  component: StyledProductCartItem,
} as ComponentMeta<typeof StyledProductCartItem>;

const Template: ComponentStory<typeof StyledProductCartItem> = (args) => {
  const [value, setValue] = useState<number>(1);

  const handleIncrease = () => {
    if (value >= args.maxQuantity) {
      setValue((prevState) => prevState + 1);
    }
  };

  const handleDecrease = () => {
    if (value >= args.minQuantity) {
      setValue((prevState) => prevState - 1);
    }
  };

  return (
    <StyledProductCartItem
      {...args}
      handleDecrease={handleDecrease}
      handleIncrease={handleIncrease}
      quantity={value}
    />
  );
};

const cartProduct: ICartProduct = {
  product: {
    id: '1',
    name: 'Lira Earrings',
    imageSrc: 'https://via.placeholder.com/300x300.png?text=ProductCard%20Image',
    price: 300,
  },
  userId: 1,
  quantity: 1,
  id: 1,
};

export const DefaultProductCart = Template.bind({});
const defaultProductCart = {
  data: cartProduct,
};
DefaultProductCart.args = defaultProductCart;
