import type { Meta, StoryObj } from '@storybook/react';

// Icons
import { SquareIcon } from '@icons';

// Components
import CardItem from '.';

const meta: Meta<typeof CardItem> = {
  component: CardItem,
};

export default meta;
type Story = StoryObj<typeof CardItem>;

export const Primary: Story = {
  args: {
    cardColor: 'background.cardPayment',
    name: 'Payments',
    icon: <SquareIcon />,
    count: 3,
  },
};
