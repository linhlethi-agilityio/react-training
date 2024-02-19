import { memo } from 'react';
import { IIconProps } from './types';

const LinkedinIcon = ({ size, color, ...props }: IIconProps) => {
  const defaultColor = 'url(#a)';
  const originHeight = 32;
  const originWidth = 32;
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
        d="M15.998 0a16 16 0 1 0 .004 32 16 16 0 0 0-.004-32ZM11.73 23.735H8.216v-11.35h3.513v11.35ZM9.956 10.9a2.094 2.094 0 1 1 2.078-2.094A2.086 2.086 0 0 1 9.956 10.9Zm14.938 12.836H21.4v-5.957c0-1.634-.621-2.546-1.913-2.546-1.406 0-2.141.95-2.141 2.546v5.957h-3.37v-11.35h3.37v1.53a3.959 3.959 0 0 1 3.42-1.876c2.407 0 4.13 1.47 4.13 4.51v7.186Z"
        fill={color ?? defaultColor}
      />
      <defs>
        <linearGradient
          id="a"
          x1={-63.072}
          y1={83.52}
          x2={-40.448}
          y2={106.144}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2489BE" />
          <stop offset={1} stopColor="#0575B3" />
        </linearGradient>
      </defs>
    </svg>
  );
};

LinkedinIcon.defaultProps = {
  size: 32,
  color: 'url(#a)',
};

export default memo(LinkedinIcon);
