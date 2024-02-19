import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledNavigation } from '@components/Navigation';
import { NAVIGATION_ITEM } from '@constants/baseConfig';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'Navigation',
  component: StyledNavigation,
} as ComponentMeta<typeof StyledNavigation>;

const Template: ComponentStory<typeof StyledNavigation> = (args) => (
  <Router>
    <StyledNavigation {...args} />
  </Router>
);

export const Navigation = Template.bind({});
const navigation = {
  items: NAVIGATION_ITEM,
};
Navigation.args = navigation;
