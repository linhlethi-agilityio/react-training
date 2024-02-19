import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledSlideItem } from '@components/SlideItem';

export default {
  title: 'SlideItem',
  component: StyledSlideItem,
} as ComponentMeta<typeof StyledSlideItem>;

const Template: ComponentStory<typeof StyledSlideItem> = (args) => (
  <StyledSlideItem {...args}>
    <img src="https://via.placeholder.com/600?text=SlideItem%20Image" alt="sildeItem"></img>
  </StyledSlideItem>
);

export const SlideItem = Template.bind({});
const props = {
  active: true,
};
SlideItem.args = props;
