import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledTableHeader } from '@components/TableHeader';
import { StyledTableHeaderCell } from '@components/TableHeaderCell';

export default {
  title: 'TableHeader',
  component: StyledTableHeader,
} as ComponentMeta<typeof StyledTableHeader>;

const Template: ComponentStory<typeof StyledTableHeader> = (args) => (
  <StyledTableHeader {...args} />
);

export const Default = Template.bind({});
Default.decorators = [
  (Story, context) => {
    const { args } = context;

    const columns = [
      {
        id: '1',
        width: '80px',
        header: 'center',
        textAlign: 'center',
        accessor: 'item1',
      },
      {
        id: '2',
        width: '80px',
        header: 'right',
        textAlign: 'right',
        accessor: 'item2',
      },
    ];

    args.children = (
      <>
        {columns.map((columnConfig) => (
          <StyledTableHeaderCell
            cellWidth={columnConfig.width}
            cellTextAlign={columnConfig.textAlign}
            key={columnConfig.id}
          >
            {columnConfig.header}
          </StyledTableHeaderCell>
        ))}
      </>
    );

    return <Story {...args} />;
  },
];
