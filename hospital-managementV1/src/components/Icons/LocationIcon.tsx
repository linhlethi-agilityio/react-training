import { memo } from 'react';
import { IIconProps } from './types';

const LocationIcon = ({ size, color, ...props }: IIconProps) => {
  const defaultColor = '#4C84C3';
  const originHeight = 18;
  const originWidth = 11;
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
        d="M5.501.001C2.463.001 0 2.72 0 6.078s5.501 11.378 5.501 11.378S11 9.436 11 6.078C11 2.72 8.54 0 5.501 0Zm0 10.1c-2.01 0-3.64-1.8-3.64-4.023S3.49 2.054 5.5 2.054c2.012 0 3.641 1.801 3.641 4.024S7.512 10.1 5.502 10.1Z"
        fill={color ?? defaultColor}
      />
    </svg>
  );
};

LocationIcon.defaultProps = {
  size: 11,
  color: '#4C84C3',
};

export default memo(LocationIcon);
