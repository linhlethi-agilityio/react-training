import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledSpecialtyGrid } from '@pages/HomePage/SpecialtyGrid';
import { ISpecialty } from '@data-types/specialty';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'SpecialtyGrid',
  component: StyledSpecialtyGrid,
  parameters: {
    actions: {
      handles: ['click a, redirect to card item page'],
    },
  },
} as ComponentMeta<typeof StyledSpecialtyGrid>;
const Template: ComponentStory<typeof StyledSpecialtyGrid> = (args) => (
  <Router>
    <StyledSpecialtyGrid {...args} />
  </Router>
);

export const Default = Template.bind({});

const data: ISpecialty[] = [
  {
    name: 'Pediatircs',
    image: 'https://via.placeholder.com/240x218.png?text=Specialty%20Image',
    id: '1',
  },
  {
    name: 'General Medecine',
    image: 'https://via.placeholder.com/240x218.png?text=Specialty%20Image',
    id: '2',
  },
  {
    name: 'Orthopedics',
    image: 'https://via.placeholder.com/240x218.png?text=Specialty%20Image',
    id: '3',
  },
  {
    name: 'Eye Specialist',
    image: 'https://via.placeholder.com/240x218.png?text=Specialty%20Image',
    id: '4',
  },
  {
    name: 'Pediatircs',
    image: 'https://via.placeholder.com/240x218.png?text=Specialty%20Image',
    id: '5',
  },
  {
    name: 'General Medecine',
    image: 'https://via.placeholder.com/240x218.png?text=Specialty%20Image',
    id: '6',
  },
  {
    name: 'Pediatircs',
    image: 'https://via.placeholder.com/240x218.png?text=Specialty%20Image',
    id: '7',
  },
  {
    name: 'General Medecine',
    image: 'https://via.placeholder.com/240x218.png?text=Specialty%20Image',
    id: '8',
  },
];
const props = {
  data: data,
  resource: 'specialities',
  title: 'Select your Specialty',
  description: 'Private online consultations with verified doctors in all specialists',
};
Default.args = props;
