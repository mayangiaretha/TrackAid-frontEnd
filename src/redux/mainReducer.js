import { combineReducers } from "redux";
import authReducer from "../features/actions/authReducer"

const mainReducer = combineReducers({
    authentication: authReducer,
});
export default mainReducer;