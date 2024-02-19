import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  StyledLink,
  StyledNavigationLink,
  StyledQuickLinkItem,
  StyledButtonLink,
} from '@components/Link';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'Link',
  component: StyledLink,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof StyledLink>;

const Template1: ComponentStory<typeof StyledNavigationLink> = (args) => (
  <Router>
    <StyledNavigationLink {...args} />
  </Router>
);

const Template2: ComponentStory<typeof StyledQuickLinkItem> = (args) => (
  <Router>
    <StyledQuickLinkItem {...args} />
  </Router>
);

const Template4: ComponentStory<typeof StyledButtonLink> = (args) => (
  <Router>
    <StyledButtonLink {...args} />
  </Router>
);

export const NavigationLink = Template1.bind({});
const navigationLink = {
  children: 'Pediatircs',
};
NavigationLink.args = navigationLink;

export const QuickLink = Template2.bind({});
const quickLink = {
  children: 'Pediatircs',
};
QuickLink.args = quickLink;

export const ViewAllLink = Template4.bind({});
const viewAllLink = {
  children: 'View All',
};
ViewAllLink.args = viewAllLink;
