import { useRoutes } from 'react-router-dom';

import Homepage from './features/homepage/homepage';
import Registration from './features/registration/registration';


const Routes = () =>
    useRoutes([
        {
            path: "/",
            element: <Homepage />,
        },
        {
            path: "/register",
            element: <Registration />,
        },
    ]);
export default Routes;