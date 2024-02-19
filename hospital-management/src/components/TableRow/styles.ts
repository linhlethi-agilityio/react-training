import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  row: {
    '&:hover': {
      backgroundColor: theme.colors.dark[0],
    },
  },
}));

export { useStyles };
