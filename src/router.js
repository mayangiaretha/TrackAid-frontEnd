import { useRoutes } from 'react-router-dom';

import Login from './features/auth/login/login';
import Registration from './features/auth/registration/registration';
import AddClients from './features/clients/addClients/addClients';

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
      element: <AddClients />,
    },
  ]);
export default Routes;
