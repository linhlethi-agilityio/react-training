import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledDropdown } from '@components/Dropdown';
import { ChangeEvent, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { IOptionConfig } from './types';

export default {
  title: 'Dropdown',
  component: StyledDropdown,
} as ComponentMeta<typeof StyledDropdown>;

const options: IOptionConfig[] = [
  {
    label: 'Option 1',
    value: '1',
  },
  {
    label: 'Option 2',
    value: '2',
  },
  {
    label: 'Option 3',
    value: '3',
  },
];

const Template: ComponentStory<typeof StyledDropdown> = (args) => {
  const [value, setValue] = useState<null | string>(null);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    action('onChange')(e.target.value);
    setValue(e.target.value);
  };

  return <StyledDropdown {...args} onChange={onChange} value={value} />;
};

export const Default = Template.bind({});
const dropdownProps = {
  options: options,
  placeholder: 'Placeholder',
};
Default.args = dropdownProps;
