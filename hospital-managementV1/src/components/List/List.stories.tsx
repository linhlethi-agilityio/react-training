import { ComponentMeta, ComponentStory } from '@storybook/react';
import { List } from '@components/List';
import { BrowserRouter as Router } from 'react-router-dom';
import { ListItem } from '@components/ListItem';
import StyledText from '@components/Text';

export default {
  title: 'List',
  component: List,
} as ComponentMeta<typeof List>;

const items = [
  {
    id: '1',
    name: 'item1',
  },
  {
    id: '2',
    name: 'item2',
  },
  {
    id: '3',
    name: 'item3',
  },
];

const Template: ComponentStory<typeof List> = (args) => (
  <Router>
    <List {...args}>
      {items.map((item) => (
        <ListItem key={item.id}>
          <StyledText mTop="23px">{item.name}</StyledText>
        </ListItem>
      ))}
    </List>
  </Router>
);

export const Default = Template.bind({});
