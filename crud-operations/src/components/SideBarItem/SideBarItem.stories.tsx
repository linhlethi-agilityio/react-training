import type { Meta, StoryObj } from '@storybook/react';

// Icons
import { PaymentIcon } from '@icons';

// Components
import SideBarItem from '.';

const meta: Meta<typeof SideBarItem> = {
  component: SideBarItem,
};

export default meta;
type Story = StoryObj<typeof SideBarItem>;

export const Default: Story = {
  args: {
    isFocused: false,
    icon: <PaymentIcon />,
    label: 'Payments',
    onClick: () => null,
  },
};
