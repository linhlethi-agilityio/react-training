import styled, { css } from 'styled-components';
import { IAvatarProps } from './types';

const StyledAvatar = styled.img<IAvatarProps>`
  border-radius: 50%;

  ${(props) =>
    props.size === 'xs' &&
    css`
      width: 32px;
      height: 32px;
    `};

  ${(props) =>
    props.size === 'sm' &&
    css`
      width: 167px;
      height: 167px;
    `};

  ${(props) =>
    props.size === 'md' &&
    css`
      width: 223px;
      height: 223px;
    `};

  ${(props) =>
    props.size === 'lg' &&
    css`
      width: 315px;
      height: 315px;
    `};
`;

StyledAvatar.defaultProps = {
  alt: 'avatar',
  size: 'md',
  src: 'https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png',
};

export { StyledAvatar };
