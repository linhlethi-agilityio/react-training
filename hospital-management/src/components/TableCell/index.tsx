import styled from 'styled-components';
import { ITableCellProps } from './types';

const StyledTableCell = styled.td<ITableCellProps>`
  width: ${(props) => props.cellWidth};
  text-align: ${(props) => props.cellTextAlign};
  font-weight: var(--font-weight-normal);
  font-size: var(--text-xx-small);
  line-height: 20px;
  padding: 18px 0;
  vertical-align: middle;
`;

export { StyledTableCell };
