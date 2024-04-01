import { instance } from '../../../config/client';
import {
  getAClientAction,
  getClientsAction,
  addClientAction,
  editClientAction,
  deleteClientAction,
  clientActionFailed,
} from './client.types';

export const addClients = () => (dispatch) => {
  instance
    .post('clients')
    .then((res) => {
      dispatch(addClientAction(res.data));
    })
    .catch((err) => {
      dispatch(clientActionFailed(err.response.data));
    });
};
