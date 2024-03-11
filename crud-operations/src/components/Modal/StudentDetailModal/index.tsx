import { memo, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Box, Button, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';

// Constants
import { ERROR_MESSAGES } from '@constants';

// Utils
import { clearErrorOnChange, formatDate, isValidEmail } from '@utils';

// Types
import { Student } from '@types';

// Hooks
import { useStudents, useToastCustom } from '@hooks';

// Components
import { CustomModal } from '@components';
interface StudentModalDetailModalProps {
  isOpen: boolean;
  previewData?: Student | null;
  onClose: () => void;
}

type StudentFormState = Omit<Student, 'id'>;

const initFormData = {
  name: '',
  email: '',
  phone: '',
  enrollNumber: '',
  dateOfAdmission: '',
};

const StudentDetailModal = ({ isOpen, previewData, onClose }: StudentModalDetailModalProps) => {
  const { createStudent, updateStudent } = useStudents();
  const toast = useToastCustom();

  const {
    control,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentFormState>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: previewData ? previewData : initFormData,
  });

  const isEditMode = useMemo(() => !!previewData?.id, [previewData?.id]);

  const handleOnSubmit = async (fromData: StudentFormState) => {
    let response = null;
    const dateOfAdmission = new Date(fromData.dateOfAdmission).getTime();

    if (isEditMode) {
      response = await updateStudent({
        ...previewData,
        ...fromData,
        dateOfAdmission,
      });
    } else {
      response = await createStudent({
        ...fromData,
        dateOfAdmission,
      });
    }

    onClose();

    if (response) {
      toast({
        title: 'Request sent successfully!',
        description: `A new student has been ${isEditMode ? 'edited' : 'added'}!`,
        status: 'success',
      });
    } else {
      toast({
        title: 'Request failed!',
        description: 'Something went wrong, please try again!',
        status: 'error',
      });
    }
  };

  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title={isEditMode ? 'Update Student' : 'Add Student'}>
      <FormControl textAlign="center">
        {/* Name */}
        <Controller
          name="name"
          control={control}
          rules={{ required: ERROR_MESSAGES.FIELD_REQUIRED }}
          render={({ field: { name, onChange, ...rest }, fieldState: { error } }) => (
            <Box marginBottom={error?.message ? 0 : 27}>
              <FormLabel fontSize="sm" lineHeight="sm" color="text.default">
                Name
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
                Email
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
                Phone
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
                Enroll number
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
          render={({ field: { name, value, onChange, ...rest }, fieldState: { error } }) => (
            <Box marginBottom={error?.message ? 0 : 25}>
              <FormLabel fontSize="sm" lineHeight="sm" color="text.default">
                Date of admission
              </FormLabel>
              <Input
                type="date"
                value={formatDate(value, true)}
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
