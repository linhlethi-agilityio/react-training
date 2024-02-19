import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledTableHeaderCell } from '@components/TableHeaderCell';

export default {
  title: 'TableHeaderCell',
  component: StyledTableHeaderCell,
} as ComponentMeta<typeof StyledTableHeaderCell>;

const Template: ComponentStory<typeof StyledTableHeaderCell> = (args) => (
  <StyledTableHeaderCell {...args} />
);

export const Default = Template.bind({});
const props = {
  children: 'Default',
};
Default.args = props;
