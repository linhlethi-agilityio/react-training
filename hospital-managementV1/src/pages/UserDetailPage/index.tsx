import { StyledBox } from '@components/Box';
import { StyledNavBar } from '@components/NavBar';
import { StyledNavbarItem } from '@components/NavBarItem';
import { UserInfo } from '@components/UserInfo';
import { API_BASE_URL, API_PATH } from '@constants/api';
import { USER_NAVBAR_ITEMS } from '@constants/baseConfig';
import { Layout } from '@layouts/';
import { ChangeEvent, memo, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { StyledEditUserProfile } from './EditUserProfile';
import { StyledAppointmentHistory } from './AppointmentHistory';
import { StyledDiagnosticsResult } from './DiagnosticsResult';
import { UserContext } from '@contexts/UserContext';

const UserDetail = () => {
  const { id } = useParams();
  const { state, actions } = useContext(UserContext);
  const { user, editInfo } = state;
  const [activeNavBar, setActiveNavBar] = useState(USER_NAVBAR_ITEMS[0]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/${API_PATH.USERS}/${id}`)
      .then((res) => res.json())
      .then((result) => {
        actions.userRequestSuccess(result);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
  }, []);

  const renderTabContent = () => {
    if (activeNavBar === 'My Profile') {
      if (user) {
        return <StyledEditUser data={user} onChange={onChangeUser} onSubmit={onSubmitUser} />;
      }
    }

    if (activeNavBar === 'Appointment History') {
      if (user) {
        return <StyledAppointmentHistory data={user.appointments!} />;
      }
    }

    if (activeNavBar === 'Diagnostics Result') {
      if (user) {
        return <StyledDiagnosticsResult data={user.appointments!} />;
      }
    }
  };

  const onChangeUser = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (user) {
      const data = {
        ...user,
        [name]: value,
      };
      actions.onChangeUserInfo(data);
    }
  };

  const onSubmitUser = () => {
    actions.editUserProfile(editInfo);
  };

  return (
    <Layout>
      <StyledBox mLeft="auto" mRight="auto" maxWidth="1074px">
        {user && (
          <StyledUserInfo
            background={user.background!}
            avatar={user.avatar!}
            location={user.location!}
            name={user.name}
          />
        )}
        <section>
          <StyledUserBar>
            {USER_NAVBAR_ITEMS.map((item, index) => (
              <StyledNavbarItem
                key={`user-navbar-${index}`}
                active={activeNavBar === item}
                onClick={() => setActiveNavBar(item)}
              >
                {item}
              </StyledNavbarItem>
            ))}
          </StyledUserBar>
          {renderTabContent()}
        </section>
      </StyledBox>
    </Layout>
  );
};

const StyledUserBar = styled(StyledNavBar)`
  margin-left: 10px;
  margin-top: 36px;
`;

const StyledUserInfo = memo(
  styled(UserInfo)`
    margin-top: 56px;
  `,
  () => true,
);

const StyledEditUser = styled(StyledEditUserProfile)`
  margin-left: 50px;
  margin-top: 30px;
  margin-bottom: 235px;
`;

export default UserDetail;
