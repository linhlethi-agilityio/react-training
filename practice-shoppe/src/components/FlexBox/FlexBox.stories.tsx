import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledFlexBox } from '@components/FlexBox';

export default {
  title: 'FlexBox',
  component: StyledFlexBox,
} as ComponentMeta<typeof StyledFlexBox>;

const Template: ComponentStory<typeof StyledFlexBox> = (args) => (
  <StyledFlexBox {...args}>
    <div>Flex 1</div>
    <div>Flex 2</div>
  </StyledFlexBox>
);

export const CenterFlexBox = Template.bind({});
const centerFlexBox = {
  gap: 10,
  justifyContent: 'center',
};
CenterFlexBox.args = centerFlexBox;

export const SpaceBetweenFlexBox = Template.bind({});
const spaceBetweenFlexBox = {
  gap: 10,
  justifyContent: 'space-between',
};
SpaceBetweenFlexBox.args = spaceBetweenFlexBox;

export const RightFlexBox = Template.bind({});
const rightFlexBox = {
  gap: 10,
  justifyContent: 'right',
};
RightFlexBox.args = rightFlexBox;

export const LeftFlexBox = Template.bind({});
const leftFlexBox = {
  gap: 10,
  justifyContent: 'left',
};
LeftFlexBox.args = leftFlexBox;
