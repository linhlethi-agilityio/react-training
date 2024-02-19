import styled from 'styled-components';
import { IPaginationItemProps } from './types';

const StyledSlidePaginationItem = styled.li<IPaginationItemProps>`
  width: 53px;
  height: 8px;
  background-color: ${(props) => (props.active === true ? '#4C84C3' : '#C4C4C4')};
  border-radius: 5px;
  display: block;
  cursor: pointer;

  :hover {
    background-color: #4c84c3;
  }
`;

export { StyledSlidePaginationItem };
