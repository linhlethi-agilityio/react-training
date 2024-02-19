import { memo } from 'react';
import { IIconProps } from './types';

const BackArrowIcon = ({ size, color, ...props }: IIconProps) => {
  const defaultColor = '#707070';
  const originHeight = 9;
  const originWidth = 25;
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
        d="M0 4.991v-1.25c0-.345.28-.625.625-.625h19.381v-2.5A.625.625 0 0 1 21.07.18l3.751 3.75c.24.247.24.64 0 .887l-3.751 3.75a.625.625 0 0 1-1.063-.45v-2.5H.626A.625.625 0 0 1 0 4.991Z"
        fill={color ?? defaultColor}
      />
    </svg>
  );
};

BackArrowIcon.defaultProps = {
  size: 25,
  color: '#707070',
};

export default memo(BackArrowIcon);
