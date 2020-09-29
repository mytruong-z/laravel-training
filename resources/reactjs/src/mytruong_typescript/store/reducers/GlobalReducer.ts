import { combineReducers } from "redux";
import TodoReducer from './TodoReducer';

const GlobalReducer = combineReducers({TodoReducer});

export default GlobalReducer;