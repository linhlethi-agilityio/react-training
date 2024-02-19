import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledFeedback } from '@pages/HomePage/Feedback';

export default {
  title: 'Feedback',
  component: StyledFeedback,
} as ComponentMeta<typeof StyledFeedback>;
const Template: ComponentStory<typeof StyledFeedback> = (args) => <StyledFeedback {...args} />;

const data: string[] = [
  'Very easy to book,maintain history. Hassle free from older versions of booking appointment via telephone.. Thanks Practo for making it simple.',
  'Very easy to book,maintain history. ersions of  via telephone.. Thanks Practo for making it simple.',
  'Very easy to book,maintain history. Hversions of booking appointment or making assle free from older  it simple.',
];

export const Feedback = Template.bind({});
const props = {
  data: data,
  title: 'What our user say about us',
  description: 'Lorem ipsum de color iss slsysos kshss sshdusk hbnjfyo ckdhdoi',
};
Feedback.args = props;
