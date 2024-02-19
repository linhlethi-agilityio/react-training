import { memo } from 'react';
import { IIconProps } from './types';

const FacebookV1Icon = ({ size, color, ...props }: IIconProps) => {
  const defaultColor = '#000';
  const originHeight = 56;
  const originWidth = 56;
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
      <path
        d="M55.999 28.17c0-15.56-12.537-28.174-28-28.174C12.529-.001-.008 12.61-.008 28.174c0 14.06 10.24 25.715 23.625 27.829V36.315h-7.105v-8.14h7.112v-6.213c0-7.06 4.182-10.959 10.577-10.959 3.066 0 6.268.55 6.268.55v6.93h-3.531c-3.476 0-4.56 2.173-4.56 4.403v5.285h7.762l-1.239 8.14h-6.527V56c13.384-2.114 23.625-13.769 23.625-27.828Z"
        fill={color ?? defaultColor}
      />
    </svg>
  );
};

FacebookV1Icon.defaultProps = {
  size: 56,
  color: '#000',
};

export default memo(FacebookV1Icon);
