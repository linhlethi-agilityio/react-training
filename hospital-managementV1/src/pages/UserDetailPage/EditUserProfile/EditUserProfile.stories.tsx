import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledEditUserProfile } from '@pages/UserDetailPage/EditUserProfile';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'EditUserProfile',
  component: StyledEditUserProfile,
  parameters: {
    actions: {
      handles: ['click a, redirect to changePassword page'],
    },
  },
} as ComponentMeta<typeof StyledEditUserProfile>;

const Template: ComponentStory<typeof StyledEditUserProfile> = (args) => (
  <Router>
    <StyledEditUserProfile {...args} />
  </Router>
);

export const EditUserProfile = Template.bind({});

const data = {
  name: 'Yateesh Bhardwaj',
  email: 'yattesh@eaxmple.com',
  phone: '+91- 7777777777',
  location: 'New Delhi, India',
};

const props = {
  data: data,
  hrefChangePassword: 'http://via.placeholder.com/changePassword',
};
EditUserProfile.args = props;
