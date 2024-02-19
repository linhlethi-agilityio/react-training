import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DoctorEducation } from '@pages/UserDetailPage/DoctorEducation';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'DoctorEducation',
  component: DoctorEducation,
  parameters: {
    actions: {
      handles: ['click a, redirect to educations item page'],
    },
  },
} as ComponentMeta<typeof DoctorEducation>;

const Template: ComponentStory<typeof DoctorEducation> = (args) => (
  <Router>
    <DoctorEducation {...args} />
  </Router>
);

const data = [
  {
    id: '1',
    image: 'https://via.placeholder.com/89?text=Education%20Image',
    title: 'Ipsum et duis fermentum nisl',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra consequat libero gravida purus sodales.',
  },
  {
    id: '2',
    image: 'https://via.placeholder.com/89?text=Education%20Image',
    title: 'Ipsum et duis fermentum nisl',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverus sodales.',
  },
  {
    id: '3',
    image: 'https://via.placeholder.com/89?text=Education%20Image',
    title: 'Ipsum et duis fermentum nisl',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra consequat libero gravida purus sodales.',
  },
];

export const Default = Template.bind({});
const props = {
  data: data,
  hrefEducation: 'http://via.placeholder.com/doctor/educations',
};
Default.args = props;
