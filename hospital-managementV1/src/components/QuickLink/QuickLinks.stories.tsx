import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QuickLink } from '@components/QuickLink';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'QuickLink',
  component: QuickLink,
  parameters: {
    backgrounds: {
      default: 'blue',
      values: [
        { name: 'blue', value: '#1b71a1' },
        { name: 'white', value: '#FFFFFF' },
      ],
    },
  },
} as ComponentMeta<typeof QuickLink>;

const Template: ComponentStory<typeof QuickLink> = (args) => (
  <Router>
    <QuickLink {...args} />
  </Router>
);

const item = {
  id: 1,
  title: 'Quick Links',
  links: [
    { id: 1, name: 'How it works', path: '#' },
    { id: 2, name: 'About us', path: '#' },
    { id: 3, name: 'Membership', path: '#' },
  ],
};

export const Default = Template.bind({});
const props = {
  item: item,
};
Default.args = props;
