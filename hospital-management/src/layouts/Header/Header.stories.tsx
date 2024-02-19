import { ComponentMeta, ComponentStory } from '@storybook/react';
import StyledHeader from '@layouts/Header';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'Header',
  component: StyledHeader,
} as ComponentMeta<typeof StyledHeader>;

const Template: ComponentStory<typeof StyledHeader> = () => (
  <Router>
    <StyledHeader />
  </Router>
);

export { Template };
