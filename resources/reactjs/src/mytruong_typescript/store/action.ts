import { ItemTodo } from "../typings/Todo";
export const SET_ALL_LIST   = 'SET_ALL_LIST';
export const SET_TOTAL_ITEM = 'SET_TOTAL_ITEM';
export const SET_USER_LIST = 'SET_USER_LIST';
export const SET_USER_ID = 'SET_USER_ID';
export const SET_LOADED = 'SET_LOADED';
export const SET_NEW_VALUE = 'SET_NEW_VALUE';
export const HANDLE_ADD_ITEM = 'HANDLE_ADD_ITEM';
export const HANDLE_REMOVE_ITEM = 'HANDLE_REMOVE_ITEM';
export const HANDLE_COMPLETED_ITEM = 'HANDLE_COMPLETED_ITEM';

export const setUserId = (data: number) => ({
	type: SET_USER_ID,
	payload: { data }
});

export const setNewValue = (data: string) => ({
	type: SET_NEW_VALUE,
	payload: { data }
});

export const handleAddItem = (data: ItemTodo) => ({
	type: HANDLE_ADD_ITEM,
	payload: { data }
});

export const handleRemoveItem = (data: number) => ({
	type: HANDLE_REMOVE_ITEM,
	payload: { data }
});

export const handleCompletedItem = (data: ItemTodo) => ({
	type: HANDLE_COMPLETED_ITEM,
	payload: { data }
});

export const fetchTodo = () => {
	return (dispatch: Function) => {
		return fetch("https://jsonplaceholder.typicode.com/todos")
			.then(response => response.json())
			.then(data => {
				dispatch({
					type: SET_ALL_LIST,
					payload: { data: [...data] },
				});
			})
	}
};