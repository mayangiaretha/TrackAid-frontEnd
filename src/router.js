import { useRoutes } from 'react-router-dom';

import Login from './features/auth/login/login';
import Registration from './features/auth/registration/registration';
import ViewClients from './features/clients/viewClients/viewClients';
import AddClients from './features/clients/addClients/AddClients';
import EditClients from './features/clients/editClients/editClients';
import AddInvoices from './features/invoices/addInvoices/addInvoices';
import ViewInvoices from './features/invoices/viewInvoices/viewInvoices';
import ViewInvoice from './features/invoices/viewInvoice/viewInvoice';
import Home from './features/home/home';

const Routes = () =>
  useRoutes([
    {
      path: '/',
      element: <Home />,
    },
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
    {
      path: '/addClient',
      element: <AddClients />,
    },
    {
      path: '/editClient/:clientId',
      element: <EditClients />,
    },
    {
      path: '/invoices',
      children: [
        {
          index: true,
          element: <ViewInvoices />,
        },
        {
          path: 'addInvoices',
          element: <AddInvoices />,
        },
        {
          path: ':invoiceId',
          element: <ViewInvoice />,
        },
      ],
    },
  ]);
export default Routes;
