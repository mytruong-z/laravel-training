import createReducer from '../../reducers/createReducer';
import {Task} from '../models/task';
import {ADD_TASK, DELETE_TASK, DONE_TASK, FETCH_TASK} from '../types';

let initialState = {
	listTask : [],
};
export const todoBach = createReducer<Task[]>([], {
	[FETCH_TASK](state = initialState, action: any) {
		return {...state, listTask: action.payload};
	},
	[DONE_TASK](state = initialState, action: any) {
		return {...state, listTask: action.payload};
	},
	[ADD_TASK](state = initialState, action: any) {
		return {...state, listTask: action.payload};
	},
	[DELETE_TASK](state = initialState, action: any) {
		return {...state, listTask: action.payload};
	},
});
