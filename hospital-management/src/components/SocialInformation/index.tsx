import { FacebookV2Icon, InstagramIcon, LinkedinIcon, TwitterIcon } from '@components/Icons';
import { IIconProps } from '@components/Icons/types';
import { StyledLink } from '@components/Link';
import { FC } from 'react';
import styled from 'styled-components';
import { ISocialInfomationProps } from './types';

const SocialInformation = (props: ISocialInfomationProps) => {
  const { className, data } = props;

  const defaultIconMapping: { [key: string]: FC<IIconProps> } = {
    facebook: FacebookV2Icon,
    linkedin: LinkedinIcon,
    twitter: TwitterIcon,
    instagram: InstagramIcon,
  };

  const renderElement = () => {
    return Object.entries(data).map(([key, value]) => {
      const Component = value.IconComponent || defaultIconMapping[key];

      return (
        <StyledLink to={value.hrefLink} key={key}>
          <Component size={value.size} color={value.color} />
        </StyledLink>
      );
    });
  };

  return <div className={className}>{renderElement()}</div>;
};

const StyledSocialInformation = styled(SocialInformation)<ISocialInfomationProps>`
  display: flex;
  gap: ${(props) => props.gap};
`;

export { StyledSocialInformation };
