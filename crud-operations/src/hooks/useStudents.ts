import useSWR from 'swr';

// Services
import { get, post, put, remove } from '@services';

// Constants
import { API_ENDPOINTS, ENVS } from '@constants';

// Types
import { Student } from '@types';

interface ApiResponse<T> {
  data: T;
  status: number;
}

export const useStudents = () => {
  const studentsEndPoint = `${ENVS.VITE_API_ENDPOINT}${API_ENDPOINTS.STUDENTS}`;

  const { data, error, isValidating, mutate: mutateStudents } = useSWR<Student[]>(studentsEndPoint, get);

  const createStudent = async (newStudent: Partial<Student>) => {
    try {
      const response: Student = await post(studentsEndPoint, newStudent);

      // Optimistically update the local data without waiting for the server response
      mutateStudents([...(data || []), response], false);

      return response;
    } catch (error) {
      return error;
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
      // Handle error
      return error;
    }
  };

  const deleteStudent = async (studentId: string): Promise<void> => {
    try {
      await remove(`${studentsEndPoint}/${studentId}`);
      const updatedStudents = (data || []).filter((student) => student.id !== studentId);
      mutateStudents(updatedStudents, false);
    } catch (error) {
      // Handle error
      console.error('Error deleting student:', error);
    }
  };

  const getStudentById = async (studentId: string): Promise<Student | undefined> => {
    try {
      const response: ApiResponse<Student> = await get(`${studentsEndPoint}/${studentId}`);

      return response.data;
    } catch (error) {
      // Handle error
      console.error('Error fetching student by ID:', error);
      return undefined;
    }
  };

  return {
    students: data,
    isLoading: !data && !error,
    isValidating,
    createStudent,
    updateStudent,
    deleteStudent,
    getStudentById,
  };
};
