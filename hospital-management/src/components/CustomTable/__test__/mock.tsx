import { ITableColumn } from '@components/CustomTable/types';
import { IData } from '@type/data';
import { Avatar } from '@mantine/core';

export interface IDataType extends IData {
  id: string;
  avatar: string;
  doctor: string;
}

export const columnsConfig: ITableColumn<IDataType>[] = [
  {
    id: '1',
    width: '232px',
    header: 'Doctor',
    accessor: 'doctor',
  },
  {
    id: '2',
    width: '80px',
    header: 'Avatar',
    accessor: (data: IDataType) => <Avatar src={data.avatar} />,
  },
];

export const data: IDataType[] = [
  {
    id: '1',
    avatar: 'https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png',
    doctor: 'Dr. Theresa Webb',
  },
  {
    id: '2',
    avatar: 'https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png',
    doctor: 'Dr. Arlene McCoy',
  },
];
