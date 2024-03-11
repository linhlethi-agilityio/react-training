import type { Meta, StoryObj } from '@storybook/react';

// Components
import StudentDetailModal from '.';

const meta: Meta<typeof StudentDetailModal> = {
  component: StudentDetailModal,
};

export default meta;
type Story = StoryObj<typeof StudentDetailModal>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => null,
    previewData: null,
  },
};
