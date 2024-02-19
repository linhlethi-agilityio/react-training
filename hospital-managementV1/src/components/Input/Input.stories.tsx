import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledInput } from '@components/Input';

export default {
  title: 'Input',
  component: StyledInput,
  parameters: {
    backgrounds: {
      default: 'white',
      values: [
        { name: 'blue', value: '#283779' },
        { name: 'white', value: '#FFFFFF' },
      ],
    },
  },
} as ComponentMeta<typeof StyledInput>;

const Template: ComponentStory<typeof StyledInput> = (args) => <StyledInput {...args} />;

export const PrimaryInput = Template.bind({});
const primaryInput = {
  variant: 'primary',
  placeholder: 'Search for Doctors, hospital & others....',
};
PrimaryInput.args = primaryInput;

export const SecondaryInput = Template.bind({});
const secondaryInput = {
  variant: 'secondary',
  value: 'Yateesh Bhardwaj',
  placeholder: 'Name',
};
SecondaryInput.args = secondaryInput;

export const RoundHeadInput = Template.bind({});
const roundHeadButton = {
  variant: 'roundHead',
  placeholder: 'Email',
};
RoundHeadInput.parameters = {
  backgrounds: { default: 'blue' },
};
RoundHeadInput.args = roundHeadButton;
