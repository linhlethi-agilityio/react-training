import { SVGProps } from 'react';

export const Setting = ({ width = 15, height = 15, fill = '#000000', ...rest }: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...rest}>
    <path
      fill={fill}
      d="M13.393.063H1.607A1.6 1.6 0 0 0 0 1.655v11.688a1.6 1.6 0 0 0 1.607 1.594h11.786A1.6 1.6 0 0 0 15 13.344V1.656A1.6 1.6 0 0 0 13.393.063Zm.536 13.28a.535.535 0 0 1-.536.532H1.607a.535.535 0 0 1-.536-.531V1.656c0-.292.242-.531.536-.531h11.786c.294 0 .536.24.536.531v11.688Zm-7.233-9.03H5.357V3.25c0-.22-.18-.398-.402-.398h-.268a.401.401 0 0 0-.401.398v1.063h-1.34a.803.803 0 0 0-.803.796v1.594c0 .438.361.797.803.797h1.34v3.852c0 .219.18.398.402.398h.267c.221 0 .402-.18.402-.398V7.5h1.34a.803.803 0 0 0 .803-.797V5.11a.803.803 0 0 0-.804-.796ZM6.43 6.438H3.214V5.375H6.43v1.063ZM12.054 7.5h-1.34V3.25c0-.22-.18-.398-.402-.398h-.267c-.221 0-.402.179-.402.398V7.5h-1.34a.803.803 0 0 0-.803.797V9.89c0 .438.362.796.804.796h1.339v.665c0 .219.18.398.402.398h.268c.22 0 .401-.18.401-.398v-.665h1.34a.803.803 0 0 0 .803-.796V8.297a.803.803 0 0 0-.803-.797Zm-.268 2.125H8.57V8.562h3.215v1.063Z"
    />
  </svg>
);
