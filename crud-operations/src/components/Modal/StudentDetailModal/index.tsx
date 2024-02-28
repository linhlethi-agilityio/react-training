import { memo, useCallback, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';

// Components
import { CustomModal } from '@components';

// Constants
import { ERROR_MESSAGES, StudentType } from '@constants';

// Utils
import { clearErrorOnChange, isValidFormat, validateRequired } from '@utils';
import { REGEX_PATTERN } from '@constants/validate';

interface StudentModalDetailModalProps extends StudentType {
  isOpen: boolean;
  onClose: () => void;
}

type StudentDetailFormData = 'name' | 'email' | 'phone' | 'enrollNumber' | 'dateOfAdmission';

const StudentDetailModal = ({
  isOpen,
  onClose,
  name,
  email,
  phone,
  enrollNumber,
  dateOfAdmission,
}: StudentModalDetailModalProps) => {
  const formInitData = useMemo(
    () => ({
      name: name || '',
      email: email || '',
      phone: phone || '',
      enrollNumber: enrollNumber || '',
      dateOfAdmission: dateOfAdmission || '',
    }),
    [name, email, phone, enrollNumber, dateOfAdmission],
  );

  const {
    control,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: formInitData,
  });

  const studentDetailValidationRule = {
    name: {
      required: validateRequired,
    },
    email: {
      required: validateRequired,
      emailFormat: (value: string) =>
        isValidFormat(value.trim(), REGEX_PATTERN.EMAIL) || ERROR_MESSAGES.FORMAT('Email'),
    },
    phone: {
      required: validateRequired,
    },
    enrollNumber: {
      required: validateRequired,
    },
    dateOfAdmission: {
      required: validateRequired,
    },
  };

  /**
   * Clear error when the users typing
   */
  const handleOnChange = useCallback(
    (fieldName: StudentDetailFormData) => {
      clearErrorOnChange(fieldName, errors, clearErrors);
    },
    [clearErrors, errors],
  );

  const handleOnSubmit = () => {
    // Todo: update later
  };

  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title="Student Detail">
      <FormControl textAlign="center" onSubmit={handleSubmit(handleOnSubmit)}>
        {/* Name */}
        <Controller
          name="name"
          control={control}
          rules={{ validate: studentDetailValidationRule.name }}
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <Box marginBottom={error?.message ? 0 : '25px'}>
              <FormLabel>Name:</FormLabel>
              <Input
                isInvalid={!!error?.message}
                onChange={(e) => {
                  onChange(e.target.value);
                  handleOnChange('name');
                }}
                {...rest}
              />
              {!!error?.message && (
                <Text variant="error" size="small" marginTop="8px" textAlign="left">
                  {error.message}
                </Text>
              )}
            </Box>
          )}
        />

        {/* Email */}
        <Controller
          name="email"
          control={control}
          rules={{ validate: studentDetailValidationRule.email }}
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <Box marginBottom={error?.message ? 0 : '25px'}>
              <FormLabel>Email:</FormLabel>
              <Input
                aria-label="Email"
                isInvalid={!!error?.message}
                onChange={(e) => {
                  onChange(e.target.value);
                  handleOnChange('email');
                }}
                {...rest}
              />
              {!!error?.message && (
                <Text variant="error" size="small" marginTop="8px" textAlign="left">
                  {error.message}
                </Text>
              )}
            </Box>
          )}
        />

        {/* Phone */}
        <Controller
          name="phone"
          control={control}
          rules={{ validate: studentDetailValidationRule.name }}
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <Box marginBottom={error?.message ? 0 : '25px'}>
              <FormLabel>Phone:</FormLabel>
              <Input
                isInvalid={!!error?.message}
                onChange={(e) => {
                  onChange(e.target.value);
                  handleOnChange('phone');
                }}
                {...rest}
              />
              {!!error?.message && (
                <Text variant="error" size="small" marginTop="8px" textAlign="left">
                  {error.message}
                </Text>
              )}
            </Box>
          )}
        />

        {/* Enroll number */}
        <Controller
          name="enrollNumber"
          control={control}
          rules={{ validate: studentDetailValidationRule.enrollNumber }}
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <Box marginBottom={error?.message ? 0 : '25px'}>
              <FormLabel>Enroll number:</FormLabel>
              <Input
                isInvalid={!!error?.message}
                onChange={(e) => {
                  onChange(e.target.value);
                  handleOnChange('enrollNumber');
                }}
                {...rest}
              />
              {!!error?.message && (
                <Text variant="error" size="small" marginTop="8px" textAlign="left">
                  {error.message}
                </Text>
              )}
            </Box>
          )}
        />

        {/* Date of admission */}
        <Controller
          name="dateOfAdmission"
          control={control}
          rules={{ validate: studentDetailValidationRule.dateOfAdmission }}
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <Box marginBottom={error?.message ? 0 : '25px'}>
              <FormLabel>Date of admission:</FormLabel>
              <Input
                isInvalid={!!error?.message}
                onChange={(e) => {
                  onChange(e.target.value);
                  handleOnChange('dateOfAdmission');
                }}
                {...rest}
              />
              {!!error?.message && (
                <Text variant="error" size="small" marginTop="8px" textAlign="left">
                  {error.message}
                </Text>
              )}
            </Box>
          )}
        />
        <Button type="submit" marginBottom="20px">
          Submit
        </Button>
      </FormControl>
    </CustomModal>
  );
};

export default memo(StudentDetailModal);
