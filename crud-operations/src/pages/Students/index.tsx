import { useState } from 'react';
import { Avatar, Box, Button, Flex, Heading, Spinner, useDisclosure } from '@chakra-ui/react';

// Icons
import { PenIcon, SortIcon, TrashIcon } from '@icons';

// Types
import { Student } from '@types';
import { TableColumn } from '@components/Table';

// Hooks
import { useStudents, useToastCustom } from '@hooks';

// Utils
import { formatDate } from '@utils';

// Components
import { ConfirmModal, StudentDetailModal, Table } from '@components';

const StudentsPage = () => {
  const { students, isLoading, deleteStudent, getStudentById } = useStudents();
  const [removedId, setRemovedId] = useState<string>('');

  const { isOpen: isOpenAddStudent, onOpen: onOpenAddStudent, onClose: onCloseAddStudent } = useDisclosure();

  const { isOpen: isOpenConfirm, onOpen: onOpenConfirm, onClose: onCloseConfirm } = useDisclosure();

  const toast = useToastCustom();

  const formattedStudents = students?.map((student) => ({
    ...student,
    dateOfAdmission: formatDate(student.dateOfAdmission),
  }));

  const initFormData = {
    name: '',
    email: '',
    phone: '',
    enrollNumber: '',
    dateOfAdmission: '',
  };

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
      accessor: (data: Student) => (
        <Button variant="ghost" onClick={() => handleEditStudent(data.id)}>
          <PenIcon />
        </Button>
      ),
    },
    {
      id: '7',
      accessor: (data: Student) => (
        <Button variant="ghost" onClick={() => openConfirmModal(data.id)}>
          <TrashIcon />
        </Button>
      ),
    },
  ];

  const handleDeleteStudent = () => {
    onCloseConfirm();
    deleteStudent(removedId);

    toast({
      title: 'Delete Success',
      status: 'success',
    });
  };

  const openConfirmModal = (id: string) => {
    onOpenConfirm();
    setRemovedId(id);
  };

  const handleEditStudent = async (id: string) => {
    getStudentById(id);
  };

  return (
    <>
      <Box pt={5}>
        <Flex justifyContent="space-between" alignItems="center" borderBottomWidth={1} pb={3}>
          <Heading size="md">Students List</Heading>
          <Flex>
            <Button variant="ghost">
              <SortIcon />
            </Button>
            <Button onClick={() => onOpenAddStudent()}>Add new student</Button>
          </Flex>
        </Flex>
        <Box>
          {isLoading ? (
            <Box textAlign="center" mt={10}>
              <Spinner size="lg" />
            </Box>
          ) : (
            <Table<Student> columns={studentsColumns} data={formattedStudents || []} />
          )}
        </Box>
      </Box>
      <StudentDetailModal
        isOpen={isOpenAddStudent}
        onClose={onCloseAddStudent}
        id=""
        name={initFormData.name}
        email={initFormData.email}
        phone={initFormData.phone}
        enrollNumber={initFormData.enrollNumber}
        dateOfAdmission={initFormData.dateOfAdmission}
      />
      <ConfirmModal
        isOpen={isOpenConfirm}
        onCancel={onCloseConfirm}
        title="Delete Student"
        description="Are you sure you would like to delete student"
        buttonLabel="Submit"
        onConfirm={handleDeleteStudent}
      />
    </>
  );
};

export default StudentsPage;
