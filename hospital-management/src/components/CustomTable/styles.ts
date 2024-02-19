import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.dark[0],
    position: 'sticky',
    top: 0,
    zIndex: 1,
  },
}));

export { useStyles };
