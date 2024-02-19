import { memo } from 'react';
import { IIconProps } from './types';

const TwitterIcon = ({ size, color, ...props }: IIconProps) => {
  const defaultColor = '#2DAAE1';
  const originHeight = 56;
  const originWidth = 55;
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
        d="M27.5 0C12.314 0 0 12.537 0 28c0 15.462 12.314 28 27.5 28S55 43.462 55 28C55 12.537 42.686 0 27.5 0Zm13.216 21.106c.018.294.018.6.018.9 0 9.175-6.862 19.744-19.403 19.744a19.085 19.085 0 0 1-10.472-3.112c.552.062 1.08.087 1.645.087 3.192 0 6.126-1.1 8.465-2.962-2.996-.063-5.513-2.063-6.372-4.813 1.05.156 1.995.156 3.075-.125a6.794 6.794 0 0 1-3.923-2.414 7.016 7.016 0 0 1-1.534-4.399v-.087a6.73 6.73 0 0 0 3.076.881 6.902 6.902 0 0 1-2.23-2.5 7.047 7.047 0 0 1-.809-3.275 6.9 6.9 0 0 1 .927-3.5 19.423 19.423 0 0 0 6.27 5.151 19.084 19.084 0 0 0 7.787 2.106c-.964-4.72 2.498-8.538 6.66-8.538 1.965 0 3.732.838 4.978 2.188a13.323 13.323 0 0 0 4.328-1.67 6.888 6.888 0 0 1-2.995 3.82c1.374-.15 2.7-.538 3.928-1.082a14.435 14.435 0 0 1-3.419 3.6Z"
        fill={color ?? defaultColor}
      />
    </svg>
  );
};

TwitterIcon.defaultProps = {
  size: 55,
  color: '#2DAAE1',
};

export default memo(TwitterIcon);
