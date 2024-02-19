import { memo } from 'react';
import { IIconProps } from './types';

const RightArrowAltIcon = ({ size, color, ...props }: IIconProps) => {
  const defaultColor = '#4C84C3';
  const originHeight = 14;
  const originWidth = 22;
  const heightRatio = originHeight / originWidth;

  return (
    <svg
      width={size}
      height={size * heightRatio}
      viewBox={`0 0 ${originWidth} ${originHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.707 7.695a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 1.414l4.293 4.293H1a1 1 0 0 0 0 2h17.586l-4.293 4.293a1 1 0 0 0 1.414 1.414l6-6Z"
        fill={color ?? defaultColor}
      />
    </svg>
  );
};

RightArrowAltIcon.defaultProps = {
  size: 22,
  color: '#4C84C3',
};

export default memo(RightArrowAltIcon);
