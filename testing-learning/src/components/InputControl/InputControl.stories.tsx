import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledInputControl } from '@components/InputControl';
import { action } from '@storybook/addon-actions';
import { ChangeEvent, useState } from 'react';

export default {
  title: 'InputControl',
  component: StyledInputControl,
} as ComponentMeta<typeof StyledInputControl>;

const Template: ComponentStory<typeof StyledInputControl> = (args) => {
  const [inputValue, setInputValue] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    action('onChange')();
  };

  return <StyledInputControl {...args} onChange={handleOnChange} value={inputValue} />;
};

export const InputControl = Template.bind({});
const props = {
  label: 'Name',
  id: 'name',
  name: 'name',
};
InputControl.args = props;
