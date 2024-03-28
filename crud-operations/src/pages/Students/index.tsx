import { useCallback, useState } from 'react';
import { Avatar, Box, Button, Flex, HStack, Heading, Icon, Spinner, Text, useDisclosure } from '@chakra-ui/react';

// Constants
import { ASCENDING, DESCENDING } from '@constants';

// Types
import { Student } from '@types';

// Hooks
import { useStudents, useToastCustom } from '@hooks';

// Utils
import { formatDate } from '@utils';

// Types
import { TableColumnType } from 'src/components/Table';

// Components
import { ConfirmModal, StudentDetailModal, Table, PenIcon, SortIcon, TrashIcon } from '@components';

interface StudentsPageProps {
  keyword: string;
}

const StudentsPage = ({ keyword }: StudentsPageProps) => {
  const [sortType, setSortType] = useState('');
  const [previewData, setPreviewData] = useState<Student | null>(null);

  const { students, isLoading, deleteStudent } = useStudents();
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
        return sortType === ASCENDING ? prev.name.localeCompare(next.name) : next.name.localeCompare(prev.name);
      }

      return 1;
    });

  const studentsColumns: TableColumnType<Student>[] = [
    {
      accessor: () => <Avatar w={65} h={55} borderRadius={8} />,
    },
    {
      header: 'Name',
      accessor: 'name',
    },
    {
      header: 'Email',
      accessor: (data: Student) => (
        <Text textOverflow="ellipsis" overflow="hidden" wordBreak="break-word">
          {data.email}
        </Text>
      ),
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
          <Button
            aria-label="edit"
            variant="ghost"
            data-testid="edit-button"
            onClick={() => handleEditStudent(data?.id)}
          >
            <Icon as={PenIcon} />
          </Button>
          <Button
            aria-label="delete"
            data-testid="delete-button"
            variant="ghost"
            onClick={() => openConfirmModal(data?.id)}
          >
            <Icon as={TrashIcon} />
          </Button>
        </HStack>
      ),
    },
  ];

  /**
   * Func delete student
   */
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

  /**
   * Func open confirm delete student modal
   */
  const openConfirmModal = (selectedId?: string) => {
    const currentStudent = formattedStudents?.find(({ id }) => id === selectedId);

    if (currentStudent) {
      setPreviewData(currentStudent);
      onOpenConfirm();
    }
  };

  /**
   * Func edit student
   */
  const handleEditStudent = async (selectedId?: string) => {
    const currentStudent = formattedStudents?.find(({ id }) => id === selectedId);

    if (currentStudent) {
      setPreviewData(currentStudent);
      onOpenAddStudent();
    }
  };

  /**
   * Func sort student
   */
  const handleSort = () => {
    if (!sortType) {
      return setSortType(ASCENDING);
    }

    if (sortType) {
      if (sortType === DESCENDING) {
        return setSortType('');
      }

      setSortType(sortType === ASCENDING ? DESCENDING : ASCENDING);
    }
  };

  /**
   * Func add student
   */
  const handleAddStudent = useCallback(() => {
    onOpenAddStudent();
    setPreviewData(null);
  }, [onOpenAddStudent]);

  return (
    <>
      <Box pt={5}>
        <Flex justifyContent="space-between" alignItems="center" borderBottomWidth={1} pb={3}>
          <Heading size="md">Students List</Heading>
          <Flex gap={1}>
            <Button aria-label="sort" variant="ghost" onClick={handleSort}>
              <SortIcon isUp={sortType === ASCENDING} isDown={sortType === DESCENDING} />
            </Button>
            <Button aria-label="add-student" onClick={handleAddStudent}>
              Add new student
            </Button>
          </Flex>
        </Flex>
        <Box>
          {isLoading ? (
            <Box textAlign="center" mt={10}>
              <Spinner size="lg" />
            </Box>
          ) : formattedStudents?.length ? (
            <Table<Student> columns={studentsColumns} data={formattedStudents || []} />
          ) : (
            <Text textAlign="center" mt={20} fontSize="md">
              No record not found!
            </Text>
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
