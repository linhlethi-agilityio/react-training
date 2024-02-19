import { memo } from 'react';
import { IIconProps } from './types';

const UserIcon = ({ size, color, ...props }: IIconProps) => {
  const defaultColor = '#000';
  const originHeight = 55;
  const originWidth = 47;
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
        d="M25.223 25.221c5.862-1.038 9.843-7.063 8.892-13.459-.952-6.395-6.475-10.738-12.337-9.7-5.863 1.037-9.844 7.063-8.892 13.459.95 6.395 6.474 10.738 12.337 9.7ZM0 41.604c0 6.928 5.16 12.558 11.51 12.558h23.98c6.35 0 11.51-5.63 11.51-12.558 0-6.927-5.16-12.557-11.51-12.557H11.51C5.16 29.047 0 34.677 0 41.604Z"
        fill={color ?? defaultColor}
      />
    </svg>
  );
};

UserIcon.defaultProps = {
  size: 47,
  color: '#000',
};

export default memo(UserIcon);
