import styled from 'styled-components';
import { ILoadingSpinner } from './types';

const LoadingSpinner = (props: ILoadingSpinner) => {
  const { className } = props;

  return (
    <div className={className}>
      <div></div>
    </div>
  );
};

const StyledLoadingSpinner = styled(LoadingSpinner)`
  display: inline-block;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  div {
    width: 50px;
    height: 50px;
    border: 10px solid #f3f3f3;
    border-top: 10px solid #383636;
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
  }
`;

export { StyledLoadingSpinner };
