import { memo } from 'react';
import styled, { css } from 'styled-components';
import { IButtonProps } from './types';

const StyledButton = memo(
  styled.button<IButtonProps>`
    font-weight: var(--font-weight-bold);
    line-height: 21px;
    cursor: pointer;
    text-transform: uppercase;

    ${(props) =>
      props.variant === 'secondary' &&
      css`
        background-color: #ffffff;
        color: var(--color-primary);
        padding: 16px 136px;
        border: 1px solid #000000;
        border-radius: 4px;
        font-size: var(--text-small);

        :hover {
          background-color: #e6e6e6;
        }
      `}

    ${(props) =>
      props.variant === 'primary' &&
      css`
        background-color: var(--color-primary);
        color: #ffffff;
        padding: 16px 125px;
        border: 1px solid #000000;
        border-radius: 4px;
        font-size: var(--text-small);

        :hover {
          background-color: #333333;
        }
      `}
    }

    ${(props) =>
      props.variant === 'outline' &&
      css`
        background-color: #efefef;
        width: 50px;
        height: 53px;
        border: none;
        color: var(--color-tertiary);
        font-size: var(--text-small);
      `}

    :disabled {
      background-color: #efefef;
      cursor: no-drop;
    }
  `,
);

export { StyledButton };
