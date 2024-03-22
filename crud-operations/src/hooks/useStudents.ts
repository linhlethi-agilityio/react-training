import useSWR from 'swr';

// Services
import { get, post, put, remove } from '@services';

// Constants
import { API_ENDPOINTS, ENVS } from '@constants';

// Types
import { Student } from '@types';

export const useStudents = () => {
  const studentsEndPoint = `${ENVS.VITE_API_ENDPOINT}${API_ENDPOINTS.STUDENTS}`;

  const { data, error, isValidating, mutate: mutateStudents } = useSWR<Student[]>(studentsEndPoint, get);

  const createStudent = async (newStudent: Partial<Student>) => {
    try {
      const response: Student = await post(studentsEndPoint, {
        ...newStudent,
        avatarUrl: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/956.jpg',
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
    isLoading: !data && !error,
    isValidating,
    createStudent,
    updateStudent,
    deleteStudent,
  };
};
