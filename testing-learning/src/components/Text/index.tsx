import { memo } from 'react';
import { transformToStyleValue } from 'src/helper/transformNumber';
import styled from 'styled-components';
import { ITextProps } from './types';

const StyledText = styled.p<ITextProps>`
  display: ${(props) => props.display};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => transformToStyleValue(props.fontSize, props.unitText)}};
  color: ${(props) => {
    let color = '#000000';

    if (props.color === 'secondary') {
      color = '#a18a68';
    }

    if (props.color === 'tertiary') {
      color = '#707070';
    }

    if (props.color === 'error') {
      color = '#cc0000';
    }

    return color;
  }};
  line-height: ${(props) => transformToStyleValue(props.lineHeight, props.unitText)};
  margin-left: ${(props) => transformToStyleValue(props.mLeft, props.unitText)};
  margin-right: ${(props) => transformToStyleValue(props.mRight, props.unitText)};
  margin-top: ${(props) => transformToStyleValue(props.mTop, props.unitText)};
  margin-bottom: ${(props) => transformToStyleValue(props.mBottom, props.unitText)};
  padding-left: ${(props) => transformToStyleValue(props.pLeft, props.unitText)};
  padding-right: ${(props) => transformToStyleValue(props.pRight, props.unitText)};
  padding-top: ${(props) => transformToStyleValue(props.pTop, props.unitText)};
  padding-bottom: ${(props) => transformToStyleValue(props.pBottom, props.unitText)};
  max-width: ${(props) => transformToStyleValue(props.maxWidth, props.unitText)};
  text-align: ${(props) => props.textAlign};
  text-transform: ${(props) => props.textTransform};
`;

StyledText.defaultProps = {
  color: 'primary',
  fontWeight: 400,
  fontSize: 16,
};

export default memo(StyledText);
