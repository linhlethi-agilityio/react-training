import { memo, ReactElement } from 'react';
import styled from 'styled-components';
import { INavProps } from './types';
import { StyledNavigationLink } from '@components/Link';

const Navigation = (props: INavProps): ReactElement => {
  const { className, items } = props;

  return (
    <nav className={className}>
      {items.map((item) => (
        <StyledNavigationLink key={item.id} to={item.path}>
          {item.name}
        </StyledNavigationLink>
      ))}
    </nav>
  );
};

const StyledNavigation = memo(styled(Navigation)<INavProps>`
  gap: 41px;
  display: flex;
  margin-top: 15px;
`);

export { StyledNavigation };
