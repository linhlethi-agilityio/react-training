import { memo } from 'react';
import styled, { css } from 'styled-components';
import { IButtonProps } from './types';

const StyledButton = memo(
  styled.button<IButtonProps>`
    border-radius: 10px;
    padding: 7px 32px;
    font-size: var(--text-xxx-small);
    line-height: 18px;
    border: 1px solid var(--color-primary);
    display: inline-block;
    cursor: pointer;

    ${(props) =>
      props.variant === 'secondary' &&
      css`
        background-color: var(--color-primary);
        font-weight: var(--font-weight-bold);
        color: #ffffff;

        :hover {
          background-color: #376ba5;
        }
      `}

    ${(props) =>
      props.variant === 'primary' &&
      css`
        background-color: #ffffff;
        color: var(--color-primary);
        font-weight: var(--font-weight-normal);

        :hover {
          background-color: #e6e6e6;
        }
      `}

  ${(props) =>
      props.variant === 'roundHead' &&
      css`
        font-family: var(--font-secondary);
        background-color: #ffffff;
        color: #283779;
        border: none;
        padding: 14px 39px;
        font-size: var(--text-small);
        line-height: 19px;
        border-radius: 20px;
        font-weight: var(--font-weight-bold);

        :hover {
          background-color: #e6e6e6;
        }
      `}
  `,
  (prev, next) =>
    prev.variant === next.variant &&
    prev.disabled === next.disabled &&
    prev.onClick === next.onClick,
);

export { StyledButton };
