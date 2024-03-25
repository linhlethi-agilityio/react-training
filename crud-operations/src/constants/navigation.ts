// Routers
import { ROUTERS } from './routes';

// Pages
import { DashboardPage, PaymentsPage, StudentsPage } from '@pages';

// Components
import { BookmarkIcon, GraduationSmallIcon, HomeIcon, PaymentIcon, ReportIcon, SettingIcon } from '@components';

export const SIDEBAR_NAVIGATION = [
  {
    icon: HomeIcon,
    label: 'Home',
    router: ROUTERS.DASHBOARD,
    element: DashboardPage,
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
