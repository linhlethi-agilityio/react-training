import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledLink } from '@components/Link';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'Link',
  component: StyledLink,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof StyledLink>;

const Template1: ComponentStory<typeof StyledLink> = (args) => (
  <Router>
    <StyledLink {...args} />
  </Router>
);

export const DefaultLink = Template1.bind({});
const defaultLink = {
  children: 'Default Link',
};
DefaultLink.args = defaultLink;

export const DisabledLink = Template1.bind({});
const disabledLink = {
  children: 'Disabled Link',
  disabled: true,
};
DisabledLink.args = disabledLink;
