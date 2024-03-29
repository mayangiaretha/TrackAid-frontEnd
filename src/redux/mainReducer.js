import { combineReducers } from 'redux';

import authReducer from '../features/actions/authActions/authReducer';

const mainReducer = combineReducers({
  authentication: authReducer,
});
export default mainReducer;
