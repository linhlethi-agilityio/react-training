import { SVGProps } from 'react';

export const Logout = ({ width = 17, height = 13, fill = '#000000', ...rest }: SVGProps<SVGSVGElement>) => (
  <svg width={width} height={height} {...rest}>
    <path
      fill={fill}
      d="M5.313 5.208c0-.292.239-.53.53-.53h4.782V1.558c0-.235.286-.355.452-.189l4.701 4.751c.21.21.21.545 0 .754l-4.701 4.752a.265.265 0 0 1-.452-.19V8.32H5.844a.533.533 0 0 1-.532-.532v-2.58Zm-1.063 0v2.58c0 .88.714 1.594 1.594 1.594h3.718v2.055c0 1.179 1.428 1.777 2.265.94l4.705-4.748a1.595 1.595 0 0 0 0-2.258L11.827.62c-.833-.834-2.264-.243-2.264.94v2.055h-3.72c-.88 0-1.593.717-1.593 1.593ZM0 1.718v9.563c0 .88.714 1.594 1.594 1.594h4.383a.4.4 0 0 0 .398-.398v-.266a.4.4 0 0 0-.398-.399H1.594a.533.533 0 0 1-.532-.53V1.718c0-.292.24-.532.532-.532h4.383A.4.4 0 0 0 6.375.79V.523a.4.4 0 0 0-.398-.398H1.594C.714.125 0 .839 0 1.719Z"
    />
  </svg>
);
