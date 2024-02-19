import styled from 'styled-components';
import { useState } from 'react';
import { ISlideProps } from './types';
import { StyledSlideNavigation } from '@components/SlideNavigation';
import React from 'react';
import { StyledSlideItem } from '@components/SlideItem';
import { SlydedSlidePagination } from '@components/SlidePagination';

const Slide = (props: ISlideProps) => {
  const {
    navigation,
    pagination,
    className,
    children,
    CustomPaginationComponent,
    CustomNavigationComponent,
  } = props;

  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const items = React.Children.toArray(children);
  const PaginationComponent = CustomPaginationComponent || SlydedSlidePagination;
  const NavigationComponent = CustomNavigationComponent || StyledSlideNavigation;

  const handleNextSlide = () => {
    if (currentIndex !== items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePreviousSlide = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(items.length - 1);
    }
  };

  const renderSlide = () => {
    return items.map((element, index) => (
      <StyledSlideItem key={`slide-${index}`} active={index === currentIndex}>
        {element}
      </StyledSlideItem>
    ));
  };

  return (
    <div className={className}>
      {renderSlide()}
      {navigation && (
        <NavigationComponent nextSlide={handleNextSlide} previousSlide={handlePreviousSlide} />
      )}
      {pagination && (
        <PaginationComponent
          slideCount={items.length}
          onItemClick={setCurrentIndex}
          currentIndex={currentIndex}
        />
      )}
    </div>
  );
};

const StyledSlide = styled(Slide)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

StyledSlide.defaultProps = {
  pagination: true,
  navigation: true,
};

export { StyledSlide };
