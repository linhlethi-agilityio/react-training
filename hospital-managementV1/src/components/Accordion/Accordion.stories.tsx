import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledAccordion } from '@components/Accordion';
import { IAccordionItem } from '@components/AccordionItem/types';

export default {
  title: 'Accordion',
  component: StyledAccordion,
  parameters: {
    backgrounds: {
      default: 'blue',
      values: [
        { name: 'blue', value: '#E6EEF2' },
        { name: 'white', value: '#FFFFFF' },
      ],
    },
  },
} as ComponentMeta<typeof StyledAccordion>;

const Template: ComponentStory<typeof StyledAccordion> = (args) => <StyledAccordion {...args} />;

export const Accordion = Template.bind({});

const data: IAccordionItem[] = [
  {
    id: '1',
    title: 'Title1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed do eiusmod tempor incididunt ut, Labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    id: '2',
    title: 'Title2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed do eiusmod tempor incididunt ut, Labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
];
const props = {
  data: data,
};
Accordion.args = props;
