import { memo } from 'react';
import { IIconProps } from './types';

const BackArrowOutlineIcon = ({ size, color, ...props }: IIconProps) => {
  const defaultColor = '#000';
  const originHeight = 40;
  const originWidth = 40;
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
        d="m14 19.053 8.474-8.474a1.018 1.018 0 0 1 1.473 0 1.018 1.018 0 0 1 0 1.474l-7.736 7.736 8.157 8.158a1.017 1.017 0 0 1 0 1.474 1.018 1.018 0 0 1-1.473 0L14 20.526a1.017 1.017 0 0 1 0-1.473ZM0 20C0 8.947 8.947 0 20 0s20 8.947 20 20-8.947 20-20 20S0 31.053 0 20Zm2.105 0c0 9.895 8 17.895 17.895 17.895s17.895-8 17.895-17.895S29.895 2.105 20 2.105 2.105 10.105 2.105 20Z"
        fill={color ?? defaultColor}
      />
    </svg>
  );
};

BackArrowOutlineIcon.defaultProps = {
  size: 40,
  color: '#000',
};

export default memo(BackArrowOutlineIcon);
