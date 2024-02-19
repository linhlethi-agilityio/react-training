import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledSlide } from '@components/Slide';

export default {
  title: 'Slide',
  component: StyledSlide,
} as ComponentMeta<typeof StyledSlide>;

export interface ISlideItem {
  id: string;
  image: string;
}

export interface ISlideItemProps {
  data: ISlideItem;
}

const data: ISlideItem[] = [
  {
    image: 'https://via.placeholder.com/600/EEE8AA?text=Slide1%20Image',
    id: '1',
  },
  {
    image: 'https://via.placeholder.com/600/EEE8AA?text=Slide2%20Image',
    id: '2',
  },
  {
    image: 'https://via.placeholder.com/600/EEE8AA?text=Slide3%20Image',
    id: '3',
  },
];

const Template: ComponentStory<typeof StyledSlide> = (args) => (
  <StyledSlide {...args}>
    {data.map((item) => (
      <img src={item.image} alt="slide" key={item.id} />
    ))}
  </StyledSlide>
);

export const Default = Template.bind({});
