import { transformToStyleValue } from 'src/helper/transformNumber';
import styled from 'styled-components';
import { IBoxProps } from './types';

const StyledBox = styled.div<IBoxProps>`
  margin-left: ${(props) => transformToStyleValue(props.mLeft, props.unitBox)};
  margin-right: ${(props) => transformToStyleValue(props.mRight, props.unitBox)};
  margin-top: ${(props) => transformToStyleValue(props.mTop, props.unitBox)};
  margin-bottom: ${(props) => transformToStyleValue(props.mBottom, props.unitBox)};
  padding-left: ${(props) => transformToStyleValue(props.pLeft, props.unitBox)};
  padding-right: ${(props) => transformToStyleValue(props.pRight, props.unitBox)};
  padding-top: ${(props) => transformToStyleValue(props.pTop, props.unitBox)};
  padding-bottom: ${(props) => transformToStyleValue(props.pBottom, props.unitBox)};
  max-width: ${(props) => transformToStyleValue(props.maxWidth, props.unitBox)};
`;

export { StyledBox };
