import styled from 'styled-components';
import { IListItemProps } from './types';

const ListItem = styled.li<IListItemProps>`
  ${(props) => props.divider && 'border-bottom: 1px solid #E0DEDE'};
  list-style: none;
`;

export { ListItem };
