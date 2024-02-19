import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledSlideOutlineNavigation } from '@components/SlideOutlineNavigation';

export default {
  title: 'SlideOutlineNavigation',
  component: StyledSlideOutlineNavigation,
} as ComponentMeta<typeof StyledSlideOutlineNavigation>;

const Template: ComponentStory<typeof StyledSlideOutlineNavigation> = (args) => (
  <StyledSlideOutlineNavigation {...args} />
);

export const SlideNavigationOutline = Template.bind({});
