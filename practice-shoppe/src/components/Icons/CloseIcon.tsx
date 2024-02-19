import { memo } from 'react';
import { IIconProps } from './types';

const CloseIcon = ({ size, color, ...props }: IIconProps) => {
  const defaultColor = '#000';
  const originHeight = 14;
  const originWidth = 14;
  const heightRatio = originHeight / originWidth;

  return (
    <svg
      width={size}
      height={size! * heightRatio}
      viewBox={`0 0 ${originWidth} ${originHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 1.183 12.817 13M1 12.817 12.817 1"
        stroke={color ?? defaultColor}
        strokeWidth={1.5}
      />
    </svg>
  );
};

CloseIcon.defaultProps = {
  size: 14,
  color: '#000',
};

export default memo(CloseIcon);
