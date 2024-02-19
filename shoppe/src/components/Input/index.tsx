import { memo } from 'react';
import { transformToStyleValue } from 'src/helper/transformNumber';
import styled, { css } from 'styled-components';
import { IInputProps } from './types';

const StyledInput = styled.input<IInputProps>`
  border: none;
  outline: none;
  font-weight: var(--font-weight-normal);
  width: ${(props) => transformToStyleValue(props.inputWidth, props.unitInput)};
  color: var(--color-tertiary);
  border-bottom: 1px solid
    ${(props) => {
      let color = '#D8D8D8';

      if (props.variant === 'secondary') {
        color = '#000000';
      }

      if (props.error) {
        color = '#cc0000';
      }

      return color;
    }};

  ${(props) =>
    props.variant === 'primary' &&
    css`
      font-size: var(--text-x-small);
      line-height: 22px;
    `}

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      font-size: var(--text-small);
      line-height: 27px;
    `}
`;

StyledInput.defaultProps = {
  variant: 'primary',
};

export default memo(StyledInput);
