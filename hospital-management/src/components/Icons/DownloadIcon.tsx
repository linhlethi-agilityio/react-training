import { memo } from 'react';
import { IIconProps } from './types';

const DownloadIcon = ({ size, color, ...props }: IIconProps) => {
  const defaultColor = '#000';
  const originHeight = 24;
  const originWidth = 24;
  const heightRatio = originHeight / originWidth;

  return (
    <svg
      width={size}
      height={size * heightRatio}
      fill="none"
      viewBox={`0 0 ${originWidth} ${originHeight}`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19 18H5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2Z" fill="#000" />
      <path
        d="M4 17v2a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0ZM18 17v2a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0ZM12 15a1 1 0 0 1-.58-.18l-4-2.82a1 1 0 1 1 1.16-1.63L12 12.76l3.4-2.56a1 1 0 1 1 1.2 1.6l-4 3a1 1 0 0 1-.6.2Z"
        fill={color ?? defaultColor}
      />
      <path d="M12 13a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1Z" fill="#000" />
    </svg>
  );
};

DownloadIcon.defaultProps = {
  size: 24,
  color: '#000',
};

export default memo(DownloadIcon);
