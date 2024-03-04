import { SVGProps } from 'react';

export const SortIcon = ({ width = 14, height = 20, fill = '#FEAF00', ...rest }: SVGProps<SVGSVGElement>) => (
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} {...rest}>
    <path
      fill={fill}
      d="M12.6 11.375H1.4c-1.243 0-1.873 1.482-.989 2.346l5.6 5.5a1.42 1.42 0 0 0 1.982 0l5.6-5.5c.875-.864.25-2.346-.993-2.346ZM7 18.25l-5.6-5.5h11.2L7 18.25ZM1.4 8.625h11.2c1.242 0 1.873-1.482.989-2.346l-5.6-5.5a1.42 1.42 0 0 0-1.982 0l-5.6 5.5c-.875.864-.25 2.346.993 2.346ZM7 1.75l5.6 5.5H1.4L7 1.75Z"
    />
  </svg>
);
