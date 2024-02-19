import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserInfo } from '@components/UserInfo';

export default {
  title: 'UserInfo',
  component: UserInfo,
} as ComponentMeta<typeof UserInfo>;

const user = {
  name: 'Dr. Yateesh Bhardwaj',
  background: 'https://via.placeholder.com/1408x220.png?text=Background%20Image',
  position: 'M.B.B.s,  M.D, General Medecine',
  location: 'Vasant Kunj, Delhi, India',
  avatar: 'https://via.placeholder.com/223x223/008000?text=Avatar%20Image',
  socialInfo: {
    facebook: 'https://gigantic-woodshed.name',
    twitter: 'https://gigantic-woodshed.name',
  },
  role: 'user',
};

const Template: ComponentStory<typeof UserInfo> = (args) => (
  <Router>
    <UserInfo {...args} />
  </Router>
);

export const UserInformation = Template.bind({});
const props = {
  ...user,
  editable: true,
};
UserInformation.args = props;
