import { memo } from 'react';
import styled from 'styled-components';
import { ITextProps } from './types';

const StyledText = styled.p<ITextProps>`
  display: ${(props) => props.display};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  line-height: ${(props) => props.lineHeight};
  padding-left: ${(props) => props.pLeft};
  padding-right: ${(props) => props.pRight};
  padding-bottom: ${(props) => props.pBottom};
  padding-top: ${(props) => props.pTop};
  margin-left: ${(props) => props.mLeft};
  margin-right: ${(props) => props.mRight};
  margin-bottom: ${(props) => props.mBottom};
  margin-top: ${(props) => props.mTop};
  max-width: ${(props) => props.maxWidth};
  font-family: ${(props) => props.fontFamily};
  text-align: ${(props) => props.textAlign};
  text-transform: ${(props) => props.textTransform};
`;

StyledText.defaultProps = {
  color: '#555555',
  fontWeight: '400',
  lineHeight: '1.2',
  fontSize: 'var(--text-x-small)',
};

export default memo(StyledText);
