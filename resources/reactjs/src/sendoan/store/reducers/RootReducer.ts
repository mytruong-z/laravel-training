import { combineReducers } from "redux";
import TodoReducers from './TodoReducers';

const RootReducers = combineReducers({ TodoReducers });

export default RootReducers;