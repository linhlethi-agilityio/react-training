import { memo } from 'react';
import { Button, Icon } from '@chakra-ui/react';

// Components
import { LogoutIcon } from '@components';

interface LogoutButtonProps {
  text?: string;
  isShorter?: boolean;
  onLogout: () => void;
}

const LogoutButton = ({ text = 'Logout', isShorter = false, onLogout }: LogoutButtonProps) => (
  <Button
    aria-label="logout"
    data-testId="logout-button"
    rightIcon={<Icon as={LogoutIcon} ml={isShorter ? 0 : 15} />}
    variant="ghost"
    onClick={onLogout}
  >
    {!isShorter && text}
  </Button>
);

export default memo(LogoutButton);
