import styled from 'styled-components';
import { ISlideItemProps } from './types';

const StyledSlideItem = styled.div<ISlideItemProps>`
  opacity: ${(props) => (props.active ? '1' : '0')};
  position: ${(props) => (props.active ? 'relative' : 'absolute')};
`;

export { StyledSlideItem };
