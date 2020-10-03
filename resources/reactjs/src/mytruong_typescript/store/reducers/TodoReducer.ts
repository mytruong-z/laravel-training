import * as actionTypes from '../action';
import { reducersState, Actions } from  '../types';
import {SET_ALL_LIST} from "../action";

const initialState = {
	allList: [],
	loaded: false,
	userId: '',
	totalItem: 0,
	userList: [],
	newValue: ''
};

const getUserList = (data: any[]) => {
	let arrUserId: any[] = [];
	data.map((item, index) => {
		arrUserId.push(item);
	});
    return arrUserId;
	//return arrUserId.filter((value, index, arr) => arr.indexOf(value) === index);
};

export default function reducers(state: reducersState = initialState, action: Actions) {
	switch (action.type) {
        case actionTypes.SET_ALL_LIST:
            return {
                ...state,
                allList: action.payload.data,
                totalItem: action.payload.data.length ? action.payload.data.reduce((prev: { y: number; id: any; }, current: { y: number; id: any; }) => (prev.y > current.y) ? prev.id : current.id) : 0,
            };
		case actionTypes.SET_TOTAL_ITEM:
			return {
				...state,
				totalItem: action.payload.data.reduce((prev: { y: number; id: number; }, current: { y: number; id: number; }) => (prev.y > current.y) ? prev.id : current.id)
			};
		case actionTypes.SET_USER_ID:
			return {
				...state,
				userId: action.payload.data
			};
		case actionTypes.SET_USER_LIST:
			return {
				...state,
				userList: getUserList(action.payload.data),
                loaded: true
			};
		case actionTypes.SET_LOADED:
			return {
				...state,
				loaded: action.payload.data
			};
		case actionTypes.SET_NEW_VALUE:
			return {
				...state,
				newValue: action.payload.data
			};
		case actionTypes.HANDLE_ADD_ITEM:
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
					title: action.payload.data.title,
                    userId: action.payload.data.userId,
                })
            };
            fetch('http://localhost:8085/api/mytruong-add-todo', requestOptions)
                .then(response => console.log(response));
			return {
				...state,
				allList: [...state.allList, action.payload.data],
				totalItem: state.totalItem + 1
			};
		case actionTypes.HANDLE_REMOVE_ITEM:
			return {
				...state,
				allList: state.allList.filter(item => item.id !== action.payload.data),
				totalItem: state.totalItem - 1
			};
		case actionTypes.HANDLE_COMPLETED_ITEM:
			return {
				...state,
				allList: state.allList.map(todo => todo.id === action.payload.data.id ? { ...todo, completed: true } : todo),
			};
		default:
			return state;
	}
};