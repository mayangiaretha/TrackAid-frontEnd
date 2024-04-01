import { combineReducers } from 'redux';

import authReducer from '../features/auth/authActions/authReducer';
import clientReducer from '../features/clients/clientsActions/clientsReducer';

const mainReducer = combineReducers({
  authentication: authReducer,
  clients: clientReducer,
});
export default mainReducer;
