import {ADD_TASK, DONE_TASK, FETCH_TASK, DELETE_TASK} from '../types';
import {fetchTaskApi} from '../api/fetchTodoApi';

export function fetchTask() {

	return (dispatch: Function) => {
		fetchTaskApi().then(tasks => {
			dispatch({
				type: FETCH_TASK,
				payload: tasks
			})
		});
	}
}
export function addTask(task: string, list: []) {
	return (dispatch: Function) => {
		const data = [{
			userId: 1,
			id: list.length + 1,
			title: task,
			completed: false,
		}];
		let listUpdate = [...list, ...data];
		let listUpdateSort = listUpdate.sort((a: any, b: any) => (parseInt(a.id) < parseInt(b.id)) ? 1 : -1);
		dispatch({
			type: ADD_TASK,
			payload: listUpdateSort
		})
	}
}
export function doneTask(rowId: any, list: []) {
	return (dispatch: Function) => {
		let newList = list.map((val: any, i) => {
			if (val.id === rowId) {
				if (!val.completed) {
					val.completed = true;
				} else {
					val.completed = false;
				}
			}
			return val;
		});
		dispatch({
			type: DONE_TASK,
			payload: newList
		});
	}
}
export function deleteData(id: number, list: []) {
	return (dispatch: Function) => {
		let confirmDelete = window.confirm('Are you sure?');
		if (confirmDelete) {
			let arrayFilter= list.filter((tk: any) => tk.id !== id);
			dispatch({
				type: DELETE_TASK,
				payload: arrayFilter
			});
		}else {
			dispatch({
				type: DELETE_TASK,
				payload: list
			});
		}
	}
}
