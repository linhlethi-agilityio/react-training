import { SVGProps } from 'react';

export const Graduation = ({ width = 20, height = 12, fill = '#000000', ...rest }: SVGProps<SVGSVGElement>) => (
  <svg width={width} height={height} {...rest}>
    <path
      fill={fill}
      d="M19.13 2.812 10.849.135a2.74 2.74 0 0 0-1.697 0L.87 2.812C.342 2.983 0 3.45 0 4c0 .55.342 1.017.87 1.188l.928.3c-.103.193-.179.4-.229.619A.994.994 0 0 0 1 7c0 .398.237.735.573.896l-.564 3.496c-.05.312.122.608.354.608h1.274c.232 0 .405-.296.354-.608l-.564-3.496A.994.994 0 0 0 3 7a.982.982 0 0 0-.42-.793c.047-.145.12-.277.206-.4l1.67.54L4 10c0 1.105 2.686 2 6 2s6-.895 6-2l-.457-3.653 3.587-1.16c.528-.17.87-.636.87-1.187 0-.55-.342-1.017-.87-1.188Zm-4.146 7.121C14.648 10.287 12.939 11 10 11s-4.647-.713-4.984-1.067l.41-3.273 3.726 1.205c.08.026.803.288 1.697 0l3.726-1.205.409 3.273Zm3.837-5.696L10.54 6.914a1.743 1.743 0 0 1-1.08 0L3.97 5.14l6.122-1.148a.5.5 0 1 0-.184-.982L3.54 4.202a2.48 2.48 0 0 0-1.034.464l-1.328-.43a.246.246 0 0 1 0-.473L9.46 1.086a1.75 1.75 0 0 1 1.08 0l8.28 2.677c.232.075.248.394.001.474Z"
    />
  </svg>
);
