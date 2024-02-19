import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledNavbarItem } from '@components/NavBarItem';

export default {
  title: 'NavBarItem',
  component: StyledNavbarItem,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof StyledNavbarItem>;

const Template: ComponentStory<typeof StyledNavbarItem> = (args) => <StyledNavbarItem {...args} />;

export const NavBarItem = Template.bind({});
const navBarItemProps = {
  active: false,
  children: 'My Profile',
};
NavBarItem.args = navBarItemProps;

export const NavBarItemActive = Template.bind({});
const navBarItemActiveProps = {
  active: true,
  children: 'My Profile',
};
NavBarItemActive.args = navBarItemActiveProps;
