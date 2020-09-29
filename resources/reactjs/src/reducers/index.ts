import { History } from "history";
import { combineReducers } from "redux";
import { Todo } from "../model";
import * as todoReducer from "./todo";
import * as bachReducer from '../bach/reducers/bachReducer'

export interface RootState {
	todoList: Todo[];
}

export default (history: History) =>
	combineReducers({
		...todoReducer,
		...bachReducer,
	});
