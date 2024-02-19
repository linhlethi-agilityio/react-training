import { Layout } from '@layouts/';
import StyledText from '@components/Text';
import { StyledInputControl } from '@components/InputControl';
import { StyledButton } from '@components/Button';
import styled from 'styled-components';
import { UserContext } from '@contexts/UserContext';
import { ChangeEvent, FormEvent, useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledLoadingSpinner } from '@components/LoadingSpinner';
import { login } from 'src/services/Auth';

const LoginPage = () => {
  const { state, actions } = useContext(UserContext);
  const navigate = useNavigate();

  const { userInput, errorMessage, loading } = state;

  const { setLoading, onChangeInput, setErrorMessage, postLoginRequestSuccess } = actions;

  const handleChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    onChangeInput({
      [name]: value,
    });
  }, []);

  const handleLogin = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      try {
        e.preventDefault();
        setLoading(true);
        const result = await login(userInput);

        if (result.status === 400) {
          setErrorMessage('Email or Password invalid');
          return;
        }

        const resultBody = result.body;

        postLoginRequestSuccess(resultBody.accessToken, resultBody.user);
        localStorage.setItem('login', resultBody.user.id.toString());
        navigate('/');
      } catch (error) {
        setErrorMessage(`Error! An error occurred: ${error}. Please try again later`);
      }
    },
    [userInput],
  );

  return (
    <Layout>
      <StyledInputForm>
        <form onSubmit={handleLogin}>
          <StyledText as="h2" fontSize={33} lineHeight={43} fontWeight={500} textAlign="center">
            Login
          </StyledText>
          <StyledInputControl
            label="Email"
            value={userInput.email}
            name="email"
            id="email"
            inputType="email"
            onChange={handleChangeInput}
            disabled={loading}
          />
          <StyledInputControl
            label="Password"
            value={userInput.password}
            name="password"
            id="password"
            inputType="password"
            onChange={handleChangeInput}
            disabled={loading}
          />
          {errorMessage && (
            <StyledText textAlign="left" mTop={7} color="error">
              {errorMessage}
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
