import { ReactNode } from 'react';
import styled from 'styled-components';

export interface ICartProps {
  className?: string;
  children: ReactNode;
}

const Cart = (props: ICartProps) => {
  const { children, className } = props;

  return <div className={className}>{children}</div>;
};

const StyledCart = styled(Cart)`
  padding: 20px;
  border: 3px solid red;
  border-radius: 20px;
  width: 140px;
`;

export { StyledCart };
