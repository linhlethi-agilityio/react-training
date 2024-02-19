import { BackArrowOutlineIcon, ForwardArrowOutlineIcon } from '@components/Icons';
import { ISlideNavigationProps } from '@components/SlideNavigation/types';
import styled from 'styled-components';

const SlideOutlineNavigation = (props: ISlideNavigationProps) => {
  const { previousSlide, nextSlide, className } = props;

  return (
    <div className={className}>
      <button onClick={previousSlide}>
        <BackArrowOutlineIcon size={40} />
      </button>
      <button onClick={nextSlide}>
        <ForwardArrowOutlineIcon size={40} />
      </button>
    </div>
  );
};

const StyledSlideOutlineNavigation = styled(SlideOutlineNavigation)`
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

export { StyledSlideOutlineNavigation };
