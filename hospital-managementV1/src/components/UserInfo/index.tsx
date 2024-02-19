import { StyledAvatar } from '@components/Avatar';
import { StyledBox } from '@components/Box';
import { PenIcon } from '@components/Icons';
import StyledText from '@components/Text';
import styled from 'styled-components';
import { IUserInfoProps } from './types';

const UserInfo = (props: IUserInfoProps) => {
  const { className, avatar, background, location, name, position, editable } = props;

  return (
    <section className={className}>
      <StyledBackgroundImg>
        <img src={background} alt="background" />
      </StyledBackgroundImg>
      <StyledContentWrap>
        <StyledBox>
          <StyledAvatarImg src={avatar} size="md" />
          <StyledBox>
            <StyledText
              as="h3"
              fontWeight="var(--font-weight-bold)"
              fontSize="28px"
              lineHeight="38px"
              color="#000000"
              textTransform="capitalize"
              mTop="-95px"
              mLeft="46px"
            >
              {name}
            </StyledText>
            {position && (
              <StyledText as="h4" fontSize="20px" mLeft="46px" textTransform="capitalize">
                {position}
              </StyledText>
            )}
            <StyledText
              mTop="10px"
              mLeft="46px"
              fontFamily="var(--font-quaternary)"
              textTransform="capitalize"
              lineHeight="18px"
            >
              {location}
            </StyledText>
          </StyledBox>
        </StyledBox>
        {editable && (
          <StyledBox mTop="41px">
            <PenIcon />
          </StyledBox>
        )}
      </StyledContentWrap>
    </section>
  );
};

const StyledBackgroundImg = styled.div`
  height: 258px;
  overflow: hidden;
  align-item: center;
  display: flex;

  img {
    width: 100%;
    height: auto;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

const StyledAvatarImg = styled(StyledAvatar)`
  transform: translateY(-50%);
  margin-left: 33px;
`;

const StyledContentWrap = styled(StyledBox)`
  display: flex;
  justify-content: space-between;
  padding-right: 45px;
`;

export { UserInfo };
