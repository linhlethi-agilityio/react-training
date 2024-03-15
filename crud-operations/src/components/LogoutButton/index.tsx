import { memo } from 'react';
import { Button, Icon } from '@chakra-ui/react';

// Icons
import { LogoutIcon } from '@icons';

interface LogoutButtonProps {
  text?: string;
  isShorter?: boolean;
  onLogout: () => void;
}

const LogoutButton = ({ text = 'Logout', isShorter, onLogout }: LogoutButtonProps) => (
  <Button
    data-testId="logout-button"
    rightIcon={<Icon as={LogoutIcon} ml={isShorter ? 0 : 15} />}
    variant="ghost"
    onClick={onLogout}
  >
    {!isShorter && text}
  </Button>
);

export default memo(LogoutButton);
