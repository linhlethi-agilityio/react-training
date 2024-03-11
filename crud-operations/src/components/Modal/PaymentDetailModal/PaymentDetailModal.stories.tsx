import type { Meta, StoryObj } from '@storybook/react';

// Components
import PaymentDetailModal from '.';

const meta: Meta<typeof PaymentDetailModal> = {
  component: PaymentDetailModal,
};

export default meta;
type Story = StoryObj<typeof PaymentDetailModal>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => null,
    previewData: null,
  },
};
