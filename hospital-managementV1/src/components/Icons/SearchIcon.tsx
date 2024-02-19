import { memo } from 'react';
import { IIconProps } from './types';

const SearchIcon = ({ size, color, ...props }: IIconProps) => {
  const defaultColor = '#4C84C3';
  const originHeight = 19;
  const originWidth = 17;
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="m12.176 11.962 4.573 4.988a.98.98 0 0 1 .251.662.98.98 0 0 1-.251.661.823.823 0 0 1-.607.274.823.823 0 0 1-.606-.274l-4.573-4.989c-1.367 1.155-3.086 1.699-4.807 1.52-1.721-.178-3.315-1.066-4.458-2.481C.555 10.908-.052 9.07.003 7.185.058 5.3.77 3.508 1.992 2.174 3.214.84 4.857.064 6.585.004c1.728-.059 3.412.602 4.71 1.849 1.297 1.247 2.11 2.986 2.274 4.864.163 1.878-.335 3.753-1.394 5.245h.001ZM6.8 12.982c1.353 0 2.65-.585 3.606-1.629.957-1.043 1.494-2.458 1.494-3.934s-.537-2.89-1.494-3.934C9.45 2.442 8.153 1.855 6.8 1.855c-1.352 0-2.65.587-3.606 1.63S1.701 5.943 1.701 7.419s.537 2.89 1.493 3.934c.957 1.043 2.254 1.63 3.606 1.63Z"
        fill={color ?? defaultColor}
      />
    </svg>
  );
};

SearchIcon.defaultProps = {
  size: 17,
  color: '#4C84C3',
};

export default memo(SearchIcon);
