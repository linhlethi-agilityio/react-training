import { memo } from 'react';
import { IIconProps } from './types';

const FacebookV2Icon = ({ size, color, ...props }: IIconProps) => {
  const defaultColor = '#fff';
  const originHeight = 32;
  const originWidth = 32;
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
        d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16Z"
        fill="#3C5A9A"
      />
      <path
        d="M21.203 4.911h-3.545c-2.103 0-4.443.885-4.443 3.933.01 1.063 0 2.08 0 3.225h-2.432v3.872h2.509V27.09h4.61V15.868h3.042l.275-3.808h-3.397s.008-1.696 0-2.187c0-1.205 1.254-1.136 1.33-1.136.596 0 1.756.002 2.053 0V4.911h-.002Z"
        fill={color ?? defaultColor}
      />
    </svg>
  );
};

FacebookV2Icon.defaultProps = {
  size: 32,
  color: '#fff',
};

export default memo(FacebookV2Icon);
