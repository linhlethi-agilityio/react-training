// Icons
import { BookmarkIcon, GraduationSmallIcon, HomeIcon, PaymentIcon, ReportIcon, SettingIcon } from '@icons';

// Routers
import { ROUTERS } from './routes';

// Pages
import { PaymentsPage, StudentsPage } from '@pages';

export const SIDEBAR_NAVIGATION = [
  {
    icon: HomeIcon,
    label: 'Home',
    router: ROUTERS.DASHBOARD,
  },
  {
    icon: BookmarkIcon,
    label: 'Course',
    router: ROUTERS.COURSE,
  },
  {
    icon: GraduationSmallIcon,
    label: 'Students',
    router: ROUTERS.STUDENTS,
    element: StudentsPage,
  },
  {
    icon: PaymentIcon,
    label: 'Payment',
    router: ROUTERS.PAYMENT,
    element: PaymentsPage,
  },
  {
    icon: ReportIcon,
    label: 'Report',
    router: ROUTERS.REPORT,
  },
  {
    icon: SettingIcon,
    label: 'Settings',
    router: ROUTERS.SETTINGS,
  },
];
