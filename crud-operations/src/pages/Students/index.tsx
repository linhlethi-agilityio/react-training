import { Avatar, Box, Button, Flex, Heading, Spinner } from '@chakra-ui/react';

// Icons
import { PenIcon, SortIcon, TrashIcon } from '@icons';

// Types
import { Student } from '@types';
import { TableColumn } from '@components/Table';

// Hooks
import { useStudents } from '@hooks';

// Components
import { Table } from '@components';

const studentsColumns: TableColumn<Student>[] = [
  {
    id: '1',
    accessor: (data: Student) => <Avatar src={data.avatarUrl} borderRadius={8} />,
  },
  {
    id: '2',
    header: 'Name',
    accessor: 'name',
  },
  {
    id: '3',
    header: 'Email',
    accessor: 'email',
  },
  {
    id: '4',
    header: 'Enroll Number',
    accessor: 'enrollNumber',
  },
  {
    id: '5',
    header: 'Date of admission',
    accessor: 'dateOfAdmission',
  },
  {
    id: '6',
    accessor: () => <PenIcon />,
  },
  {
    id: '7',
    accessor: () => <TrashIcon />,
  },
];

const StudentsPage = () => {
  const { students, isLoading } = useStudents();

  return (
    <Box pt={5}>
      <Flex justifyContent="space-between" alignItems="center" borderBottomWidth={1} pb={3}>
        <Heading size="md">Students List</Heading>
        <Flex>
          <Button variant="ghost">
            <SortIcon />
          </Button>
          <Button>Add new student</Button>
        </Flex>
      </Flex>
      <Box>
        {isLoading ? <Spinner size="lg" /> : <Table<Student> columns={studentsColumns} data={students || []} />}
      </Box>
    </Box>
  );
};

export default StudentsPage;
