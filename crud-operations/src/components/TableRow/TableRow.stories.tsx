import type { ComponentStory, Meta } from '@storybook/react';
import { Table, Tbody, Td } from '@chakra-ui/react';

// Components
import TableRow from '.';

const Template: ComponentStory<typeof TableRow> = (args) => (
  <Table>
    <Tbody>
      <TableRow {...args} />
    </Tbody>
  </Table>
);

const meta: Meta<typeof Table> = {
  component: Template as any,
};

export default meta;

export const Default = Template.bind({});
const props = {
  children: <Td>inches</Td>,
};
Default.args = props;
