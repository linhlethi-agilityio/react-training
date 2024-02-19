import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledFooter } from '@layouts/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'Footer',
  component: StyledFooter,
} as ComponentMeta<typeof StyledFooter>;

const Template: ComponentStory<typeof StyledFooter> = () => (
  <Router>
    <StyledFooter />
  </Router>
);

export { Template };
