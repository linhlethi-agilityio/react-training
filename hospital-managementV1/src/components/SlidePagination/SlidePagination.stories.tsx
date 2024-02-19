import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SlydedSlidePagination } from '@components/SlidePagination';
import { useState } from 'react';

export default {
  title: 'SlidePagination',
  component: SlydedSlidePagination,
} as ComponentMeta<typeof SlydedSlidePagination>;

const Template: ComponentStory<typeof SlydedSlidePagination> = (args) => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  return (
    <SlydedSlidePagination {...args} currentIndex={currentIndex} onItemClick={setCurrentIndex} />
  );
};

export const Default = Template.bind({});
const defaultProps = {
  slideCount: 3,
};
Default.args = defaultProps;
