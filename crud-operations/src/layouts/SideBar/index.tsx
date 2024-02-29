import { memo } from 'react';
import { Avatar, Box, Button, Heading, Text } from '@chakra-ui/react';

// Components
import { SideBarItem, LogoBrand } from '@components';
import { SideBarItemProps } from '@components/SideBarItem';

// Constants
import { ROUTERS } from '@constants';

// Icons
import { Bookmark, GraduationSmall, Home, Logout, Payment, Report, Setting } from '@icons';

interface SideBarProps {
  onNavigate: (path: string) => void;
  onLogout: () => void;
}

const SideBar = ({ onNavigate, onLogout }: SideBarProps) => {
  const navBarItems: SideBarItemProps[] = [
    {
      icon: <Home />,
      label: 'Home',
      router: ROUTERS.DASHBOARD,
    },
    {
      icon: <Bookmark />,
      label: 'Course',
      router: ROUTERS.COURSE,
    },
    {
      icon: <GraduationSmall />,
      label: 'Students',
      router: ROUTERS.STUDENTS,
    },
    {
      icon: <Payment />,
      label: 'Payment',
      router: ROUTERS.PAYMENT,
    },
    {
      icon: <Report />,
      label: 'Report',
      router: ROUTERS.REPORT,
    },
    {
      icon: <Setting />,
      label: 'Settings',
      router: ROUTERS.SETTINGS,
    },
  ];

  // TODO: update when api ready
  const user = {
    avatarUrl:
      'https://cc-prod.scene7.com/is/image/CCProdAuthor/adobe-firefly-marquee-text-to-image-0-desktop-1000x1000?$pjpeg$&jpegSize=300&wid=1000',
    name: 'Karthi Madesh',
    rule: 'admin',
  };

  const renderSidebar = navBarItems.map((item: SideBarItemProps, index: number) => {
    const { icon, label, router } = item;

    return <SideBarItem key={`${label}${index}`} icon={icon} label={label} router={router} onNavigate={onNavigate} />;
  });

  return (
    <Box bgColor="background.sidebar" maxW="270px" paddingX="25px" paddingTop="18px" paddingBottom="33px">
      <LogoBrand size="extraSmall" onNavigate={onNavigate} />

      <Box textAlign="center" marginTop="54px">
        <Avatar width="128px" height="128px" src={user.avatarUrl} />
        <Heading marginTop="18px" fontWeight="bold" fontSize="heading.xs" lineHeight="md">
          {user.name}
        </Heading>
        <Text color="primary">{user.rule}</Text>
      </Box>
      <Box marginTop="64px" paddingX="14px">
        {renderSidebar}
      </Box>
      <Box width="100%" textAlign="center" marginTop="148px">
        <Button
          rightIcon={<Logout style={{ marginLeft: '15px' }} />}
          variant="ghost"
          textTransform="unset"
          _hover={{
            backgroundColor: 'transparent',
          }}
          onClick={onLogout}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default memo(SideBar);
