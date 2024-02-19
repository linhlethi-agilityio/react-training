import { memo } from 'react';
import { transformToStyleValue } from '@helper/transformNumber';
import styled from 'styled-components';
import { IFlexBoxProps } from './types';

const StyledFlexBox = memo(styled.div<IFlexBoxProps>`
  display: flex;
  gap: ${(props) => transformToStyleValue(props.gap, props.unitFlexBox)};
  justify-content: ${(props) => props.justifyContent};
  margin-left: ${(props) => transformToStyleValue(props.mLeft, props.unitFlexBox)};
  margin-right: ${(props) => transformToStyleValue(props.mRight, props.unitFlexBox)};
  margin-top: ${(props) => transformToStyleValue(props.mTop, props.unitFlexBox)};
  margin-bottom: ${(props) => transformToStyleValue(props.mBottom, props.unitFlexBox)};
`);

export { StyledFlexBox };
