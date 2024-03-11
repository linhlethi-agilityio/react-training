import type { Meta, StoryObj } from '@storybook/react';

// Components
import BrandLogo from '.';

const meta: Meta<typeof BrandLogo> = {
  component: BrandLogo,
};

export default meta;
type Story = StoryObj<typeof BrandLogo>;

export const Primary: Story = {
  args: {
    isAcronym: false,
    onClick: () => null,
  },
};

export const LgBrandLogo: Story = {
  args: {
    size: 'lg',
    isAcronym: true,
    onClick: () => null,
  },
};
