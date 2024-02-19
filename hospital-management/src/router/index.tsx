import { ROUTES } from '@constants/router';
import Homepage from '@pages/homepage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: ROUTES.HOMEPAGE,
    element: <Homepage />,
  },
  {
    path: ROUTES.APPOINTMENTS,
    element: <Homepage />,
  },
  {
    path: ROUTES.CONSULT_DOCTORS,
    element: <Homepage />,
  },
  {
    path: ROUTES.DIAGNOSTICS,
    element: <Homepage />,
  },
]);

export { router };
