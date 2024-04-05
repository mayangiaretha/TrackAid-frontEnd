import { instance } from '../../../config/client';
import {
  getClientsAction,
  clientActionFailed,
  addClientAction,
  editClientAction,
  getAClientAction,
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
export const editClient = (jsonData, clientId) => (dispatch) => {
  instance
    .put(`clients/${clientId}`, jsonData)
    .then(() => dispatch(editClientAction()))
    .catch((err) => {
      dispatch(clientActionFailed(err?.response?.data));
    });
};

export const getClient = (clientId) => (dispatch) => {
  console.log(clientId, 'the id in axios =============>');

  instance
    .get(`clients/${clientId}`)
    .then((res) => {
      dispatch(getAClientAction(res.data));
    })
    .catch((err) => {
      dispatch(clientActionFailed(err.response.data));
    });
};
