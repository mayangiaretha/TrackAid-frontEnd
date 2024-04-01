import { useRoutes } from 'react-router-dom';

import Login from './features/auth/login/login';
import Registration from './features/auth/registration/registration';
import ViewClients from './features/clients/viewClients/viewClients';

const Routes = () =>
  useRoutes([
    {
      path: '/register',
      element: <Registration />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/clients',
      element: <ViewClients />,
    },
  ]);
export default Routes;
