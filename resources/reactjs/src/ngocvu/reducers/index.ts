import { combineReducers } from "redux";
import Task from './TaskReducers';

const RootReducers = combineReducers({ Task });

export default RootReducers;