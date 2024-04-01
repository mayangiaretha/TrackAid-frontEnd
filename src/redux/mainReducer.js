import { combineReducers } from 'redux';

import authReducer from '../features/actions/authActions/authReducer';
import clientReducer from '../features/actions/clientsActions/clientsReducer';

const mainReducer = combineReducers({
  authentication: authReducer,
  clients: clientReducer,
});
export default mainReducer;
