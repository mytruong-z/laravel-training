import { ListTodos } from "../components/Todo";

export const TodoTypes = {
	add: "TODO_ADD",
	remove: "TODO_REMOVE",
	checked: "TODO_CHECKED",
	fetchData: "TODO_FETCH_DATA",
	selectUser: "TODO_SELECT_USER",
	input: "TODO_INPUT"
};

export function addTodo() {
	return {
		type: TodoTypes.add
	}
}

export function removeTodo(id: number) {
	return {
		type: TodoTypes.remove,
		id: id
	}
}

export function checkedTodo(id: number) {
	return {
		type: TodoTypes.checked,
		id: id
	}
}

export function fetchData(url: string) {
	return (dispatch: Function) => {
		return fetch(url).then(response => response.json())
			.then(res => {
				let users = res.data;

				dispatch ({
					type: TodoTypes.fetchData,
					users: users,
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
}

export function selectUserId(userId: number) {
	return (dispatch: Function) => {
		return fetch('http://localhost:8085/api/sendoan/user/' + userId + '/todos')
			.then(response => response.json())
			.then(res => {
				let list = new ListTodos(res.data);

				dispatch ({
					list: list.list,
					type: TodoTypes.selectUser,
					userId: userId,
				});
			}).catch(error => {
				dispatch ({
					type: TodoTypes.selectUser,
					userId: userId,
					error: error,
				});
			});
	}
}

export function setInputValue(input: string) {
	return {
		type: TodoTypes.input,
		input: input
	}
}