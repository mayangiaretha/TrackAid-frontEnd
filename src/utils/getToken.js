import { jwtDecode } from 'jwt-decode';

import { loginUserAction } from '../features/actions/authActions/auth.types';
import store from '../redux/combined store';

export const getTokenData = () => {
  if (localStorage.jwtToken) {
    const decoded = jwtDecode(localStorage.jwtToken);
    store.dispatch(loginUserAction(decoded));
  }
};
