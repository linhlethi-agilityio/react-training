import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledBox } from '@components/Box';

export default {
  title: 'Box',
  component: StyledBox,
} as ComponentMeta<typeof StyledBox>;

const Template: ComponentStory<typeof StyledBox> = (args) => <StyledBox {...args} />;

export const Box = Template.bind({});
const props = {
  mLeft: 25,
  mTop: 25,
  mRight: 25,
  mBottom: 25,
  children: 'Box',
};
Box.args = props;
