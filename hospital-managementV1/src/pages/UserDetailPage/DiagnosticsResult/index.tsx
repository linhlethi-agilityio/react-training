import { StyledAvatar } from '@components/Avatar';
import { Table } from '@components/Table';
import { ITableColumn } from '@components/Table/types';
import { IDiagnosticsResultProps } from './types';
import StyledText from '@components/Text';
import styled from 'styled-components';
import { IAppointment } from '@data-types/user';
import { DownloadIcon } from '@components/Icons';

const DiagnosticsResult = (props: IDiagnosticsResultProps) => {
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
      header: 'Result Date',
      textAlign: 'left',
      accessor: 'resultDate',
    },
    {
      id: '5',
      width: '232px',
      header: 'Report Result',
      textAlign: 'left',
      accessor: 'reportResult',
    },
    {
      id: '6',
      width: '72px',
      textAlign: 'center',
      accessor: (data: IAppointment) => (
        <a href={data.dowloadFile}>
          <DownloadIcon size={24} />
        </a>
      ),
    },
  ];

  return (
    <div className={className}>
      <StyledText as="h3" fontSize="20px" fontWeight="700" mLeft="24px" color="#25282B">
        Diagnostics Result
      </StyledText>
      <Table columns={columns} data={data} />
    </div>
  );
};

const StyledDiagnosticsResult = styled(DiagnosticsResult)`
  margin-top: 54px;
  margin-left: 10px;
  margin-bottom: 241px;

  table {
    width: 100%;
    margin-top: 18px;
  }

  a {
    cursor: pointer;
  }
`;

export { StyledDiagnosticsResult };
