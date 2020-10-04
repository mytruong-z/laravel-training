import { TodoTypes } from "../TodoActions";

export interface User {
	id: number,
	name: string
}

export interface Todo {
	userId: number;
	id: number;
	title: string,
	completed: boolean
}

export interface TodoState {
	list: Todo[],
	isLoaded: boolean,
	error: string,
	users: User[],
	currentUser: any,
	inputValue: string
}

export interface StoreState {
	TodoReducers: TodoState
}

export const initialState = {
	list: [],
	isLoaded: false,
	error: "",
	users: [],
	currentUser: "",
	inputValue: "",
};

export interface Actions {
	type: string,
	list?: [],
	users?: User[],
	error?: "",
	input?: "",
	id?: number,
	userId?: number,
	currentUser?: any
}

const todos = (state: TodoState = initialState, action: Actions) => {
	switch (action.type) {
		case TodoTypes.fetchData:

			return {
                isLoaded: true,
				users: action.users,
				error: action.error,
				inputValue: ""
			};
		case TodoTypes.add:
			if (state.inputValue.trim() === '') {
				return {
					...state,
					inputValue: ""
				};
			} else {
				let newTodo = {
					userId: state.currentUser,
					id: state.list[state.list.length - 1].id + 1,
					title: state.inputValue,
					completed: false,
				};

				return {
					...state,
					list: [...state.list, newTodo],
					inputValue: ""
				};
			}

		case TodoTypes.checked:
			let newList = state.list.map(todo => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo);

			return {
				...state,
				list: newList
			};
		case TodoTypes.remove:

			return {
				...state,
				list: state.list.filter(todo => todo.id !== action.id)
			};
		case TodoTypes.selectUser:

			return {
				...state,
				currentUser: Number(action.userId),
				error: action.error,
				list: action.list,
                isLoaded: true,
			};

		case TodoTypes.input:
			let value = action.input;
			return {
				...state,
				inputValue: value
			};
		default:
			return state;
	}
};

export default todos;