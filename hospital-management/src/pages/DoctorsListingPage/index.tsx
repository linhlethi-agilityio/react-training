import { StyledAvatar } from '@components/Avatar';
import { StyledBox } from '@components/Box';
import { StyledButton } from '@components/Button';
import { StyledDropdown } from '@components/Dropdown';
import { StyledLink } from '@components/Link';
import { List } from '@components/List';
import { ListItem } from '@components/ListItem';
import { StyledNavBar } from '@components/NavBar';
import { StyledNavbarItem } from '@components/NavBarItem';
import StyledText from '@components/Text';
import { API_BASE_URL, API_PATH } from '@constants/api';
import { PAGE_ROUTES } from '@constants/routers';
import { AppContext } from '@contexts/AppContext';
import { DoctorsContext } from '@contexts/DoctorsContext';
import { Layout } from '@layouts/';
import { ChangeEvent, memo, useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

const DoctorListing = () => {
  const { specialties, setSpecialties, locations, setLocations } = useContext(AppContext);
  const { state, actions } = useContext(DoctorsContext);
  const { doctors, pageNumber, selectedLocation, selectedSpecialty } = state;

  const [hasMoreDoctor, setHasMoreDoctor] = useState(false);
  const limitDoctors = 6;

  useEffect(() => {
    return () => {
      actions.resetInitialState();
    };
  }, []);

  useEffect(() => {
    const url = new URL(
      `${API_BASE_URL}/${API_PATH.DOCTORS}?_page=${pageNumber}&_limit=${limitDoctors}`,
    );

    if (selectedLocation) {
      url.searchParams.append('location', selectedLocation);
    }

    if (selectedSpecialty) {
      url.searchParams.append('specialty', selectedSpecialty);
    }

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        actions.doctorsRequestSuccess(result);
        setHasMoreDoctor(result.length < limitDoctors);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
  }, [pageNumber, selectedLocation, selectedSpecialty]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/${API_PATH.SPECIALTIES}`)
      .then((res) => res.json())
      .then((result) => {
        setSpecialties(result);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });

    fetch(`${API_BASE_URL}/${API_PATH.LOCATIONS}`)
      .then((res) => res.json())
      .then((result) => {
        setLocations(result);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
  }, [setLocations, setSpecialties]);

  const onChangeDropdownLocation = (e: ChangeEvent<HTMLSelectElement>) => {
    actions.fiterLocation(e.target.value);
  };

  const onChangeDropdownSecialty = (e: ChangeEvent<HTMLSelectElement>) => {
    actions.fiterSpeciaties(e.target.value);
  };

  const handleLoadMore = useCallback(() => {
    actions.setPage(pageNumber + 1);
  }, [actions, pageNumber]);

  const specialtiesConfig = specialties.map((item) => ({ label: item.name, value: item.name }));
  const locationsConfig = locations.map((item) => ({ label: item.name, value: item.name }));

  return (
    <Layout>
      <StyledBox maxWidth="1288px" mLeft="auto" mRight="auto">
        <StyledText
          as="h2"
          fontWeight="700"
          fontSize="26px"
          lineHeight="35px"
          maxWidth="478px"
          mLeft="71px"
          mTop="78px"
        >
          We have found {doctors.length} Doctors available - At {selectedLocation}, as{' '}
          {selectedSpecialty}
        </StyledText>
        <StyledDoctorListingBar>
          <StyledNavbarItem>
            <StyledDropdown
              name="location"
              value={selectedLocation}
              options={locationsConfig}
              placeholder="Location"
              onChange={onChangeDropdownLocation}
            />
          </StyledNavbarItem>
          <StyledNavbarItem>
            <StyledDropdown
              name="speciality"
              value={selectedSpecialty}
              options={specialtiesConfig}
              placeholder="Speciality"
              onChange={onChangeDropdownSecialty}
            />
          </StyledNavbarItem>
        </StyledDoctorListingBar>
        <StyledListWrap>
          {doctors.map((item) => (
            <StyledListItemWrap key={item.id} divider>
              <StyledContentWrap>
                <StyledDoctorAvatar>
                  <StyledAvatar src={item.avatar} size="sm" />
                </StyledDoctorAvatar>
                <div>
                  <StyledText
                    as="h3"
                    fontWeight="700"
                    fontSize="28px"
                    lineHeight="38px"
                    textTransform="capitalize"
                  >
                    {item.name}
                  </StyledText>

                  <StyledText
                    as="h4"
                    fontSize="20px"
                    fontFamily="var(--font-quaternary)"
                    textTransform="capitalize"
                    mTop="10px"
                  >
                    {item.position}
                  </StyledText>
                  <StyledText
                    fontSize="16px"
                    lineHeight="23px"
                    fontFamily="var(--font-quaternary)"
                    textTransform="capitalize"
                    maxWidth="592px"
                    mTop="12px"
                  >
                    {item.experience}
                  </StyledText>
                  <StyledText
                    textTransform="capitalize"
                    fontFamily="var(--font-quaternary)"
                    mTop="12px"
                  >
                    {item.location}
                  </StyledText>
                </div>
              </StyledContentWrap>
              <StyledConsultationWrap>
                <StyledText
                  as="h4"
                  fontWeight="700"
                  fontSize="24px"
                  lineHeight="29px"
                  textTransform="capitalize"
                >
                  Fees: Rs. {item.fees} /-
                </StyledText>
                <StyledText
                  mTop="31px"
                  color="#24A78F"
                  textTransform="capitalize"
                  fontSize="20px"
                  fontWeight="700"
                >
                  {item.status}
                </StyledText>
                <StyledLink to={`${PAGE_ROUTES.DOCTORS}/${item.id}`}>
                  <StyledButton variant="secondary">Book Online Consultation</StyledButton>
                </StyledLink>
              </StyledConsultationWrap>
            </StyledListItemWrap>
          ))}
          {!hasMoreDoctor && (
            <StyledButtonLoadMore>
              <StyledButton onClick={handleLoadMore} variant="primary">
                Load More
              </StyledButton>
            </StyledButtonLoadMore>
          )}
        </StyledListWrap>
      </StyledBox>
    </Layout>
  );
};

const StyledButtonLoadMore = styled.div`
  text-align: center;
`;

const StyledListItemWrap = memo(
  styled(ListItem)`
    display: flex;
    padding-top: 54px;
    padding-bottom: 52px;
    justify-content: space-between;

    button {
      margin-top: 23px;
    }
  `,
  () => true,
);

const StyledDoctorListingBar = styled(StyledNavBar)`
  margin-left: 70px;
  margin-right: 82px;
  margin-top: 29px;
`;

const StyledListWrap = styled(List)`
  padding-left: 78px;
  padding-right: 95px;
  padding-bottom: 315px;

  > div {
    margin-top: 40px;
  }
`;

const StyledConsultationWrap = memo(
  styled.div`
    text-align: end;
  `,
  () => true,
);

const StyledContentWrap = memo(
  styled.div`
    display: flex;
    gap: 28px;
  `,
  () => true,
);

const StyledDoctorAvatar = styled.div`
  height: 167px;
  overflow: hidden;
  align-item: center;
  display: flex;

  img {
    max-width: 100%;
    height: auto;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export default DoctorListing;
