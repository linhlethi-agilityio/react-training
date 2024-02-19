import { StyledLink } from '@components/Link';
import { memo } from 'react';
import { transformToStyleValue } from '@helper/transformNumber';
import styled from 'styled-components';
import { ISocialInformationProps } from './types';

// https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url
const twitterIcon = new URL('/images/twitterIcon.webp', import.meta.url).href;
const facebookIcon = new URL('/images/facebookIcon.webp', import.meta.url).href;
const instagramIcon = new URL('/images/instagramIcon.webp', import.meta.url).href;
const linkedinIcon = new URL('/images/linkedinIcon.webp', import.meta.url).href;

const SocialInformation = (props: ISocialInformationProps) => {
  const { className, data } = props;

  return (
    <div className={className}>
      <StyledLink to={data.linkedin}>
        <img src={linkedinIcon} alt="linkedinIcon" />
      </StyledLink>
      <StyledLink to={data.facebook}>
        <img src={facebookIcon} alt="facebookIcon" />
      </StyledLink>
      <StyledLink to={data.instagram}>
        <img src={instagramIcon} alt="instagramIcon" />
      </StyledLink>
      <StyledLink to={data.twitter}>
        <img src={twitterIcon} alt="twitterIcon" />
      </StyledLink>
    </div>
  );
};

const StyledSocialInformation = memo(styled(SocialInformation)<ISocialInformationProps>`
  display: flex;
  gap: ${(props) => transformToStyleValue(props.gap)};
`);

export { StyledSocialInformation };
