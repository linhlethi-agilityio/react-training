import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { Box, Button, Card, Center, FormControl, FormLabel, Heading, Input, Text, Link } from '@chakra-ui/react';

// Constants
import { ERROR_MESSAGES, REGEX_PATTERN, ROUTERS } from '@constants';

// Utils
import { isValidFormat, validateRequired } from '@utils';

// Components
import { BrandLogo } from '@components';

const LoginPage = () => {
  const navigate = useNavigate();

  const {
    control,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleOnClickBrandLogo = useCallback(() => {
    navigate(ROUTERS.LOGIN);
  }, [navigate]);

  const rulesValidate = {
    email: {
      required: validateRequired,
      emailFormat: (value: string) =>
        isValidFormat(value.trim(), REGEX_PATTERN.EMAIL) || ERROR_MESSAGES.FORMAT('Email'),
    },
    password: {
      required: validateRequired,
      validFormat: (value: string) =>
        isValidFormat(value.trim(), REGEX_PATTERN.PASSWORD) || ERROR_MESSAGES.INVALID_PASSWORD,
    },
  };

  const handleOnChangeEmail = useCallback(() => {
    // Clear error when the users typing
    errors.email?.message && clearErrors('email');
  }, [clearErrors, errors.email?.message]);

  const handleOnChangePassword = useCallback(() => {
    // Clear error when the users typing
    errors.password?.message && clearErrors('password');
  }, [clearErrors, errors.password?.message]);

  const handleLogin = () => {
    console.log('TODO: Update later');
  };

  return (
    <Box bgGradient={`linear(to-r,${'primary'}, ${'background.body'})`} height="100vh">
      <Center h="100%">
        <Card size="xl" w="100%" px={30} py={42} alignItems="center">
          <BrandLogo size="lg" onClick={handleOnClickBrandLogo} />
          <Heading size="md" fontWeight="semiBold" textTransform="uppercase" mt={43}>
            Sign In
          </Heading>
          <Text mt={2} color="text.default">
            Enter your credentials to access your account
          </Text>
          <FormControl mt={50} onSubmit={handleSubmit(handleLogin)}>
            <Controller
              name="email"
              control={control}
              rules={{ validate: rulesValidate.email }}
              render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
                <Box marginBottom={error?.message ? 0 : 25}>
                  <FormLabel fontSize="text.sm" lineHeight="sm" color="text.default">
                    Email
                  </FormLabel>
                  <Input
                    isInvalid={!!error?.message}
                    onChange={(e) => {
                      onChange(e.target.value);
                      handleOnChangeEmail();
                    }}
                    {...rest}
                  />
                  {error?.message && (
                    <Text variant="error" size="small" marginTop="8px" textAlign="left">
                      {error.message}
                    </Text>
                  )}
                </Box>
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{ validate: rulesValidate.password }}
              render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
                <Box marginBottom={error?.message ? 0 : 25}>
                  <FormLabel fontSize="text.sm" lineHeight="sm" color="text.default">
                    Password
                  </FormLabel>
                  <Input
                    isInvalid={!!error?.message}
                    onChange={(e) => {
                      onChange(e.target.value);
                      handleOnChangePassword();
                    }}
                    {...rest}
                  />
                  {error?.message && (
                    <Text variant="error" size="small" marginTop={2} textAlign="left">
                      {error.message}
                    </Text>
                  )}
                </Box>
              )}
            />
            <Button w="100%" mt={5} type="submit">
              Sign in
            </Button>
          </FormControl>
          <Text mt={27}>
            Forgot your password? <Link color="primary">Reset Password</Link>
          </Text>
        </Card>
      </Center>
    </Box>
  );
};

export default LoginPage;
