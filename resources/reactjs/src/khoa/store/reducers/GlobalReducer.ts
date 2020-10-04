import { combineReducers } from "redux";
import TodoKhoaReducer from './TodoKhoaReducer';
import UserKhoaReducer from './UserKhoaReducer';

const GlobalReducer = combineReducers({TodoKhoaReducer, UserKhoaReducer});

export default GlobalReducer;