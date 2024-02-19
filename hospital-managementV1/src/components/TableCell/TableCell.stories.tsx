import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledTableCell } from '@components/TableCell';

export default {
  title: 'TableCell',
  component: StyledTableCell,
} as ComponentMeta<typeof StyledTableCell>;

const Template: ComponentStory<typeof StyledTableCell> = (args) => <StyledTableCell {...args} />;

export const Default = Template.bind({});
const props = {
  children: 'Default',
};
Default.args = props;
