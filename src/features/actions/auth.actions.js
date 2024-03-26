import { jwtDecode } from 'jwt-decode';

import {
  loginUserAction,
  registerUserAction,
  loginFailed,
  registerFailed,
  logoutUserAction,
} from './auth.types';
import { instance } from '../../config/client';

export const loginUser = (loginData) => async (dispatch) => {
  console.log(loginData, 'the data ===========>');

  try {
    const res = await instance.post('users/login', loginData);

    console.log(res, 'the res ==============>');

    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    const decoded = jwtDecode(token);
    console.log();
    decoded.token = token;

    dispatch(loginUserAction(decoded));
  } catch (err) {
    console.log(err, 'the error =====================>');

    dispatch(loginFailed(err.response.data.message));
  }
};

export const registerUser = (registrationData) => async (dispatch) => {
  try {
    const res = await instance.post('users/register', registrationData);
    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    const decoded = jwtDecode(token);
    decoded.token = token;

    dispatch(registerUserAction(res.data));
  } catch (err) {
    dispatch(registerFailed(err.response.data.message));
  }
};

export const logoutLandlord = () => (dispatch) => {
  localStorage.removeItem('jwtToken');
  dispatch(logoutUserAction());
};
