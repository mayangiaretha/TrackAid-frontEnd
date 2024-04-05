import { useRoutes } from 'react-router-dom';

import Login from './features/auth/login/login';
import Registration from './features/auth/registration/registration';
import ViewClients from './features/clients/viewClients/viewClients';
import AddClients from './features/clients/addClients/AddClients';
import EditClients from './features/clients/editClients/editClients';

const Routes = () =>
  useRoutes([
    {
      path: '/register',
      element: <Registration />,
    },
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/clients',
      element: <ViewClients />,
    },
    {
      path: '/addClient',
      element: <AddClients />,
    },
    {
      path: '/editClient/:clientId',
      element: <EditClients />,
    },
  ]);
export default Routes;
