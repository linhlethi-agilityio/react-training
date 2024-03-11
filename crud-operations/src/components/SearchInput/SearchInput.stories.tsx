import type { Meta, StoryObj } from '@storybook/react';

// Components
import SearchInput from '.';

const meta: Meta<typeof SearchInput> = {
  component: SearchInput,
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    placeholder: 'Start typing...',
    onChange: () => null,
    value: 'Student',
  },
};
