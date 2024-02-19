import { memo } from 'react';
import { IIconProps } from './types';

const ForwardArrowFilledIcon = ({ size, color, ...props }: IIconProps) => {
  const defaultColor = '#000100';
  const originHeight = 40;
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
      <path
        d="M12.182 21.363c.28-.447.47-.944.556-1.465a2.006 2.006 0 0 0-.556-1.357L1.148 7.077a4.232 4.232 0 0 1-.02-5.774l.056-.062a3.918 3.918 0 0 1 5.708-.014l16.534 17.226c.364.393.57.91.574 1.445a4.248 4.248 0 0 1-.574 1.55L6.892 38.778a3.919 3.919 0 0 1-5.708-.024l-.056-.072a4.266 4.266 0 0 1 .02-5.8l11.034-11.52Z"
        fill={color ?? defaultColor}
      />
    </svg>
  );
};

ForwardArrowFilledIcon.defaultProps = {
  size: 24,
  color: '#000100',
};

export default memo(ForwardArrowFilledIcon);
