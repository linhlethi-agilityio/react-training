import { cleanup } from '@testing-library/react';
import * as api from '../api';
import fetchMock from 'jest-fetch-mock';

const students = [
  {
    enrollNumber: 54547,
    name: 'name 8',
    avatarUrl: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/956.jpg',
    phone: '7305477760',
    email: 'Carson31@gmail.com',
    dateOfAdmission: 950288400000,
    id: '0',
  },
  {
    enrollNumber: 4545474,
    name: 'A ame 9',
    avatarUrl: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/59.jpg',
    phone: '7305477760',
    email: 'Ora.Ankunding@yahoo.com',
    dateOfAdmission: 981824400000,
    id: '1',
  },
  {
    enrollNumber: 5454526,
    name: 'name 10',
    avatarUrl: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1202.jpg',
    phone: '7305477760',
    email: 'Ottis.Wolff41@gmail.com',
    dateOfAdmission: 1013446800000,
    id: '2',
  },
  {
    enrollNumber: 745459,
    name: 'name 11',
    avatarUrl: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/98.jpg',
    phone: '7305477760',
    email: 'Estella73@gmail.com',
    dateOfAdmission: 1044982800000,
    id: '3',
  },
  {
    enrollNumber: 45435454,
    name: 'A ame 12',
    avatarUrl: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1204.jpg',
    phone: '7305477760',
    email: 'Nikki67@yahoo.com',
    dateOfAdmission: 1076432400000,
    id: '4',
  },
  {
    enrollNumber: 54354354,
    name: 'name 13',
    avatarUrl: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1206.jpg',
    phone: '7305477760',
    email: 'karthi@gmmail.com',
    dateOfAdmission: 1108141200000,
    id: '5',
  },
  {
    enrollNumber: '123456789',
    name: 'John Smith',
    avatarUrl: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/335.jpg',
    phone: '7305477760',
    email: 'john-smit@gmail.com',
    dateOfAdmission: 1676134800000,
    id: '6',
  },
  {
    enrollNumber: '123456789',
    name: 'John Smith',
    avatarUrl: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/219.jpg',
    phone: '7305477760',
    email: 'john-smit@gmail.com',
    dateOfAdmission: 1676134800000,
    id: '7',
  },
];

describe.skip('Testing api', () => {
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
      fetchMock.mockResponse(JSON.stringify(students));
    });

    it('get data', async () => {
      const result = await api.get('http://localhost:3001/students');

      expect(result).toEqual(students);
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });

    it('post data', async () => {
      const result = await api.post('students', { students });
      expect(result).toEqual(students);
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });

    it('patch data', async () => {
      const result = await api.patch('http://localhost:3001/students', { students });
      expect(result).toEqual(students);
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });

    it('put data', async () => {
      const result = await api.put('http://localhost:3001/students', { students });
      expect(result).toEqual(students);
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });

    it('delete data', async () => {
      await api.remove('http://localhost:3001/students/1');
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('fail to fetch', () => {
    it('Error handing response error', async () => {
      const errorMessage = 'Error handing response error';

      fetchMock.mockResponse(JSON.stringify(errorMessage), { status: 404 });

      await expect(api.get('http://localhost:3001/students')).rejects.toEqual(errorMessage);
    });

    it('Error handing fail to fetch', async () => {
      const errorMessage = 'Error handing fail to fetch';

      fetchMock.mockReject(new Error(errorMessage));
      await expect(api.get('http://localhost:3001/students')).rejects.toThrow(errorMessage);
    });
  });
});
