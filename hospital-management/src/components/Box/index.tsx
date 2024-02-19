import styled from 'styled-components';
import { IBoxProps } from './types';

const StyledBox = styled.div<IBoxProps>`
  margin-left: ${(props) => props.mLeft};
  margin-right: ${(props) => props.mRight};
  margin-top: ${(props) => props.mTop};
  margin-bottom: ${(props) => props.mBottom};
  padding-left: ${(props) => props.pLeft};
  padding-right: ${(props) => props.pRight};
  padding-top: ${(props) => props.pTop};
  padding-bottom: ${(props) => props.pBottom};
  max-width: ${(props) => props.maxWidth};
`;

export { StyledBox };
