import { Link } from 'react-router-dom';
import { INavigationProps } from './types';
import { memo } from 'react';
import { useStyles } from './styles';
import { NavLink } from '@mantine/core';

const Navigation = (props: INavigationProps) => {
  const { items } = props;
  const { classes } = useStyles();

  return (
    <nav className={classes.nav}>
      {items.map((item) => (
        <NavLink
          className={classes.navItem}
          component={Link}
          to={item.path}
          key={item.id}
          label={item.name}
        />
      ))}
    </nav>
  );
};

export const MemoizedNavigation = memo(Navigation);
