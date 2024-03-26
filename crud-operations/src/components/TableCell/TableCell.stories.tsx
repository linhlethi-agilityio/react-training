import type { ComponentStory, Meta } from '@storybook/react';
import { Table, Tbody, Tr } from '@chakra-ui/react';

// Components
import TableCell from '.';

const Template: ComponentStory<typeof TableCell> = (args) => (
  <Table>
    <Tbody>
      <Tr>
        <TableCell {...args} />
      </Tr>
    </Tbody>
  </Table>
);

const meta: Meta<typeof Table> = {
  component: Template as any,
};

export default meta;

export const Default = Template.bind({});
const props = {
  children: 'Default',
};
Default.args = props;
