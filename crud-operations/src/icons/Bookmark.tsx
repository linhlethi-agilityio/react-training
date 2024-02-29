import { SVGProps } from 'react';

export const Bookmark = ({ width = 12, height = 15, fill = '#000000', ...rest }: SVGProps<SVGSVGElement>) => (
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} {...rest}>
    <path
      fill={fill}
      d="M1.5 0h9c.828 0 1.5.63 1.5 1.406V15l-6-3.281L0 15V1.406C0 .63.672 0 1.5 0ZM1 13.368l5-2.735 5 2.735V1.406c0-.258-.224-.468-.5-.468h-9c-.276 0-.5.21-.5.468v11.962Z"
    />
  </svg>
);
