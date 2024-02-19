import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BackArrowIcon, ShoppingCartIcon, CloseIcon, SearchIcon } from '@components/Icons';

export default {
  title: 'Icons',
} as ComponentMeta<typeof BackArrowIcon>;

const BackArrow: ComponentStory<typeof BackArrowIcon> = (args) => <BackArrowIcon {...args} />;
const ShoppingCart: ComponentStory<typeof ShoppingCartIcon> = (args) => (
  <ShoppingCartIcon {...args} />
);
const Close: ComponentStory<typeof CloseIcon> = (args) => <CloseIcon {...args} />;
const Search: ComponentStory<typeof SearchIcon> = (args) => <SearchIcon {...args} />;

export { BackArrow, ShoppingCart, Close, Search };
