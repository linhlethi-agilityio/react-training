import type { Meta, StoryObj } from '@storybook/react';

// Components
import Navigation from '.';

const meta: Meta<typeof Navigation> = {
  component: Navigation,
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  args: {
    isShorter: false,
  },
};

export const Shorter: Story = {
  args: {
    isShorter: true,
  },
};
