import styled from 'styled-components';
import { ITableHeaderProps } from './types';

const StyledTableHeader = styled.tr<ITableHeaderProps>`
  background-color: #e8e8e8;
  border-radius: 10px;
  text-align: left;
`;

export { StyledTableHeader };
