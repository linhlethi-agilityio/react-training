import type { Meta, StoryObj } from '@storybook/react';

// Components
import LogoutButton from '.';

const meta: Meta<typeof LogoutButton> = {
  component: LogoutButton,
};

export default meta;
type Story = StoryObj<typeof LogoutButton>;

export const Default: Story = {
  args: {
    text: 'Logout',
    isShorter: false,
    onLogout: () => null,
  },
};

export const Shorter: Story = {
  args: {
    text: 'Logout',
    isShorter: true,
    onLogout: () => null,
  },
};
