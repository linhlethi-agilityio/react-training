import useSWR from 'swr';

// Services
import { get } from '@services';

// Constants
import { API_ENDPOINTS, ENVS } from '@constants';
import { Student } from '@types';

export const useStudents = () => {
  const studentsEndPoint = `${ENVS.VITE_API_ENDPOINT}${API_ENDPOINTS.STUDENTS}`;

  const { data, isLoading } = useSWR<Student[]>(studentsEndPoint, get);

  return {
    students: data,
    isLoading: isLoading,
  };
};
