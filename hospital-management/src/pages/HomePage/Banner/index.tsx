import { StyledButton } from '@components/Button';
import { StyledLink } from '@components/Link';
import { StyledSlide } from '@components/Slide';
import { SlydedSlidePagination } from '@components/SlidePagination';
import { IPaginationItemProps } from '@components/SlidePaginationItem/types';
import StyledText from '@components/Text';
import _ from 'lodash';
import { FC, memo } from 'react';
import styled from 'styled-components';
import { IBannerProps } from './types';

const Banner = memo(
  function Banner(props: IBannerProps) {
    const { data, resource } = props;

    return (
      <section>
        <StyledSlide
          CustomPaginationComponent={StyledBannerPagination}
          navigation={false}
          pagination
        >
          {data.map((item) => (
            <StyledBannerItem key={item.id} imageSrc={item.imageSrc}>
              <StyledText
                as="h2"
                fontWeight="var(--font-weight-bold)"
                color="var(--color-primary)"
                fontSize="var(--text-xxx-large)"
                lineHeight="54px"
              >
                {item.title}
              </StyledText>
              <StyledLink to={`${resource}`}>
                <StyledButton variant="secondary">Book Online Consultation</StyledButton>
              </StyledLink>
            </StyledBannerItem>
          ))}
        </StyledSlide>
      </section>
    );
  },
  (prev, next) => _.isEqual(prev.data, next.data) && prev.resource === next.resource,
);

const StyledBannerItem = styled.div<{ imageSrc: string }>`
  background-image: url(${(props) => props.imageSrc});
  padding: 222px 148px 234px 824px;
  max-width: 1440px;
  text-align: center;
  background-size: cover;

  button {
    margin-top: 43px;
  }
`;

const StyledBannerPagination: FC<IPaginationItemProps> = styled(
  SlydedSlidePagination,
)<IPaginationItemProps>`
  margin-top: -22px;
  margin-right: 83px;
`;

export { Banner };
