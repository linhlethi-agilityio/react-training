import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledNumberInput } from '@components/NumberInput';
import { useState } from 'react';

export default {
  title: 'NumberInput',
  component: StyledNumberInput,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof StyledNumberInput>;

const Template: ComponentStory<typeof StyledNumberInput> = (args) => {
  const [value, setValue] = useState<number>(1);

  const handleIncrease = () => {
    if (value <= args.max && value >= args.min) {
      setValue((prev) => prev + 1);
    }
  };

  const handleDecrease = () => {
    if (value <= args.max && value >= args.min) {
      setValue((prev) => prev - 1);
    }
  };

  return (
    <StyledNumberInput
      {...args}
      handleIncrease={handleIncrease}
      handleDecrease={handleDecrease}
      value={value}
    />
  );
};

export const Default = Template.bind({});

const props = {
  min: 1,
  max: 10,
};
Default.args = props;
