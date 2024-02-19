import styled from 'styled-components';
import { IdownloadAppProps } from './types';
import bgdownloadApp from '@image/downloadApp.webp';
import iosDownloadImage from '@image/iosDownload.webp';
import androidDownloadImage from '@image/androidDownload.webp';
import StyledText from '@components/Text';
import { StyledLink } from '@components/Link';
import { memo } from 'react';

const DownloadApp = (props: IdownloadAppProps) => {
  const { className, iosAppLink, androidAppLink, title, description } = props;

  return (
    <section className={className}>
      <StyledText as="h2" fontWeight="700" fontSize="40px" lineHeight="54px" color="#4C84C3">
        {title}
      </StyledText>
      <StyledText mTop="6px" color="#000000" lineHeight="27px">
        {description}
      </StyledText>
      <div>
        {androidAppLink && (
          <StyledLink to={androidAppLink}>
            <img src={androidDownloadImage} alt="androidDownloadImage" />
          </StyledLink>
        )}
        {iosAppLink && (
          <StyledLink to={iosAppLink}>
            <img src={iosDownloadImage} alt="iosDownloadImage" />
          </StyledLink>
        )}
      </div>
    </section>
  );
};

const StyledDownloadApp = memo(
  styled(DownloadApp)`
    background-image: url(${bgdownloadApp});
    padding: 121px 244px 132px 557px;
    margin-left: 105px;
    margin-right: 154px;

    div {
      margin-top: 22px;
      display: flex;
      gap: 0 24px;
    }
  `,
  (prev, next) =>
    prev.iosAppLink === next.iosAppLink &&
    prev.androidAppLink === next.androidAppLink &&
    prev.title === next.title &&
    prev.description === next.description,
);

export { StyledDownloadApp };
