import { useRoutes } from 'react-router-dom';

import Login from './features/auth/login/login';
import Registration from './features/auth/registration/registration';
import Questions from './features/questions/questions';

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
      path: '/questions',
      element: <Questions />,
    },
  ]);
export default Routes;
