import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledSlidePaginationItem } from '@components/SlidePaginationItem';

export default {
  title: 'PaginationItem',
  component: StyledSlidePaginationItem,
} as ComponentMeta<typeof StyledSlidePaginationItem>;

const Template: ComponentStory<typeof StyledSlidePaginationItem> = (args) => (
  <StyledSlidePaginationItem {...args} />
);

export const Default = Template.bind({});
const defaultProps = {
  active: false,
};
Default.args = defaultProps;

export const Active = Template.bind({});
const activeProps = {
  active: true,
};
Active.args = activeProps;
