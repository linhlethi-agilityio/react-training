import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledSlideNavigation } from '@components/SlideNavigation';

export default {
  title: 'SlideNavigation',
  component: StyledSlideNavigation,
} as ComponentMeta<typeof StyledSlideNavigation>;

const Template: ComponentStory<typeof StyledSlideNavigation> = (args) => (
  <StyledSlideNavigation {...args} />
);

export const SlideNavigation = Template.bind({});
