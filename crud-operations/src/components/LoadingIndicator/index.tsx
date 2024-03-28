import { Spinner, Center } from '@chakra-ui/react';

const LoadingIndicator = (): JSX.Element => {
  return (
    <Center minHeight="100vh">
      <Spinner />
    </Center>
  );
};

export default LoadingIndicator;
