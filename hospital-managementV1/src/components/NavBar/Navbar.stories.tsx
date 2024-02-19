import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledNavBar } from '@components/NavBar';
import { StyledNavbarItem } from '@components/NavBarItem';
import { ChangeEvent, useState } from 'react';
import { StyledDropdown } from '@components/Dropdown';
import { IOptionConfig } from '@components/Dropdown/types';
import { action } from '@storybook/addon-actions';

export default {
  title: 'NavBar',
  component: StyledNavBar,
} as ComponentMeta<typeof StyledNavBar>;

const Template: ComponentStory<typeof StyledNavBar> = (args) => (
  <StyledNavBar>{args.children}</StyledNavBar>
);

export const Default = Template.bind({});

Default.decorators = [
  (Story, context) => {
    const { args } = context;

    const [value, setValue] = useState('');
    const options: IOptionConfig[] = [
      {
        label: 'option 1',
        value: '1',
      },
      {
        label: 'option 2',
        value: '2',
      },
      {
        label: 'option 3',
        value: '3',
      },
    ];

    const handleChangeDropDown = (e: ChangeEvent<HTMLSelectElement>) => {
      setValue(e.target.value);
      action('onChangeDropdown')();
    };

    args.children = (
      <>
        <StyledNavbarItem>item 1</StyledNavbarItem>
        <StyledNavbarItem>item 2</StyledNavbarItem>
        <StyledNavbarItem>
          <StyledDropdown
            name="location"
            onChange={handleChangeDropDown}
            value={value}
            options={options}
            placeholder="placeholder"
          />
        </StyledNavbarItem>
      </>
    );

    return <Story {...args} />;
  },
];
