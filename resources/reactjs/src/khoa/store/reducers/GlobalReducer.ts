import { combineReducers } from "redux";
import TodoKhoaReducer from './TodoKhoaReducer';

const GlobalReducer = combineReducers({TodoKhoaReducer});

export default GlobalReducer;