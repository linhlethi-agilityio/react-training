import { memo, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Box, Button, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';

// Constants
import { ERROR_MESSAGES } from '@constants';

// Utils
import { clearErrorOnChange, isValidEmail } from '@utils';

// Types
import { Student } from '@types';

// Components
import { CustomModal } from '@components';
interface StudentModalDetailModalProps extends Student {
  isOpen: boolean;
  onClose: () => void;
}

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
      name,
      email,
      phone,
      enrollNumber,
      dateOfAdmission,
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

  const handleOnSubmit = () => {
    // Todo: update later
  };

  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title="Student Detail">
      <FormControl textAlign="center">
        {/* Name */}
        <Controller
          name="name"
          control={control}
          rules={{ required: ERROR_MESSAGES.FIELD_REQUIRED }}
          render={({ field: { name, onChange, ...rest }, fieldState: { error } }) => (
            <Box marginBottom={error?.message ? 0 : 27}>
              <FormLabel fontSize="sm" lineHeight="sm" color="text.default">
                Name:
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
                <FormHelperText color="error" fontSize="xs" mb={1} textAlign="left">
                  {error.message}
                </FormHelperText>
              )}
            </Box>
          )}
        />

        {/* Email */}
        <Controller
          name="email"
          control={control}
          rules={{
            required: ERROR_MESSAGES.FIELD_REQUIRED,
            validate: (email) => isValidEmail(email) || ERROR_MESSAGES.INVALID_EMAIL,
          }}
          render={({ field: { name, onChange, ...rest }, fieldState: { error } }) => (
            <Box marginBottom={error?.message ? 0 : 27}>
              <FormLabel fontSize="sm" lineHeight="sm" color="text.default">
                Email:
              </FormLabel>
              <Input
                aria-label="Email"
                isInvalid={!!error?.message}
                onChange={(e) => {
                  onChange(e.target.value);

                  // Clear error message on change
                  clearErrorOnChange(name, errors, clearErrors);
                }}
                {...rest}
              />
              {error?.message && (
                <FormHelperText color="error" fontSize="xs" mb={1} textAlign="left">
                  {error.message}
                </FormHelperText>
              )}
            </Box>
          )}
        />

        {/* Phone */}
        <Controller
          name="phone"
          control={control}
          rules={{ required: ERROR_MESSAGES.FIELD_REQUIRED }}
          render={({ field: { name, onChange, ...rest }, fieldState: { error } }) => (
            <Box marginBottom={error?.message ? 0 : 27}>
              <FormLabel fontSize="sm" lineHeight="sm" color="text.default">
                Phone:
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
                <FormHelperText color="error" fontSize="xs" mb={1} textAlign="left">
                  {error.message}
                </FormHelperText>
              )}
            </Box>
          )}
        />

        {/* Enroll number */}
        <Controller
          name="enrollNumber"
          control={control}
          rules={{ required: ERROR_MESSAGES.FIELD_REQUIRED }}
          render={({ field: { name, onChange, ...rest }, fieldState: { error } }) => (
            <Box marginBottom={error?.message ? 0 : '25px'}>
              <FormLabel fontSize="sm" lineHeight="sm" color="text.default">
                Enroll number:
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
                <FormHelperText color="error" fontSize="xs" mb={1} textAlign="left">
                  {error.message}
                </FormHelperText>
              )}
            </Box>
          )}
        />

        {/* Date of admission */}
        <Controller
          name="dateOfAdmission"
          control={control}
          rules={{ required: ERROR_MESSAGES.FIELD_REQUIRED }}
          render={({ field: { name, onChange, ...rest }, fieldState: { error } }) => (
            <Box marginBottom={error?.message ? 0 : 25}>
              <FormLabel fontSize="sm" lineHeight="sm" color="text.default">
                Date of admission:
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
                <FormHelperText color="error" fontSize="xs" mb={1} textAlign="left">
                  {error.message}
                </FormHelperText>
              )}
            </Box>
          )}
        />
        <Button type="submit" w="full" marginBottom={5} onClick={handleSubmit(handleOnSubmit)}>
          Submit
        </Button>
      </FormControl>
    </CustomModal>
  );
};

export default memo(StudentDetailModal);
