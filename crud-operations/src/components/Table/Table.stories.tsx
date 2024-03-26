import type { Meta } from '@storybook/react';
import { Avatar } from '@chakra-ui/react';

// Components
import Table, { TableColumn } from '.';
import { Student } from '@types';

const meta: Meta<typeof Table> = {
  component: Table,
};

export default meta;

const columnsTable: TableColumn<Student>[] = [
  {
    accessor: () => <Avatar w={65} h={55} borderRadius={8} />,
  },
  {
    header: 'Name',
    accessor: 'name',
  },
  {
    header: 'Email',
    accessor: 'email',
  },
  {
    header: 'Phone',
    accessor: 'phone',
  },
  {
    header: 'Enroll Number',
    accessor: 'enrollNumber',
  },
  {
    header: 'Date of admission',
    accessor: 'dateOfAdmission',
  },
];

const data = [
  {
    enrollNumber: '54547',
    name: 'name 8',
    phone: '7305477760',
    email: 'Carson31@gmail.com',
    dateOfAdmission: 950288400000,
    id: '0',
  },
  {
    enrollNumber: '4545474',
    name: 'A ame 9',
    phone: '7305477760',
    email: 'Ora.Ankunding@yahoo.com',
    dateOfAdmission: 981824400000,
    id: '1',
  },
];

export const Default = () => <Table columns={columnsTable} data={data}></Table>;
