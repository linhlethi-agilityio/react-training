import { StyledBox } from '@components/Box';
import { StyledLink } from '@components/Link';
import { List } from '@components/List';
import { ListItem } from '@components/ListItem';
import StyledText from '@components/Text';
import styled from 'styled-components';
import { IDoctorEducationProps } from './types';

const DoctorEducation = (props: IDoctorEducationProps) => {
  const { className, data, hrefEducation } = props;

  return (
    <StyledDoctorEducation className={className}>
      {data.map((item) => (
        <ListItem key={item.id}>
          <StyledListItemWrap>
            <StyledEducationImage>
              <img src={item.image} alt="education" />
            </StyledEducationImage>
            <StyledBox>
              <StyledLink to={`${hrefEducation}/${item.id}`}>
                <StyledText
                  as="h4"
                  color="#4C84C3"
                  lineHeight="27px"
                  fontSize="20px"
                  fontWeight="700"
                >
                  {item.title}
                </StyledText>
              </StyledLink>
              <StyledText lineHeight="20px" mTop="10px" maxWidth="673px">
                {item.description}
              </StyledText>
            </StyledBox>
          </StyledListItemWrap>
        </ListItem>
      ))}
    </StyledDoctorEducation>
  );
};

const StyledDoctorEducation = styled(List)`
  display: flex;
  flex-direction: column;
  gap: 55px;
`;

const StyledEducationImage = styled.div`
  height: 89px;
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

const StyledListItemWrap = styled.div`
  display: flex;
  gap: 22px;
`;

export { DoctorEducation };
