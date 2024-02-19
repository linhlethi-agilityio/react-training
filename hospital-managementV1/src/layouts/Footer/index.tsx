import logo from '@image/logo-footer.webp';
import { Link } from 'react-router-dom';
import { QUICK_LINKS } from '@constants/baseConfig';
import QuickLink from '@components/QuickLink';
import StyledText from '@components/Text';
import styled from 'styled-components';
import { IFooterProps, IStyledWraper } from './types';
import { memo } from 'react';
import { SubscriptionForm } from '@layouts/SubscriptionForm';

const Footer = (props: IFooterProps): React.ReactElement => {
  const { className } = props;

  return (
    <footer className={className}>
      <StyledWraper bgColor="#283779" padding="62px 235px 26px 152px">
        <div>
          <StyledText as="h3" fontSize="28px" fontWeight="700" color="rgba(255, 255, 255, 0.9)">
            Get an update every week
          </StyledText>
          <StyledText fontSize="15px" color="#ffffff" mTop="20px" maxWidth="344px">
            Livedoc was created in order to improve the patient experience. Providing world-class
            tests, and a wide range of other services.
          </StyledText>
        </div>
        <div>
          <StyledText
            as="h3"
            fontFamily="var(--font-tertiary)"
            color="#B2DDED"
            fontSize="23px"
            lineHeight="29px"
            textTransform="uppercase"
          >
            Subscribe to news letter
          </StyledText>
          <SubscriptionForm />
        </div>
      </StyledWraper>
      <StyledWraper bgColor="rgba(27, 113, 161, 0.8)" padding="62px 153px 80px 173px">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <StyledWraper padding="0 0 0 148px">
          {QUICK_LINKS.map((item) => (
            <QuickLink item={item} key={item.id} />
          ))}
        </StyledWraper>
      </StyledWraper>
      <StyledCopyright>
        <StyledText as="span" color="inherit">
          All rights Reserved © Swasthu.com, 2021
        </StyledText>
        <StyledText as="span" color="inherit">
          Privacy Policy
        </StyledText>
      </StyledCopyright>
    </footer>
  );
};

const StyledWraper = styled.div<IStyledWraper>`
  background-color: ${(props) => props.bgColor};
  padding: ${(props) => props.padding};
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StyledCopyright = memo(
  styled.div`
    background-color: #283779;
    padding: 24px 162px 24px 162px;
    display: flex;
    justify-content: space-between;
    color: #e0dede;
    font-size: 13px;
    line-height: 15px;
  `,
  () => true,
);

const StyledFooter = styled(Footer)`
  form {
    padding-top: 19px;
  }

  button {
    margin-left: 11px;
  }
`;

export { StyledFooter };
