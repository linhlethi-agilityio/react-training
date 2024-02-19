import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledTableRow } from '@components/TableRow';
import { ITableColumn, TTableAccessor } from '@components/Table/types';
import { StyledAvatar } from '@components/Avatar';
import { DownloadIcon } from '@components/Icons';
import { StyledTableCell } from '@components/TableCell';
import { ReactNode } from 'react';

export default {
  title: 'TableRow',
  component: StyledTableRow,
} as ComponentMeta<typeof StyledTableRow>;

const Template: ComponentStory<typeof StyledTableRow> = (args) => <StyledTableRow {...args} />;

export const Default = Template.bind({});

interface DataType {
  id: string;
  avatar: string;
  doctor: string;
  date: string;
  dowloadFile?: string;
}

Default.decorators = [
  (Story, context) => {
    const { args } = context;

    const data: DataType = {
      id: '2',
      avatar: 'https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png',
      doctor: 'Dr. Theresa Webb',
      date: '13/10/2020',
    };

    const columns: ITableColumn<DataType>[] = [
      {
        id: '1',
        width: '80px',
        textAlign: 'center',
        accessor: (data: DataType) => <StyledAvatar size="xs" src={data.avatar} />,
      },
      {
        id: '2',
        width: '232px',
        header: 'Doctor',
        accessor: 'doctor',
      },
      {
        id: '3',
        width: '35px',
        accessor: (data: DataType) => (
          <a href={data.dowloadFile}>
            <DownloadIcon size={24} />
          </a>
        ),
      },
    ];

    const renderCell = (item: DataType, accessor: TTableAccessor<DataType>): ReactNode => {
      if (typeof accessor === 'string') {
        return item[accessor] as ReactNode;
      }

      if (typeof accessor === 'function') {
        return accessor(item);
      }
    };

    args.children = (
      <StyledTableRow>
        {columns.map((columnConfig) => (
          <StyledTableCell
            key={`${data.id}-${columnConfig.id}`}
            cellWidth={columnConfig.width}
            cellTextAlign={columnConfig.textAlign}
          >
            {renderCell(data, columnConfig.accessor)}
          </StyledTableCell>
        ))}
      </StyledTableRow>
    );

    return <Story {...args} />;
  },
];
