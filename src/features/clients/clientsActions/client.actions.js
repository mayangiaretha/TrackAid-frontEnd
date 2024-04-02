import { instance } from '../../../config/client';
import {
  getClientsAction,
  clientActionFailed,
  addClientAction,
} from './client.types';

export const getClients = () => (dispatch) => {
  instance
    .get('clients')
    .then((res) => {
      dispatch(getClientsAction(res.data));
    })
    .catch((err) => {
      dispatch(clientActionFailed(err.response.data));
    });
};
export const addClients = () => (addClientData) => async (dispatch) => {
  try {
    const res = await instance.post('clients', addClientData);
    dispatch(addClientAction(res.data));
  } catch (err) {
    dispatch(clientActionFailed(err.response.data));
  }
};
