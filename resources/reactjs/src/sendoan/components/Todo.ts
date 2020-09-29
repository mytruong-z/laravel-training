import { Todo } from '../store/reducers/TodoReducers';

export class ListTodos {
	public list: Todo[] = [];

	constructor(list: Todo[]) {
		this.list = list;
	};

	getUserIds = () => {
		let userIds: number[] = [];

		if (this.list.length > 0) {
			userIds = this.list.map(todo => todo.userId)
				.filter((todo, index, array) => array.indexOf(todo) === index);
		}

		return userIds;
	};
}

export class ListUtils {
	static getTodoListByUserId = (list: Todo[], userId: number) => {
		let todoList = list.filter( todo => todo.userId === Number(userId) );

		return todoList.sort((a,b) => {
			return b.id - a.id;
		});
	};
}