import { ListTodos } from "../components/ListTasks";

export const TodoTypes = {
	add: "TASK_ADD",
	remove: "TASK_REMOVE",
	checked: "TASK_CHECKED",
	fetchData: "TASK_FETCH_DATA",
	input: "TASK_INPUT"
};

export function addTask() {
	return {
		type: TodoTypes.add
	}
};

export function removeTask(id: number) {
	return {
		type: TodoTypes.remove,
		id: id
	}
};

export function checkedTask(id: number) {
	return {
		type: TodoTypes.checked,
		id: id
	}
};

export function fetchData(url: string) {
	return (dispatch: any) => {
		return fetch(url).then(response => response.json())
			.then(res => {
				let list = new ListTodos(res);
				let userIds = list.getUserIds();

				dispatch ({
					type: TodoTypes.fetchData,
					list: list.list,
					error: '',
					userIds: userIds,
					currentUser: userIds[0]
				});
			}).catch(error => {

				dispatch ({
					type: TodoTypes.fetchData,
					list: [],
					error: error,
					userIds: []
				});
			});
	}
};

export function setInputValue(input: string) {
	return {
		type: TodoTypes.input,
		input: input
	}
};