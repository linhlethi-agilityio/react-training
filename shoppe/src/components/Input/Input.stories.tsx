import { ComponentMeta, ComponentStory } from '@storybook/react';
import StyledInput from '@components/Input';
import { IInputProps } from './types';

export default {
  title: 'Input',
  component: StyledInput,
} as ComponentMeta<typeof StyledInput>;

const Template: ComponentStory<typeof StyledInput> = (args) => <StyledInput {...args} />;

export const SecondaryInput = Template.bind({});
const secondaryInput: IInputProps = {
  placeholder: 'Secondary Input...',
  inputWidth: 25,
  unitInput: 'em',
  variant: 'secondary',
};
SecondaryInput.args = secondaryInput;

export const PrimaryInput = Template.bind({});
const primaryInput: IInputProps = {
  placeholder: 'Primary Input...',
  inputWidth: 'full',
  variant: 'primary',
};
PrimaryInput.args = primaryInput;

export const HalfInput = Template.bind({});
const halfInput: IInputProps = {
  placeholder: 'Half Input...',
  inputWidth: 'half',
  variant: 'primary',
};
HalfInput.args = halfInput;

export const DisabledInput = Template.bind({});
const disabledInput: IInputProps = {
  placeholder: 'Disabled Input...',
  inputWidth: 261,
  disabled: true,
  variant: 'primary',
};
DisabledInput.args = disabledInput;

export const ErrorInput = Template.bind({});
const errorInput: IInputProps = {
  placeholder: 'Error Input...',
  inputWidth: 261,
  variant: 'primary',
  error: true,
};
ErrorInput.args = errorInput;
