import { SVGProps } from 'react';

export const Bell = ({ width = 17, height = 20, fill = '#C4C4C4', ...rest }: SVGProps<SVGSVGElement>) => (
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} {...rest}>
    <path
      fill={fill}
      d="M8.5 18.75c.67 0 1.215-.562 1.215-1.251h1.214c0 1.38-1.09 2.501-2.429 2.501-1.338 0-2.428-1.122-2.428-2.501h1.214c0 .69.544 1.251 1.214 1.251ZM.555 13.079c1.061-1.04 1.872-2.129 1.872-5.817 0-3.11 2.406-5.645 5.466-5.951V.625C7.893.28 8.165 0 8.5 0c.336 0 .607.28.607.625v.686c3.06.307 5.466 2.842 5.466 5.95 0 3.689.812 4.778 1.873 5.817.53.52.697 1.306.427 2.002a1.811 1.811 0 0 1-1.694 1.17H1.822c-.753 0-1.418-.46-1.694-1.17a1.855 1.855 0 0 1 .427-2.002ZM1.822 15h13.357c.54 0 .81-.643.43-1.016-1.323-1.296-2.25-2.748-2.25-6.722C13.359 4.63 11.186 2.5 8.5 2.5c-2.685 0-4.858 2.13-4.858 4.762 0 3.959-.919 5.418-2.25 6.722-.382.374-.108 1.016.43 1.016Z"
    />
  </svg>
);
