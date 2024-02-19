import styled, { css } from 'styled-components';
import { INavBarItemProps } from './types';

const StyledNavbarItem = styled.li<INavBarItemProps>`
  list-style-type: none;
  cursor: pointer;
  font-weight: var(--font-weight-normal);
  font-size: var(--text-xx-small);
  line-height: 19px;
  color: #545454;

  :hover {
    color: #cc0000;
  }

  ${(props) =>
    props.active === true &&
    css`
      display: inline-block;
      font-weight: var(--font-weight-bold);
      font-size: var(--text-small);
      line-height: 22px;
      border-bottom: 2px solid #4c84c3;
      color: #4c84c3;

      :hover {
        border-bottom: 2px solid #cc0000;
      }
    `}
`;

export { StyledNavbarItem };
