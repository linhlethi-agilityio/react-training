import { StyledSlidePaginationItem } from '@components/SlidePaginationItem';
import styled from 'styled-components';
import { ISlidePaginationProps } from './types';

const SlidePagination = (props: ISlidePaginationProps) => {
  const { className, slideCount, currentIndex, onItemClick } = props;
  const arr = Array.from(Array(slideCount).keys()).reverse();

  return (
    <ul className={className}>
      {arr.map((item, i) => (
        <StyledSlidePaginationItem
          key={`slide-pagination-${i}`}
          active={item === currentIndex}
          onClick={() => onItemClick(item)}
        />
      ))}
    </ul>
  );
};

const SlydedSlidePagination = styled(SlidePagination)`
  display: flex;
  gap: 18px;
  z-index: 0;
  flex-direction: row-reverse;
  width: 100%;
`;

export { SlydedSlidePagination };
