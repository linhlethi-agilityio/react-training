import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListItem } from '@components/ListItem';
import { BrowserRouter as Router } from 'react-router-dom';
import StyledText from '@components/Text';

export default {
  title: 'ListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => (
  <Router>
    <ListItem {...args}>
      <StyledText>Item</StyledText>
    </ListItem>
  </Router>
);

export const Default = Template.bind({});
