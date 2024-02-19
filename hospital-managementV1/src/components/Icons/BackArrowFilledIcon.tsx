import { memo } from 'react';
import { IIconProps } from './types';

const BackArrowFilledIcon = ({ size, color, ...props }: IIconProps) => {
  const defaultColor = '#000100';
  const originHeight = 40;
  const originWidth = 24;
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
        d="M11.818 18.637c-.28.447-.47.944-.556 1.465.007.506.206.991.556 1.357l11.034 11.464a4.232 4.232 0 0 1 .02 5.774l-.056.062a3.916 3.916 0 0 1-5.708.014L.574 21.547A2.157 2.157 0 0 1 0 20.102c.088-.55.283-1.076.574-1.55l16.534-17.33a3.918 3.918 0 0 1 5.708.024l.056.072a4.266 4.266 0 0 1-.02 5.8l-11.034 11.52Z"
        fill={color ?? defaultColor}
      />
    </svg>
  );
};

BackArrowFilledIcon.defaultProps = {
  size: 24,
  color: '#000100',
};

export default memo(BackArrowFilledIcon);
