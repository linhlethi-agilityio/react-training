import { BackArrowFilledIcon, ForwardArrowFilledIcon } from '@components/Icons';
import styled from 'styled-components';
import { ISlideNavigationProps } from './types';

const SlideNavigation = (props: ISlideNavigationProps) => {
  const { className, nextSlide, previousSlide } = props;

  return (
    <div className={className}>
      <button onClick={previousSlide}>
        <BackArrowFilledIcon size={24} />
      </button>
      <button onClick={nextSlide}>
        <ForwardArrowFilledIcon size={24} />
      </button>
    </div>
  );
};

const StyledSlideNavigation = styled(SlideNavigation)`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;

  button {
    cursor: pointer;
    border: none;
    background: none;
  }
`;

export { StyledSlideNavigation };
