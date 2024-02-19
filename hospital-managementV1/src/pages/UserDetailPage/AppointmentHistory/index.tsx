import { StyledAvatar } from '@components/Avatar';
import { Table } from '@components/Table';
import { ITableColumn } from '@components/Table/types';
import { IAppointmentHistoryProps } from './types';
import StyledText from '@components/Text';
import styled from 'styled-components';
import { IAppointment } from '@data-types/user';

const AppointmentHistory = (props: IAppointmentHistoryProps) => {
  const { data, className } = props;

  const columns: ITableColumn<IAppointment>[] = [
    {
      id: '1',
      width: '80px',
      textAlign: 'center',
      accessor: (data: IAppointment) => <StyledAvatar size="xs" src={data.doctorAvatar} />,
    },
    {
      id: '2',
      width: '232px',
      header: 'Doctor',
      textAlign: 'left',
      accessor: 'doctorName',
    },
    {
      id: '3',
      width: '232px',
      header: 'Date',
      textAlign: 'left',
      accessor: 'date',
    },
    {
      id: '4',
      width: '232px',
      header: 'Visit Time',
      textAlign: 'left',
      accessor: 'visitTime',
    },
    {
      id: '5',
      width: '232px',
      header: 'Conditions',
      textAlign: 'left',
      accessor: 'conditions',
    },
  ];

  return (
    <div className={className}>
      <StyledText as="h3" fontSize="20px" fontWeight="700" mLeft="24px" color="#25282B">
        Appointment History
      </StyledText>
      <Table columns={columns} data={data} />
    </div>
  );
};

const StyledAppointmentHistory = styled(AppointmentHistory)`
  margin-top: 54px;
  margin-left: 10px;
  margin-bottom: 241px;

  table {
    width: 100%;
    margin-top: 18px;
  }
`;

export { StyledAppointmentHistory };
