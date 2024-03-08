import { useRoutes } from 'react-router-dom';

import Questions from './features/questions/questions';
import Registration from './features/registration/registration';

const Routes = () =>
  useRoutes([
    {
      path: '/register',
      element: <Registration />,
    },
    {
      path: '/questions',
      element: <Questions />,
    },
  ]);
export default Routes;
