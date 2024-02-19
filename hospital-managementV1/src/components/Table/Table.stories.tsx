import { ComponentMeta } from '@storybook/react';
import { Table } from '@components/Table';
import { StyledAvatar } from '@components/Avatar';
import { DownloadIcon } from '@components/Icons';
import { ITableColumn } from './types';

export default {
  title: 'Table',
  component: Table,
} as ComponentMeta<typeof Table>;

interface DataType {
  id: string;
  avatar: string;
  doctor: string;
  date: string;
  dowloadFile?: string;
}

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

const data: DataType[] = [
  {
    id: '1',
    avatar: 'https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png',
    doctor: 'Dr. Jacob Jones',
    date: '10/10/2020',
    dowloadFile: '',
  },
  {
    id: '2',
    avatar: 'https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png',
    doctor: 'Dr. Theresa Webb',
    date: '13/10/2020',
  },
];

export const Default = () => <Table columns={columns} data={data}></Table>;
