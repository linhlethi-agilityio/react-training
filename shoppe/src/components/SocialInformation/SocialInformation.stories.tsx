import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledSocialInformation } from '@components/SocialInformation';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'SocialInformation',
  component: StyledSocialInformation,
} as ComponentMeta<typeof StyledSocialInformation>;

const Template: ComponentStory<typeof StyledSocialInformation> = (args) => (
  <Router>
    <StyledSocialInformation {...args} />
  </Router>
);

const socialInfo = {
  facebook: 'https://gigantic-woodshed.name',
  twitter: 'https://gigantic-woodshed.name',
  instagram: 'https://gigantic-woodshed.name',
  linkedin: 'https://gigantic-woodshed.name',
};

export const SocialInformation = Template.bind({});
const socialInformation = {
  data: socialInfo,
  gap: 30,
};
SocialInformation.args = socialInformation;
