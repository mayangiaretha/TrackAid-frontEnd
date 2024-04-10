import { combineReducers } from 'redux';

import authReducer from '../features/auth/authActions/authReducer';
import clientReducer from '../features/clients/clientsActions/clientsReducer';
import invoiceReducer from '../features/invoices/invoiceActions/invoiceReducer';
const mainReducer = combineReducers({
  authentication: authReducer,
  clients: clientReducer,
  invoices: invoiceReducer,
});
export default mainReducer;
