import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledBox } from '@components/Box';

export default {
  title: 'Box',
  component: StyledBox,
} as ComponentMeta<typeof StyledBox>;

const Template: ComponentStory<typeof StyledBox> = (args) => <StyledBox {...args} />;

export const Box = Template.bind({});
const props = {
  mLeft: '25px',
  mTop: '25px',
  mRight: '25px',
  mBottom: '25px',
  children: 'Box',
};
Box.args = props;
