import { memo } from 'react';
import { IIconProps } from './types';

const PenIcon = ({ size, color, ...props }: IIconProps) => {
  const defaultColor = '#7E7D7D';
  const originHeight = 37;
  const originWidth = 38;
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
        d="M4.454 23.845 2.45 32.272a2.063 2.063 0 0 0 .426 1.775c.202.246.459.446.75.583.292.137.61.21.935.212.15.014.303.014.454 0l8.708-1.953 16.72-16.218-9.331-9.065L4.454 23.845ZM35.699 8.551l-6.228-6.064a2.215 2.215 0 0 0-1.54-.62c-.579 0-1.133.224-1.542.62l-3.462 3.371 9.32 9.076 3.462-3.371c.203-.199.364-.434.473-.693a2.08 2.08 0 0 0-.483-2.319Z"
        fill={color ?? defaultColor}
      />
    </svg>
  );
};

PenIcon.defaultProps = {
  size: 38,
  color: '#7E7D7D',
};

export default memo(PenIcon);
