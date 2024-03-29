import useSWR from 'swr';

// Services
import { get, post, put, remove } from '@services';

// Constants
import { API_ENDPOINTS, ENVS } from '@constants';

// Utils
import { generateRandomNumbers } from '@utils';

// Types
import { Student } from '@types';

export const useStudents = () => {
  const studentsEndPoint = `${ENVS.VITE_API_ENDPOINT}${API_ENDPOINTS.STUDENTS}`;

  const { data, error, isValidating, isLoading, mutate: mutateStudents } = useSWR<Student[]>(studentsEndPoint, get);

  const createStudent = async (newStudent: Partial<Student>) => {
    try {
      const response: Student = await post(studentsEndPoint, {
        ...newStudent,
        enrollNumber: generateRandomNumbers(),
      });

      // Optimistically update the local data without waiting for the server response
      mutateStudents([...(data || []), response], false);

      return response;
    } catch (error) {
      return null;
    }
  };

  const updateStudent = async (updatedStudent: Student) => {
    try {
      const { id, ...newStudentData } = updatedStudent;
      const response: Student = await put(`${studentsEndPoint}/${id}`, newStudentData);

      const updatedStudents = (data || []).map((student: Student) =>
        student.id === updatedStudent.id ? response : student,
      );

      mutateStudents(updatedStudents, false);

      return response;
    } catch (error) {
      return null;
    }
  };

  const deleteStudent = async (studentId: string) => {
    try {
      await remove(`${studentsEndPoint}/${studentId}`);
      const updatedStudents = (data || []).filter((student) => student.id !== studentId);
      mutateStudents(updatedStudents, false);

      return true;
    } catch (error) {
      return null;
    }
  };

  return {
    students: data,
    isLoading,
    error,
    isValidating,
    createStudent,
    updateStudent,
    deleteStudent,
  };
};
