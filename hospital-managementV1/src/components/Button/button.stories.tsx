import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledButton } from '@components/Button';

export default {
  title: 'Button',
  component: StyledButton,
  argTypes: { onClick: { action: 'clicked' } },
  parameters: {
    backgrounds: {
      default: 'white',
      values: [
        { name: 'blue', value: '#283779' },
        { name: 'white', value: '#FFFFFF' },
      ],
    },
  },
} as ComponentMeta<typeof StyledButton>;

const Template: ComponentStory<typeof StyledButton> = (args) => <StyledButton {...args} />;

export const PrimaryButton = Template.bind({});
const primaryButton = {
  variant: 'primary',
  children: 'Button',
};
PrimaryButton.args = primaryButton;

export const SecondaryButton = Template.bind({});
const secondaryButton = {
  variant: 'secondary',
  children: 'Button',
};
SecondaryButton.args = secondaryButton;

export const RoundHeadButton = Template.bind({});
const roundHeadButton = {
  variant: 'roundHead',
  children: 'Button',
};
RoundHeadButton.parameters = {
  backgrounds: { default: 'blue' },
};
RoundHeadButton.args = roundHeadButton;
