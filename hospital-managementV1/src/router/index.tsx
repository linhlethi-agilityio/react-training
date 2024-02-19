import { createBrowserRouter } from 'react-router-dom';
import Homepage from '@pages/HomePage';
import DoctorListing from '@pages/DoctorsListingPage';
import { DoctorsProvider } from '@contexts/DoctorsContext';
import UserDetail from '@pages/UserDetailPage';
import { UserProvider } from '@contexts/UserContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/doctors',
    element: (
      <DoctorsProvider>
        <DoctorListing />
      </DoctorsProvider>
    ),
  },
  {
    path: '/users/:id',
    element: (
      <UserProvider>
        <UserDetail />
      </UserProvider>
    ),
  },
]);

export { router };
