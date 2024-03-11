import type { Meta, StoryObj } from '@storybook/react';

// Components
import Header from '.';

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    isClosedSideBar: false,
    onToggleSideBar: () => null,
    onSearch: () => null,
  },
};
