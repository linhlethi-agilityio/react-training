import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledProductCard } from '.';
import { IProductCardProps } from './types';
import { IProduct } from '@type/product';

export default {
  title: 'ProductCard',
  component: StyledProductCard,
} as ComponentMeta<typeof StyledProductCard>;

const Template: ComponentStory<typeof StyledProductCard> = (args) => (
  <StyledProductCard {...args} />
);

const product: IProduct = {
  id: '1',
  name: 'Lira Earrings',
  imageSrc: 'https://via.placeholder.com/300x300.png?text=ProductCard%20Image',
  price: 300,
};

export const DefaultProductCard = Template.bind({});
const defaultProductCard: IProductCardProps = {
  data: product,
};
DefaultProductCard.args = defaultProductCard;
