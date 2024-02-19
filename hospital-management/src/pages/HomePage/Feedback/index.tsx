import { StyledSlide } from '@components/Slide';
import StyledText from '@components/Text';
import styled from 'styled-components';
import { IFeedbackProps } from './types';
import { StyledSlideOutlineNavigation } from '@components/SlideOutlineNavigation';
import { memo } from 'react';
import _ from 'lodash';

const Feedback = (props: IFeedbackProps) => {
  const { className, data, title, description } = props;

  return (
    <section className={className}>
      <StyledText
        as="h2"
        fontWeight="var(--font-weight-semi-bold)"
        fontSize="var(--text-xx-large)"
        lineHeight="41px"
        color="#000000"
      >
        {title}
      </StyledText>
      <StyledText fontSize="var(--text-x-medium)" lineHeight="27px" mTop="5px">
        {description}
      </StyledText>
      <StyledSlide
        CustomNavigationComponent={StyledSlideOutlineNavigation}
        navigation
        pagination={false}
      >
        {data.map((item) => (
          <StyledText
            as="h4"
            color="var(--color-primary)"
            textAlign="center"
            fontWeight="var(--font-weight-semi-bold)"
            fontSize="var(--text-large)"
            lineHeight="42px"
            key={item}
            maxWidth="552px"
          >
            {item}
          </StyledText>
        ))}
      </StyledSlide>
    </section>
  );
};

const StyledFeedback = memo(
  styled(Feedback)`
    text-align: center;
    padding-top: 123px;
    padding-bottom: 191px;

    > div {
      margin-top: 74px;
    }
  `,
  (prev, next) =>
    _.isEqual(prev.data, next.data) &&
    prev.title === next.title &&
    prev.description === next.description,
);

export { StyledFeedback };
