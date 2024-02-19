import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  nav: {
    display: 'flex',
  },

  navItem: {
    color: theme.colors.dark[3],
    textDecoration: 'none',
  },
}));

export { useStyles };
