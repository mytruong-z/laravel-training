
export interface Todo {
	id: number;
	title: string;
	completed: boolean;
	userId: number;
	filter: (param: (todo: Todo) => boolean) => void;
}

export interface TodoType {
	userId: number;
	userList: number[];
	loaded: boolean;
	setUserId: (id: number) => void,
	fetchToDo: () => void,
}

export interface ItemTodo {
	id: number;
	title: string;
	completed: boolean;
	userId: number;
}

export interface DoingListType {
	handleCompletedItem: (Todo: Todo) => void,
	handleRemoveItem: (id: number) =>  void,
	userId: number;
	allList: Todo;
}

export interface DoneListProps {
	handleRemoveItem: (id: number) =>  void,
	userId: number;
	allList: Todo;
}

export interface FormState {
	userId: number;
	newValue: string;
	totalItem: number;
	handleAddItem: (data: ItemTodo) => void,
	setNewValue: (value: string) => void,
}

export interface HandleChangeInterface {
	target: HTMLInputElement;
}

export interface TodoReducer {
	allList: Todo;
	loaded: boolean;
	userId: number;
	userList: number[];
	newValue: string;
	totalItem: number;
}