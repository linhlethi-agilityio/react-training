import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledLoadingSpinner } from '@components/LoadingSpinner';

export default {
  title: 'LoadingSpinner',
  component: StyledLoadingSpinner,
} as ComponentMeta<typeof StyledLoadingSpinner>;

const Template1: ComponentStory<typeof StyledLoadingSpinner> = (args) => (
  <StyledLoadingSpinner {...args} />
);

export const Default = Template1.bind({});
