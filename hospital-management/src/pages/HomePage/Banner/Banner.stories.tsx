import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Banner } from '@pages/HomePage/Banner';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'Banner',
  component: Banner,
  parameters: {
    actions: {
      handles: ['click a, redirect to Consultation page'],
    },
  },
} as ComponentMeta<typeof Banner>;

const data = [
  {
    id: '1',
    imageSrc: 'https://via.placeholder.com/1440x630/EEE8AA.png?text=Banner%20Image',
    title: '1.Instant Consultation With Trusted Doctors',
  },
  {
    id: '2',
    imageSrc: 'https://via.placeholder.com/1440x630/EEE8AA.png?text=Banner%20Image',
    title: '2.Instant Consultation With Trusted Doctors',
  },
  {
    id: '3',
    imageSrc: 'https://via.placeholder.com/1440x630/EEE8AA.png?text=Banner%20Image',
    title: '3.Instant Consultation With Trusted Doctors',
  },
];

const Template: ComponentStory<typeof Banner> = (args) => (
  <Router>
    <Banner {...args} />
  </Router>
);

export const Default = Template.bind({});
const props = {
  resource: 'http://via.placeholder.com/300',
  data: data,
};
Default.args = props;
