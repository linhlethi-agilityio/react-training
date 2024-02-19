import StyledText from '@components/Text';
import styled from 'styled-components';
import { IAppDescriptionProps } from './types';
import imageAppDescription from '@image/image-app-description.webp';
import { StyledSlide } from '@components/Slide';
import { SlydedSlidePagination } from '@components/SlidePagination';
import { IPaginationItemProps } from '@components/SlidePaginationItem/types';
import { FC, memo } from 'react';
import _ from 'lodash';

const AppDescription = (props: IAppDescriptionProps) => {
  const { className, title, description, data } = props;

  return (
    <section className={className}>
      <StyledText
        as="h2"
        fontWeight="var(--font-weight-semi-bold)"
        fontSize="var(--text-xx-large)"
        lineHeight="41px"
        color="#000000"
        textAlign="center"
      >
        {title}
      </StyledText>
      <StyledText fontSize="20px" lineHeight="27px" textAlign="center">
        {description}
      </StyledText>
      <div>
        <img src={imageAppDescription} alt="app-description" />
        <StyledSlide
          pagination
          navigation={false}
          CustomPaginationComponent={StyledAppDescriptionPagination}
        >
          {data.map((item) => (
            <div key={item.id}>
              <StyledText
                as="h3"
                fontWeight="var(--font-weight-bold)"
                fontSize="36px"
                lineHeight="49px"
                color="var(--color-primary)"
              >
                {item.title}
              </StyledText>
              <StyledText
                fontSize="var(--text-small)"
                lineHeight="35px"
                mTop="12px"
                maxWidth="545px"
              >
                {item.description}
              </StyledText>
            </div>
          ))}
        </StyledSlide>
      </div>
    </section>
  );
};

const StyledAppDescriptionPagination: FC<IPaginationItemProps> = styled(
  SlydedSlidePagination,
)<IPaginationItemProps>`
  margin-right: -316px;
`;

const StyledAppDescription = memo(
  styled(AppDescription)`
    padding-bottom: 208px;

    > div {
      display: flex;
      justify-content: center;
      gap: 240px;
      margin-top: 78px;
    }

    ul {
      position: absolute;
      bottom: 0;
    }
  `,
  (prev, next) =>
    prev.title === next.title &&
    prev.description === next.description &&
    _.isEqual(prev.data, next.data),
);

export { StyledAppDescription };
