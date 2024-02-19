import { memo } from 'react';
import { IIconProps } from './types';

const ShoppingCartIcon = ({ size, color, ...props }: IIconProps) => {
  const defaultColor = '#000';
  const originHeight = 16;
  const originWidth = 21;
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
        d="M6.766 12.577h11.158a.615.615 0 0 0 .591-.447l2.461-8.613a.616.616 0 0 0-.591-.784H5.347l-.44-1.98a.615.615 0 0 0-.6-.481H.615a.615.615 0 1 0 0 1.23h3.198l2.221 9.996a1.848 1.848 0 0 0-1.112 1.694c0 1.017.828 1.845 1.846 1.845h11.156a.615.615 0 0 0 0-1.23H6.768a.616.616 0 0 1-.002-1.23Zm12.803-8.614-2.11 7.383H7.262l-1.64-7.383h13.948Z"
        fill={color ?? defaultColor}
      />
    </svg>
  );
};

ShoppingCartIcon.defaultProps = {
  size: 21,
  color: '#000',
};

export default memo(ShoppingCartIcon);
