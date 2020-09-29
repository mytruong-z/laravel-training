import { Todo } from '../reducers/TaskReducers';

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
		};
		return userIds;
	};
};

export class Actions {
	static getTodosByUserId = (list: Todo[], userId: number) => {
		let todoList = list.filter( todo => todo.userId === Number(userId) );
		
		return todoList.sort((a,b) => {
			return b.id - a.id;
		});
	};
};

export class TodoClass {
	public id: number = 0;
	public userId: number = 0;
	public title: string = '';
	public completed: boolean = false;

	constructor(id: number, userId: number, title: string) {
		this.id = id;
		this.userId = userId;
		this.title = title;
		this.completed = false;
	};
};