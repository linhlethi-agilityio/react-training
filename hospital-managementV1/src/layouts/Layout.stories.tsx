import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Layout } from '@layouts/';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
  <Router>
    <Layout {...args} />
  </Router>
);

export const Default = Template.bind({});

const props = {};
Default.args = props;
