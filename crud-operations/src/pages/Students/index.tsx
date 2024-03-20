import { useCallback, useState } from 'react';
import { Avatar, Box, Button, Flex, HStack, Heading, Icon, Spinner, Text, useDisclosure } from '@chakra-ui/react';

// Icons
import { PenIcon, SortIcon, TrashIcon } from '@icons';

// Types
import { Student } from '@types';

// Hooks
import { useStudents, useToastCustom } from '@hooks';

// Utils
import { formatDate } from '@utils';

// Components
import { ConfirmModal, StudentDetailModal, Table } from '@components';
import { TableColumn } from 'src/components/Table';

interface StudentsPageProps {
  keyword: string;
}

enum SortType {
  Ascending = 'ascending',
  Descending = 'descending',
}

const StudentsPage = ({ keyword }: StudentsPageProps) => {
  const { students, isLoading, deleteStudent } = useStudents();
  const [sortType, setSortType] = useState('');

  const [previewData, setPreviewData] = useState<Student | null>(null);

  const { isOpen: isOpenAddStudent, onOpen: onOpenAddStudent, onClose: onCloseAddStudent } = useDisclosure();

  const { isOpen: isOpenConfirm, onOpen: onOpenConfirm, onClose: onCloseConfirm } = useDisclosure();

  const toast = useToastCustom();

  const formattedStudents: Student[] | undefined = students
    ?.map((student) => ({
      ...student,
      dateOfAdmission: formatDate(+student.dateOfAdmission),
    }))
    .reverse()
    .filter((student) => JSON.stringify(Object.values(student)).toLowerCase().includes(keyword.toLowerCase()))
    .sort((prev, next) => {
      if (sortType) {
        return sortType === SortType.Ascending
          ? prev.name.localeCompare(next.name)
          : next.name.localeCompare(prev.name);
      }

      return 1;
    });

  const studentsColumns: TableColumn<Student>[] = [
    {
      accessor: (data: Student) => <Avatar src={data.avatarUrl} borderRadius={8} objectFit="contain" />,
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
    {
      accessor: (data: Student) => (
        <HStack justifyContent="flex-end" spacing={0}>
          <Button variant="ghost" data-testid="edit-button" onClick={() => handleEditStudent(data?.id)}>
            <Icon as={PenIcon} />
          </Button>
          <Button data-testid="delete-button" variant="ghost" onClick={() => openConfirmModal(data?.id)}>
            <Icon as={TrashIcon} />
          </Button>
        </HStack>
      ),
    },
  ];

  const handleDeleteStudent = useCallback(() => {
    onCloseConfirm();

    if (previewData?.id) {
      deleteStudent(previewData?.id);
    }

    toast({
      title: 'Delete Success',
      status: 'success',
    });
  }, [deleteStudent, onCloseConfirm, previewData?.id, toast]);

  const openConfirmModal = (selectedId?: string) => {
    const currentStudent = formattedStudents?.find(({ id }) => id === selectedId);

    if (currentStudent) {
      setPreviewData(currentStudent);
      onOpenConfirm();
    }
  };

  const handleEditStudent = async (selectedId?: string) => {
    const currentStudent = formattedStudents?.find(({ id }) => id === selectedId);

    if (currentStudent) {
      setPreviewData(currentStudent);
      onOpenAddStudent();
    }
  };

  const handleOnSort = useCallback(() => {
    if (!sortType) {
      return setSortType(SortType.Ascending);
    }

    if (sortType) {
      if (sortType === SortType.Descending) {
        return setSortType('');
      }

      setSortType(sortType === SortType.Ascending ? SortType.Descending : SortType.Ascending);
    }
  }, [sortType]);

  const handleAddNewStudent = useCallback(() => {
    onOpenAddStudent();
    setPreviewData(null);
  }, [onOpenAddStudent]);

  return (
    <>
      <Box pt={5}>
        <Flex justifyContent="space-between" alignItems="center" borderBottomWidth={1} pb={3}>
          <Heading size="md">Students List</Heading>
          <Flex gap={1}>
            <Button variant="ghost" onClick={handleOnSort}>
              <SortIcon isUp={sortType === SortType.Ascending} isDown={sortType === SortType.Descending} />
            </Button>
            <Button onClick={handleAddNewStudent}>Add new student</Button>
          </Flex>
        </Flex>
        <Box>
          {isLoading ? (
            <Box textAlign="center" mt={10}>
              <Spinner size="lg" />
            </Box>
          ) : (
            <>
              {formattedStudents?.length ? (
                <Table<Student> columns={studentsColumns} data={formattedStudents || []} />
              ) : (
                <Text textAlign="center" mt={20} fontSize="md">
                  No record not found!
                </Text>
              )}
            </>
          )}
        </Box>
      </Box>

      {isOpenAddStudent && (
        <StudentDetailModal isOpen={isOpenAddStudent} onClose={onCloseAddStudent} previewData={previewData} />
      )}

      {isOpenConfirm && (
        <ConfirmModal
          isOpen={isOpenConfirm}
          onCancel={onCloseConfirm}
          title="Delete Student"
          description="Are you sure you would like to delete student"
          buttonLabel="Submit"
          onConfirm={handleDeleteStudent}
        />
      )}
    </>
  );
};

export default StudentsPage;
