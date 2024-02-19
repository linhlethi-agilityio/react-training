import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { memo } from 'react';
import { ILinkProps } from './types';

const StyledLink = memo(
  styled(Link)<ILinkProps>`
    text-decoration: none;
    color: var(--color-tertiary);

    :active {
      color: #2f58cd;
    }

    ${(props) =>
      props.disabled &&
      css`
        cursor: no-drop;
        pointer-events: none;
      `}
  `,
);

const StyledNavigationLink = styled(StyledLink)`
  text-transform: uppercase;
  font-weight: var(--font-weight-normal);
  font-size: var(--text-small);
  line-height: 27px;
`;

export { StyledLink, StyledNavigationLink };
