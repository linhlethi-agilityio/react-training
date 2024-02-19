import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledAvatar } from '@components/Avatar';

export default {
  title: 'Avatar',
  component: StyledAvatar,
} as ComponentMeta<typeof StyledAvatar>;

const Template: ComponentStory<typeof StyledAvatar> = (args) => <StyledAvatar {...args} />;

export const MediumAvatar = Template.bind({});
const mediumAvatar = {
  src: 'https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png',
};
MediumAvatar.storyName = 'Default (Medium Avatar)';
MediumAvatar.args = mediumAvatar;

export const ExtraSmallAvatar = Template.bind({});
const extraSmallAvatar = {
  ...MediumAvatar.args,
  size: 'xs',
};
ExtraSmallAvatar.args = extraSmallAvatar;

export const SmallAvatar = Template.bind({});
const smallAvatar = {
  ...MediumAvatar.args,
  size: 'sm',
};
SmallAvatar.args = smallAvatar;

export const LargeAvatar = Template.bind({});
const largeAvatar = {
  ...MediumAvatar.args,
  size: 'lg',
};
LargeAvatar.args = largeAvatar;
