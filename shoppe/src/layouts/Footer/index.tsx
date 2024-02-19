import { StyledBox } from '@components/Box';
import { StyledNavigation } from '@components/Navigation';
import { NAVIGATION_ITEM, SOCIAL_INFORMATION } from '@constants/baseConfig';
import styled from 'styled-components';
import { IFooterProps } from './types';
import StyledText from '@components/Text';
import { StyledSubmitableForm } from '@components/SubmitableForm';
import { BackArrowIcon } from '@components/Icons';
import { ChangeEvent, memo, useCallback, useState } from 'react';
import { StyledSocialInformation } from '@components/SocialInformation';

const Footer = (props: IFooterProps) => {
  const { className } = props;
  const [emailValue, setEmailValue] = useState('');

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  }, []);

  const handleOnSubmit = useCallback(() => {
    console.log(emailValue);
  }, [emailValue]);

  return (
    <footer className={className}>
      <StyledBox>
        <StyledNavigation items={NAVIGATION_ITEM} />
        <StyledText mTop={48} lightHeight={27}>
          © 2021 Shelly. Terms of use and privacy policy.
        </StyledText>
      </StyledBox>
      <StyledInfoWrap>
        <StyledSubmitableForm
          formWidth={396}
          placeholderInput="Give an email, get the newsletter."
          IconComponent={BackArrowIcon}
          inputVariant="secondary"
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
          value={emailValue}
        />
        <StyledSocialInformation data={SOCIAL_INFORMATION} gap={30} />
      </StyledInfoWrap>
    </footer>
  );
};

const StyledFooter = memo(styled(Footer)`
  display: flex;
  border-top: 1px solid #d8d8d8;
  padding-top: 37px;
  padding-bottom: 108px;
  max-width: 1248px;
  justify-content: space-between;
  margin: 0 auto;
`);

const StyledInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 50px;
`;

export { StyledFooter };
