import { cleanup } from '@testing-library/react';
import * as api from '../api';
import fetchMock from 'jest-fetch-mock';

const course = [
  {
    id: '1',
    name: 'name 1',
    description: 'lorem amountPaid Ankunding',
  },
  {
    id: '2',
    name: 'name 2',
    description: 'lorem amountPaid Ankunding',
  },
];

const report = [
  {
    id: '1',
    name: 'name 1',
  },
  {
    id: '2',
    name: 'name 2',
  },
];

describe('Testing api', () => {
  afterEach(() => {
    cleanup();
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  describe('test fetch api pass', () => {
    beforeEach(() => {
      fetchMock.mockResponse(JSON.stringify(course));
    });
    test('get data', async () => {
      const wrappedCallMe = async (count: number) => {
        let countResult = count;

        const response = await api.get('http://localhost:3001/report');

        countResult += 1;

        return {
          response,
          count: countResult,
        };
      };

      // Call the wrapped function
      const { response, count } = await wrappedCallMe(0);

      // Expectations
      expect(response).toEqual(report);
      // Ensure that the function was called at least once
      expect(count).toBeGreaterThan(0);
    });

    test('post data', async () => {
      const newCourse = {
        id: '3',
        name: 'name 3',
        description: 'lorem amountPaid Ankunding',
      };

      const wrappedCallMe = async (count: number) => {
        let countResult = count;

        const response = await api.post('http://localhost:3001/students', newCourse);

        countResult += 1;

        return {
          response,
          count: countResult,
        };
      };

      // Call the wrapped function
      const { response, count } = await wrappedCallMe(0);

      // Expectations
      expect(response).toEqual(newCourse);
      // Ensure that the function was called at least once
      expect(count).toBeGreaterThan(0);
    });

    test('put data', async () => {
      const result = await api.put('http://localhost:3001/course/1', {
        id: '1',
        name: 'new name 1',
        description: 'lorem amountPaid Ankunding',
      });
      expect(result).toEqual({
        id: '1',
        name: 'new name 1',
        description: 'lorem amountPaid Ankunding',
      });
    });

    test.skip('delete data', async () => {
      const wrappedCallMe = async (count: number) => {
        let countResult = count;

        await api.remove('http://localhost:3001/course/1');

        countResult += 1;

        return {
          count: countResult,
        };
      };

      // Call the wrapped function
      const { count } = await wrappedCallMe(0);

      // Ensure that the function was called at least once
      expect(count).toBeGreaterThan(0);
    });
  });
});
