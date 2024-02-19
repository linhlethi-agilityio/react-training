import { memo } from 'react';
import styled, { css } from 'styled-components';
import { IInputProps } from './types';

const StyledInput = memo(
  styled.input<IInputProps>`
    border: none;
    outline: none;
    font-weight: var(--font-weight-normal);
    width: ${(props) => props.inputWidth};

    ${(props) =>
      props.variant === 'primary' &&
      css`
        margin-left: 10px;
        font-size: var(--text-xx-small);
        line-height: 22px;
        background-color: #fcfcfc;
      `}

    ${(props) =>
      props.variant === 'secondary' &&
      css`
        border-bottom: 1px solid rgba(0, 0, 0, 0.38);
        font-family: var(--font-secondary);
        font-size: var(--text-small);
        line-height: 24px;
        color: rgba(0, 0, 0, 0.54);
      `}

    ${(props) =>
      props.variant === 'roundHead' &&
      css`
        font-family: var(--font-secondary);
        padding: 15px;
        border: 1px solid #b2dded;
        border-radius: 20px;
        color: #b2dded;
        font-weight: 400;
        font-size: var(--text-small);
        line-height: 1.2;
        width: 354px;
        background-color: #283779;

        ::placeholder {
          color: #b2dded;
        }
      `}
  `,
  (prev, next) =>
    prev.value === next.value &&
    prev.variant === next.variant &&
    prev.inputWidth === next.inputWidth &&
    prev.disabled === next.disabled,
);

export { StyledInput };
