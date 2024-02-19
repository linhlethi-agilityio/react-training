import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledInputControl } from '@components/InputControl';

export default {
  title: 'InputControl',
  component: StyledInputControl,
} as ComponentMeta<typeof StyledInputControl>;

const Template: ComponentStory<typeof StyledInputControl> = (args) => {
  return <StyledInputControl {...args} />;
};

export const InputControl = Template.bind({});
const props = {
  label: 'Name',
  value: 'Yateesh Bhardwaj',
  id: 'name',
};
InputControl.args = props;
