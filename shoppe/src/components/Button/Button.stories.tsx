import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledButton } from '@components/Button';

export default {
  title: 'Button',
  component: StyledButton,
  argTypes: { onClick: { action: 'clicked' } },
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

export const DisabledButton = Template.bind({});
const disabledButton = {
  variant: 'secondary',
  children: 'Button',
  disabled: true,
};
DisabledButton.args = disabledButton;
