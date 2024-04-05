import { jwtDecode } from 'jwt-decode';

import { loginUserAction } from '../features/auth/authActions/auth.types';
import store from '../redux/combinedstore';

export const getTokenData = () => {
  if (localStorage.jwtToken) {
    const decoded = jwtDecode(localStorage.jwtToken);
    store.dispatch(loginUserAction(decoded));
  }
};
