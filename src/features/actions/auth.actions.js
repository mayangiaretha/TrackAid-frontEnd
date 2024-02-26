import { jwtDecode } from 'jwt-decode';

import {
  loginUserAction,
  registerUserAction,
  loginFailed,
  registerFailed,
  logoutUserAction,
} from './auth.types';
import { instance } from '../../config/client';

export const loginUser = (loginData) => (dispatch) => {
  instance
    .post('users/login', loginData)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      const decoded = jwtDecode(token);
      decoded.token = token;

      dispatch(loginUserAction(decoded));
    })
    .catch((err) => {
      dispatch(loginFailed(err.response.data));
    });
};

export const registerUser = (registrationData) => async (dispatch) => {
  try {
    const res = await instance.post('users/register', registrationData);

    dispatch(registerUserAction(res.data));
  } catch (err) {
    dispatch(registerFailed(err.response.data.message));
  }
};

export const logoutLandlord = () => (dispatch) => {
  localStorage.removeItem('jwtToken');
  dispatch(logoutUserAction());
};
