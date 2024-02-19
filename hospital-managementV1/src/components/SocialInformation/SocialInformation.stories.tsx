import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledSocialInformation } from '@components/SocialInformation';
import { BrowserRouter as Router } from 'react-router-dom';
import { FacebookV2Icon } from '@components/Icons';
import { ISocialItem } from './types';

export default {
  title: 'SocialInformation',
  component: StyledSocialInformation,
} as ComponentMeta<typeof StyledSocialInformation>;

const Template: ComponentStory<typeof StyledSocialInformation> = (args) => (
  <Router>
    <StyledSocialInformation {...args} />
  </Router>
);

const user = {
  socialInfo: {
    facebook: 'https://gigantic-woodshed.name',
    twitter: 'https://gigantic-woodshed.name',
  },
  role: 'user',
};

const componentProps = Object.fromEntries(
  Object.entries(user.socialInfo).map(([key, value]) => {
    const transformedValue: ISocialItem = {
      hrefLink: value,
      size: 32,
    };
    if (user.role === 'user' && key === 'facebook') {
      transformedValue['IconComponent'] = FacebookV2Icon;
    }
    return [key, transformedValue];
  }),
);

export const SocialInformation = Template.bind({});
const propsDoctorSocial = {
  data: componentProps,
  gap: '0 22px',
};
SocialInformation.args = propsDoctorSocial;
