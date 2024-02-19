import styled from 'styled-components';
import { ITableHeaderCellProps } from './types';

const StyledTableHeaderCell = styled.th<ITableHeaderCellProps>`
  font-weight: var(--font-weight-bold);
  font-size: var(--text-xx-small);
  line-height: 20px;
  color: #25282b;
  padding: 18px 0;
  width: ${(props) => props.cellWidth};
  text-align: ${(props) => props.cellTextAlign};

  :first-child {
    border-radius: 10px 0 0 10px;
  }

  :last-child {
    border-radius: 0 10px 10px 0;
  }
`;

export { StyledTableHeaderCell };
