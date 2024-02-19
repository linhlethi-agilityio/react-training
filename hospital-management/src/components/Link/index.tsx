import styled from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';
import { memo } from 'react';

const StyledLink = memo(
  styled(Link)<LinkProps>`
    text-decoration: none;
    cursor: pointer;
  `,
  (prev, next) => prev.href === next.href && prev.disabled === next.disabled,
);

const StyledNavigationLink = styled(StyledLink)`
  font-family: var(--font-primary);
  font-size: var(--text-xx-small);
  color: #545454;
  font-weight: var(--font-weight-normal);
  line-height: 19px;
`;

const StyledQuickLinkItem = styled(StyledLink)`
  font-family: var(--font-secondary);
  font-size: var(--text-x-small);
  color: #b2dded;
  font-weight: var(--font-weight-normal);
  line-height: 19px;
`;

const StyledButtonLink = styled(StyledLink)`
  font-family: var(--font-primary);
  color: #4c84c3;
  font-weight: var(--font-weight-semi-bold);
  line-height: 20px;
  font-size: var(--text-x-small);
`;

export { StyledLink, StyledNavigationLink, StyledButtonLink, StyledQuickLinkItem };
