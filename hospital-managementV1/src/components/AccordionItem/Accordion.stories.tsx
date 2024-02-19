import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledAccordionItem } from '@components/AccordionItem';
import { IAccordionItem } from './types';

export default {
  title: 'AccordionItem',
  component: StyledAccordionItem,
} as ComponentMeta<typeof StyledAccordionItem>;

const Template: ComponentStory<typeof StyledAccordionItem> = (args) => (
  <StyledAccordionItem {...args} />
);

export const AccordionItem = Template.bind({});

const item: IAccordionItem = {
  id: '1',
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
};

const props = {
  item: item,
};
AccordionItem.args = props;
