import styled from 'styled-components';
import { INavBarProps } from './types';

const StyledNavBar = styled.ul<INavBarProps>`
  display: flex;
  background: #e6eef2;
  border-radius: 10px;
  gap: 91px;
  padding: 18px 57px;
`;

export { StyledNavBar };
