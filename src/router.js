import { useRoutes } from 'react-router-dom';

import Login from './features/login/login';
import Questions from './features/questions/questions';
import Registration from './features/registration/registration';

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
