import { Layout } from '@layouts/';
import StyledText from '@components/Text';
import { StyledInputControl } from '@components/InputControl';
import { StyledButton } from '@components/Button';
import styled from 'styled-components';
import { FormEvent, useCallback, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { StyledLoadingSpinner } from '@components/LoadingSpinner';
import { useAuth } from '@hooks/useAuth';

const LoginPage = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const passwordRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();

  const { data: user, error, login } = useAuth();

  const handleLogin = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const userInput = {
        email: emailRef.current!.value,
        password: passwordRef.current!.value,
      };

      login(userInput);
    },
    [setLoading, emailRef, passwordRef],
  );

  if (user) {
    return <Navigate to="/" replace={false} />;
  }

  return (
    <Layout>
      <StyledInputForm>
        <form onSubmit={handleLogin}>
          <StyledText as="h2" fontSize={33} lineHeight={43} fontWeight={500} textAlign="center">
            Login
          </StyledText>
          <StyledInputControl
            label="Email"
            name="email"
            id="email"
            inputType="email"
            disabled={loading}
            ref={emailRef}
          />
          <StyledInputControl
            label="Password"
            name="password"
            id="password"
            inputType="password"
            disabled={loading}
            ref={passwordRef}
          />
          {error?.body && (
            <StyledText textAlign="left" mTop={7} color="error">
              {error?.body}
            </StyledText>
          )}
          {loading && <StyledLoadingSpinner />}
          <StyledButton variant="primary" type="submit" disabled={loading}>
            Submit
          </StyledButton>
        </form>
      </StyledInputForm>
    </Layout>
  );
};

const StyledInputForm = styled.section`
  padding-top: 200px;
  padding-bottom: 252px;

  form {
    text-align: center;
    margin-top: 100px;
    width: 400px;
    border: 2px solid #d8d8d8;
    border-radius: 8px;
    padding: 30px 40px;
    margin: 100px auto 250px auto;
  }

  button {
    margin-top: 40px;
  }

  div:nth-child(n + 2) {
    margin-top: 15px;
  }
`;

export default LoginPage;
