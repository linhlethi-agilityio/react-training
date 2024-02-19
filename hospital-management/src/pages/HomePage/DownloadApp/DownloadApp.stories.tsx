import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledDownloadApp } from '@pages/HomePage/DownloadApp';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'DownloadApp',
  component: StyledDownloadApp,
  parameters: {
    actions: {
      handles: ['click a, redirect to download page'],
    },
  },
} as ComponentMeta<typeof StyledDownloadApp>;

const Template: ComponentStory<typeof StyledDownloadApp> = (args) => (
  <Router>
    <StyledDownloadApp {...args} />
  </Router>
);

export const Default = Template.bind({});
const props = {
  iosAppLink: 'http://via.placeholder.com/300',
  androidAppLink: 'http://via.placeholder.com/300',
  title: 'Download our App',
  description:
    'Access video consultation with India’s top doctors on the Swasthu mobile Application. Connect with doctors online from the comfort of your home.',
};
Default.args = props;
