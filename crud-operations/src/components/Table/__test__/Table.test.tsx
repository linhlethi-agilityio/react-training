import { render } from '@test-utils';

// Components
import Table from '..';

const studentsColumns = [
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
];

const data = [
  {
    enrollNumber: 54547,
    name: 'name 8',
    avatarUrl: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/956.jpg',
    phone: '7305477760',
    email: 'Carson31@gmail.com',
    dateOfAdmission: 950288400000,
    id: '0',
  },
];

describe('Table', () => {
  test('should match snapshot for Table', () => {
    const { container } = render(<Table<any> columns={studentsColumns} data={data} />);

    expect(container).toMatchSnapshot();
  });
});
