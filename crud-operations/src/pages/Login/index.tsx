import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import {
  Box,
  Button,
  Card,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Link,
  FormHelperText,
} from '@chakra-ui/react';

// Constants
import { ERROR_MESSAGES, MIN_PASSWORD_LENGTH, ROUTERS } from '@constants';

// Utils
import { clearErrorOnChange, isValidEmail } from '@utils';

// Hooks
import { useAuth, useToastCustom } from '@hooks';

// Components
import { BrandLogo } from '@components';

interface LoginFormData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const navigate = useNavigate();
  const toast = useToastCustom();
  const { loginWithEmailPassword, getCurrentUser } = useAuth();

  const {
    control,
    formState: { errors, isValid },
    clearErrors,
    handleSubmit,
  } = useForm<LoginFormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  /**
   * Func handle login
   */
  const handleLogin = async ({ email, password }: LoginFormData) => {
    const loginResponse = await loginWithEmailPassword(email, password);
    if (loginResponse) {
      navigate(ROUTERS.DASHBOARD);
    } else {
      toast({
        title: ERROR_MESSAGES.LOGIN_FAILED,
        description: ERROR_MESSAGES.USER_NOT_FOUND,
        status: 'error',
      });
    }
  };

  useEffect(() => {
    const handleValidate = async () => {
      const response = await getCurrentUser();

      if (response) {
        return navigate(ROUTERS.DASHBOARD);
      }
    };

    handleValidate();
  }, [getCurrentUser, navigate]);

  useEffect(() => {
    // Update the disabled state based on form validity
    setIsButtonDisabled(!isValid);
  }, [isValid]);

  return (
    <Box bgGradient="linear(to-r, primary, background.body)" height="100vh">
      <Center h="full">
        <Card size="xl" w="full" px={30} py={42} alignItems="center">
          <BrandLogo size="lg" onClick={() => navigate(ROUTERS.DASHBOARD)} />
          <Heading size="md" fontWeight="semiBold" textTransform="uppercase" mt={43}>
            Sign In
          </Heading>
          <Text mt={2} color="text.default">
            Enter your credentials to access your account
          </Text>

          {/* Login Form */}
          <FormControl mt={50}>
            {/* Email */}
            <Controller
              name="email"
              control={control}
              rules={{
                required: ERROR_MESSAGES.FIELD_REQUIRED,
                validate: (email) => isValidEmail(email) || ERROR_MESSAGES.INVALID_EMAIL,
              }}
              render={({ field: { name, onChange, ...rest }, fieldState: { error } }) => (
                <Box marginBottom={error?.message ? 0 : 25}>
                  <FormLabel fontSize="sm" lineHeight="sm" color="text.default">
                    Email
                  </FormLabel>
                  <Input
                    isInvalid={!!error?.message}
                    onChange={(e) => {
                      onChange(e.target.value);

                      // Clear error message on change
                      clearErrorOnChange(name, errors, clearErrors);
                    }}
                    {...rest}
                  />
                  {error?.message && (
                    <FormHelperText color="error" fontSize="xs" mb={1}>
                      {error.message}
                    </FormHelperText>
                  )}
                </Box>
              )}
            />

            {/* Password */}
            <Controller
              name="password"
              control={control}
              rules={{
                required: ERROR_MESSAGES.FIELD_REQUIRED,
                minLength: {
                  value: MIN_PASSWORD_LENGTH,
                  message: ERROR_MESSAGES.MIN_PASSWORD_LENGTH(MIN_PASSWORD_LENGTH),
                },
              }}
              render={({ field: { name, onChange, ...rest }, fieldState: { error } }) => (
                <Box marginBottom={error?.message ? 0 : 25}>
                  <FormLabel fontSize="sm" lineHeight="sm" color="text.default">
                    Password
                  </FormLabel>
                  <Input
                    type="password"
                    isInvalid={!!error?.message}
                    onChange={(e) => {
                      onChange(e.target.value);

                      // Clear error message on change
                      clearErrorOnChange(name, errors, clearErrors);
                    }}
                    {...rest}
                  />
                  {error?.message && (
                    <FormHelperText color="error" fontSize="xs">
                      {error.message}
                    </FormHelperText>
                  )}
                </Box>
              )}
            />
            <Button
              isDisabled={isButtonDisabled}
              aria-label="sign-in"
              w="full"
              mt={5}
              onClick={handleSubmit(handleLogin)}
            >
              Sign in
            </Button>
          </FormControl>
          <Text color="text.default" mt={27}>
            Forgot your password?&nbsp;
            <Link as="button" color="primary" textDecoration="underline" _hover={{ textDecoration: 'underline' }}>
              <Text as="span">Reset Password</Text>
            </Link>
          </Text>
        </Card>
      </Center>
    </Box>
  );
};

export default LoginPage;
