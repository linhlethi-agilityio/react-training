import { SVGProps } from 'react';

export const PenIcon = ({ width = 19, height = 19, fill = '#FEAF00', ...rest }: SVGProps<SVGSVGElement>) => (
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} {...rest}>
    <path
      fill={fill}
      d="M18.303 2.088 16.911.696A2.366 2.366 0 0 0 15.232 0c-.608 0-1.216.232-1.68.695L.476 13.772l-.471 4.239a.89.89 0 0 0 .983.983l4.235-.468 13.08-13.08a2.374 2.374 0 0 0 0-3.358ZM4.678 17.392l-3.452.383.384-3.457 9.793-9.793 3.072 3.071-9.797 9.796ZM17.464 4.607l-2.15 2.15-3.071-3.072 2.15-2.15a1.18 1.18 0 0 1 .84-.347c.316 0 .614.123.839.347l1.392 1.392a1.19 1.19 0 0 1 0 1.68Z"
    />
  </svg>
);
